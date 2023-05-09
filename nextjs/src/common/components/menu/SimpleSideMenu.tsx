import React from "react";

type Props = {
  menuList?: Array<{
    name: string;
    description?: string;
    link: string;
  }>;
};

export const SimpleSideMenu = (props: Props) => {
  return (
    <div>
      {" "}
      <h1>project list</h1>
      <ul>
        {props.menuList?.map((menu) => (
          <li key={menu.name}>
            <a href={menu.link}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
