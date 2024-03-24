import "./LayoutDefault.scss";
import { Outlet } from "react-router-dom";
import HeaderClient from "../../Components/HeaderClient";

function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <HeaderClient />
        </header>

        <main className="layout-default__main">
          <Outlet />
        </main>

        <footer className="layout-default__footer">
          Copyright #2023
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
