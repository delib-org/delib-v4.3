import m, { Vnode } from "mithril";
import { Consultation } from "../../../../model/consultationModel";
import { addNews } from "../../../../cont/firebase/news/newsDB";
import { EntityType } from "../../../../model/newsModel";

interface State {}
interface Attrs {
  consultation: Consultation;
}

export default function Chat(vnodeInit: Vnode<Attrs, State>) {
  const { consultation } = vnodeInit.attrs;

  function handleSendChat(ev: any) {
    ev.preventDefault();
    const message = ev.target.message.value;
    console.log(message);
    addNews(consultation.id, message, consultation, EntityType.MESSAGE);
    try {
    } catch (error) {
      console.error(error);
    }
  }

  return {
    view: (vnode: Vnode<Attrs, State>) => {
      return (
        <div class="chat section">
          <main>text...</main>
          <form onsubmit={handleSendChat}>
            <textarea name="message" placeholder="רשמו הודעה" />
            <button type="submit">SEND</button>
          </form>
        </div>
      );
    },
  };
}
