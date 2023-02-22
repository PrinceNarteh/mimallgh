import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import OrderDetails from "../../../../components/admin/OrderDetails";

const OrderDetail = () => {
  return (
    <div>
      <Link href={`/admin/orders`} className="flex cursor-pointer items-center">
        <MdArrowBackIosNew className="mr-2" /> Back
      </Link>
      <OrderDetails />
    </div>
  );
};

export default OrderDetail;
