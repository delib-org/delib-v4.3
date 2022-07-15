import m from "mithril";
import store from "../../model/store";

export default function Home() {
    function handleRoute(){
        m.route.set('/sec')
    }
    function add(){
        store.counter++
    }
    return {
        view: () => (
            <main>
                <h1>Home</h1>
                <h2>{store.counter}</h2>
                <button onclick={handleRoute}>Second</button>
                <button onclick={add}>ADD</button>
            </main>
        ),
    };
}