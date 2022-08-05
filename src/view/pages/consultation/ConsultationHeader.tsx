import m, { Vnode } from "mithril";
import { Consultation, Section } from "../../../model/consultationModel";
import store from "../../../cont/store/store";
import ConsultationNavItem from "./ConsultationNavItem";

interface State {}
interface Attrs {
  consultation: Consultation;
}

export default function ConsultationHeader(vnodeInit: Vnode<Attrs, State>) {
  return {
    view: (vnode: Vnode<Attrs, State>) => {
      const { consultation } = vnode.attrs;

      return (
        <div class="consultation__header">
          <h1>
            {/* @ts-ignore */}
            <m.route.Link href="/home">{consultation?.title}</m.route.Link>
          </h1>
          <div className="consultation__header__settings">
            <m.route.Link href={`/set-consultation/${consultation.id}`}>
              Settings
            </m.route.Link>
          </div>
        </div>
      );
    },
  };
}
