import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Poppins } from "@next/font/google";
import { useCallback, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import FloatingNavbar from "../components/layout/FloatingNavbar";
import "../styles/globals.css";
import { api } from "../utils/api";
import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/layout/SearchBar";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [scrollY, setScrollY] = useState(0);
  const { pathname } = useRouter();

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
          <FloatingNavbar show={scrollY >= 70} />
        </div>
        {pathname === "/" && <SearchBar />}
        <Navbar scroll={scrollY >= 70} />
        <Component {...pageProps} />
      </SessionProvider>
      <Toaster position="top-right" reverseOrder />
      <ReactQueryDevtools />
    </div>
  );
};

export default api.withTRPC(MyApp);
