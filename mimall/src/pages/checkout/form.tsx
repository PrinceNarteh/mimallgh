import CartCard from "../../components/CartCard";
import Container from "../../components/Container";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { FormEvent } from "react";

const Checkout = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/checkout/delivery-service");
  };

  return (
    <Container>
      <div className="mx-auto mt-5 grid w-10/12 md:grid-cols-8">
        <div className="col-span-8 flex md:col-span-4">
          <div className="pt-6">
            <BsCheckCircleFill className="mr-5 text-2xl text-green-500" />
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <h4 className="sh-underline relative md:text-3xl">Address</h4>
            <div className="flex flex-col items-center py-2 xl:flex-row">
              <label
                htmlFor="fullName"
                className="block w-60 shrink-0 whitespace-nowrap"
              >
                Full Name
              </label>
              <input type="text" className="flex-1 border p-1" />
            </div>
            <div className="flex flex-col items-center py-2 xl:flex-row">
              <label
                htmlFor="phoneNumber"
                className="block w-60 shrink-0 whitespace-nowrap"
              >
                Phone Number
              </label>
              <input type="text" className="flex-1 border p-1" />
            </div>
            <div className="flex flex-col items-center py-2 xl:flex-row">
              <label
                htmlFor="alternatePhoneNumber"
                className="block w-60 shrink-0 whitespace-nowrap"
              >
                Alternate Phone Number
              </label>
              <input type="text" className="flex-1 border p-1" />
            </div>
            <div className="flex flex-col items-center py-2 xl:flex-row">
              <label
                htmlFor="address"
                className="block w-60 shrink-0 whitespace-nowrap"
              >
                Choose Address
              </label>
              <input type="text" className="flex-1 border p-1" />
            </div>
            <div className="flex flex-col items-center py-2 xl:flex-row">
              <label
                htmlFor="addressDescription"
                className="block w-60 shrink-0 whitespace-nowrap"
              >
                Description of Address
              </label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={2}
                className="flex-1 border p-1"
              ></textarea>
            </div>
            <div className="flex flex-col p-2 xl:flex-row">
              <div className="block w-60 shrink-0 whitespace-nowrap"></div>
              <button
                type="submit"
                className="rounded-md bg-pink-500 px-20 py-3 text-center font-bold text-white"
              >
                Proceed To Next Step
              </button>
            </div>
            <div className="relative mt-5">
              <BsCircle className="absolute -left-10 text-2xl" />
              Delivery Service
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

export default Checkout;
