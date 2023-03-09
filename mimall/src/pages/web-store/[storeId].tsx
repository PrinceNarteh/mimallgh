import React from "react";
import CustomLinks from "../../components/CustomLinks";
import MoreCard from "../../components/MoreCard";

const WebStore = () => {
  return (
    <div className="mx-auto mb-5 w-10/12">
      <div className="pb-5">
        <div className="h-96 bg-teal-500"></div>
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
      <div className="my-5 border-y">
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
      <div className="grid h-96 grid-cols-12 gap-5">
        <div className="col-span-8">
          <div className="my-5 flex justify-between border-b-2">
            <h4 className="sh-underline relative md:text-3xl">FOOD</h4>
          </div>
          <div className="grid gap-5 grid-auto-fit-sm">
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
          </div>
        </div>
        <div className="col-span-4">
          <div className="my-5 flex justify-between border-b-2">
            <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {Array(8)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="h-40 w-40 shrink-0 rounded-lg bg-gray-400"
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebStore;
