import m from "mithril";
import { DB } from "../config";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import store, { ErrorType } from "../../store/store";
import { GroupType } from "../../../view/pages/setConsultation/SetConsultation";
import {
  Consultation,
  Section,
  SectionProps,
} from "../../../model/consultationModel";
import { responseToError } from "./consultationsDBGet";
import { Membership, Role } from "../../../model/membershipModel";
import { updateArray } from "../../general/general";
import { addNews } from "../news/newsDB";
import { EntityType } from "../../../model/newsModel";

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
    
    const consultationObj2: Consultation = {
      title,
      description,
      groupType,
      creator: store.user,
      time: {
        created: { seconds: new Date().getTime() / 1000, nanoseconds: 0 },
        updated: { seconds: new Date().getTime() / 1000, nanoseconds: 0 },
      },
      id: consultationRef.id,
    };
    updateArray(store.consultations.groups, consultationObj2);
    const newSections: SectionProps = {
      id: consultationRef.id,
      sections,
      selectedSection: Section.INTRO,
    };
    updateArray(store.consultations.sections, newSections);
    const consultationObj3 = {
      title,
      description,
      groupType,
      creator: store.user,
      time: {
        created: { seconds: new Date().getTime() / 1000, nanoseconds: 0 },
        updated: { seconds: new Date().getTime() / 1000, nanoseconds: 0 },
      },
    };

    await Promise.all([
      setSections(consultationRef.id, sections),
      setMembership(consultationRef.id),
      addNews(
        consultationRef.id,
        "התייעצות חדשה נוצרה",
        consultationObj3,
        EntityType.CONSULTATION
      ),
    ]);
    console.time("waiting");
    await wait(1000);
    console.timeEnd("waiting");
    m.redraw();
    return { consultationId: consultationRef.id, success: true };
  } catch (error: any) {
    console.error(error);
    store.error = { message: error.message, type: ErrorType.ERROR };
    m.redraw();

    return { consultationId: null, success: false };
  }
}
async function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
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

export async function setSections(consultationId: string, sections: Section[]) {
  try {
    const sectionsRef = doc(
      DB,
      "consultations",
      consultationId,
      "meta",
      "sections"
    );
    await setDoc(sectionsRef, {
      sections,
    });
  } catch (error) {
    responseToError(error);
  }
}

export async function setMembership(consultationId: string) {
  try {
    if (!store || !store.user) throw "No store or no user";
    if (!store.user.uid) throw new Error("No userId");

    const membershipsRef = doc(
      DB,
      "users",
      store.user.uid,
      "memberships",
      consultationId
    );
    const newMembership: Membership = {
      groupId: consultationId,
      role: Role.CREATOR,
      joined: new Date(),
    };
    await setDoc(membershipsRef, newMembership);
  } catch (error) {
    responseToError(error);
  }
}
