import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="relative h-[calc(100vh_-_140px)] overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="h-[calc(100vh_-_140px)]">
            <Image
              src={"/images/bg-1.jpg"}
              fill
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[calc(100vh_-_140px)]">
            <Image
              src={"/images/banner-2.jpg"}
              fill
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[calc(100vh_-_140px)]">
            <Image
              src={"/images/banner-3.jpg"}
              fill
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
