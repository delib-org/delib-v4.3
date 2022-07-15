import m, { Component,Vnode } from "mithril";
// import "./NavBottom.css";

//functions

//data
interface menuItemProps {
  text: string;
}
const menuItems: menuItemProps[] = [
  { text: "feed" },
  { text: "groups" },
  { text: "chats" },
  { text: "settings" },
];

interface Attrs {
 
}
interface States{

}

export default function NavBottom(): Component<Attrs,States> {
  return {
    view: () => (
      <nav class="navBottom footer">
      
        {menuItems.map((item, i: number) => (
          <div key={i} className="navBottom__btn">
            {item.text}
          </div>
        ))}
      </nav>
    ),
  };
}
