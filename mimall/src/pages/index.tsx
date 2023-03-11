import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import CustomLinks from "../components/CustomLinks";
import TopDeals from "../components/TopDeals";
import { categories, sections, topDeals } from "../utils/data";

const Home = () => {
  return (
    <div className="pt-[100px]">
      <Banner />
      <div className="sticky top-24 z-40 bg-white">
        <CustomLinks />
      </div>

      <section className="mx-auto w-11/12 py-10">
        <div className="grid gap-5 grid-auto-fit-lg">
          {categories.map((category, idx) => (
            <div>
              <div
                key={idx}
                className={`group relative h-28 cursor-pointer overflow-hidden rounded-2xl p-5 shadow-lg`}
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
              <p className="mt-1 text-center text-sm">300 Sellers | 150 ads</p>
            </div>
          ))}
        </div>
      </section>

      <TopDeals topDeals={topDeals} />

      <section className="bg-gray-200 py-10">
        <div className="mx-auto w-11/12 space-y-10">
          <div className="flex h-40 items-center justify-center bg-gray-900">
            <span className="text-4xl text-white">Trending</span>
          </div>
          {sections.map((section, idx) => (
            <div key={idx} className="my-5 flex flex-col bg-white">
              <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
                <h3 className="sh-underline mb-2 text-2xl font-semibold md:text-4xl">
                  {section.heading}
                </h3>
                <Link
                  href="/more"
                  className="hidden font-semibold text-orange-500"
                >
                  Read More
                </Link>
              </div>
              <div className="mb-3 flex items-center justify-start gap-5 overflow-y-auto px-7 pb-2">
                {section.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="h-[260px] w-[190px] shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md"
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
                      <div>
                        <p className="font-semibold">GH¢ 1234.00</p>
                        <p className="text-xs text-gray-600">
                          Store price: GH¢ 1230.00
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/more"
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
