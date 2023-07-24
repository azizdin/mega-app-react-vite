import Home from "@pages/home/Home";
import Todo from "@modules/todo/Todo";

export const NavLinkData = [
  {
    url: "home",
    label: "Home",
  },
  {
    url: "todo",
    label: "Todo",
  },
];

export const browserRouterChildrenData = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
];
