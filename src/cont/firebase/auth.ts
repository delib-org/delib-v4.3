import m from "mithril";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";
import { firebaseApp } from "./config";
import store from "../../model/store";
import { redirect } from "../general/authCont";

const auth = getAuth(firebaseApp);

export function AnonymousLogin() {
  signInAnonymously(auth)
    .then(() => {
      console.log("Anonymous login");
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

export function onAuth() {
  console.time('start')
  onAuthStateChanged(auth, (user) => {
    console.timeEnd('start')
    try {
      if (user) {
        // getSubscriptions();
        console.log(user);
        store.user = {
          displayName: user.displayName,
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
        };
        console.info("User", user.uid, "is signed in.");
        console.log(store.user)
        redirect();
      } else {
        console.info("User is signed out.");
        store.user = null;
      }
    } catch (err) {
      console.error(err);
    }
  });
}

const provider = new GoogleAuthProvider();
export function googleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        // const token: any = credential.accessToken;
      }
      // The signed-in user info.
      //   store.user = result.user;
      console.log(`user is logged in with google`);
      //   let lastPage = sessionStorage.getItem("lastPage") || "/groups";
   
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(errorCode, errorMessage, email, credential);
      // ...
    });
}
