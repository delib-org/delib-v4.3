import m from "mithril";
import store from "../../model/store";

export default function Second() {
    function handleRoute(){
        m.route.set('/home')
    }
    function add(){
        store.counter++
    }
    return {
        view: () => (
            <main>
                <h1>Second</h1>
                <h2>{store.counter}</h2>
                <button onclick={handleRoute}>Home</button>
                <button onclick={add}>ADD</button>
            </main>
        ),
    };
}