import m from "mithril";
import store, { ErrorType } from "../../store/store";
import {
  collection,
  where,
  query,
  onSnapshot,
  orderBy,
  doc,
} from "firebase/firestore";
import { DB } from "../config";
import { updateArray } from "../../general/general";
import { membershipSchema } from "../../../model/membershipModel";
import { listenToConsultation } from "./consultationsDBGet";
import { listenToNewsFromGroup } from "../news/newsDB";

export default function listenToMemberships(userId: string): Function {
  try {
    if (!userId) throw new Error("missing userId");
    const membershipsRef = collection(DB, "users", userId, "memberships");

    return onSnapshot(membershipsRef, (membershipsDB) => {
      try {
        membershipsDB.docChanges().forEach((change) => {
          try {
            const { value, error } = membershipSchema.validate(
              change.doc.data()
            );
            if (error) throw error;
            value.id = change.doc.data().groupId;

            if (change.type === "added") {
              store.memberIn = updateArray(store.memberIn, value);
              listenToConsultation(value.id);
              listenToNewsFromGroup(value.id);
            }
            if (change.type === "modified") {
              store.memberIn = updateArray(store.memberIn, value);
            }
            if (change.type === "removed") {
              store.memberIn = updateArray(store.memberIn, value, true);
            }
          } catch (error) {
            console.error(error);
          }
        });

        // localStorage.setItem("store", JSON.stringify(store));
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
    return () => {};
  }
}
