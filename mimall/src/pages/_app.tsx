import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { Poppins } from "@next/font/google";
import { useCallback, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import CustomLinks from "../components/layout/CustomLinks";
import FloatingNavbar from "../components/layout/FloatingNavbar";
import MainNavbar from "../components/layout/MainNavbar";
import SearchBar from "../components/layout/SearchBar";
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
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((e: Event) => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className={poppins.className}>
      <SessionProvider session={session}>
        <div className="fixed z-50 w-full">
          <MainNavbar />
          <SubNavbar />
          <CustomLinks />
          <SearchBar />
          <FloatingNavbar show={scrollY > 400} />
        </div>
        <Component {...pageProps} />
      </SessionProvider>
      <Toaster />
      <ReactQueryDevtools />
    </div>
  );
};

export default api.withTRPC(MyApp);
