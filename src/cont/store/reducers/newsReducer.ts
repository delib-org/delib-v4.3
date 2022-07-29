import { GroupNews, News, NewsItem } from "../../../model/newsModel";
import store from "../store";
import { responseToError } from "../../firebase/consultations/consultationsDBGet";
import { updateArray } from "../../general/general";

export function updateStoreNews(news: News): void {
  try {
    const { groupId, id } = news;
    if (!groupId) throw new Error("No group Id in news");
    if (!id) throw new Error(`Message dont have ID`);

    const newsItem = new NewsItem(news.id,news.text,news.entityType,news.creator,news.update);
    const group = new GroupNews(news.group);
    group.setNewsItem(newsItem)

    const groupIndex = store.news.findIndex(
      (group: GroupNews) => group.groupId === groupId
    );
    if (groupIndex === -1) {
      store.news.push(group);
    } else {
      store.news[groupIndex].messages = updateArray(store.news[groupIndex].messages,newsItem )
    }
  } catch (error) {
    responseToError(error);
  }
}
