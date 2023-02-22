import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[calc(100vh_-_144px)] bg-pink-500">
      <Image
        src={"/images/bg-1.jpg"}
        fill
        style={{ objectFit: "cover" }}
        alt=""
      />
    </div>
  );
};

export default Banner;
