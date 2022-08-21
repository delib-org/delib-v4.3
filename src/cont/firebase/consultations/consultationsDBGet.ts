import m from "mithril";
import Joi from "joi";
import store, { ErrorType, saveStoreToLocal } from "../../store/store";
import {
  collection,
  where,
  query,
  onSnapshot,
  orderBy,
  doc,
} from "firebase/firestore";
import { DB } from "../config";

//models
import {
  Consultation,
  ConsultationSchema,
  SectionsSchema,
} from "../../../model/consultationModel";

//controls

export function listenToConsultations() {
  try {
    if (!store.user)
      throw new Error(
        "User is not logged in, therfore I cant conduct this query"
      );

    const consultationsRef = collection(DB, "consultations");
    const q = query(
      consultationsRef,
      where("members", "array-contains", store.user.uid),
      where("time.updated", ">", store.consultations.last_update),
      orderBy("time.updated", "desc")
    );

    return onSnapshot(q, (consultationsDB) => {
      try {
        consultationsDB.docChanges().forEach((change) => {
          try {
            const consultation: any = change.doc;
            if (change.type === "added") {
              // updateConsultation(change.doc);

              store.consultations.setConsultation({ consultation });
            }
            if (change.type === "modified") {
              // updateConsultation(change.doc);

              store.consultations.setConsultation({ consultation });
            }
            if (change.type === "removed") {
              store.consultations.deleteConsultation({ consultation });
            }
          } catch (error) {
            responseToError(error);
          }
        });
        m.redraw();
      } catch (error) {
        responseToError(error);
      }
    });
  } catch (error: any) {
    responseToError(error);
    return () => {};
  }
}

export function responseToError(error: any) {
  console.error(error);
  store.error = { message: error.message, type: ErrorType.ERROR };
  m.redraw();
}

export function updateConsultation(consultationDB: any, toDelete?: boolean): void {
  try {
    const { value, error } = ConsultationSchema.validate(consultationDB.data());
    if (error) throw error;

    const consultationObj = value;
    consultationObj.id = consultationDB.id;
    consultationObj.members = null;

    // store.consultations.groups = updateArray(
    //   store.consultations.groups,
    //   consultationObj,
    //   toDelete
    // );
    if (toDelete) {
      store.consultations.deleteConsultation(consultationObj);
    } else {
      store.consultations.setConsultation({ consultation: consultationObj });

      if (store.consultations.last_update < consultationObj.time.updated) {
        store.consultations.last_update = consultationObj.time.updated;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

const consultationIdSchema = Joi.string().min(4).required();

export function listenToConsultation(consultationId: string) {
  try {
    const { error } = consultationIdSchema.validate(consultationId);
    if (error) throw error;

    const consultationRef = doc(DB, "consultations", consultationId);
    return onSnapshot(consultationRef, (consultationDB) => {
      try {
        if (!consultationDB.exists())
          throw new Error(
            `Consultation ${consultationId} does not exists on DB`
          );
        const { value, error } = ConsultationSchema.validate(
          consultationDB.data()
        );
        if (error) throw error;

        const consultationObj = value;
        consultationObj.id = consultationId;

        // store.consultations.groups = updateArray(
        //   store.consultations.groups,
        //   consultationObj
        // );
        store.consultations.setConsultation({ consultation: consultationObj });

        // saveStore('listenToConsultation')
        m.redraw();
      } catch (error) {}
    });
  } catch (error) {
    console.error(error);
    responseToError(error);
    return () => {};
  }
}

export function listenToSections(consultationId: string) {
  try {
    const sectionsRef = doc(
      DB,
      "consultations",
      consultationId,
      "meta",
      "sections"
    );
    return onSnapshot(sectionsRef, (sectionsDB) => {
      try {
        if (sectionsDB.exists()) {
          const { value, error } = SectionsSchema.validate(sectionsDB.data());
          if (error) throw error;
console.log(value)
          value.id = consultationId;
          store.consultations.setConsultation({ sections: value });
          // store.consultations.sections = updateArray(
          //   store.consultations.sections,
          //   value
          // );
          m.redraw();
        }
      } catch (error) {
        responseToError(error);
      }
    });
  } catch (error) {
    responseToError(error);
    return () => {};
  }
}
