import m from "mithril";
import { listenToConsultations } from "../../../cont/firebase/consultations/getConsultations";
import store from "../../../model/store";

//components
import NavBottom from "../../comp/NavBottom/NavBottom";
import SystemMessage from "../../comp/NavBottom/systemMessage/SystemMessage";
import SetConsultation from "../setConsultation/SetConsultation";
import HomeCreate from "./HomeCreate";

const consultations = []

export default function Home() {
    function handleRoute(){
        m.route.set('/sec')
    }
    function add(){
        store.counter++
    }
    let unsub = ()=>{};
    return {
        oninit:()=>{
           unsub= listenToConsultations()
        },
        onremove:()=>{
            unsub();
        },
        view: () => (
            <div className="page">
            <main class="page__main">
                {consultations.length===0?
                <HomeCreate />
                :null}
                <h1>דף הבית</h1>
                <h2>{store.counter}</h2>
                <button onclick={handleRoute}>Second</button>
                <button onclick={add}>ADD</button>
            </main>
            <NavBottom />
            <SystemMessage />
            </div>
        ),
    };
}