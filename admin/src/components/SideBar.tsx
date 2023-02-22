import Link from "next/link";
import React from "react";
import { menus } from "../utils/menus";

import { IoIosArrowBack } from "react-icons/io";

const SideBar = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen  bg-gray-900 ${
        open ? "w-60" : "w-16"
      } duration-300`}
    >
      <div className="flex h-screen flex-col justify-between">
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center justify-center rounded bg-blue-600 p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <svg
                className="h-5 w-5 stroke-current text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <div className="px-6 pt-4">
            <hr className="border-gray-700" />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between overflow-y-auto">
          <div className="px-4 pt-4">
            <ul className="flex flex-col space-y-2">
              {menus.map((menu: any, index: number) =>
                menu?.subLinks ? (
                  <li className="relative" key={index}>
                    <input
                      type="checkbox"
                      className="peer absolute top-0 z-10 h-12 w-full cursor-pointer opacity-0"
                      defaultChecked
                    />
                    <div
                      className={`relative flex items-center justify-between text-gray-500 focus-within:text-white hover:text-white`}
                    >
                      <div className="flex w-full cursor-pointer items-center">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                          {React.createElement(menu?.icon, { size: "20" })}
                        </div>
                        <span
                          className={`text-md inline-block w-full rounded py-2 pl-10 pr-4 hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                        ${!open ? "translate-x-10 opacity-0" : ""}
                        `}
                        >
                          {menu.name}
                        </span>
                      </div>
                    </div>

                    <IoIosArrowBack
                      className={`absolute top-2 right-0 p-1 text-2xl text-off-white duration-300 peer-checked:-rotate-90
                      ${open ? "block" : "hidden"}
                      `}
                    />

                    <div
                      className={`hidden pt-2 pl-4 transition-[display] duration-300  peer-checked:block`}
                    >
                      <ul className="flex flex-col border-l border-gray-700 pl-2 text-gray-500">
                        {menu.subLinks.map((subLink: any, index: number) => (
                          <li key={index}>
                            <Link
                              href={subLink.link}
                              className={`inline-block w-full whitespace-nowrap rounded py-2 pl-6 text-sm hover:bg-gray-800 hover:text-white focus:text-white focus:outline-none focus:ring-1 focus:ring-gray-500
                              ${open ? "block" : "hidden"}
                              `}
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li
                    key={index}
                    className="flex text-gray-500 focus-within:text-white hover:text-white"
                  >
                    <div
                      className={`pointer-events-none relative inset-y-0 left-0 flex items-center pl-2
                    `}
                    >
                      {React.createElement(menu.icon, {
                        size: "24",
                        className: "block",
                      })}
                    </div>
                    <Link
                      href={menu.link}
                      className={`inline-block w-full rounded py-2 pl-2 pr-4 text-lg hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                      ${open ? "block" : "hidden"}
                      `}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#232529] py-4 pl-6 pr-4">
          <div className="flex items-center">
            <div className="relative h-8 w-8 rounded-full before:absolute before:right-0 before:bottom-0 before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:ring-1 before:ring-white">
              <img
                className="rounded-full"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="profile"
              />
            </div>
            <div className="flex flex-col pl-3">
              <div className="text-sm text-gray-50">Jane Doeson</div>
              <span className="text-xs font-light tracking-tight text-[#acacb0]">
                janedoeson@gmail.com
              </span>
            </div>
          </div>
          <button className="rounded bg-gray-700 text-gray-400 focus:text-white focus:outline-none focus:ring-1 focus:ring-gray-500">
            <svg
              className="h-4 w-4 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.25 10.75L12 14.25L8.75 10.75"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
