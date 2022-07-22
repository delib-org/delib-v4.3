import m from "mithril";
import { DB } from "../config";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import store, { ErrorType } from "../../../model/store";
import { GroupType } from "../../../view/pages/setConsultation/SetConsultation";
import { Section } from "../../../model/consultationModel";
import { responseToError } from "./getConsultations";

interface SetConsultationProps {
  title: string;
  description: string;
  groupType: GroupType;
  sections: Section[];
}

interface setConsultationReturn {
  consultationId: string | null;
  success: boolean;
}

export async function setConsultation(
  consultationObj: SetConsultationProps
): Promise<setConsultationReturn> {
  try {
    if (store.user === null) throw new Error("User must be logged-in");

    const { title, description, groupType, sections } = consultationObj;

    const consultationRef = await addDoc(collection(DB, "consultations"), {
      title,
      description,
      groupType,
      creator: store.user,
      time: {
        created: serverTimestamp(),
        updated: serverTimestamp(),
      },
    });

    const sectionsRef = doc(DB,'consultations',consultationRef.id,'meta','sections');
    await setDoc(sectionsRef,{
      sections
    })

    const newsRef = collection(DB, "news");
    await addDoc(newsRef, {
      text: "התייעצות נוצרה",
      update: serverTimestamp(),
      groupId: consultationRef.id,
      creator: store.user,
    });

    return { consultationId: consultationRef.id, success: true };
  } catch (error: any) {
    console.error(error);
    store.error = { message: error.message, type: ErrorType.ERROR };
    m.redraw();

    return { consultationId: null, success: false };
  }
}

export async function updateConsultationSections(
  consultationId: string,
  sections: Array<Section>
) {
  try {
    const consultationRef = doc(
      DB,
      "consultations",
      consultationId,
      "sections",
      "sections"
    );
    await setDoc(consultationRef, {
      sections: sections,
    });
  } catch (error) {
    responseToError(error);
  }
}
