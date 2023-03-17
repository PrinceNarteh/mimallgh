import React from "react";

const FloatingNavbar = ({ show }: { show: boolean }) => {
  console.log(show);

  return (
    <div
      className={`${
        show ? "fixed block" : "hidden"
      }  top-0 z-50 w-full bg-red-900 px-5 duration-200`}
    >
      <div
        className={"mx-auto flex max-w-7xl items-center justify-between py-2"}
      >
        <h3 className="text-3xl text-pink-500">MiMall</h3>
      </div>
    </div>
  );
};

export default FloatingNavbar;
