import store from "../store";
import { responseToError } from "../../firebase/consultations/consultationsDBGet";

export function saveStore(funchanged:string) {
  try {
    // localStorage.setItem("store", JSON.stringify(store));
    console.info(`${funchanged} changed store - didnt save, because of problems in local storage saving`)
  } catch (error) {
    responseToError(error);
  }
}
