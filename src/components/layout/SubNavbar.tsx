import React from "react";
import { BiMenu } from "react-icons/bi";
import NavItem from "./NavItem";

const menus = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Sell",
    link: "/sell",
  },
  {
    label: "Advertise",
    link: "/advertise",
  },
  {
    label: "Help",
    link: "/help",
  },
];

const SubNavbar = () => {
  return (
    <div className="bg-gray-300">
      <div className="mx-auto flex max-w-7xl justify-between py-3">
        <div className="flex cursor-pointer items-center space-x-2">
          <BiMenu className="text-2xl" />
          <span className="">Markets Near You</span>
        </div>
        <div>
          <ul className="flex divide-x divide-gray-500">
            {menus.map((menu, index) => (
              <NavItem key={index} label={menu.label} link={menu.link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
