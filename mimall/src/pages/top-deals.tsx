import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import { sections } from "../utils/data";

const TopDeals = () => {
  return (
    <Container>
      <div className="mx-auto w-11/12 pt-5">
        <div className="flex justify-between pb-5">
          <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-5 flex flex-col bg-white">
            <div className="mt-2 flex h-full flex-col items-start justify-between border-r-2">
              <h3 className="sh-underline mb-2 text-2xl md:text-4xl">
                {section.heading}
              </h3>
              <Link
                href={`/category/${section.link}`}
                className="hidden font-semibold text-orange-500"
              >
                Read More
              </Link>
            </div>
            <div className="mb-3 flex items-center justify-start gap-5 overflow-y-auto py-2 px-7 pb-2">
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
    </Container>
  );
};

export default TopDeals;
