import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";

const SearchBar = () => {
  return (
    <div className={`fixed z-50 h-16 w-full cursor-pointer p-5 shadow-lg`}>
      <Image
        src="/images/search-bg.jpg"
        className="absolute object-cover duration-500"
        fill={true}
        alt=""
      />
      <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="relative flex w-full max-w-2xl items-center rounded-full border-2 bg-white px-4">
          <input
            type="text"
            className="flex-1 p-2 outline-none"
            placeholder="Search for product..."
          />
          <BiSearch className="w-10 shrink-0 text-3xl text-gray-500" />
        </div>

        <div className="absolute right-5 flex items-center space-x-5 text-pink-500">
          <Link href={"/"}>Home</Link>
          <CiUser className="cursor-pointer text-3xl " />
          <BsHeart className="cursor-pointer text-2xl " />
          <Link href={`/cart`} className="relative">
            <TiShoppingCart className="cursor-pointer text-3xl " />
            <div className="absolute -right-1.5 -top-1.5 flex h-5  w-5 items-center justify-center rounded-full bg-[red]">
              <span className="text-[10px] text-white">20</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
