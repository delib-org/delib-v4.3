import m, { Vnode } from "mithril";
import { Section } from "../../../model/consultationModel";
import store from "../../../model/store";
import ConsultationNavItem from "./ConsultationNavItem";

interface State {}
interface Attrs {
  section: Section;
}

export default function ConsultationNav(vnodeInit: Vnode<Attrs, State>) {
    const consultationId = m.route.param('consultationId');
  return {
    view: (vnode: Vnode<Attrs, State>) => {
     
        const {sections} = store.consultations;
        const consultationSections = sections.find(section=>section.id === consultationId)
       
      return(
      <div class="navTop">
        <ConsultationNavItem section={Section.INTRO} />
        {consultationSections?consultationSections.sections.map((section:any)=> <ConsultationNavItem section={section} />):null}
      </div>
      );
    },
  };
}
