import m from "mithril";
import store, { ErrorType } from "../../../model/store";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { DB } from "../config";

//models
import { ConsultationSchema } from "../../../model/consultationModel";

//controls
import { updateArray } from "../../general/general";

export function listenToConsultations() {
  try {

    const consultationsRef = collection(DB, "consultations");
    const q = query(consultationsRef,where('groupType','==','public'))

    return onSnapshot(q, (consultationsDB) => {
      try {
        consultationsDB.forEach((consultationDB) => {
            try {
                console.log(consultationDB.data());
               
                const {value, error} = (ConsultationSchema.validate(consultationDB.data()));
                if(error) throw error;
                
                const consultationObj = value;
                consultationObj.id = consultationDB.id;

                store.consultations = updateArray(store.consultations,consultationObj)


            } catch (error) {
                responseToError(error); 
            }
         
        });
        console.log(store)
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
