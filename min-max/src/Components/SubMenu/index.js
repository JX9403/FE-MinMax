import { useState } from "react";
import "./SidebarMenu.scss";

const SubMenu = ({ item }) => {

  const [open, setOpen] = useState(false);
  const showOpen = () => setOpen(!open);

  return (
    <>
      <div
        className= "sidebar__item "
        onClick={showOpen}
      >
        {item.label}
      </div>

      <div className="sidebar__item-content">
        {open &&
          item.children.map((item) => {
            return <div className="sidebar__item-child">{item.label}</div>;
          })}
      </div>
    </>
  );
};

export default SubMenu;
