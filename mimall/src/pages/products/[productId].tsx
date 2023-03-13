import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { topDeals } from "../../utils/data";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const ProductDetails = () => {
  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const url = `${origin}${asPath}`;

  return (
    <div className="mx-auto mb-10 w-11/12 pt-[120px]">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="relative col-span-9 flex gap-5 md:flex-row">
          <div className="">
            <div className="top-[110px] pb-10 md:sticky">
              <div className=" h-fit w-[400px] shrink-0 gap-5 ">
                <div className="flex justify-between gap-5">
                  <div className="flex flex-col justify-center gap-3">
                    {Array(4)
                      .fill(null)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="relative h-20 w-20 cursor-pointer rounded border border-gray-400"
                        >
                          <Image
                            src={"/images/product-1.jpg"}
                            alt="product-one"
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="relative flex-1">
                    <Image
                      src={"/images/product-1.jpg"}
                      alt="product-one"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
              <div className="h-fit">
                <h3 className="sh-underline mt-5 text-2xl">Product Video</h3>
                <div className="h-[280px]">
                  <ReactPlayer
                    url={"/videos/sea-shore.mp4"}
                    controls
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="flex h-10 w-full items-center justify-end gap-2">
                  <h6>Share:</h6>
                  <FacebookShareButton
                    url={url}
                    quote="Hello"
                    className="block"
                  >
                    <FacebookIcon size={25} style={{ borderRadius: "50%" }} />
                  </FacebookShareButton>
                  <WhatsappShareButton url={url} className="block">
                    <WhatsappIcon size={25} style={{ borderRadius: "50%" }} />
                  </WhatsappShareButton>
                  <MdContentCopy size={20} className="cursor-pointer" />
                </div>
              </div>

              <div>
                <h5 className="sh-underline mb-2">Ratings and Reviews</h5>
                <div className="flex text-2xl text-orange-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarHalf />
                </div>
              </div>
              <div className="mt-3">
                <h5 className="sh-underline mb-2">FAQs</h5>
                <p>100 answered questions</p>
              </div>
            </div>
          </div>
          <div className="min-h-96">
            <h3 className="border-b border-b-gray-400 pb-3 text-2xl font-semibold text-gray-700">
              Coca Cola Plastic bottle 1.5L No Sugar
            </h3>
            <p className="mt-2 flex items-start tracking-widest">
              <span className="text-xl">¢</span>
              <span className="text-4xl">123</span>
              <span className="text-xl">50</span>
            </p>
            <span className="mb-2 block text-gray-500">
              Store Price: GH¢122.00
            </span>
            <div className="text-gray-500">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                fugiat, labore voluptatum quidem id quia qui molestias enim
                magnam reiciendis aut eligendi corporis temporibus beatae
                placeat! Consequatur eum nemo aperiam?
              </p>
              <div className="pl-5">
                <div className="my-5">
                  <h3 className="font-bold">About This Item</h3>
                  <ol className="list-decimal pl-7">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                  </ol>
                </div>

                <div className="my-5">
                  <h3 className="font-bold">Use Occasions</h3>
                  <ol className="list-decimal pl-7">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                  </ol>
                </div>

                <div className="my-5">
                  <h3 className="font-bold">Warrant & Returns</h3>
                  <ol className="list-decimal pl-7">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-col-12 lg:col-span-3">
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
      <div className="mt-10 px-7 pb-5">
        <h3 className="sh-underline text-2xl font-semibold">
          Compare with similar items
        </h3>
        <div className="w-full overflow-x-auto">
          <div className="flex justify-start gap-5 py-4 pt-5">
            {topDeals.map((topDeal, idx) => (
              <div className="h-[260px] w-[190px]">
                <p className="mb-1 px-1 text-xs line-clamp-1">
                  Lorem ipsum dolor sit amet.
                </p>
                <div
                  key={idx}
                  className="shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md"
                >
                  <div className="relative h-[190px] w-[190px]">
                    <Link key={idx} href={`/products/${idx}`}>
                      <Image
                        src={topDeal.image}
                        fill
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="px-2 py-1">
                    <p className="text-sm line-clamp-1">
                      Lorem ipsum dolor sit amet.
                    </p>
                    <p className="font-semibold">GH¢ 1234.00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
