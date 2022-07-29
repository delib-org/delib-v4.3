import m, { Vnode } from "mithril";
import { MessageProps } from "../../../../model/messagesModel";
interface State {}
interface Attrs {
  message: MessageProps;
}

//@ts-ignore
import deleteBtn from '../../../img/delete-lightgray.svg'
import store from "../../../../cont/store/store";
import { deleteMessage } from "../../../../cont/firebase/chat/chatDB";
import { getRandomColor, timeParse } from "../../../../cont/general/general";

export default function MessageCard(vnodeInit: Vnode<Attrs, State>) {
  const { user } = store;
  const {message} = vnodeInit.attrs;
  const { creator } = message;
  const isSameUser = user?.uid === creator.uid;

  function handleDeleteMessage() {
    
    deleteMessage(message.id)
  }


  return {
    oninit: () => {},
    view: () => {
      return (
        <div class={isSameUser == true ? "message message--me" : "message"}>
          {isSameUser ? (
            <div class="message__user">
              {creator.photoURL ? (
                <img src={creator.photoURL} alt="user"></img>
              ) : (
                <div style={`background:${getRandomColor()}`}>
                  {creator.displayName?creator.displayName.substring(0, 5):null}
                </div>
              )}
            </div>
          ) : (
            <div class="message__user" />
          )}
          <div class="message__texts">
            {!isSameUser ? (
              <div class="message__username"> {creator.displayName?creator.displayName.substring(0, 5):null}</div>
            ) : (
              <div />
            )}
            <div class="message__text">
              <div>{message.message}</div>
              {isSameUser ? (
                <img
                  src={deleteBtn}
                  alt="delete"
                  onclick={handleDeleteMessage}
                />
              ) : null}
            </div>
            <div class="message__time">
              {timeParse(new Date(message.updated.seconds * 1000))}
            </div>
          </div>
        </div>
      );
    },
  };
}
