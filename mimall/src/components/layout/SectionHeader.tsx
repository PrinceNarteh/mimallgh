import React from "react";

const SectionHeader = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-between border-b-2">
      <h4 className="sh-underline relative md:text-3xl">{label}</h4>
      <h5 className="cursor-pointer font-bold text-orange-500">See more...</h5>
    </div>
  );
};

export default SectionHeader;
