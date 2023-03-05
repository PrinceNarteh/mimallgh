import React from "react";
import MovieCard from "../components/MovieCard";
import TopDeals from "../components/TopDeals";

const Trending = () => {
  return (
    <div>
      <div className="mx-auto w-11/12 py-7">
        <div className="w-full">
          <div className="mt-5">
            <div className="grid gap-5 grid-auto-fit-lg">
              {Array(40)
                .fill(null)
                .map((_, idx) => (
                  <div>
                    <MovieCard key={idx} />
                    {idx % 8 === 0 && (
                      <div className="col-span-12">
                        <TopDeals />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
