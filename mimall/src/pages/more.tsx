import Image from "next/image";
import React from "react";

const MoreProducts = () => {
  return (
    <div className="bg-gray-300 bg-opacity-30">
      <div className="mx-auto max-w-7xl py-5">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div className="col-span-8 space-y-5">
            <div className="flex items-center bg-white shadow">
              <div className="flex-1 py-0.5 pl-5 text-2xl">
                <span className="font-bold">RAW</span> FOOD
              </div>
              <div className="bg-[#ff0000] px-4 py-2 text-white">SORT BY</div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {Array(4)
                .fill(0)
                .map(() => (
                  <div className="relative flex h-96 flex-col rounded-md bg-white shadow-md">
                    <div className="flex gap-2 p-2">
                      <span className="block h-12 w-12 rounded-full bg-[#ff0000]"></span>
                      <div>
                        <h4 className="font-semibold">The Web Super Market</h4>
                        <p className="text-sm">Old Site - Behind ATL Hall</p>
                      </div>
                    </div>
                    <div className="relative flex-1 rounded-md bg-gray-500 bg-opacity-20 p-5">
                      <Image src="/images/iphone-2.jpg" fill alt="" />
                    </div>
                    <div className="flex h-16 gap-3 p-2">
                      <div className="">
                        <h4 className="font-semibold line-clamp-1">
                          Lorem, ipsum dolor sit amet elit sunt.
                        </h4>
                        <p>Store price: ¢120.50</p>
                      </div>
                      <div className="flex w-28 items-center justify-center">
                        <p className="flex items-start tracking-widest text-[#ff0000] ">
                          <span className="text-xl">¢</span>
                          <span className="text-4xl">123</span>
                          <span className="text-xl">.50</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-2 bg-white py-5">
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-800"></span>
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
            </div>
          </div>
          <div className="col-span-4 space-y-5">
            <div className="bg-white py-1 pl-5 text-xl">
              <span className="font-bold">RAW</span> FOOD
            </div>
            <div className="space-y-5 bg-white p-5">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="h-32 bg-gray-500 bg-opacity-20"
                  ></div>
                ))}
            </div>
            <div className="flex items-center justify-center gap-2 bg-white py-5">
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-800"></span>
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
              <span className="block h-4 w-4 cursor-pointer rounded-full bg-gray-300"></span>
            </div>
            <div className="bg-white p-5">
              <h3 className="text-xl font-semibold">Subscribe</h3>
              <div className="mt-5 flex shadow">
                <input type="text" className="flex-1 p-2 outline-none" />
                <button className="bg-[#ff0000] py-2 px-4 uppercase text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
