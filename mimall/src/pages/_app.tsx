import { Poppins } from "@next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { useCallback, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import { useRouter } from "next/router";
import { Provider } from "react-redux";
import FloatingNavbar from "../components/layout/FloatingNavbar";
import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/layout/SearchBar";
import { store } from "../store";
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
  const { pathname } = useRouter();

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div className={poppins.className}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <SearchBar />
          <div className="pt-16">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </Provider>
      </SessionProvider>
      <Toaster />
      <ReactQueryDevtools />
    </div>
  );
};

export default api.withTRPC(MyApp);
