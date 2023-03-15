import CartCard from "../../components/CartCard";
import Container from "../../components/Container";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";

const DeliveryService = () => {
  return (
    <Container>
      <div className="mx-auto mt-5 grid w-10/12 md:grid-cols-8">
        <div className="col-span-8 flex md:col-span-4">
          <div className="pt-6">
            <BsCheckCircleFill className="mr-5 text-2xl text-green-500" />
          </div>
          <form className="mt-5">
            <div>
              <h4 className="sh-underline relative md:text-3xl">Address</h4>
              <div className="mt-3 space-y-1 pl-3">
                <p>
                  <span className="font-bold">Name:</span> John Doe
                </p>
                <p>
                  <span className="font-bold">Address:</span> 123, Old Site
                  Road, Apewosika
                </p>
                <p>
                  <span className="font-bold">Phone Number:</span> 0201234567
                </p>
              </div>
            </div>
            <div className="relative mt-10">
              <BsCheckCircleFill className="absolute -left-11 top-1 text-2xl text-green-500" />
              <h4 className="sh-underline relative md:text-3xl">
                Delivery Service
              </h4>
              <div className="flex flex-col items-center py-2 xl:flex-row">
                <label
                  htmlFor="phoneNumber"
                  className="block w-60 shrink-0 whitespace-nowrap"
                >
                  Choose Delivery Time
                </label>
                <select name="" id="" className="flex-1 border p-1">
                  <option value="">Select your time</option>
                </select>
              </div>
              <div className="flex flex-col items-center py-2 xl:flex-row">
                <label
                  htmlFor="phoneNumber"
                  className="block w-60 shrink-0 whitespace-nowrap"
                >
                  Favourite Delivery Company
                </label>
                <select name="" id="" className="flex-1 border p-1">
                  <option value="">Select your time</option>
                </select>
              </div>
              <div className="flex flex-col p-2 xl:flex-row">
                <div className="block w-60 shrink-0 whitespace-nowrap"></div>
                <button className="rounded-md bg-pink-500 px-20 py-3 text-center font-bold text-white">
                  Proceed To Next Step
                </button>
              </div>
            </div>
            <div className="relative my-5">
              <BsCircle className="absolute -left-10 text-2xl" />
              Payment
            </div>
          </form>
        </div>
        <div className="col-span-8 md:col-span-4">
          <CartCard />
        </div>
      </div>
    </Container>
  );
};

export default DeliveryService;
