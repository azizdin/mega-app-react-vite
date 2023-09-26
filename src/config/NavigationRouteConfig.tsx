import Todo from "@/modules/todo/Main";
import NoteApp from "@/modules/noteApp/Main";
import Home from "@/pages/home/Home";

const NavLinkData = [
  {
    url: "note-app",
    label: "NoteApp",
  },
  {
    url: "todo",
    label: "Todo",
  },
];

const browserRouterChildrenData = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/note-app",
    element: <NoteApp />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
];

export { NavLinkData, browserRouterChildrenData };
