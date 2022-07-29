import m from "mithril";
import { DB } from "../config";
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { responseToError } from "../consultations/consultationsDBGet";
import Joi, { func } from "joi";
import { MessageSchema } from "../../../model/messagesModel";
import { updateArray } from "../../general/general";
import store from "../../store/store";

interface AddMessageProps {
  message: string;
  groupId: string;
}
const AddMessageSchema = Joi.object({
  message: Joi.string().required(),
  groupId: Joi.string().required(),
});

export async function addMessage(props: AddMessageProps) {
  try {
    const { value, error } = AddMessageSchema.validate(props);
    if (error) throw error;
    const { message, groupId } = value;

    await addDoc(collection(DB, "messages"), {
      message,
      groupId,
      creator: store.user,
      created: serverTimestamp(),
      updated: serverTimestamp(),
    });
  } catch (error) {
    responseToError(error);
  }
}

export async function deleteMessage(messageId: string) {
  try {
    await deleteDoc(doc(DB, "messages", messageId));
  } catch (error) {
    responseToError(error);
  }
}

export function listenToChat(groupId: string): Function {
  try {
    const startTime = Timestamp.fromDate(
      new Date(store.chat.last_update.seconds * 1000)
    );

    const chatRef = collection(DB, "messages");
    const q = query(
      chatRef,
      where("groupId", "==", groupId),
      where("updated", ">", startTime),
      orderBy("updated"),
      limit(20)
    );
    return onSnapshot(q, (messagesDB) => {
      messagesDB.docChanges().forEach((change) => {
        try {
          const messageObj = change.doc.data();
          messageObj.id = change.doc.id;
          const { error } = MessageSchema.validate(messageObj);
          if (error) throw new Error(`${error} in ${messageObj.id}`);

          if (change.type === "added") {
            store.chat.messages = updateArray(store.chat.messages, messageObj);
          }
          if (change.type === "modified") {
            store.chat.messages = updateArray(store.chat.messages, messageObj);
          }
          if (change.type === "removed") {
            store.chat.messages = updateArray(store.chat.messages, messageObj,true);
          }

          if (messageObj && messageObj.updated && messageObj.updated.seconds) {
            console.log("Last update:", messageObj.updated.seconds);

            
            //if last message update time, is bigger than last saved message on store,
            // update store
            if (store.chat.last_update.seconds < messageObj.updated.seconds) {
              store.chat.last_update.seconds = messageObj.updated.seconds;
            }
          }
        } catch (error) {
          responseToError(error);
        }
      });
      console.log(store.chat.messages);
      m.redraw();
    });
  } catch (error) {
    responseToError(error);
    return () => {};
  }
}
