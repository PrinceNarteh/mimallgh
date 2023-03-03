import Image from "next/image";
import React from "react";
import MovieCard from "../../components/MovieCard";
import TopDeals from "../../components/TopDeals";

const ProductVideos = () => {
  return (
    <div>
      <div className="mx-auto w-11/12 py-7">
        <div className="w-full">
          <div className="mt-5">
            <div className="flex items-center bg-white shadow">
              <div className="flex-1 py-0.5 pl-5 text-2xl">
                <span className="font-bold">RAW</span> FOOD
              </div>
              <div className="bg-[#ff0000] px-4 py-2 text-white">SORT BY</div>
            </div>
            <div className="mt-5">
              <div className="grid gap-5 grid-auto-fit-lg">
                {Array(6)
                  .fill(null)
                  .map((_, idx) => (
                    <MovieCard />
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center bg-white shadow">
              <div className="flex-1 py-0.5 pl-5 text-2xl">
                <span className="font-bold">Fashion </span>& Wear
              </div>
              <div className="bg-[#ff0000] px-4 py-2 text-white">SORT BY</div>
            </div>
            <div className="mt-5">
              <div className="grid gap-5 grid-auto-fit-lg">
                {Array(6)
                  .fill(null)
                  .map((_, idx) => (
                    <MovieCard />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopDeals />
      <div className="mx-auto w-11/12 py-7">
        <div className="w-full">
          <div className="mt-5">
            <div className="flex items-center bg-white shadow">
              <div className="flex-1 py-0.5 pl-5 text-2xl">
                <span className="font-bold">Home &</span> Electricals
              </div>
              <div className="bg-[#ff0000] px-4 py-2 text-white">SORT BY</div>
            </div>
            <div className="mt-5">
              <div className="grid gap-5 grid-auto-fit-lg">
                {Array(6)
                  .fill(null)
                  .map((_, idx) => (
                    <MovieCard />
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center bg-white shadow">
              <div className="flex-1 py-0.5 pl-5 text-2xl">
                <span className="font-bold">Stationery </span>& Printing
              </div>
              <div className="bg-[#ff0000] px-4 py-2 text-white">SORT BY</div>
            </div>
            <div className="mt-5">
              <div className="grid gap-5 grid-auto-fit-lg">
                {Array(6)
                  .fill(null)
                  .map((_, idx) => (
                    <MovieCard />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideos;
