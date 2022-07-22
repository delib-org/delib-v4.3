import { News } from "../../model/newsModel";
import store from "../../model/store";
import { responseToError } from "../firebase/consultations/consultationsDBGet";

export function updateNews(newItem: News): void {
  try {
    const index = store.news.findIndex(newy=>newy.groupId = newItem.groupId)
    if(index === -1){
        //to be continue: to make news
        store.news.push(newItem)
    }
  } catch (error) {
    responseToError(error);
  }
}
