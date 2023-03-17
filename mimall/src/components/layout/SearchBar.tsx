import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div>
      <div className={`relative h-40 w-full cursor-pointer p-5 shadow-lg`}>
        <Image
          src="/images/search-bg.jpg"
          className="absolute object-cover duration-500"
          fill={true}
          alt=""
        />
        <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="relative -top-3 flex w-full max-w-2xl items-center rounded-full border-2 bg-white px-4">
            <input
              type="text"
              className="flex-1 p-2 outline-none"
              placeholder="Search for product..."
            />
            <BiSearch className="w-10 shrink-0 text-3xl text-gray-500" />
          </div>
          <div className="absolute -bottom-14 mx-auto h-16 w-10/12 rounded-md bg-white p-2">
            <div className="grid h-full w-full grid-cols-3 divide-x-2">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
