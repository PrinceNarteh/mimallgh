import Image from "next/image";
import React from "react";
import Section from "./Section";

const TopDeals = () => {
  return (
    <Section label="Top Deals">
      <div className="w-full overflow-y-auto">
        <div className="flex gap-5 pb-3">
          {Array(8)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className="relative h-40 w-40 shrink-0 cursor-pointer overflow-hidden rounded-lg shadow-md"
              >
                <Image src={`/images/food-${idx + 1}.jpg`} fill alt="" />
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default TopDeals;
