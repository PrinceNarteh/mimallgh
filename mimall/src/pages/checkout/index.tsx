import React from "react";
import CartCard from "../../components/CartCard";
import CartItem from "../../components/CartItem";

const Checkout = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-4"></div>
      <div className="col-span-4">
        <CartCard />
      </div>
    </div>
  );
};

export default Checkout;
