import { defaults } from "joi";
import m, { Component, Vnode } from "mithril";
import store from "../../../cont/store/store";
import {
  EntityType,
  GroupNews,
  News,
  NewsItem,
} from "../../../model/newsModel";
import ConsultationCard from "./consultationCard/ConsultationCard";

export default function NewsRoll() {
  return {
    view: () => (
      <div>
        {/* @ts-ignore */}
        {store.news.groups
          .sort(
            (a: GroupNews, b: GroupNews) =>
              b.last_update.seconds - a.last_update.seconds
          )
          .map((groupNews: GroupNews) => {
            return (
              <div className="groupNews">
                <h3>{groupNews.group.title}</h3>
                {groupNews.messages.map((newsItem: NewsItem) => {
                  return <NewsSwitch newsItem={newsItem} />;
                })}
              </div>
            );
          })}
      </div>
    ),
  };
}

interface State {}

interface Attrs {
  newsItem: NewsItem;
}

function NewsSwitch(): Component<Attrs, State> {
  return {
    view: (vnode: Vnode<Attrs, State>) => {
      const { newsItem } = vnode.attrs;
      switch (newsItem.entityType) {
        case EntityType.CONSULTATION:
          return (
            <p>{newsItem.message}</p>
          );
          case EntityType.MESSAGE:
            return <p>{newsItem.message}</p>
        default:
          return null;
      }
    },
  };
}
