import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";
import { Poppins } from "@next/font/google";
import { api } from "../utils/api";
import MainNavbar from "../components/layout/MainNavbar";
import SubNavbar from "../components/layout/SubNavbar";
import "../styles/globals.css";
import DialogContextProvider from "../context/dialogContext";

const AdminLayout = dynamic(() => import("../components/admin/AdminLayout"), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { pathname } = useRouter();

  return (
    <div className={poppins.className}>
      <SessionProvider session={session}>
        {pathname.startsWith("/shop") || pathname.startsWith("/admin") ? (
          <DialogContextProvider>
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          </DialogContextProvider>
        ) : (
          <>
            {pathname.startsWith("/auth") ? (
              <Component {...pageProps} />
            ) : (
              <>
                <MainNavbar />
                <SubNavbar />
                <Component {...pageProps} />
              </>
            )}
          </>
        )}
      </SessionProvider>
      <Toaster />
      <ReactQueryDevtools />
    </div>
  );
};

export default api.withTRPC(MyApp);
