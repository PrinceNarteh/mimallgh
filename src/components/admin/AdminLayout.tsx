import { Poppins } from "@next/font/google";
import dynamic from "next/dynamic";
import { useState } from "react";
import { IMenus } from "../../../types";
import Header from "./Header";

const SideBar = dynamic(() => import("./SideBar"), { ssr: false });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

interface IAdminLayout {
  menus: IMenus;
  children: React.ReactNode;
}

export default function AdminLayout({ menus, children }: IAdminLayout) {
  const [open, setOpen] = useState(true);

  return (
    <html className={poppins.className}>
      <head />
      <body className="bg-background">
        <SideBar open={open} menus={menus} />
        <div
          className={`min-h-screen bg-dark-gray text-off-white ${
            !open ? "ml-16" : "ml-60"
          } duration-300`}
        >
          <Header open={open} setOpen={setOpen} />
          <div className="mt-5 px-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
