import m from "mithril";
import { listenToConsultation } from "../../../cont/firebase/consultations/getConsultations";
import { getConsultationStore } from "../../../cont/store/consultationStore";

export default function Consultation() {
  let unsub = ()=>{}
  return {
    oninit: () => {
      const consultationId = m.route.param("consultationId");
      unsub = listenToConsultation(consultationId);
    },
    onremove:()=>{
        unsub();
    },
    view: () => {
      const consultationId = m.route.param("consultationId");
      const consultation = getConsultationStore(consultationId);
      return (
        <h1>
          <m.route.Link href="/home">{consultation?.title}</m.route.Link>
        </h1>
      );
    },
  };
}
