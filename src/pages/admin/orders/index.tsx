import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import OrderListTable from "../../../components/admin/OrderListTable";

const OrdersList = () => {
  return (
    <div>
      <Link
        href={`/admin/products`}
        className="flex cursor-pointer items-center"
      >
        <MdArrowBackIosNew className="mr-2" /> Back
      </Link>
      <OrderListTable />
    </div>
  );
};

export default OrdersList;
