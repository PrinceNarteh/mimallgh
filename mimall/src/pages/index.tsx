import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import CustomLinks from "../components/layout/CustomLinks";
import TopDeals from "../components/TopDeals";
import { categories, sections, topDeals } from "../utils/data";
import { locations } from "../utils/menus";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Home = () => {
  return (
    <div className="pt-[100px]">
      <Banner />
      <section className="mx-auto w-11/12 space-y-5 py-10">
        <div>
          <h4 className="sh-underline relative md:text-3xl">Categories</h4>
          <div className="w-full overflow-x-scroll">
            <div className="flex gap-3 py-4">
              {categories.map((category, idx) => (
                <Link key={idx} href={`/category/${category.link}`}>
                  <div
                    className={`group relative h-28 w-52 cursor-pointer overflow-hidden rounded-2xl p-5 shadow-lg`}
                  >
                    <Image
                      src={category.image}
                      className="absolute object-cover duration-500 group-hover:scale-110"
                      fill={true}
                      alt=""
                    />
                    <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
                    <div className="relative z-10 flex h-full w-full items-center justify-center">
                      <h3 className=" text-center text-lg text-white">
                        {category.label}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-1 text-center text-sm">
                    300 Sellers | 150 ads
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="sh-underline relative md:text-3xl">Markets</h4>
          <div className="w-full overflow-x-scroll">
            <div className="flex gap-3 py-4">
              {locations.slice(1).map((location, idx) => (
                <Link href={`/markets/${location.link}`}>
                  <div
                    key={idx}
                    className={`group relative h-28 w-52 cursor-pointer overflow-hidden rounded-2xl p-5 shadow-lg`}
                  >
                    <Image
                      src={"/images/product-1.jpg"}
                      className="absolute object-cover duration-500 group-hover:scale-110"
                      fill={true}
                      alt=""
                    />
                    <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
                    <div className="relative z-10 flex h-full w-full items-center justify-center">
                      <h3 className=" text-center text-lg text-white">
                        {location.label}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-1 text-center text-sm">
                    300 Sellers | 150 ads
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mb-5">
        <TopDeals topDeals={topDeals} />
      </div>

      <section className="my-5 bg-gray-200 pt-5">
        <div className="mx-auto w-11/12">
          <div className="my-5 bg-white px-5 py-2">
            <h3 className="sh-underline mt-5 mb-2 pl-2 text-2xl font-semibold md:text-4xl">
              Trending
            </h3>
            <div className="w-full overflow-x-auto">
              <div className="my-5 flex items-center justify-start gap-5 px-5">
                {Array(6)
                  .fill(null)
                  .map((_, idx) => (
                    <Link href={"/product-videos/1"} key={idx}>
                      <div className="w-60 shrink-0">
                        <div className="overflow-hidden rounded-md">
                          <ReactPlayer
                            url={"/videos/sea-shore.mp4"}
                            width={"100%"}
                            height={"100%"}
                            loop
                            muted
                            playing={true}
                          />
                        </div>
                        <p className="mt-1 px-1 text-sm line-clamp-1">
                          Lorem ipsum dolor sit amet dolor sit amet.
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          {sections.map((section, idx) => (
            <div key={idx} className="mb-5 flex flex-col bg-white">
              <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
                <h3 className="sh-underline mb-2 text-2xl font-semibold md:text-4xl">
                  {section.heading}
                </h3>
                <Link
                  href={`/category/${section.link}`}
                  className="hidden font-semibold text-orange-500"
                >
                  Read More
                </Link>
              </div>
              <div className="mb-3 flex items-center justify-start gap-5 overflow-y-auto px-7 pb-2">
                {section.images.map((image, idx) => (
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
                            src={image.imageUrl}
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
              <Link
                href={`/category/${section.link}`}
                className="mb-5 pr-7 text-right font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
