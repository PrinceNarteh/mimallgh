import Link from "next/link";
import React from "react";
import CartItem from "../../components/CartItem";
import Container from "../../components/Container";

const Cart = () => {
  return (
    <Container>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-y-5 p-7 pb-10 md:grid-cols-5 md:gap-x-5">
        <div className="col-span-3 w-full space-y-5">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="col-span-2 h-fit w-full space-y-2 rounded border border-gray-400 p-3 shadow-md">
          <div className="flex items-center justify-between ">
            <h4>Subtotal</h4>
            <span>¢200</span>
          </div>
          <div className="flex items-center justify-between ">
            <h4>Delivery</h4>
            <span>¢200</span>
          </div>
          <div className="flex items-center justify-between border-y border-y-gray-400 py-1.5">
            <h4 className="font-bold">Total</h4>
            <span>¢200</span>
          </div>
          <Link
            href={"/checkout/form"}
            className="block w-full rounded-md bg-pink-500 py-3 text-center font-bold text-white"
          >
            Checkout
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
