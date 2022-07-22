import m from "mithril";
import { DB } from "../config";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import store from "../../../model/store";

//controls
import { responseToError } from "./consultationsDBGet";
import {
  Consultation,
  ConsultationSchema,
} from "../../../model/consultationModel";
import { EntityType, EntityTypeSchema } from "../../../model/newsModel";
import Joi from "joi";

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
      entity
    });
  } catch (error) {
    responseToError(error);
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
        return {error:"message schema was not yet defined"}
        return {};
      default:
        return { error: "Entity type was not found" };
    }
  } catch (error) {
    return { error };
  }
}
