import React from "react";
import dynamic from "next/dynamic";
import Container from "../../components/Container";
import { topDeals } from "../../utils/data";
import Image from "next/image";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const ProductVideoDetails = () => {
  return (
    <Container>
      <div className="mx-auto w-10/12 py-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <div className="col-span-8">
            <div className="h-[480px]">
              <ReactPlayer
                url={"/videos/sea-shore.mp4"}
                controls
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div>
              <h3 className="py-1 text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-red-500"></div>
                <div>
                  <h4 className="font-semibold">Daavi Special Gobe Joint</h4>
                  <p>Old Site</p>
                </div>
              </div>
            </div>

            <div className="mt-2 rounded-md bg-gray-100 p-5">
              <p className="mb-2 font-semibold">2.3k views 3 days ago</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                amet illo recusandae doloremque quae nihil minus! Animi ad eius
                assumenda, autem magni, dicta quos fuga, ut consectetur ipsa at
                porro!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                amet illo recusandae doloremque quae nihil minus! Animi ad eius
                assumenda, autem magni, dicta quos fuga, ut consectetur ipsa at
                porro!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                amet illo recusandae doloremque quae nihil minus! Animi ad eius
                assumenda, autem magni, dicta quos fuga, ut consectetur ipsa at
                porro!
              </p>
            </div>

            {/* Comment */}
            <div className="w-full space-y-5 rounded-md bg-slate-200 p-5">
              <div className="flex w-full gap-5">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-500"></div>
                <div className="w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Add your comment"
                    className="mb-2 w-full border-b-2 border-b-gray-300 bg-transparent outline-none focus:border-b-pink-500"
                  />
                  <div className="flex justify-end">
                    <button className="border border-pink-500 py-1 px-3 text-xs text-pink-500 duration-300 hover:bg-pink-500 hover:text-white">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-5">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-500"></div>
                <div>
                  <h3>
                    <span className="font-bold">Akosua Genie</span> | 1 month
                    ago
                  </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Neque amet illo recusandae doloremque quae nihil minus!
                    Animi ad eius assumenda, autem magni, dicta quos fuga, ut
                    consectetur ipsa at porro!
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-5">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-500"></div>
                <div>
                  <h3>
                    <span className="font-bold">Simon Bas</span> | 1 month ago
                  </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Neque amet illo recusandae doloremque quae nihil minus!
                    Animi ad eius assumenda, autem magni, dicta quos fuga, ut
                    consectetur ipsa at porro!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 space-y-2">
            <div className="mt-2 mb-5 flex justify-between border-b-2">
              <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {topDeals.map((topDeal, idx) => (
                <div
                  key={idx}
                  className="relative h-28 flex-1 basis-28 overflow-hidden rounded"
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
    </Container>
  );
};

export default ProductVideoDetails;
