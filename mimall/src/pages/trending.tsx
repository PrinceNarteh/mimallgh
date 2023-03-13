import React from "react";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import TopDeals from "../components/TopDeals";
import { topDeals } from "../utils/data";

const Trending = () => {
  return (
    <Container>
      <div className="mx-auto w-11/12 py-7">
        <div className="w-full">
          <div className="mt-5">
            <div className="grid gap-5 grid-auto-fit-lg">
              {Array(40)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx}>
                    <MovieCard />
                    {idx % 8 === 0 && (
                      <div className="col-span-12">
                        <TopDeals topDeals={topDeals} />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Trending;
