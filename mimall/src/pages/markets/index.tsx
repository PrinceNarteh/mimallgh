import Link from "next/link";
import React from "react";
import Section from "../../components/Section";

const Markets = () => {
  return (
    <div>
      <div className="flex justify-center divide-x-2 divide-gray-500 py-5">
        <h3 className="px-10 text-3xl">Top Deals</h3>
        <h3 className="px-10 text-3xl">Product Videos</h3>
        <h3 className="px-10 text-3xl">Trending</h3>
      </div>
      <Section label="Top Deals">
        <div className="flex gap-5">
          {Array(8)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="h-40 w-40 rounded-lg bg-gray-400"></div>
            ))}
        </div>
      </Section>
      <section className="bg-gray-200 py-10">
        <div className="mx-auto w-11/12 space-y-10">
          <div className="flex h-80 bg-white">
            <div className="flex h-full w-60 flex-col items-start justify-between border-r-2 p-7">
              <h3 className="mb-5 text-4xl font-semibold">Electronics</h3>
              <div>
                <p className="text-xl font-semibold">Phones and</p>
                <p className="text-xl font-semibold">Gadgets</p>
              </div>
              <Link href="/more" className="font-semibold text-orange-500">
                Read More
              </Link>
            </div>
            <div className="flex gap-7 p-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx} className="h-full w-60">
                    <div className="h-4/5 bg-gray-400"></div>
                    <div className="flex h-1/5 items-center gap-2 pt-2">
                      <div className="h-12 w-12 shrink-0 rounded-full bg-slate-400"></div>
                      <div className="h-full w-full bg-gray-400 p-1 text-white">
                        Lorem, ipsum dolor.
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex h-80 bg-white">
            <div className="flex h-full w-60 flex-col items-start justify-between border-r-2 p-7">
              <h3 className="mb-5 text-4xl font-semibold">Foods</h3>
              <div>
                <p className="text-xl font-semibold">Processed Food</p>
                <p className="text-xl font-semibold">Raw Food</p>
              </div>
              <Link href="/more" className="font-semibold text-orange-500">
                Read More
              </Link>
            </div>
            <div className="flex gap-7 p-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx} className="h-full w-60">
                    <div className="h-4/5 bg-gray-400"></div>
                    <div className="flex h-1/5 items-center gap-2 pt-2">
                      <div className="h-12 w-12 shrink-0 rounded-full bg-slate-400"></div>
                      <div className="h-full w-full bg-gray-400 p-1 text-white">
                        Lorem, ipsum dolor.
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Markets;
