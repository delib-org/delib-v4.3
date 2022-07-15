import m from 'mithril';
import { DB } from "../config";
import { collection, addDoc,serverTimestamp} from "firebase/firestore";
import store, { ErrorType } from "../../../model/store";
import { GroupType } from "../../../view/pages/setConsultation/SetConsultation";

interface SetConsultationProps {
  title: string;
  description: string;
  groupType: GroupType;
}

export async function setConsultation(consultationObj: SetConsultationProps) {
  try {
    if (store.user === null) throw new Error("User must be logged-in");

    const {title,
        description,
        groupType} = consultationObj

    const docRef = await addDoc(collection(DB,'consultations'),{
        title,
        description,
        groupType,
        creator:store.user,
        time:{
            created:serverTimestamp(),
            updated:serverTimestamp()
        }
    })

    console.log(docRef)

  } catch (error:any) {
    console.error(error);
    store.error = {message:error.message, type:ErrorType.ERROR};
    m.redraw();
  }
}
