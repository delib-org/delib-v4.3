import m, { Vnode } from "mithril";

interface State {
  consultationId: string;
}
interface Attrs {}

export default function SetConsultation() {
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
              <form>
                <label >נושא</label>
                <input type="text" name="title" placeholder="נושא ההתיעצות" />
                <label>הסבר</label>
                <textarea
                  name="description"
                  placeholder="הסבר על ההתיעצות"></textarea>
              </form>
            </div>
          </main>
        </div>
      );
    },
  };
}
