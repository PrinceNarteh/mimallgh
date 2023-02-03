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
          <button
            type="submit"
            className="rounded bg-blue-600 py-2 px-4 text-white"
          >
            Create Account
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddShop;
