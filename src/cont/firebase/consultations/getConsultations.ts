import m from "mithril";
import store, { ErrorType } from "../../../model/store";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { DB } from "../config";

export function listenToConsultations() {
  try {

    const consultationsRef = collection(DB, "consultations");
    const q = query(consultationsRef,where('groupType','==','public'))

    return onSnapshot(q, (consultationsDB) => {
      try {
        consultationsDB.forEach((consultationDB) => {
            try {
                console.log(consultationDB.data());
            } catch (error) {
                responseToError(error); 
            }
         
        });
      } catch (error) {
        responseToError(error);
      }
    });
  } catch (error: any) {
    return () => {};
  }
}

function responseToError(error:any) {
  console.error(error);
  store.error = { message: error.message, type: ErrorType.ERROR };
  m.redraw();
}
