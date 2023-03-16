import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-md  py-4">
        <div className="flex items-center rounded-full border-2 px-2">
          <input
            type="text"
            className="flex-1 p-2 outline-none"
            placeholder="Search for product..."
          />
          <BiSearch className="w-10 shrink-0 text-3xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
