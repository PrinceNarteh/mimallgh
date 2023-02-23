import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { Poppins } from "@next/font/google";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { api } from "../utils/api";

const AdminLayout = dynamic(() => import("../components/AdminLayout"), {
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
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </SessionProvider>
      <Toaster />
      <ReactQueryDevtools />
    </div>
  );
};

export default api.withTRPC(MyApp);
