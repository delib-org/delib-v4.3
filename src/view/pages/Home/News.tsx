import { defaults, func } from "joi";
import m, { Component, Vnode } from "mithril";
import { responseToError } from "../../../cont/firebase/consultations/consultationsDBGet";
import { timeParse } from "../../../cont/general/general";
import store from "../../../cont/store/store";
import { Consultation } from "../../../model/consultationModel";
import {
  EntityType,
  GroupNews,
  News,
  NewsItem,
} from "../../../model/newsModel";

export default function NewsRoll() {
  function handleNavigate(consultationId: string) {
    try {
      m.route.set(`/consultation/${consultationId}`);
    } catch (error) {
      responseToError(error);
    }
  }

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
            const group = getConsultationFromStore(groupNews.id);
            if (group) {
              return (
                <div
                  className="groupNews"
                  onclick={() => handleNavigate(groupNews.groupId)}>
                  <h3>
                    {group.title}
                  </h3>
                  {groupNews.messages
                    .sort((a, b) => b.update.seconds - a.update.seconds)
                    .map((newsItem: NewsItem) => {
                      return <NewsSwitch newsItem={newsItem} />;
                    })}
                </div>
              );
            } else {
              return null;
            }
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
            <p>{`${timeParse(
              new Date(newsItem.update.seconds * 1000)
            )} - קבוצה: ${newsItem.message}`}</p>
          );
        case EntityType.MESSAGE:
          return (
            <p>{`${timeParse(
              new Date(newsItem.update.seconds * 1000)
            )} - הודעה: ${newsItem.message}`}</p>
          );
        default:
          return null;
      }
    },
  };
}

function getConsultationFromStore(groupId: string): Consultation | false {
  try {
    const group = store.consultations.groups.find((grp) => grp.id === groupId);
    if (!group) throw new Error(`Couldnt find group ${groupId}`);
    return group;
  } catch (error) {
    return false;
  }
}
