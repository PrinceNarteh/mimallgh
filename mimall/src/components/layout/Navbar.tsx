import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsHeart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({ scroll }: { scroll: boolean }) => {
  const { pathname } = useRouter();

  console.log(!pathname.includes("/auth"));

  return (
    <div
      className={`sticky z-50 ${
        pathname === "/" ? "top-[84px] -translate-y-6" : "top-0"
      } 
     ${
       (pathname !== "/" || !pathname.includes("/auth")) && scroll
         ? "top-14 px-5"
         : ""
     }
     ${pathname === "/" ? "px-5" : ""}
      transform  duration-200`}
    >
      <div
        className={`flex h-14 w-full items-center justify-between  bg-gray-800 px-5
        ${pathname === "/" && "rounded-md"}
        ${scroll && pathname !== "/" && "rounded-md"}
      `}
      >
        <div className="space-x-3 text-pink-500">
          <Link href={`/`}>All</Link>
          <Link href={`/markets/amamoma`}>Amamoma</Link>
          <Link href={`/markets/apewosika`}>Apewosika</Link>
          <Link href={`/markets/ayensu`}>Ayensu</Link>
        </div>
        <div className="flex items-center space-x-5 text-pink-500">
          <Link href={"/"}>Home</Link>
          <CiUser className="cursor-pointer text-3xl " />
          <BsHeart className="cursor-pointer text-2xl " />
          <Link href={`/cart`} className="relative">
            <TiShoppingCart className="cursor-pointer text-3xl " />
            <div className="absolute -top-1.5 -right-1.5 flex h-5  w-5 items-center justify-center rounded-full bg-[red]">
              <span className="text-[10px] text-white">20</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
