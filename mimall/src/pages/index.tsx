import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import CustomLinks from "../components/CustomLinks";
import SectionHeader from "../components/layout/SectionHeader";
import ProductCard from "../components/ProductCard";
import TopDeals from "../components/TopDeals";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <CustomLinks />
      <section className="mx-auto w-11/12 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative h-56 overflow-hidden rounded-2xl bg-teal-500 shadow-lg">
            <Image src={"/images/iphone-1.jpg"} fill={true} alt="iPhone-1" />
          </div>
          <div className="relative h-56 overflow-hidden rounded-2xl bg-teal-500 shadow-lg">
            <Image src={"/images/iphone-2.jpg"} fill={true} alt="iPhone-2" />
          </div>
        </div>
      </section>

      <section className="mx-auto mb-10 w-11/12">
        <SectionHeader label={"Today's Best Deal"} />
        <div className="mt-5 flex flex-wrap justify-evenly">
          {Array(6)
            .fill(null)
            .map((_, idx) => (
              <ProductCard id={idx.toString()} />
            ))}
        </div>
      </section>

      <section className="min-h-screen bg-gray-200 py-10">
        <div className="mx-auto w-11/12 space-y-10">
          <div className="relative h-60 overflow-hidden rounded-lg">
            <Image src={"/images/banner-1.jpg"} fill={true} alt="banner" />
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
          <div className="flex flex-col bg-white">
            <div className="flex h-full flex-col items-start justify-between border-r-2 p-7">
              <h3 className="mb-2 text-4xl font-semibold">Foods</h3>
              <div>
                <p className="text-xl font-semibold">Processed Food</p>
                <p className="text-xl font-semibold">Raw Food</p>
              </div>
              <Link
                href="/more"
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex flex-wrap justify-center gap-7 px-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="h-60 flex-1 shrink-0 basis-60 bg-gray-400"
                  ></div>
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
