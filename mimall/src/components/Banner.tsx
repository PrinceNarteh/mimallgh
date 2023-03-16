import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="relative mx-auto grid h-[calc(100vh_-_150px)] w-11/12 grid-cols-12 overflow-hidden">
      <div className="col-span-2 flex flex-wrap">
        {Array(3)
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
      <div className="col-span-8">
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
        {Array(3)
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
