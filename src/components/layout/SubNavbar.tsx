import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { locations } from "../../utils/menus";
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
  const [open, setOpen] = useState(false);
  const menuRef = useRef<any>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      console.log(e);
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  console.log(menuRef);

  return (
    <div className="bg-gray-300">
      <div className="relative mx-auto flex max-w-7xl justify-between py-3">
        <div
          className="flex cursor-pointer items-center space-x-2"
          onClick={() => setOpen(!open)}
        >
          <BiMenu className="text-2xl" />
          <span className="">Markets Near You</span>
        </div>
        <div
          ref={menuRef}
          className={`absolute top-12 z-10 w-full max-w-fit border bg-white py-2 text-gray-800 shadow-md duration-500
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
        >
          {locations.map((location) => (
            <div
              className={`cursor-pointer px-5 py-2 duration-500 hover:bg-[#ff0000] hover:text-white
              ${open ? "opacity-100" : "opacity-0"}
              `}
            >
              {location.label}
            </div>
          ))}
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
