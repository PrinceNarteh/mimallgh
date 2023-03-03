import React from "react";
import Section from "./Section";

const TopDeals = () => {
  return (
    <Section label="Top Deals">
      <div className="overflow-y-auto">
        <div className="flex gap-5 pb-3">
          {Array(8)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className="h-40 w-40 shrink-0 rounded-lg bg-gray-400"
              ></div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default TopDeals;
