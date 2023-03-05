import React from "react";
import SectionHeader from "../components/layout/SectionHeader";
import MoreCard from "../components/MoreCard";

const TopDeals = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="my-5 flex justify-between border-b-2">
        <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
      </div>

      <div className="grid gap-10 grid-auto-fit-lg">
        {Array(20)
          .fill(null)
          .map((_, idx) => (
            <MoreCard key={idx} />
          ))}
      </div>
    </div>
  );
};

export default TopDeals;
