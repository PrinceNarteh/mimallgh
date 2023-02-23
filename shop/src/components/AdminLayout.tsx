import dynamic from "next/dynamic";
import { useState } from "react";

import Header from "./Header";

const SideBar = dynamic(() => import("./SideBar"), { ssr: false });

interface IAdminLayout {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: IAdminLayout) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <SideBar open={open} />
      <div
        className={`min-h-screen bg-dark-gray text-off-white ${
          !open ? "ml-16" : "ml-60"
        } duration-300`}
      >
        <Header open={open} setOpen={setOpen} />
        <div className="relative min-h-[calc(100vh_-_73px)]">
          <div className="mt-5 px-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
