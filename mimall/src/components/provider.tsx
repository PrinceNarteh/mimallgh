"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../state/store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </SessionProvider>
  );
}
