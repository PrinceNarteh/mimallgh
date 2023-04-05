import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import CheckoutContainer from "../../components/CheckoutContainer";

const Checkout = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router
      .push("/checkout/delivery-service")
      .catch((error) => console.log(error));
  };

  return (
    <CheckoutContainer>
      <div className="pt-6">
        <BsCheckCircleFill className="mr-5 text-2xl text-green-500" />
      </div>
      <form onSubmit={handleSubmit} className="mt-5">
        <h4 className="sh-underline relative md:text-3xl">Address</h4>
        <div className="flex flex-col items-center justify-start py-2 md:flex-row">
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
            className="w-full rounded-md bg-pink-500 py-3 text-center font-bold text-white"
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
    </CheckoutContainer>
  );
};

export default Checkout;
