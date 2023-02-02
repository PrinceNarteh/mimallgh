import React from "react";
import { BiMenu } from "react-icons/bi";
import NavItem from "./NavItem";

const menus = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Cart",
    link: "/cart",
  },
  {
    label: "Account",
    link: "/account",
  },
  {
    label: "Sell Adv.",
    link: "/sell-adv",
  },
  {
    label: "Order & Returns",
    link: "/order-and-returns",
  },
  {
    label: "Delivery",
    link: "/delivery",
  },
  {
    label: "Help",
    link: "/help",
  },
];

const SubNavbar = () => {
  return (
    <div className="bg-gray-300">
      <div className="max-w-7xl mx-auto py-3 flex justify-between">
        <div className="flex items-center space-x-2 cursor-pointer">
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
