// SimpleTopNavbar.tsx
import React, { useState } from "react";
import { Link, NavLink, To } from "react-router-dom";
import "./simpletopnavbar.css";
import { MyIcon } from "./MyIcon";

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
  const [isExpand, setIsExpand] = useState(true);
  const newLinkData: JSX.Element[] = [];

  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return ` py-4 px-2 ${
      isActive
        ? " text-green-500 md:border-b-4 md:border-green-500 font-semibold "
        : " text-gray-500 font-semibold hover:text-green-500 transition duration-300 "
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

  const onHamburgerClick = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="">
      <nav className="bg-white shadow-lg">
        <div className=" mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center">
                {/* icon here */}
                <span className="font-semibold text-gray-500 text-lg">
                  <Link to="/">{props.title}</Link>
                </span>
              </div>
              {/* navbar item */}
              <div className="hidden md:flex items-center space-x-1">
                {newLinkData}
              </div>
            </div>
            {/* navbar item */}
            <div className="hidden md:flex items-center space-x-3">
              <a className="mainNavBtn">hello</a>
              <a className="secondNavBtn">yellow</a>
            </div>
            {/* hamburger */}
            <div className="flex items-center md:hidden group">
              <button onClick={onHamburgerClick} className="">
                <MyIcon.hamburger />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex  flex-col items-center md:hidden ${
            isExpand ? "" : "hidden"
          }`}
        >
          {newLinkData}
        </div>
      </nav>
    </div>
  );
};

export default SimpleTopNavbar;
