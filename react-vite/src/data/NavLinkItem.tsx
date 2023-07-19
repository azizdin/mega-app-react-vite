import Home from "@/pages/home/Home";
import Contact from "@/pages/contact/Contact";

export const NavLinkItem = [
  {
    url: "home",
    label: "Home",
  },
  {
    url: "contact",
    label: "Contact",
  },
];

export const browserRouterChildrenData = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
