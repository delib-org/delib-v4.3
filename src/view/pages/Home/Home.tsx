import m from "mithril";
import { listenToConsultations } from "../../../cont/firebase/consultations/consultationsDBGet";
import store from "../../../cont/store/store";

//components
import NavBottom from "../../comp/NavBottom/NavBottom";
import SystemMessage from "../../comp/NavBottom/systemMessage/SystemMessage";
import ConsultationCard from "./consultationCard/ConsultationCard";
import News from "./News";
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
         <News />
        </main>
        {/* @ts-ignore */}
        <NavBottom />
        {/* @ts-ignore */}
        <SystemMessage />
      </div>
    ),
  };
}
