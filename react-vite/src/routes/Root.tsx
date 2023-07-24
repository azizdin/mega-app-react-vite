import { Outlet } from "react-router-dom";
import Sidebar from "@components/navbar/Sidebar";
import { NavLinkData } from "@config/NavigationRouteConfig";
const Root = () => {
  return (
    <div className="flex">
      <aside className="">
        <Sidebar title="Mega App" linkData={NavLinkData}></Sidebar>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
