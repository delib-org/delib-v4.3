import { responseToError } from "../cont/firebase/consultations/consultationsDBGet";
import store from "./store";

export const dic:any = {
  //sections
  info: {
    he: "מידע",
  },
  intro: {
    he: "הסבר",
  },
  chat: {
    he: "שיחה",
  },
};

export function transWord( word: string):string{
    try {
        const lang = store.lang;
        const _transWord = dic[word][lang];
        if(_transWord){
            return _transWord
        } 
        return word;
    } catch (error) {
        responseToError(error)
        return word;
    }
}
