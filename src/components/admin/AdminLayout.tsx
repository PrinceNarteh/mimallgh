import { Poppins } from "@next/font/google";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "./Header";
import { adminMenus, shopMenus } from "./menus";

const SideBar = dynamic(() => import("./SideBar"), { ssr: false });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

interface IAdminLayout {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: IAdminLayout) {
  const [open, setOpen] = useState(true);
  const { pathname } = useRouter();

  const menus = pathname.startsWith("/shop") ? shopMenus : adminMenus;
  console.log(pathname.startsWith("/shop"));

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
