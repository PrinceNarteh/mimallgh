import React from "react";
import { BsHeart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";

const MainNavbar = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`fixed ${
        show ? "top-[52px]" : "top-0"
      } w-full bg-gray-900 px-5 duration-200`}
    >
      <div
        className={"mx-auto flex max-w-7xl items-center justify-between py-2"}
      >
        <h3 className="text-3xl text-pink-500">MiMall</h3>

        <div className="flex items-center space-x-5">
          <CiUser className="cursor-pointer text-3xl text-pink-500" />
          <BsHeart className="cursor-pointer text-2xl text-pink-500" />
          <Link href={`/cart`} className="relative">
            <TiShoppingCart className="cursor-pointer text-3xl text-pink-500" />
            <div className="absolute -top-1.5 -right-1.5 flex h-5  w-5 items-center justify-center rounded-full bg-[red]">
              <span className="text-[10px] text-white">20</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
