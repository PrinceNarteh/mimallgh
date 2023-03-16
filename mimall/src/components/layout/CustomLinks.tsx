import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const customLinks = [
  {
    label: "Product Videos",
    link: "/product-videos",
  },
  {
    label: "Top Deals",
    link: "/top-deals",
  },
  {
    label: "Trending",
    link: "/trending",
  },
];

const CustomLinks = () => {
  const { pathname } = useRouter();

  const links = customLinks.filter(
    (link) => pathname === "/" || !link.link.startsWith(pathname)
  );

  return (
    <div className="flex flex-col justify-center divide-gray-500 bg-white py-2 text-center shadow-md sm:flex-row md:divide-y-0 md:divide-x-2 md:text-xl">
      {links.map((link, idx) => (
        <Link href={link.link} className="px-10 hover:text-pink-500">
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default CustomLinks;
