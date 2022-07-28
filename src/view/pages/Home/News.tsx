import { defaults } from "joi";
import m, { Component, Vnode } from "mithril";
import store from "../../../cont/store/store";
import { EntityType, News, News } from "../../../model/newsModel";
import ConsultationCard from "./consultationCard/ConsultationCard";

export default function NewsRoll() {
  return {
    view: () => (
      <div>
        {/* @ts-ignore */}
        {store.news
          .sort((a:News, b:News) => b.update.seconds - a.update.seconds)
          .map((newy: News) =>
            newy.entityType === EntityType.CONSULTATION ? (
              <NewsSwitch key={newy.id} newsItem={newy} />
            ) : null
          )}
      </div>
    ),
  };
}

interface State {}

interface Attrs {
  newsItem: News;
}



function NewsSwitch(): Component<Attrs, State> {
  return {
    view: (vnode: Vnode<Attrs, State>) => {
      const { newsItem } = vnode.attrs;
      switch (newsItem.entityType) {
        case EntityType.CONSULTATION:
         
          return (
            <ConsultationCard
              consultation={newsItem.group}
              news={newsItem.text}
            />
          );
        default:
          return null;
      }
    },
  };
}
