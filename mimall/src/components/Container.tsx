import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-gray-100 pt-[250px]">{children}</div>;
};

export default Container;
