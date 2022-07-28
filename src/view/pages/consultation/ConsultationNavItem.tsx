import m, { Vnode } from "mithril";
import {
  getSectionSelected,
  selectSection,
} from "../../../cont/store/reducers/consultationsReducer";
import { Section } from "../../../model/consultationModel";
import { transWord } from "../../../model/lang";


interface State {}
interface Attrs {
  section: Section;
}

export default function ConsultationNavItem(vnodeInit: Vnode<Attrs, State>) {
  const consultationId = m.route.param("consultationId");
  function handleSelection() {
    selectSection(consultationId, vnodeInit.attrs.section);
  }

  return {
    view: (vnode: Vnode<Attrs, State>) => {
        const selectedSection = getSectionSelected(consultationId);
      return (
        <div onclick={handleSelection} className={selectedSection === vnode.attrs.section?'navTop__btn navTop__btn--selected':'navTop__btn'}>
          {transWord(vnode.attrs.section)}
        </div>
      );
    },
  };
}
