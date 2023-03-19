import React from "react";
import { BiSearch } from "react-icons/bi";

const FloatingNavbar = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`${
        show ? " block translate-y-0" : "-translate-y-24"
      } fixed top-0 z-50 flex h-[90px] w-full transform items-start bg-gray-200 px-10 pt-1 duration-200`}
    >
      <div className={"flex w-full items-center py-2"}>
        <h3 className="mr-20 text-3xl text-pink-500">MiMall</h3>
        <div className="flex w-full justify-center">
          <div className="relative flex w-full max-w-2xl items-center justify-center rounded-full border-2 bg-white px-4">
            <input
              type="text"
              className="flex-1 py-1 px-2 outline-none"
              placeholder="Search for product..."
            />
            <BiSearch className="w-10 shrink-0 text-2xl text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;
