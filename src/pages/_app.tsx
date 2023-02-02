import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import MainNavbar from "../components/layout/MainNavbar";
import SubNavbar from "../components/layout/SubNavbar";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <SessionProvider session={session}>
      {pathname.startsWith("/shop") || pathname.startsWith("/admin") ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <>
          <MainNavbar />
          <SubNavbar />
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
