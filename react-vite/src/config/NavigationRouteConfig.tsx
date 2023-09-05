// import Home from "@pages/home/Home";
import Todo from "@/modules/todo/Main";
import NoteApp from "@/modules/noteApp/Main";
import Home from "@/pages/home/Home";

//navigation tab
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

//route
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
