import React from "react";
import { Menu } from "@components";

type Props = {};

export const Home = (props: Props) => {
  const menuList = [
    { name: "note", description: "", link: "/note" },
    { name: "todo", description: "", link: "/todo" },
    { name: "project3", description: "", link: "" },
  ];
  return (
    <>
      <h1 className="">Home</h1>
      <div>
        <Menu.SimpleSideMenu menuList={menuList} />
      </div>
    </>
  );
};
