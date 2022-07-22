import m, { Vnode } from "mithril";
import { Section } from "../../../model/consultationModel";
import store from "../../../model/store";
import ConsultationNavItem from "./ConsultationNavItem";

interface State {}
interface Attrs {
  section: Section;
}

export default function ConsultationNav(vnodeInit: Vnode<Attrs, State>) {
  return {
    view: (vnode: Vnode<Attrs, State>) => {
        const {sections} = store.consultations;
        console.log(sections)
        const consultationId = m.route.param('consultationId');
      return(
      <div class="navTop">
        <ConsultationNavItem section={Section.INTRO} />
        {consultationId in sections?sections[consultationId].sections.map((section:any)=> <ConsultationNavItem section={section} />):null}
      </div>
      );
    },
  };
}
