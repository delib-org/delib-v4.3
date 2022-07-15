import m, { Vnode } from "mithril";
import { setConsultation } from "../../../cont/firebase/consultations/setConsultations";
import store from "../../../model/store";
import SystemMessage from "../../comp/NavBottom/systemMessage/SystemMessage";

interface State {
  consultationId: string;
}
interface Attrs {}

export enum GroupType {
  CLOSE = "close",
  PUBLIC = "public",
  SECRET = "secret",
}

export default function SetConsultation() {
  function handleNewConsultation(ev: any) {
    try {
      ev.preventDefault();
      const { elements } = ev.target;
      let { title, description, groupType } = elements;
      title = title.value;
      description = description.value;
      groupType = groupType.value;
      console.log(title, description, groupType);
      if (store.user === null)
        throw new Error(
          "To submit a new consultation, the user must be logged-in"
        );
      setConsultation({ title, description, groupType });
    } catch (error) {
      console.error(error);
    }
  }

  return {
    oninit: (vnode: Vnode<Attrs, State>) => {
      const { consultationId } = m.route.param();
      vnode.state.consultationId = consultationId;

      // vnode.state.consultationId = consultationId;
    },
    view: (vnode: Vnode<Attrs, State>) => {
      const { consultationId } = vnode.state;
      return (
        <div className="page setConsl">
          <div className="header">
            <h1>{consultationId === "new" ? "פתיחת התייעצות חדשה" : null}</h1>
          </div>
          <main>
            <div className="wrapper">
              <form onsubmit={handleNewConsultation}>
                <label>נושא</label>
                <input
                  type="text"
                  name="title"
                  placeholder="נושא ההתיעצות"
                  required
                />
                <label>הסבר</label>
                <textarea
                  name="description"
                  placeholder="הסבר על ההתיעצות"
                  required
                />
                <select name="groupType">
                  <option value={GroupType.PUBLIC}>פתוחה</option>
                  <option value={GroupType.CLOSE}>
                    סגורה - דרוש אישור מנהלים כדי להצטרף
                  </option>
                  <option value={GroupType.SECRET}>
                    סודית - יש צורך לקבל הזמנה
                  </option>
                </select>
                <button type="submit">יצירת התייעצות</button>
              </form>
            </div>
          </main>
          <SystemMessage />
        </div>
      );
    },
  };
}
