import m from "mithril";
import { listenToConsultation, listenToSections } from "../../../cont/firebase/consultations/consultationsDBGet";
import { getConsultationStore } from "../../../cont/store/consultationStore";
import store from "../../../cont/store/store";
import SystemMessage from "../../comp/NavBottom/systemMessage/SystemMessage";
import ConsultationNav from "./ConsultationNav";
let unsubSections = () => {},
  unsubConsultation = () => {};

export default function Consultation() {
  const consultationId = m.route.param("consultationId");

  return {
    oninit: () => {
     

      unsubConsultation = listenToConsultation(consultationId)

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

      console.log(store);
      console.log(consultation);
      return (
        <div className="page">
          <h1>
            {/* @ts-ignore */}
            <m.route.Link href="/home">{consultation?.title}</m.route.Link>
          </h1>
          <ConsultationNav section={section} />
          {/* @ts-ignore */}
          <SystemMessage />
        </div>
      );
    },
  };
}
