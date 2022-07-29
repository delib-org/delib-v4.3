import m from "mithril";
import { DB } from "../config";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
  document,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { responseToError } from "../consultations/consultationsDBGet";
import Joi from "joi";
import store, { MessageProps } from '../../../model/messagesModel';
import { updateArray } from "../../general/general";
import { MessageTextSchema } from "../../../model/newsModel";

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

export function listenToChat(groupId: string): Function {
  try {
    const startTime = Timestamp.fromDate(
      new Date(store.chat.last_update.seconds * 1000)
    );
    console.log(startTime);
    const chatRef = collection(DB, "messages");
    const q = query(
      chatRef,
      where("groupId", "==", groupId),
      where("updated", ">", startTime),
      orderBy("updated")
    );
    return onSnapshot(q, (messagesDB) => {
      messagesDB.forEach((messageDB) => {
        try {
          const messageObj = messageDB.data();
          messageObj.id = messageDB.id;

          const { error } = MessageTextSchema.validate(messageObj);
          if (error) throw error;

          if (messageObj && messageObj.updated && messageObj.updated.seconds) {
            console.log("Last update:", messageObj.updated.seconds);

            store.chat.messages = updateArray(store.chat.messages, messageObj);
            if (store.chat.last_update.seconds < messageObj.updated.seconds) {
              store.chat.last_update.seconds = messageObj.updated.seconds;
            }
          }
        } catch (error) {
          responseToError(error);
        }
      });

      m.redraw();
    });
  } catch (error) {
    responseToError(error);
    return () => {};
  }
}
