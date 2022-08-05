import m, { Vnode } from "mithril";
import { Consultation } from "../../../model/consultationModel";


interface State {}
interface Attrs {
  consultation: Consultation;
}

export default function ConsultationHeader() {
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
            {/* @ts-ignore */}
            <m.route.Link href={`/set-consultation/${consultation.id}`}>
              Settings
            </m.route.Link>
          </div>
        </div>
      );
    },
  };
}
