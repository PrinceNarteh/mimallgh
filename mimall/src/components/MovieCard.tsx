import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = () => {
  return (
    <Link href={"/product-videos/1"}>
      <div className="h-[260px] cursor-pointer duration-500 hover:scale-105">
        <div className="relative h-[165px] overflow-hidden rounded-lg">
          <Image src="/images/iphone-1.jpg" fill alt="" />
        </div>
        <div className="flex">
          <div className="p-2">
            <span className="block h-10 w-10 rounded-full bg-pink-500"></span>
          </div>
          <div>
            <h4 className="font-semibold line-clamp-2">
              How to prepare delicious Ghanaian jollof
            </h4>
            <p>Daavi Joint</p>
            <p className="text-sm">2.3k views | 3 days ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
