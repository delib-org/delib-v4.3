import m from "mithril";
// import "./NavBottom.css";

//functions

//data
interface menuItemProps{
text:string;
}
const menuItems:menuItemProps[] = [
    {text:'feed'},
    {text:'groups'},
    {text:'chats'},
    {text:'settings'}
]

export default function NavBottom() {
  return {
    view: () => (
      <nav class="navBottom footer">
        {menuItems.map((item, i:number)=>(
        <div key={i} className="navBottom__item">
            {item.text}
        </div>
        ))}
      </nav>
    ),
  };
}
