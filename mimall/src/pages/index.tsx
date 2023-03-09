import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import CustomLinks from "../components/CustomLinks";
import SectionHeader from "../components/layout/SectionHeader";
import ProductCard from "../components/ProductCard";
import TopDeals from "../components/TopDeals";

const categories = [
  {
    label: "Food",
    image: "/images/food-2.jpg",
  },
  {
    label: "Fashion and Wears",
    image: "/images/fashion_and_wear-2.jpg",
  },
  {
    label: "Grocery and General",
    image: "/images/grocery-4.jpg",
  },
  {
    label: "Health and Wellness",
    image: "/images/health_and_wellness-4.jpg",
  },
  {
    label: "Home and Electrical Appliances",
    image: "/images/services-6.jpg",
  },
  {
    label: "Personal Services",
    image: "/images/services-2.jpg",
  },
  {
    label: "Printing and Stationery",
    image: "/images/printing_and_stationery-5.jpg",
  },
  {
    label: "Tech",
    image: "/images/tech-5.jpg",
  },
];

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
            <div
              key={idx}
              className={`group relative h-28 cursor-pointer overflow-hidden rounded-2xl shadow-lg`}
            >
              <Image
                src={category.image}
                className="absolute object-cover duration-500 group-hover:scale-110"
                fill={true}
                alt=""
              />
              <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <h3 className=" text-lg text-white">{category.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-10 w-11/12">
        <SectionHeader label={"Today's Best Deal"} />
        <div className="w-full overflow-x-auto">
          <div className="mt-5 flex gap-5">
            {Array(6)
              .fill(null)
              .map((_, idx) => (
                <ProductCard id={idx.toString()} />
              ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gray-200 py-10">
        <div className="mx-auto w-11/12 space-y-10">
          <div className="relative h-60 overflow-hidden rounded-lg">
            <Image
              src={"/images/banner-1.jpg"}
              fill={true}
              alt="banner"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-96 rounded-lg bg-teal-500"></div>
        </div>
      </section>

      <TopDeals />

      <section className="bg-gray-200 py-10">
        <div className="mx-auto w-11/12 space-y-10">
          <div className="flex h-40 items-center justify-center bg-gray-900">
            <span className="text-4xl text-white">Trending</span>
          </div>
          <div className="my-5 flex flex-col bg-white">
            <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
              <h3 className="sh-underline mb-2 text-2xl font-semibold md:text-4xl">
                Foods
              </h3>
              <Link
                href="/more"
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex justify-start gap-7 overflow-y-auto px-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="relative h-60 flex-1 shrink-0 basis-60 overflow-hidden rounded-md bg-gray-400 shadow-2xl"
                  >
                    <Image src={`/images/food-${idx + 2}.jpg`} fill alt="" />
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
          <div className="my-5 flex flex-col bg-white">
            <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
              <h3 className="sh-underline mb-2 text-4xl font-semibold">Tech</h3>
              <Link
                href="/more"
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex justify-start gap-7 overflow-y-auto px-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="relative h-60 flex-1 shrink-0 basis-60 overflow-hidden rounded-md bg-gray-400 shadow-2xl"
                  >
                    <Image src={`/images/tech-${idx + 2}.jpg`} fill alt="" />
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
          <div className="my-5 flex flex-col bg-white">
            <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
              <h3 className="sh-underline mb-2 text-4xl font-semibold">
                Personal Services
              </h3>
              <Link
                href="/more"
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex justify-start gap-7 overflow-y-auto px-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="relative h-60 flex-1 shrink-0 basis-60 overflow-hidden rounded-md bg-gray-400 shadow-2xl"
                  >
                    <Image
                      src={`/images/services-${idx + 2}.jpg`}
                      fill
                      alt=""
                    />
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
          <div className="my-5 flex flex-col bg-white">
            <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
              <h3 className="sh-underline mb-2 text-4xl font-semibold">
                Printing And Stationary
              </h3>
              <Link
                href="/more"
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex justify-start gap-7 overflow-y-auto px-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="relative h-60 flex-1 shrink-0 basis-60 overflow-hidden rounded-md bg-gray-400 shadow-2xl"
                  >
                    <Image
                      src={`/images/printing_and_stationery-${idx + 2}.jpg`}
                      fill
                      alt=""
                    />
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
          <div className="my-5 flex flex-col bg-white">
            <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
              <h3 className="sh-underline mb-2 text-4xl font-semibold">
                Fashion And Wear
              </h3>
              <Link
                href="/more"
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex justify-start gap-7 overflow-y-auto px-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="relative h-60 flex-1 shrink-0 basis-60 overflow-hidden rounded-md bg-gray-400 shadow-2xl"
                  >
                    <Image
                      src={`/images/fashion_and_wear-${idx + 2}.jpg`}
                      fill
                      alt=""
                    />
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
          <div className="my-5 flex flex-col bg-white">
            <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
              <h3 className="sh-underline mb-2 text-4xl font-semibold">
                Health And Wellness
              </h3>
              <Link
                href="/more"
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex justify-start gap-7 overflow-y-auto px-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="relative h-60 flex-1 shrink-0 basis-60 overflow-hidden rounded-md bg-gray-400 shadow-2xl"
                  >
                    <Image
                      src={`/images/health_and_wellness-${idx + 1}.jpg`}
                      fill
                      alt=""
                    />
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
          <div className="my-5 flex flex-col bg-white">
            <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
              <h3 className="sh-underline mb-2 text-4xl font-semibold">
                Grocery And General
              </h3>
              <Link
                href="/more"
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex justify-start gap-7 overflow-y-auto px-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="relative h-60 flex-1 shrink-0 basis-60 overflow-hidden rounded-md bg-gray-400 shadow-2xl"
                  >
                    <Image src={`/images/grocery-${idx + 1}.jpg`} fill alt="" />
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
        </div>
      </section>
    </div>
  );
};

export default Home;
