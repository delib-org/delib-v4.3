import m, { Vnode } from "mithril";
import { Consultation } from "../../../../model/consultationModel";

interface State {
 
}
interface Attrs {
  consultation: Consultation;
}

export default function ConsultationCard(vnodeInit:Vnode<Attrs, State>) {

    function handleHref(){
        try {
            const { consultation } = vnodeInit.attrs;
            m.route.set(`/consultation/${consultation.id}`)
        } catch (error) {
            console.log(error)
        }
    }

  return {
   

    view: (vnode: Vnode<Attrs, State>) => {
      const { consultation } = vnode.attrs;
     
      return <div className="card clickable" onclick={handleHref} >{consultation.title} </div>;
    },
  };
}
