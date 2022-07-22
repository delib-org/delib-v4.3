import m from "mithril";
import { listenToConsultations } from "../../../cont/firebase/consultations/getConsultations";
import store from "../../../model/store";

//components
import NavBottom from "../../comp/NavBottom/NavBottom";
import SystemMessage from "../../comp/NavBottom/systemMessage/SystemMessage";
import ConsultationCard from "./consultationCard/ConsultationCard";
import HomeCreate from "./HomeCreate";

const consultations = [];
let checkInterval: any;

export default function Home() {
  function handleRoute() {
    m.route.set("/sec");
  }
  function add() {
    store.counter++;
  }
  let unsub = () => {};
  return {
    oninit: () => {
      if (store.user) {
        unsub = listenToConsultations();
      } else {
        checkInterval = setInterval(() => {
          console.log("checking");
          if (store.user) {
            unsub = listenToConsultations();
            clearInterval(checkInterval);
          }
        }, 200);
      }
    },
    onremove: () => {
      unsub();
      if (checkInterval) {
        clearInterval(checkInterval);
      }
    },
    view: () => (
      <div className="page">
        <main class="page__main">
          {consultations.length === 0 ? (
            //@ts-ignore
            <HomeCreate />
          ) : null}
          <h1>דף הבית</h1>
          <h2>{store.counter}</h2>
          <button onclick={handleRoute}>Second</button>
          <button onclick={add}>ADD</button>
          {/* @ts-ignore */}
          {store.consultations.groups
            .sort((a, b) => b.time.updated - a.time.updated)
            .map((consultation) => (
              <ConsultationCard consultation={consultation} />
            ))}
        </main>
        {/* @ts-ignore */}
        <NavBottom />
        {/* @ts-ignore */}
        <SystemMessage />
      </div>
    ),
  };
}
