// import Home from "@pages/home/Home";
import Todo from "@modules/todo/Todo";
import NoteApp from "@/modules/noteApp/Main";

export const NavLinkData = [
  {
    url: "note-app",
    label: "NoteApp",
  },
  {
    url: "todo",
    label: "Todo",
  },
];

export const browserRouterChildrenData = [
  {
    path: "/note-app",
    element: <NoteApp />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
];
