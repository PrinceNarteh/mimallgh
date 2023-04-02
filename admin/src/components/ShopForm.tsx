import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook2, ImWhatsapp } from "react-icons/im";

import { Branch, Shop } from "@prisma/client";
import { api } from "./../utils/api";
import { locations } from "./../utils/menus";
import { createShopDto, updateShopDto, IUpdateShopDto } from "./../utils/validations";
import { Button } from "./Button";
import Card from "./Card";
import InputField from "./InputField";
import Loader from "./Loader";
import SearchFilter from "./SearchFilter";
import SelectField from "./SelectField";

const initialState: IUpdateShopDto = {
  id: "",
  ownerId: "",
  name: "",
  location: "",
  address: "",
  openingTime: "",
  closingTime: "",
  phoneNumber: "",
  description: "",
  facebookHandle: "",
  instagramHandle: "",
  whatsappNumber: "",
  branches: [],
};

const AddShopForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    control,
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: initialState,
    resolver: zodResolver(router.query.shopId ? updateShopDto : createShopDto),
  });
  const { fields, append, remove } = useFieldArray({
    name: "branches",
    control,
  });

  const shopOwners = api.users.getUsersByRole.useQuery({ role: "shop_owner" });
  const createShopMutation = api.shops.createShop.useMutation();
  const updateShopMutation = api.shops.updateShop.useMutation();

  const { data, isLoading } = api.shops.getShopById.useQuery({
    shopId: router.query.shopId as string,
  });

  useEffect(() => {
    reset(data as IUpdateShopDto);
  }, [data]);

  const submitHandler: SubmitHandler<IUpdateShopDto> = (value) => {
    if (!value.id) {
      createShopMutation.mutate(value, {
        onSuccess(data) {
          const { id } = data as Shop;
          toast.success("Shop created successfully");
          router.push(`/shops/${id}`);
        },
      });
    } else {
      updateShopMutation.mutate(value, {
        onSuccess: () => {
          toast.success("Update successful");
          router.push(`/shops/${router.query.shopId}`);
        },
      });
    }
  };

  const owners = shopOwners?.data?.map((shopOwner) => ({
    id: shopOwner.id || "",
    label: `${shopOwner.firstName || ""} ${shopOwner.middleName || ""} ${
      shopOwner.lastName || ""
    }`,
  }));

  if (router.query.shopId && isLoading) {
    return <Loader />;
  }

  return (
    <div className="pb-10">
      <Card heading={`${getValues().id ? "Edit" : "Add"} Shop`}>
        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
          <div className="my-2 w-full">
            <label
              htmlFor="shop_owner"
              className="mb-1.5 block pl-2 capitalize tracking-widest"
            >
              Shop Owner
            </label>
            <SearchFilter
              value={data?.ownerId || ""}
              field="ownerId"
              options={owners || []}
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
            <SelectField
              label="Location"
              options={locations}
              errors={errors}
              register={register}
              {...register("location", { required: "Location is required." })}
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
              name="phoneNumber"
              label="Phone Number"
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
              {...register("description")}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Working Hours</label>
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="flex w-full rounded-lg border border-gray-600 bg-gray-700">
                <div className="w-fit whitespace-nowrap rounded-l-lg bg-gray-600 p-2">
                  Opening Time
                </div>
                <input
                  type="time"
                  className="block w-full bg-transparent p-2.5 text-sm outline-none"
                  placeholder="Facebook"
                  {...register("openingTime")}
                />
              </div>
              <div className="flex w-full rounded-lg border border-gray-600 bg-gray-700">
                <div className="w-fit whitespace-nowrap rounded-l-lg bg-gray-600 p-2">
                  Closing Time
                </div>
                <input
                  type="time"
                  id="email-address-icon"
                  className="block w-full bg-transparent p-2.5 text-sm outline-none placeholder:text-light-gray"
                  placeholder="Facebook"
                  {...register("closingTime")}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="">Social Media Handlers</label>
            <div className="mt-3 flex flex-col gap-5 lg:flex-row">
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <ImFacebook2 />
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Facebook"
                  {...register("facebookHandle")}
                />
              </div>
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiInstagram />
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Instagram"
                  {...register("instagramHandle")}
                />
              </div>
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <ImWhatsapp />
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 file:text-light-gray focus:border-blue-500  focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Whatsapp"
                  {...register("whatsappNumber")}
                />
              </div>
            </div>
          </div>
          <div className="my-5">
            <h3>Branch(es)</h3>
          </div>
          {fields.map((field, index) => (
            <fieldset
              key={field.id}
              className="my-5 rounded border border-gray-500 py-2 px-5"
            >
              <legend>Branch</legend>
              <div>
                <SelectField
                  label="Location"
                  options={locations}
                  errors={errors}
                  register={register}
                  name={`branches.${index}.location`}
                  validationSchema={{ required: "Location is required" }}
                />
              </div>
              <div className="flex flex-col gap-5 lg:flex-row">
                <InputField
                  errors={errors}
                  label="Address"
                  register={register}
                  name={`branches.${index}.address`}
                  validationSchema={{ required: "Address is required" }}
                />
                <InputField
                  errors={errors}
                  label="Phone Number"
                  register={register}
                  name={`branches.${index}.phoneNumber`}
                  validationSchema={{ required: "Phone number is required" }}
                />
              </div>
              <div className="my-2 flex justify-end">
                <button
                  className="rounded bg-red-600 py-1 px-2 text-sm"
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              </div>
            </fieldset>
          ))}
          <div className="flex justify-end border-b border-b-gray-500">
            <Button
              onClick={() =>
                append({
                  shopId: "",
                  id: "",
                  address: "",
                  location: "",
                  phoneNumber: "",
                })
              }
            >
              Add Branch
            </Button>
          </div>
          <Button type="submit">
            {`${getValues().id ? "Edit" : "Add"} Shop`}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddShopForm;
