import { Outlet } from "react-router-dom";
import SimpleTopNavbar from "@components/navbar/simple-top-navbar/SimpleTopNavbar";
import { NavLinkData } from "@config/index";

const Root = () => {
  return (
    <div>
      <SimpleTopNavbar title="Mega App" linkData={NavLinkData} />
      <main role="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
