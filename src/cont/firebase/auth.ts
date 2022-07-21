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
import listenToMemberships from "./consultations/getMemberships";
import { clenaMembership } from "../general/membershipCont";

const auth = getAuth(firebaseApp);

export function AnonymousLogin() {
  signInAnonymously(auth)
    .then(() => {
      console.info("Anonymous login");
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

let unsubMembership:Function=()=>{};
export function onAuth() {

  onAuthStateChanged(auth, (user) => {
 
    try {
      if (user) {
        // getSubscriptions();
      
        store.user = {
          displayName: user.displayName,
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
        };
        console.info("User", user.uid, "is signed in.");
        unsubMembership = listenToMemberships(user.uid);
        redirect();
      } else {
        console.info("User is signed out.");
        store.user = null;
        redirect('/login');
        
        clenaMembership();
        
        unsubMembership();
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
      console.info(`user is logged in with google`);
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
