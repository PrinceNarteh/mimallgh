"use client";

import Card from "../../../../components/admin/Card";
import SearchFilter from "../../../../components/admin/SearchFilter";
import InputField from "../../../../components/InputField";
// import { httpClient } from "@/utils/httpClient";
import { useForm } from "react-hook-form";

const shopOwners = [
  {
    id: "120",
    fullName: "John Doe",
  },
  {
    id: "121",
    fullName: "Jane Doe",
  },
  {
    id: "122",
    fullName: "Rose Smith",
  },
  {
    id: "123",
    fullName: "Araba Amissah",
  },
];

const AddShop = () => {
  const {
    register,
    formState: { errors },
    setValue,
    setError,
    handleSubmit,
  } = useForm({
    // resolver: zodResolver(createShopOwnerDto),
  });

  const submitHandler = async (data: any) => {
    if (data.shop_owner === "") {
      setError("shop_owner", {
        message: "Shop owner is required.",
      });
      return;
    }
    try {
      // const res = await httpClient.post("/auth/register", data);
    } catch (error: any) {
      // setError(error.response.data.error);
    }
  };

  //    name        String
  //   description String
  //   location    String
  //   address     String
  //   phoneNumber String
  //   ownerId     String    @unique

  return (
    <div className="mx-auto max-w-4xl">
      <Card heading="Add Shop Owner">
        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
          <div className="my-2 w-full">
            <label
              htmlFor="shop_owner"
              className="mb-1.5 block pl-2 capitalize tracking-widest"
            >
              Shop Owner
            </label>
            <SearchFilter
              shopOwners={shopOwners}
              errors={errors}
              setValue={setValue}
            />
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            <InputField
              name="name"
              label="Shop Name"
              register={register}
              errors={errors}
              validationSchema={{ required: "Shop name is required" }}
            />
            <InputField
              name="location"
              label="Location"
              register={register}
              errors={errors}
              validationSchema={{ required: "Location is required" }}
            />
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            <InputField
              name="address"
              label="Address"
              register={register}
              errors={errors}
              validationSchema={{ required: "Shop name is required" }}
            />
            <InputField
              name="Phone Number"
              label="phoneNumber"
              register={register}
              errors={errors}
              validationSchema={{ required: "Location is required" }}
            />
          </div>
          <div>
            <label htmlFor="" className="mb-2 inline-block capitalize">
              Description
            </label>
            <textarea
              className="w-full rounded border border-gray-600 bg-transparent p-2 outline-none"
              rows={5}
              onChange={(e) => {}}
            />
          </div>
          <button
            type="submit"
            className="mt-3 rounded bg-blue-600 py-2 px-4 text-white"
          >
            Create Account
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddShop;
