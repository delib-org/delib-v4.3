import m from "mithril";
import {
  listenToConsultation,
  listenToSections,
} from "../../../cont/firebase/consultations/consultationsDBGet";
import { getConsultationStore } from "../../../cont/store/consultationStore";
import store from "../../../cont/store/store";
import { Consultation, Section } from "../../../model/consultationModel";

//components
import SystemMessage from "../../comp/NavBottom/systemMessage/SystemMessage";
import Chat from "./Chat/Chat";
import ConsultationNav from "./ConsultationNav";
import ConsultationHeader from "./ConsultationHeader";

//unsubs
let unsubSections = () => {},
  unsubConsultation = () => {};

export default function Consultation() {
  const consultationId = m.route.param("consultationId");

  return {
    oninit: () => {
      unsubConsultation = listenToConsultation(consultationId);

      unsubSections = listenToSections(consultationId);
    },
    onremove: () => {
      unsubSections();
      unsubConsultation();
    },
    view: () => {
      const consultationId = m.route.param("consultationId");
      const section = m.route.param("section");

      const consultation = getConsultationStore(consultationId);
      console.log(consultation)

      return (
        <div className="page consultation">
          {/* @ts-ignore */}
          <ConsultationHeader consultation={consultation} />
          {/* @ts-ignore */}
          <ConsultationNav section={section} />
          {consultation
            ? ConsultationSwitch(
                useConsultationSection(consultationId),
                consultation
              )
            : null}
          {/* @ts-ignore */}
          <SystemMessage />
        </div>
      );
    },
  };
}

function ConsultationSwitch(
  consultationSection: string,
  consultation: Consultation
) {
  try {
    switch (consultationSection) {
      case Section.CHAT:
        // @ts-ignore
        return <Chat consultation={consultation} />;
      default:
        return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

function useConsultationSection(consultationId: string): Section {
  try {
    const consultationSection = store.consultations.sections.find(
      (sections) => sections.id === consultationId
    );
    if (!consultationSection)
      throw new Error(`Couldnt find section in consultation ${consultationId}`);
    if (!consultationSection.selectedSection)
      throw new Error("No selected section");

    return consultationSection.selectedSection;
  } catch (error) {
    return Section.INTRO;
  }
}
