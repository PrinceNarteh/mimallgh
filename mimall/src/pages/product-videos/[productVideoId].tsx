import React from "react";
import dynamic from "next/dynamic";
import Container from "../../components/Container";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const ProductVideoDetails = () => {
  return (
    <Container>
      <div className="pt-50 mx-auto w-10/12">
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
          </div>
          <div className="col-span-4 space-y-2">
            <div className=" flex h-28 gap-2">
              <div className="h-full flex-none basis-44 rounded-lg bg-violet-500"></div>
              <div className="py-1">
                <h4 className="font-semibold line-clamp-2">
                  How to prepare delicious fried rice
                </h4>
                <h5 className="text-md">Which 1</h5>
                <p>2.3k view - 3 days ago</p>
              </div>
            </div>
            <div className=" flex h-28 gap-2">
              <div className="h-full flex-none basis-44 rounded-lg bg-violet-500"></div>
              <div className="py-1">
                <h4 className="font-semibold line-clamp-2">
                  How to prepare delicious fried rice
                </h4>
                <h5 className="text-md">Which 1</h5>
                <p>2.3k view - 3 days ago</p>
              </div>
            </div>
            <div className=" flex h-28 gap-2">
              <div className="h-full flex-none basis-44 rounded-lg bg-violet-500"></div>
              <div className="py-1">
                <h4 className="font-semibold line-clamp-2">
                  How to prepare delicious fried rice
                </h4>
                <h5 className="text-md">Which 1</h5>
                <p>2.3k view - 3 days ago</p>
              </div>
            </div>
            <div className=" flex h-28 gap-2">
              <div className="h-full flex-none basis-44 rounded-lg bg-violet-500"></div>
              <div className="py-1">
                <h4 className="font-semibold line-clamp-2">
                  How to prepare delicious fried rice
                </h4>
                <h5 className="text-md">Which 1</h5>
                <p>2.3k view - 3 days ago</p>
              </div>
            </div>
            <div className=" flex h-28 gap-2">
              <div className="h-full flex-none basis-44 rounded-lg bg-violet-500"></div>
              <div className="py-1">
                <h4 className="font-semibold line-clamp-2">
                  How to prepare delicious fried rice
                </h4>
                <h5 className="text-md">Which 1</h5>
                <p>2.3k view - 3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductVideoDetails;
