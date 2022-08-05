import m, { Vnode } from "mithril";
import { setConsultation } from "../../../cont/firebase/consultations/consultationsDBset";
import { Consultation, Section } from "../../../model/consultationModel";
import store from "../../../cont/store/store";
import SystemMessage from "../../comp/NavBottom/systemMessage/SystemMessage";
import {
  getConsultationSectionsStore,
  getConsultationStore,
} from "../../../cont/store/consultationStore";

interface State {
  consultationId: string;
  isUpdating: boolean;
}
interface Attrs {}

export enum GroupType {
  CLOSE = "close",
  PUBLIC = "public",
  SECRET = "secret",
}

export default function SetConsultation(InitVnode: Vnode<Attrs, State>) {
  async function handleNewConsultation(ev: any) {
    try {
      ev.preventDefault();
      InitVnode.state.isUpdating = true;
      const { elements } = ev.target;

      //set parameters
      let { title, description, groupType, sections } = elements;
      title = title.value;
      description = description.value;
      groupType = groupType.value;
      const sectionsNames: Section[] = [];
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].checked) {
          sectionsNames.push(sections[i].value);
        }
      }

      if (store.user === null)
        throw new Error(
          "To submit a new consultation, the user must be logged-in"
        );

      const { success, consultationId } = await setConsultation({
        title,
        description,
        groupType,
        sections: sectionsNames,
        update: isUpdating(),
        id: getConsultationId(),
      });
      if (success) {
        m.route.set(`/consultation/${consultationId}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function isUpdating(): boolean {
    try {
      const { consultationId } = m.route.param();
      const consultation = getConsultationStore(consultationId);
      if (consultation === undefined) return false;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return {
    oninit: (vnode: Vnode<Attrs, State>) => {
      const { consultationId } = m.route.param();
      vnode.state.consultationId = consultationId;
      vnode.state.isUpdating = false;

      // vnode.state.consultationId = consultationId;
    },
    view: (vnode: Vnode<Attrs, State>) => {
      const { consultationId } = m.route.param();
      const consultation = getConsultationStore(consultationId);
      const sections = getConsultationSectionsStore(consultationId);
    
      if (!vnode.state.isUpdating) {
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
                    value={consultation?.title || ""}
                  />
                  <label>הסבר</label>
                  <textarea
                    name="description"
                    placeholder="הסבר על ההתיעצות"
                    required
                    value={consultation?.description || ""}
                  />
                  <select name="groupType" value={consultation?.groupType}>
                    <option
                      value={GroupType.PUBLIC}
                      selected={isSelected(consultation, GroupType.PUBLIC)}>
                      פתוחה
                    </option>
                    <option
                      value={GroupType.CLOSE}
                      selected={isSelected(consultation, GroupType.CLOSE)}>
                      סגורה - דרוש אישור מנהלים כדי להצטרף
                    </option>
                    <option
                      value={GroupType.SECRET}
                      selected={isSelected(consultation, GroupType.SECRET)}>
                      סודית - יש צורך לקבל הזמנה
                    </option>
                  </select>
                  <h3>אפשרויות ניהול התייעצות</h3>
                  <div className="checkboxBox">
                    <div className="checkboxBox__item">
                      <input
                        type="checkbox"
                        name="sections"
                        id="info"
                        value={Section.INFO}
                        checked={isChecked(sections, Section.INFO)}
                      />
                      <label htmlFor="info">משתתפים יכולים להוסיף מידע</label>
                    </div>
                    <div className="checkboxBox__item">
                      <input
                        type="checkbox"
                        name="sections"
                        id="chat"
                        value={Section.CHAT}
                        checked={isChecked(sections, Section.CHAT)}
                      />
                      <label htmlFor="chat">משתתפים יכולים לשוחח</label>
                    </div>
                  </div>
                  <button type="submit">
                    {!consultation ? "יצירת התייעצות" : "עדכון התייעצות"}
                  </button>
                </form>
              </div>
            </main>
            {/* @ts-ignore */}
            <SystemMessage />
          </div>
        );
      } else {
        return <h1>מעדכן...</h1>;
      }
    },
  };
}

function isSelected(
  consultation: Consultation | undefined,
  groupType: GroupType
): "selected" | false {
  try {
    if (!consultation) throw new Error("No consultation");
    return consultation?.groupType === groupType ? "selected" : false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function isChecked(sections: Section[] | undefined, section: Section): boolean {
  try {
    if (sections === undefined) throw new Error("couldnt find sections");
    return sections.includes(section);
  } catch (error) {
    console.error(error);
    return false;
  }
}

function getConsultationId(): string | undefined {
  try {
    const { consultationId } = m.route.param();
    return consultationId;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
