import m from "mithril";
import { DB } from "../config";
import {
  doc,
  setDoc,
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
  NewsSchema,
} from "../../../model/newsModel";
import Joi from "joi";
import { updateArray } from "../../general/general";
import { saveStore } from "../../store/reducers/storeReducer";

export async function addNews(
  consultationId: string,
  message: string,
  entity: any,
  entityType: EntityType
) {
  try {
    const { error } = validateEntity(entity, entityType);
    if (error) throw error;

    const newsRef = collection(DB, "news");
    await addDoc(newsRef, {
      text: message,
      update: serverTimestamp(),
      groupId: consultationId,
      creator: store.user,
      entityType,
      entity,
    });
  } catch (error) {
    responseToError(error);
  }
}

export async function listenToNewsFromGroup(groupId: string): Promise<Function> {
  try {
    if (!groupId) throw new Error("no groupId");

    const newRef = collection(DB, "news");
    const q = query(newRef, where("groupId", "==", groupId));
    return onSnapshot(q, (newsDB) => {
      newsDB.docChanges().forEach((change) => {
        try {
          console.log(change.doc.data());
          const { value, error } = NewsSchema.validate(change.doc.data());
          if (error) throw error;
          value.id = change.doc.data().groupId;
          if (change.type === "added") {
            store.news = updateArray(store.news, value);
            m.redraw();
            saveStore('listenToNewsFromGroup')
          }
        } catch (error) {
          responseToError(error);
        }
      });
      console.log(store)
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
        const { error } = ConsultationSchema.validate(entity);
        if (error) throw error;
        return {};
      case EntityType.MESSAGE:
        //    const {error}= ConsultationSchema.validate(entity);
        //    if(error) throw error;
        return { error: "message schema was not yet defined" };
        return {};
      default:
        return { error: "Entity type was not found" };
    }
  } catch (error) {
    return { error };
  }
}
