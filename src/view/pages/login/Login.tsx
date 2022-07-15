//@ts-ignore
import m from "mithril";
import "./Login.scss";
//@ts-ignore
import googleIcon from "../../img/google.svg";

//cont
import { googleLogin } from "../../../cont/firebase/auth";

export default function Login() {
  return {
    view: () => (
      <div class="page splashPage" href="/delib">
        <div class="centerElement">
          <div id="login__splashName" class="opacity07">
            Delib
          </div>
          <div id="login__splashSubName" class="opacity07">
            יוצרים הסכמות
          </div>
          <div class="buttons loginButton" onclick={googleLogin}>
            <div>התחברות עם גוגל</div>
            <img src={googleIcon}></img>
          </div>
          <p className="opacity07">
            דליב היא מערכת ליצירת הסכמות <br></br>מבית{" "}
            <a href="http://delib.org" target="_blank">
              המכון לדמוקרטיה דיונית
            </a>
          </p>
        </div>
      </div>
    ),
  };
}
