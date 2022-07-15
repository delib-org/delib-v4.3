import m from "mithril";
import store from "../../../model/store";

//components
import NavBottom from "../../comp/NavBottom/NavBottom";
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
    return {
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
            </div>
        ),
    };
}