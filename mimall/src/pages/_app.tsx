import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { Poppins } from "@next/font/google";
import { Toaster } from "react-hot-toast";
import MainNavbar from "../components/layout/MainNavbar";
import SubNavbar from "../components/layout/SubNavbar";
import "../styles/globals.css";
import { api } from "../utils/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div className={poppins.className}>
      <SessionProvider session={session}>
        <div className="fixed z-50 w-full">
          <MainNavbar />
          <SubNavbar />
        </div>
        <Component {...pageProps} />
      </SessionProvider>
      <Toaster />
      <ReactQueryDevtools />
    </div>
  );
};

export default api.withTRPC(MyApp);
