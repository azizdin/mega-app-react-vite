import React from "react";
import { NavLink, To } from "react-router-dom";
import "./simpletopnavbar.css";

type LinkItem = {
  url: string;
  label: string;
};

type Props = {
  title?: string;
  linkData?: LinkItem[];
  children?: React.ReactNode;
};

const SimpleTopNavbar = (props: Props) => {
  const newLinkData: JSX.Element[] = [];

  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return ` block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${
      isActive ? " text-white font-bold " : " text-teal-200 "
    }`;
  };

  props.linkData?.forEach((item: LinkItem) => {
    const { url, label } = item;
    newLinkData.push(
      <NavLink className={navLinkCssClasses} to={url as To}>
        <a className=" ">{label}</a>
      </NavLink>
    );
  });

  return (
    <div className="">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* icon here */}
          <span className="font-semibold text-xl tracking-tight">
            {props.title}
          </span>
        </div>
        <div className="block lg:hidden group">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 group-hover:text-white group-hover:border-white">
            {/* hamburger icon */}
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-teal-400 border-teal-400 group-hover:bg-white group-hover:border-white"></div>
              <div className="w-8 h-0.5 bg-teal-400 border-teal-400 group-hover:bg-white group-hover:border-white"></div>
              <div className="w-8 h-0.5 bg-teal-400 border-teal-400 group-hover:bg-white group-hover:border-white"></div>
            </div>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <div>{newLinkData}</div>
          </div>
          <div>
            {props.children}
            {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SimpleTopNavbar;
