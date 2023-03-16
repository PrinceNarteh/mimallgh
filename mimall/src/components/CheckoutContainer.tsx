import React from "react";
import Container from "./Container";
import OrderSummary from "./OrderSummary";

const CheckoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="mx-auto mt-5 grid w-10/12 md:grid-cols-8">
        <div className="col-span-8 flex md:col-span-4">{children}</div>
        <div className="col-span-8 md:col-span-4">
          <OrderSummary />
        </div>
      </div>
    </Container>
  );
};

export default CheckoutContainer;
