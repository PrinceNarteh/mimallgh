import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "../utils/api";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import MainNavbar from "../components/layout/MainNavbar";
import SubNavbar from "../components/layout/SubNavbar";
import "../styles/globals.css";

const AdminLayout = dynamic(() => import("../components/admin/AdminLayout"), {
  ssr: false,
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { pathname } = useRouter();

  return (
    <SessionProvider session={session}>
      {pathname.startsWith("/shop") || pathname.startsWith("/admin") ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
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
