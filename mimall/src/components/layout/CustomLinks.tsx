import Link from "next/link";
import React from "react";

const CustomLinks = () => {
  return (
    <div className="flex flex-col justify-center divide-gray-500 bg-white py-2 text-center shadow-md sm:flex-row md:divide-y-0 md:divide-x-2 md:text-xl">
      <Link href={`/top-deals`} className="px-10 hover:text-pink-500">
        Top Deals
      </Link>
      <Link href={`/products-videos`} className="px-10 hover:text-pink-500">
        Product Videos
      </Link>
      <Link href={`/trending`} className="px-10 hover:text-pink-500">
        Trending
      </Link>
    </div>
  );
};

export default CustomLinks;
