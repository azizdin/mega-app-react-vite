import React from "react";
import { Menu } from "@components";

type Props = {};

export const Home = (props: Props) => {
  const menuList = [
    { name: "note", description: "", link: "" },
    { name: "todo", description: "", link: "" },
    { name: "project3", description: "", link: "" },
  ];
  return (
    <>
      <div>Home</div>
      <div>
        <Menu.SimpleSideMenu menuList={menuList} />
      </div>
    </>
  );
};
