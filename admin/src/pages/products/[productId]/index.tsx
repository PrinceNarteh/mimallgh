import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const ProductDetails = () => {
  return (
    <Link href={`/products`} className="flex cursor-pointer items-center">
      <MdArrowBackIosNew className="mr-2" /> Back
    </Link>
  );
};

export default ProductDetails;
