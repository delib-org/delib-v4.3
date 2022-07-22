import m from "mithril";
import { listenToSections } from "../../../cont/firebase/consultations/consultationsDBGet";
import { getConsultationStore } from "../../../cont/store/consultationStore";
import store from "../../../model/store";
import SystemMessage from "../../comp/NavBottom/systemMessage/SystemMessage";
import ConsultationNav from "./ConsultationNav";

export default function Consultation() {
  const consultationId = m.route.param("consultationId");
  let unsubSections = () => {};
  return {
    oninit: () => {
      const consultation = getConsultationStore(consultationId);
      if (!consultation) {
        // let unsub = listenToConsultation(consultationId);
      }
      unsubSections = listenToSections(consultationId);
    },
    onremove: () => {
      unsubSections();
    },
    view: () => {
      const consultationId = m.route.param("consultationId");
      const section = m.route.param("section");
    
      const consultation = getConsultationStore(consultationId);
     
      console.log( store)
      console.log(consultation)
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
