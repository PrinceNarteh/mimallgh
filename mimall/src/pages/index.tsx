import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import CustomLinks from "../components/CustomLinks";
import TopDeals from "../components/TopDeals";

const topDeals = [
  {
    image: "/images/fashion_and_wear-1.jpg",
  },
  {
    image: "/images/services-1.jpg",
  },
  {
    image: "/images/tech-1.jpg",
  },
  {
    image: "/images/health_and_wellness-1.jpg",
  },
  {
    image: "/images/printing_and_stationery-1.jpg",
  },
  {
    image: "/images/food-1.jpg",
  },
  {
    image: "/images/grocery-2.jpg",
  },
  {
    image: "/images/tech-2.jpg",
  },
  {
    image: "/images/fashion_and_wear-2.jpg",
  },
];

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

const sections = [
  {
    heading: "Food",
    images: [
      {
        imageUrl: "/images/food-1.jpg",
      },
      {
        imageUrl: "/images/food-2.jpg",
      },
      {
        imageUrl: "/images/food-3.jpg",
      },
      {
        imageUrl: "/images/food-4.jpg",
      },
    ],
  },
  {
    heading: "Fashion and Wears",
    images: [
      {
        imageUrl: "/images/fashion_and_wear-1.jpg",
      },
      {
        imageUrl: "/images/fashion_and_wear-2.jpg",
      },
      {
        imageUrl: "/images/fashion_and_wear-3.jpg",
      },
      {
        imageUrl: "/images/fashion_and_wear-4.jpg",
      },
    ],
  },
  {
    heading: "Grocery and General",
    images: [
      {
        imageUrl: "/images/grocery-1.jpg",
      },
      {
        imageUrl: "/images/grocery-2.jpg",
      },
      {
        imageUrl: "/images/grocery-3.jpg",
      },
      {
        imageUrl: "/images/grocery-4.jpg",
      },
    ],
  },
  {
    heading: "Health and Wellness",
    images: [
      {
        imageUrl: "/images/health_and_wellness-1.jpg",
      },
      {
        imageUrl: "/images/health_and_wellness-2.jpg",
      },
      {
        imageUrl: "/images/health_and_wellness-3.jpg",
      },
      {
        imageUrl: "/images/health_and_wellness-4.jpg",
      },
    ],
  },
  {
    heading: "Home and Electrical Appliances",
    images: [
      {
        imageUrl: "/images/appliances-1.jpg",
      },
      {
        imageUrl: "/images/appliances-2.jpg",
      },
      {
        imageUrl: "/images/appliances-3.jpg",
      },
      {
        imageUrl: "/images/appliances-4.jpg",
      },
    ],
  },
  {
    heading: "Personal Services",
    images: [
      {
        imageUrl: "/images/services-1.jpg",
      },
      {
        imageUrl: "/images/services-2.jpg",
      },
      {
        imageUrl: "/images/services-3.jpg",
      },
      {
        imageUrl: "/images/services-4.jpg",
      },
    ],
  },
  {
    heading: "Printing and Stationery",
    images: [
      {
        imageUrl: "/images/printing_and_stationery-1.jpg",
      },
      {
        imageUrl: "/images/printing_and_stationery-2.jpg",
      },
      {
        imageUrl: "/images/printing_and_stationery-3.jpg",
      },
      {
        imageUrl: "/images/printing_and_stationery-4.jpg",
      },
    ],
  },
  {
    heading: "Tech",
    images: [
      {
        imageUrl: "/images/tech-1.jpg",
      },
      {
        imageUrl: "/images/tech-2.jpg",
      },
      {
        imageUrl: "/images/tech-3.jpg",
      },
      {
        imageUrl: "/images/tech-4.jpg",
      },
    ],
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

      <TopDeals topDeals={topDeals} />

      <section className="bg-gray-200 py-10">
        <div className="mx-auto w-11/12 space-y-10">
          <div className="flex h-40 items-center justify-center bg-gray-900">
            <span className="text-4xl text-white">Trending</span>
          </div>
          {sections.map((section, idx) => (
            <div className="my-5 flex flex-col bg-white">
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
              <div className="mb-3 flex justify-start gap-7 overflow-y-auto px-7">
                {section.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative h-60 flex-1 shrink-0 basis-60 overflow-hidden rounded-md bg-gray-400 shadow-2xl"
                  >
                    <Image src={image.imageUrl} fill alt="" />
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
