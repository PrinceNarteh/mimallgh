import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-[140px]">{children}</div>;
};

export default Container;
