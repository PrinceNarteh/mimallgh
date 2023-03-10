import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomLinks from "../../components/CustomLinks";
import MoreCard from "../../components/MoreCard";
import { topDeals } from "../../utils/data";

const WebStore = () => {
  return (
    <div className="mx-auto mb-5 w-10/12">
      <div className="pb-5">
        <div className="relative h-[400px] bg-teal-500">
          <Image
            src={"/images/web-store-banner.jpg"}
            fill
            alt=""
            style={{ objectFit: "cover" }}
            className="object-top"
          />
        </div>
        <div className=" flex flex-col md:flex-row">
          <div className="relative bottom-16 left-10 h-32 w-32 shrink-0 rounded-full bg-red-500"></div>
          <div className="-mt-14 space-y-2 pt-2 md:mt-0 md:ml-14">
            <h3 className="text-4xl">Mosco Mart</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sapiente quisquam expedita! Pariatur ipsa blanditiis quibusdam
              ipsam beatae incidunt fugiat cupiditate obcaecati sunt, omnis
              voluptates saepe, autem voluptate harum tempore?
            </p>
            <div className="grid grid-auto-fit-md">
              <p>
                <span className="font-semibold">Contact:</span> 0201234567
              </p>
              <p>
                <span className="font-semibold">Map Direction:</span> 0201234567
              </p>
              <p>
                <span className="font-semibold">Physical Address:</span>{" "}
                CC-000-1234
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-[98px] z-20 my-5 border-y bg-white">
        <CustomLinks />
      </div>
      <div className="mb-10 flex justify-center gap-10 overflow-y-auto pt-5">
        <div className="flex w-36 flex-col items-center">
          <div className="h-32 w-32 rounded-full bg-violet-500"></div>
          <h3>Food</h3>
          <h4>12 Ads</h4>
        </div>
        <div className="flex w-36 flex-col items-center">
          <div className="h-32 w-32 rounded-full bg-violet-500"></div>
          <h3>Electronics</h3>
          <h4>20 Ads</h4>
        </div>
        <div className="flex w-36 flex-col items-center">
          <div className="h-32 w-32 rounded-full bg-violet-500"></div>
          <h3>Fashion</h3>
          <h4>100 Ads</h4>
        </div>
        <div className="flex w-36 flex-col items-center">
          <div className="h-32 w-32 rounded-full bg-violet-500"></div>
          <h3>Services</h3>
          <h4>50 Ads</h4>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="grid-col-12 lg:col-span-8">
          <div className="my-5 flex justify-between border-b-2">
            <h4 className="sh-underline relative md:text-3xl">FOOD</h4>
          </div>
          <div className="grid gap-5 grid-auto-fit-sm">
            {Array(6)
              .fill(null)
              .map((_, idx) => (
                <Link href={`/products/1`} className="block flex-1">
                  <div className="flex h-full flex-col">
                    <div className="relative flex-1 rounded-md bg-gray-500 bg-opacity-20 p-5">
                      <Image
                        src={`/images/food-${idx % 9 == 0 ? 1 : idx % 9}.jpg`}
                        fill
                        alt=""
                      />
                    </div>
                    <div className="flex h-16 gap-3 p-4 py-2">
                      <div className="">
                        <h4 className="font-semibold line-clamp-1">
                          Lorem, ipsum dolor sit amet elit sunt.
                        </h4>
                        <p className="text-gray-500">Store price: ¢120.50</p>
                      </div>
                      <div className="flex w-14 items-center justify-center">
                        <p className="flex items-start tracking-widest text-[#ff0000] ">
                          ¢123.50
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="grid-col-12 lg:col-span-4">
          <div className="my-5 flex justify-between border-b-2">
            <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
          </div>
          <div className="grid justify-center gap-5 grid-auto-fit-xs">
            {topDeals.map((topDeal, idx) => (
              <div
                key={idx}
                className="relative h-40 shrink-0 rounded-lg bg-gray-400"
              >
                <Image
                  src={topDeal.image}
                  fill
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebStore;
