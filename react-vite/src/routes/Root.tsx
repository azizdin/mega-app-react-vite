import { Outlet } from "react-router-dom";
import Sidebar from "@/components/navbar/Sidebar";
import { NavLinkItem } from "@/data/NavLinkItem";
const Root = () => {
  return (
    <div className="flex">
      <aside className="">
        <Sidebar title="Mega App" linkData={NavLinkItem}></Sidebar>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
