import React from "react";

const MoreProducts = () => {
  return (
    <div className="bg-gray-300 bg-opacity-30">
      <div className="max-w-7xl mx-auto py-5">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          <div className="col-span-8 space-y-5">
            <div className="flex items-center bg-white shadow">
              <div className="flex-1 text-2xl py-0.5 pl-5">
                <span className="font-bold">RAW</span> FOOD
              </div>
              <div className="bg-[#ff0000] text-white px-4 py-2">SORT BY</div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {Array(4)
                .fill(0)
                .map(() => (
                  <div className="relative bg-gray-500 bg-opacity-20 rounded-md h-96 p-5">
                    <div className="flex justify-between items-center">
                      <span className="w-12 h-12 bg-[#ff0000] block rounded-full"></span>
                      <span className="block text-xl line-through text-gray-700">
                        $120.00
                      </span>
                    </div>
                    <span className="absolute bottom-5 text-xl text-orange-500 font-bold">
                      $105.00
                    </span>
                  </div>
                ))}
            </div>

            <div className="flex items-center justify-center bg-white py-5 gap-2">
              <span className="w-4 h-4 block bg-gray-800 rounded-full cursor-pointer"></span>
              <span className="w-4 h-4 block bg-gray-300 rounded-full cursor-pointer"></span>
              <span className="w-4 h-4 block bg-gray-300 rounded-full cursor-pointer"></span>
              <span className="w-4 h-4 block bg-gray-300 rounded-full cursor-pointer"></span>
              <span className="w-4 h-4 block bg-gray-300 rounded-full cursor-pointer"></span>
              <span className="w-4 h-4 block bg-gray-300 rounded-full cursor-pointer"></span>
            </div>
          </div>
          <div className="col-span-4 space-y-5">
            <div className="bg-white py-1 pl-5 text-xl">
              <span className="font-bold">RAW</span> FOOD
            </div>
            <div className="bg-white p-5 space-y-5">
              {Array(4)
                .fill(0)
                .map(() => (
                  <div className="bg-gray-500 bg-opacity-20 h-32"></div>
                ))}
            </div>
            <div className="flex items-center justify-center bg-white py-5 gap-2">
              <span className="w-4 h-4 block bg-gray-800 rounded-full cursor-pointer"></span>
              <span className="w-4 h-4 block bg-gray-300 rounded-full cursor-pointer"></span>
              <span className="w-4 h-4 block bg-gray-300 rounded-full cursor-pointer"></span>
              <span className="w-4 h-4 block bg-gray-300 rounded-full cursor-pointer"></span>
            </div>
            <div className="bg-white p-5">
              <h3 className="text-xl font-semibold">Subscribe</h3>
              <div className="flex shadow mt-5">
                <input type="text" className="flex-1 outline-none p-2" />
                <button className="bg-[#ff0000] py-2 px-4 text-white uppercase">
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
