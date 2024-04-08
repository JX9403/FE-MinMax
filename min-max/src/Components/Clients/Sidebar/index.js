import SubMenu from "../SubMenu";
import "./Sidebar.scss";
import {  NavLink } from "react-router-dom";

const Sidebar = () => {
  const items = [
    {
      label: <NavLink to="/product">Menu 1</NavLink>,
      key: "menu-1",
      children: [
        {
          label: <NavLink to="/">Menu 1.1</NavLink>,
          key: "/",
        },
        {  label: <NavLink to="/">Menu 1.2</NavLink>, key: "menu-1-2" },
        {  label: <NavLink to="/">Menu 1.3</NavLink>, key: "menu-1-3" },
      ],
    }, 
    {
      label: <NavLink to="/">Menu 2</NavLink>,
      key: "menu-2",
      children: [],
    },
    {
      label: <NavLink to="/">Menu 3</NavLink>,
      key: "menu-3",
      children: [],
    },
    {
      label: <NavLink to="/">Menu 4</NavLink>,
      key: "menu-4",
      children: [],
    },
  ];

  return (
    <>
      <div className="sidebar">
        {items.map((item) => {
          return <SubMenu item={item} key={item.key} />;
        })}
      </div>
    </>
  );
};

export default Sidebar;
