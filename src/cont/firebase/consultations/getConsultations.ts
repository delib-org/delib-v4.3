import m from "mithril";
import store, { ErrorType } from "../../../model/store";
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
import { ConsultationSchema } from "../../../model/consultationModel";

//controls
import { updateArray } from "../../general/general";

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
            if (change.type === "added") {
              updateConsultation(change.doc);
            }
            if (change.type === "modified") {
              updateConsultation(change.doc);
            }
            if (change.type === "removed") {
              updateConsultation(change.doc, true);
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

function responseToError(error: any) {
  console.error(error);
  store.error = { message: error.message, type: ErrorType.ERROR };
  m.redraw();
}

function updateConsultation(consultationDB: any, toDelete?: boolean): void {
  try {
    const { value, error } = ConsultationSchema.validate(consultationDB.data());
    if (error) throw error;

    const consultationObj = value;
    consultationObj.id = consultationDB.id;
    consultationObj.members = null;

    store.consultations.groups = updateArray(
      store.consultations.groups,
      consultationObj,
      toDelete
    );

    if (store.consultations.last_update < consultationObj.time.updated) {
      store.consultations.last_update = consultationObj.time.updated;
    }
  } catch (error) {
    console.error(error);
  }
}

export function listenToConsultation(consultationId: string) {
  try {
    console.log("listenToConsultation", consultationId);
    const consultationRef = doc(DB, "consultations", consultationId);
    return onSnapshot(consultationRef, (consultationDB) => {
      const { value, error } = ConsultationSchema.validate(
        consultationDB.data()
      );
      if (error) throw error;

      const consultationObj = value;
      consultationObj.id = consultationDB.id;
      console.log(value);
      store.consultations.groups = updateArray(
        store.consultations.groups,
        consultationObj
      );
      m.redraw();
      console.log(store);
    });
  } catch (error) {
    console.error(error);
    responseToError(error);
    return () => {};
  }
}
