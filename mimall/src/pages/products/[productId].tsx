import type { Product } from "@prisma/client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  MdContentCopy,
  MdOutlineStar,
  MdOutlineStarHalf,
} from "react-icons/md";
import ReactImageMagnify from "react-image-magnify";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Container from "../../components/Container";
import ProductCard from "../../components/ProductCard";
import { addToCart } from "../../features/cart/cartSlice";
import { topDeals } from "../../utils/data";
import { useAppDispatch } from "../../store";
import { api } from "../../utils/api";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const images = [
  "/images/grocery-and-general-1.jpg",
  "/images/grocery-and-general-2.jpg",
  "/images/grocery-and-general-3.jpg",
  "/images/grocery-and-general-4.jpg",
];

const ProductDetails = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const { asPath } = useRouter();
  const dispatch = useAppDispatch();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const url = `${origin}${asPath}`;
  const { data } = api.products.getProductById.useQuery({
    id: "clfmq8mfe0001tckovhyp77us",
  });

  const handleAddToCart = (product: Product) => {
    console.log(product);
    dispatch(
      addToCart({
        id: "123",
        title: "Sample Product",
        price: 20,
        qty: 1,
      })
    );
  };

  return (
    <Container>
      <div className="mx-auto mb-10 w-11/12 pt-5">
        <h3 className="sh-underline mb-5 pl-2 text-2xl font-semibold md:text-4xl">
          Mosco Mart
        </h3>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="relative col-span-9 flex flex-col gap-5 md:flex-row">
            <div className="">
              <div className="top-[110px] pb-10 md:sticky">
                <div className=" h-fit w-[400px] shrink-0 gap-5 ">
                  <div className="flex justify-between gap-5">
                    <div className="flex flex-col justify-center gap-3">
                      {images.map((image, idx) => (
                        <div
                          key={idx}
                          className="relative h-20 w-20 cursor-pointer rounded border border-gray-400"
                          onMouseEnter={() => setCurrentImg(idx)}
                        >
                          <Image
                            src={image}
                            alt="product-one"
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="magnify">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src: images[currentImg] as string,
                          },
                          largeImage: {
                            src: images[currentImg] as string,
                            width: 1200,
                            height: 1800,
                          },
                          enlargedImageContainerDimensions: {
                            width: "150%",
                            height: "150%",
                          },
                        }}
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
                  <div className="flex h-10 w-full items-center gap-2">
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
                <div className="mb-4 flex justify-end">
                  <button
                    className="rounded-lg border border-pink-500 px-5 py-2 text-pink-500 duration-200 hover:bg-pink-500 hover:text-white"
                    onClick={() => handleAddToCart(data as Product)}
                  >
                    Add to Cart
                  </button>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus fugiat, labore voluptatum quidem id quia qui molestias
                  enim magnam reiciendis aut eligendi corporis temporibus beatae
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
                <div className="flex justify-end pr-10">
                  <button className="rounded-lg border border-pink-500 px-5 py-2 text-pink-500 duration-200 hover:bg-pink-500 hover:text-white">
                    Add to Cart
                  </button>
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
                <ProductCard key={idx} image={topDeal.image} />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto w-10/12 space-y-5">
          <h3 className="sh-underline mt-5 text-2xl">
            Customers Reviews and Rating
          </h3>
          <div>
            <h5 className="font-semibold">100% Ratings</h5>
            <div className="space-y-2 pl-5">
              <div className="flex">
                <div className="flex basis-40 text-2xl text-orange-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <div>90%</div>
              </div>
              <div className="flex">
                <div className="flex basis-40 text-2xl text-orange-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarHalf />
                </div>
                <div>10%</div>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="mb-2 text-lg font-semibold">Top Reviews</h5>
            <dl className="pl-5">
              <ol className="space-y-2">
                <li>
                  <dt className="text-semibold">Adwoa Sarfo</dt>
                  <dd className="pl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, vitae doloremque illum quas voluptates debitis rem
                    aut quo, sint quis omnis labore soluta. Natus molestias ab
                    repudiandae ipsa provident dolorum.
                  </dd>
                </li>
                <li>
                  <dt className="text-bold">Simon Agyenim Boateng</dt>
                  <dd className="pl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, vitae doloremque illum quas voluptates debitis rem
                    aut quo, sint quis omnis labore soluta. Natus molestias ab
                    repudiandae ipsa provident dolorum.
                  </dd>
                </li>
              </ol>
            </dl>
          </div>
        </div>
        <div className="mx-auto mt-10 w-10/12">
          <h3 className="sh-underline my-5 text-2xl">
            Frequently Asked Question
          </h3>
          <div>
            <dl className="pl-5">
              <ol className="list-decimal space-y-2">
                <li>
                  <dt className="font-bold">Adwoa Sarfo</dt>
                  <dd className="pl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, vitae doloremque illum quas voluptates debitis rem
                    aut quo, sint quis omnis labore soluta. Natus molestias ab
                    repudiandae ipsa provident dolorum.
                  </dd>
                </li>
                <li>
                  <dt className="font-bold">Simon Agyenim Boateng</dt>
                  <dd className="pl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, vitae doloremque illum quas voluptates debitis rem
                    aut quo, sint quis omnis labore soluta. Natus molestias ab
                    repudiandae ipsa provident dolorum.
                  </dd>
                </li>
              </ol>
            </dl>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
