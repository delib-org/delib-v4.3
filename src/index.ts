import m from "mithril";
import Home from "./view/pages/Home";
import Second from "./view/pages/Second";

const mountNode = document.querySelector("#app");
if (mountNode) {
  m.route(document.body, "/home", {
    "/home": Home,
    "/sec":Second
})
}
