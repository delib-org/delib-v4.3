import m from "mithril";
import { DB } from "../config";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { responseToError } from "./consultationsDBGet";
import { UserSchema } from "../../../model/userModel";

export async function updateUserToDB(user: User) {
  try {
    const { value, error } = UserSchema.validate(user);
    if (error) throw error;

    const { displayName, uid, email, photoURL, isAnonymous } = value;
    const userRef = doc(DB, "users", user.uid);
    value.lastEnterd = new Date();
    await setDoc(
      userRef,
      { displayName, uid, email, photoURL, isAnonymous , lastEnterd:serverTimestamp()},
      { merge: true }
    );
    console.log("user updated");
  } catch (error) {
    responseToError(error);
  }
}
