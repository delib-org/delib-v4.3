import m from "mithril";

//pages
import Login from "./view/pages/login/Login";
import Home from "./view/pages/Home/Home";
import Second from "./view/pages/Second";

import "./view/styles/app.scss";

import { onAuth } from "./cont/firebase/auth";
import SetConsultation from "./view/pages/setConsultation/SetConsultation";
import Consultation from "./view/pages/consultation/Consultation";

onAuth();

const mountNode = document.querySelector("#app");
if (mountNode) {
  m.route(document.body, "/login", {
    "/login": Login,
    "/home": Home,
    "/sec": Second,
    "/set-consultation/:consultationId": SetConsultation,
    "/consultation/:consultationId/": Consultation,
    "/consultation/:consultationId/:section": Consultation,
  });
}
