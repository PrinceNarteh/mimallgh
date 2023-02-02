import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import productOne from "../assets/images/product-1.jpg";

const CartItem = () => {
  return (
    <div className="flex h-28 w-full rounded bg-gray-300">
      <div className="relative w-24 shrink-0">
        <Image src={productOne} fill style={{ objectFit: "contain" }} alt="" />
      </div>
      <div className="flex-1 border-l border-l-gray-400 py-2 px-5">
        <h3 className="line-clamp-1 text-xl font-semibold tracking-wide">
          Lorem ipsum dolor dolor dolor sit amet.
        </h3>
        <p className="-pl-0 my-3 -mt-0 flex items-start tracking-wide">
          ¢123.50
        </p>
        <div className="flex w-full items-center justify-between">
          <div className="-mt-1 flex items-center space-x-2">
            <IoMdArrowDropleft className="cursor-pointer text-4xl" />
            <span className="inline-block">5</span>
            <IoMdArrowDropright className="cursor-pointer text-4xl" />
          </div>
          <MdDelete className="cursor-pointer text-2xl text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
