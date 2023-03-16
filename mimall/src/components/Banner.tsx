import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="relative mx-auto grid h-96 w-11/12 grid-cols-12 gap-3 overflow-hidden">
      <div className="col-span-2 flex h-full flex-wrap justify-between gap-2">
        {Array(2)
          .fill(null)
          .map((_, idx) => (
            <div className="h-44 w-full flex-1 basis-40 justify-between overflow-hidden rounded-md bg-teal-500">
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
                  <div className="relative h-40">
                    <Image
                      src={"/images/bg-1.jpg"}
                      fill
                      className="h-full w-full object-cover"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-40">
                    <Image
                      src={"/images/banner-2.jpg"}
                      fill
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-40] relative">
                    <Image
                      src={"/images/product-1.jpg"}
                      fill
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ))}
      </div>
      <div className="col-span-8 h-96 overflow-hidden rounded-md">
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
            <div className="relative h-[calc(100vh_-_100px)]">
              <Image
                src={"/images/bg-1.jpg"}
                fill
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[calc(100vh_-_100px)]">
              <Image
                src={"/images/banner-2.jpg"}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[calc(100vh_-_100px)]">
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
      <div className="col-span-2 flex flex-wrap">
        {Array(2)
          .fill(null)
          .map((_, idx) => (
            <div className="h-40 w-full flex-1 basis-40">
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
                  <div className="relative h-40">
                    <Image
                      src={"/images/bg-1.jpg"}
                      fill
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-40">
                    <Image
                      src={"/images/banner-2.jpg"}
                      fill
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-40] relative">
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
          ))}
      </div>
    </div>
  );
};

export default Banner;
