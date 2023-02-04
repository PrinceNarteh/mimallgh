import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const ShopOwnerDetails = () => {
  return (
    <div>
      <Link
        href={`/admin/shop-owners`}
        className="flex cursor-pointer items-center"
      >
        <MdArrowBackIosNew className="mr-2" /> Back
      </Link>
      ShopOwnerDetails
    </div>
  );
};

export default ShopOwnerDetails;
