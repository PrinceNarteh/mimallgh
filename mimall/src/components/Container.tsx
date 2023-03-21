import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-10">{children}</div>;
};

export default Container;
