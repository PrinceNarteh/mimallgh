import { useSession } from "next-auth/react";
import React from "react";
import Container from "./Container";
import OrderSummary from "./OrderSummary";

const CheckoutContainer = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  return (
    <Container>
      <div className="mx-auto grid w-10/12 gap-10 pt-5 md:grid-cols-8">
        <div className="col-span-8 flex w-full bg-red-500 md:col-span-4">
          {children}
        </div>
        <div className="col-span-8 md:col-span-4">
          <OrderSummary />
        </div>
      </div>
    </Container>
  );
};

export default CheckoutContainer;
