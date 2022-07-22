import store from "../../model/store";
import { responseToError } from "../firebase/consultations/consultationsDBGet";

export function saveStore(funchanged:string) {
  try {
    localStorage.setItem("store", JSON.stringify(store));
    console.info(`${funchanged} changed store`)
  } catch (error) {
    responseToError(error);
  }
}
