import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "./Section";

const TopDeals = ({ topDeals }: { topDeals: { image: string }[] }) => {
  return (
    <Section label="Top Deals">
      <div className="w-full overflow-y-auto">
        <div className="flex gap-5 pb-3">
          {topDeals.map((topDeal, idx) => (
            <Link
              key={idx}
              href={`/products/${idx}`}
              className="cursor-pointer "
            >
              <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-lg shadow-md">
                <Image src={topDeal.image} fill alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TopDeals;
