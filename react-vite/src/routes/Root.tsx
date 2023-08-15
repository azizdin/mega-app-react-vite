import { Outlet } from "react-router-dom";
import SimpleTopNavBar from "@components/navbar/simple-top-navbar/SimpleTopNavbar";
import { NavLinkData } from "@config/NavigationRouteConfig";
const Root = () => {
  return (
    <div>
      <div>
        <SimpleTopNavBar
          title="Mega App"
          linkData={NavLinkData}
        ></SimpleTopNavBar>
      </div>
      <main role="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
