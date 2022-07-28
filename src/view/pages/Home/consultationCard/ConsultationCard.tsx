import m, { Vnode } from "mithril";
import { Consultation } from "../../../../model/consultationModel";

interface State {
 
}
interface Attrs {
  consultation: Consultation;
  news:string
}

export default function ConsultationCard(vnodeInit:Vnode<Attrs, State>) {

    function handleHref(){
        try {
            const { consultation } = vnodeInit.attrs;
            m.route.set(`/consultation/${consultation.id}`)
        } catch (error) {
            console.error(error)
        }
    }

  return {
   

    view: (vnode: Vnode<Attrs, State>) => {
      const { consultation, news } = vnode.attrs;
     
      return <div className="card clickable" onclick={handleHref} >
        <h3>{consultation.title}</h3>
        <p class="news">{news}</p>
        </div>;
    },
  };
}
