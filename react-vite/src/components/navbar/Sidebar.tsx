import React from "react";
import { Link, To } from "react-router-dom";
import "./sidebar.css";

type LinkItem = {
  url: string;
  label: string;
};

type Props = {
  title?: string;
  linkData?: LinkItem[];
  children?: React.ReactNode;
};

const Sidebar = (props: Props) => {
  const newLinkData: JSX.Element[] = [];

  props.linkData?.forEach((item: LinkItem) => {
    const { url, label } = item;
    newLinkData.push(
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <li className="text-[15px] ml-4 text-gray-200 font-bold">
          <Link to={url as To}>{label}</Link>
        </li>
      </div>
    );
  });

  return (
    <div className="">
      <nav
        className="sidebar h-screen sticky top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
        id="sidenav-1"
      >
        <h1 className="font-bold text-gray-200 text-[15px] ml-3">
          {props.title}
        </h1>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
        <ul>{newLinkData}</ul>
      </nav>
      <div>{props.children}</div>
    </div>
  );
};

export default Sidebar;
