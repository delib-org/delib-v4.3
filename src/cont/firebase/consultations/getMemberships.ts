import m from "mithril";
import store, { ErrorType } from "../../../model/store";
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

export default function listenToMemberships(userId: string): Function {
  try {
    if (!userId) throw new Error("missing userId");
    const membershipsRef = collection(DB, "users", userId, "memberships");

    return onSnapshot(membershipsRef, (membershipsDB) => {
      try {
        membershipsDB.docChanges().forEach((change) => {
          try {

            const { error} = membershipSchema.validate(change.doc.data());
            if(error) throw error;
       

            if (change.type === "added") {
              store.memberIn = updateArray(store.memberIn, change.doc.data());
            }
            if (change.type === "modified") {
              store.memberIn = updateArray(store.memberIn, change.doc.data());
            }
            if (change.type === "removed") {
              store.memberIn = updateArray(
                store.memberIn,
                change.doc.data(),
                true
              );
            }
          } catch (error) {
            console.error(error);
          }
        });
        console.log(store)
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
    return () => {};
  }
}
