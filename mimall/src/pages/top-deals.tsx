import Container from "../components/Container";
import MoreCard from "../components/MoreCard";

const TopDeals = () => {
  return (
    <Container>
      <div className="mx-auto w-11/12">
        <div className="flex justify-between border-b-2 pb-5">
          <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
        </div>

        <div className="grid gap-10 grid-auto-fit-lg">
          {Array(20)
            .fill(null)
            .map((_, idx) => (
              <MoreCard index={idx} key={idx} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default TopDeals;
