import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const ShopDetails = () => {
  return (
    <div>
      <Link
        href={`/admin/products`}
        className="flex cursor-pointer items-center"
      >
        <MdArrowBackIosNew className="mr-2" /> Back
      </Link>
      <h3>Shop Details</h3>
    </div>
  );
};

export default ShopDetails;
