import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";

const ProductCard = ({ id }: { id: string }) => {
  return (
    <div className="h-[300px] w-52 cursor-pointer overflow-hidden rounded-lg pb-5 shadow-lg">
      <Link href={"/1"}>
        <div className="relative h-1/2 bg-slate-500">
          <Image
            src={"/images/product-1.jpg"}
            fill={true}
            style={{ objectFit: "cover" }}
            alt="product-1"
          />
        </div>
        <div className="space-y-1 p-3">
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
          <p>
            Lorem ipsum dolor sit amet consectetur elit. Libero vero impedit.
          </p>
        </div>
      </Link>
      <button className=" float-right mr-3 rounded-md border border-pink-500 px-3 py-1 text-xs text-pink-500 duration-200 hover:bg-pink-500 hover:text-white">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
