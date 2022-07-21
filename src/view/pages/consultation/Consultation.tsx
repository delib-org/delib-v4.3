import m from "mithril";
import { listenToConsultation } from "../../../cont/firebase/consultations/getConsultations";
import { getMembership } from "../../../cont/general/membershipCont";
import { getConsultationStore } from "../../../cont/store/consultationStore";

export default function Consultation() {
  let unsub = ()=>{};
  const consultationId = m.route.param("consultationId");
  return {
    oninit: () => {
     
      unsub = listenToConsultation(consultationId);
    },
    onremove:()=>{
        unsub();
    },
    onupdate:()=>{
        console.log(getMembership(consultationId))
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
