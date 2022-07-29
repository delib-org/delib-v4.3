import m, { Vnode } from "mithril";
import { Consultation } from "../../../../model/consultationModel";
import { addNews } from "../../../../cont/firebase/news/newsDB";
import { EntityType } from "../../../../model/newsModel";
import { addMessage, listenToChat } from "../../../../cont/firebase/chat/chatDB";
import store from "../../../../cont/store/store";

interface State {}
interface Attrs {
  consultation: Consultation;
}


export default function Chat(vnodeInit: Vnode<Attrs, State>) {
  let unsubMessages:Function = ()=>{};
  const { consultation } = vnodeInit.attrs;

  async function handleSendChat(ev: any) {
    ev.preventDefault();
    const message = ev.target.message.value;
    console.log(message);
    addNews(consultation.id, message, consultation, EntityType.MESSAGE);
    await addMessage({message, groupId:consultation.id})
    ev.target.reset();
    try {
    } catch (error) {
      console.error(error);
    }
  }

  
  return {
    oninit:()=>{
      unsubMessages= listenToChat(consultation.id)
    },
    onremove:()=>{
      unsubMessages()
    },
    view: (vnode: Vnode<Attrs, State>) => {
      const messages = store.chat.messages.sort((a,b)=>a.created.seconds - b.created.seconds)
      return (
        <div class="chat section">
          <main>
            {messages.map(msg=><p key={msg.id}>{msg.message}</p>)}
          </main>
          <form onsubmit={handleSendChat}>
            <textarea name="message" placeholder="רשמו הודעה" />
            <button type="submit">SEND</button>
          </form>
        </div>
      );
    },
  };
}
