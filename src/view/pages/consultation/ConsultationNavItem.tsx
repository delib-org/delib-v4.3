import m, { Vnode } from "mithril";
import { Section } from "../../../model/consultationModel";
import store from '../../../model/store';

interface State {}
interface Attrs {
  section: Section;
}

export default function ConsultationNavItem(vnodeInit: Vnode<Attrs, State>) {
  return {
    view: (vnode: Vnode<Attrs, State>) => (
      <div class="navTop__btn">
       {vnode.attrs.section}

      </div>
    ),
  };
}