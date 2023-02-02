import Image from "next/image";
import React from "react";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";

const ProductCard = () => {
  return (
    <div className="h-[300px] w-52 shadow-lg rounded-lg overflow-hidden">
      <div className="h-1/2 bg-slate-500 relative">
        <Image
          src={"/images/product-1.jpg"}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="product-1"
        />
      </div>
      <div className="p-3 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">IPhone 13</h3>
          <span className="text-orange-500">¢105.00</span>
        </div>
        {/* <div className="flex text- text-pink-700">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarHalf />
        </div> */}
        <p>Lorem ipsum dolor sit amet consectetur elit. Libero vero impedit.</p>
        <button className="border border-pink-500 text-pink-500 text-xs px-3 py-1 rounded-md float-right hover:bg-pink-500 hover:text-white duration-200">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
