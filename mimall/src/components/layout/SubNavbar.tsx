import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
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
  const [openHelp, setOpenHelp] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && btnRef.current?.contains(e.target))
        return;
      if (
        e.target instanceof HTMLElement &&
        !menuRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleCloseMenu = (link: string) => {
    push(`/markets/${link}`);
    setOpen(false);
  };

  return (
    <div className="bg-gray-300 px-2">
      <div className="relative mx-auto flex max-w-7xl justify-between py-3">
        <div
          className="flex cursor-pointer items-center space-x-2"
          onClick={() => setOpen(!open)}
          ref={btnRef}
        >
          <BiMenu className="text-2xl" />
          <span className="">Markets Near You</span>
        </div>
        <div
          ref={menuRef}
          className={`absolute top-12 z-50 w-full max-w-fit border bg-white py-2 text-gray-800 shadow-md duration-500
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-2 opacity-0"
          }
        `}
        >
          {locations.slice(1).map((location, idx) => (
            <div
              key={idx}
              className={`cursor-pointer px-7 py-2 duration-500 hover:bg-[#ff0000] hover:text-white
              ${open ? "opacity-100" : "opacity-0"}
              `}
              onClick={() => handleCloseMenu(location.link)}
            >
              {location.label}
            </div>
          ))}
        </div>
        <CgMenuRightAlt
          onClick={() => setOpenHelp(!openHelp)}
          className="text-2xl md:hidden"
        />
        <div
          // ref={menuRef}
          className={`absolute top-12 right-0.5 z-10 w-full max-w-fit border bg-gray-300 py-2 text-gray-800 shadow-md duration-500
          ${
            openHelp
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-2 opacity-0"
          }
        `}
        >
          {menus.map((menu, idx) => (
            <div
              key={idx}
              className={`cursor-pointer px-7 py-2 duration-500 hover:bg-[#ff0000] hover:text-white
              ${openHelp ? "opacity-100" : "opacity-0"}
              `}
            >
              {menu.label}
            </div>
          ))}
        </div>
        <div className="hidden md:block">
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
