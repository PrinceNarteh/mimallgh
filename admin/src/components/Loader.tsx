import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-dark-gray">
      <div className="flex justify-center">
        <span className="circle animate-loader"></span>
        <span className="circle animation-delay-200 animate-loader"></span>
        <span className="circle animation-delay-400 animate-loader"></span>
      </div>
    </div>
  );
};

export default Loader;
