import React from "react";
import { GoThreeBars } from "react-icons/go";
import { BiSearch } from "react-icons/bi";

interface IHeader {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ open, setOpen }: IHeader) => {
  return (
    <div
      className={`sticky top-0 z-50 flex justify-between bg-dark-gray px-5 py-2 duration-300`}
    >
      <GoThreeBars
        className="cursor-pointer text-3xl"
        onClick={() => setOpen(!open)}
      />
      <div className="flex items-center">
        {/* Search  */}
        <div className="px-6">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <BiSearch />
            </div>
            <input
              type="text"
              className="w-full rounded bg-gray-800 py-2.5 pl-8 pr-4 text-xs font-light text-gray-400 placeholder-gray-500 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
