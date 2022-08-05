import m from "mithril";
import { DB } from "../config";
import {
  doc,
  setDoc,
  orderBy,
  limit,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import store from "../../store/store";

//controls
import { responseToError } from "../consultations/consultationsDBGet";
import {
  Consultation,
  ConsultationSchema,
} from "../../../model/consultationModel";
import {
  EntityType,
  EntityTypeSchema,
  MessageTextSchema,
  News,
  NewsItem,
  NewsSchema,
} from "../../../model/newsModel";
import Joi from "joi";
import { updateArray } from "../../general/general";
import { saveStore } from "../../store/reducers/storeReducer";
import { updateStoreNews } from "../../store/reducers/newsReducer";

export async function addNews(
  consultationId: string,
  message: string,
  group: Consultation,
  entityType: EntityType
) {
  try {
    if (entityType === EntityType.CONSULTATION) {
      const { error } = validateEntity(group, entityType);
      if (error) throw error;
    } else if (entityType === EntityType.MESSAGE) {
      const { error } = validateEntity(message, entityType);
      if (error) throw error;
    }
   
    const newsRef = collection(DB, "news");
    await addDoc(newsRef, {
      text: message,
      update: serverTimestamp(),
      groupId: consultationId,
      creator: store.user,
      entityType,
      group,
    });
  } catch (error) {
    responseToError(error);
  }
}

export async function listenToNewsFromGroup(
  groupId: string
): Promise<Function> {
  try {
    if (!groupId) throw new Error("no groupId");
   
    const newRef = collection(DB, "news");
    const q = query(
      newRef,
      where("groupId", "==", groupId),
      orderBy("update", "desc"),
      limit(10)
    );
    return onSnapshot(q, (newsDB) => {
      newsDB.docChanges().forEach((change) => {
        try {
        
          if (change.doc.data().update) {
            const { value, error } = NewsSchema.validate(change.doc.data());
            if (error) throw error;

            value.id = change.doc.id;
            value.group.id = change.doc.data().groupId;

            if (change.type === "added") {
              // updateStoreNews(value);
              const newsItem = new NewsItem(
                value.id,
                value.text,
                value.entityType,
                value.creator,
                value.update
              );
              store.news.setNewsItem(value.group, newsItem);

             

              m.redraw();
              // saveStore("listenToNewsFromGroup");
            }
          }
        } catch (error) {
          responseToError(error);
        }
      });
     
      m.redraw();
    });
  } catch (error) {
    responseToError(error);
    return () => {};
  }
}

function validateEntity(entity: any, entityType: EntityType): { error?: any } {
  try {
    let { error } = EntityTypeSchema.validate(entityType);
    if (error) throw error;
    switch (entityType) {
      case EntityType.CONSULTATION:
        const cons = ConsultationSchema.validate(entity);
        if (cons.error) throw cons.error;
        return {};
      case EntityType.MESSAGE:
        const mess = MessageTextSchema.validate(entity);
        if (mess.error) throw mess.error;
        return {};
      default:
        return { error: "Entity type was not found" };
    }
  } catch (error) {
    return { error };
  }
}
