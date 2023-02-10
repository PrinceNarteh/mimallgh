import { zodResolver } from "@hookform/resolvers/zod";
import { Shop, Branch } from "@prisma/client";
import { useFieldArray, useForm } from "react-hook-form";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook2, ImWhatsapp } from "react-icons/im";

import { api } from "../../utils/api";
import { createShopDto, updateShopDto } from "../../utils/validations";
import InputField from "../InputField";
import { Button } from "./Button";
import Card from "./Card";
import SearchFilter from "./SearchFilter";

const AddShopForm = ({
  shop,
}: {
  shop?:
    | (Shop & {
        branches: {
          shopId?: string;
          address: string;
          location: string;
          phoneNumber: string;
          id: string;
        }[];
      })
    | null;
}) => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    setError,
    control,
    handleSubmit,
    getFieldState,
  } = useForm({
    defaultValues: {
      id: shop?.id || null,
      ownerId: shop?.ownerId || "",
      name: shop?.name || "",
      location: shop?.location || "",
      address: shop?.address || "",
      openingTime: shop?.openingTime || "",
      closingTime: shop?.closingTime || "",
      phoneNumber: shop?.phoneNumber || "",
      description: shop?.description || "",
      branches: shop?.branches || [],
    },
    resolver: zodResolver(shop?.ownerId ? updateShopDto : createShopDto),
  });
  const { fields, append, remove } = useFieldArray({
    name: "branches",
    control,
  });

  console.log(getValues());

  const shopOwners = api.users.getUsersByRole.useQuery({ role: "shop_owner" });
  const createShopMutation = api.shops.createShop.useMutation();
  const updateShopMutation = api.shops.updateShop.useMutation();

  const submitHandler = async (data: any) => {
    if (data.ownerId === "") {
      return setError("ownerId", {
        message: "Shop owner is required.",
      });
    }

    try {
      console.log(data);
      if (!data.id) {
        console.log("created");
        createShopMutation.mutate(data);
      } else {
        console.log("updated");
        updateShopMutation.mutate(data);
      }
    } catch (error: any) {
      // setError(error.response.data.error);
    }
  };

  const owners = shopOwners?.data?.map((shopOwner) => ({
    id: shopOwner.id,
    label: `${shopOwner.firstName} ${shopOwner.middleName} ${shopOwner.lastName}`,
  }));

  console.log(errors);

  return (
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
            field="ownerId"
            options={owners || []}
            errors={errors}
            setValue={setValue}
            value={getValues().ownerId}
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
              <InputField
                name={`branches.${index}.location`}
                label="Location"
                register={register}
                errors={errors}
                validationSchema={{ required: "Location is required" }}
              />
            </div>
            <div className="flex flex-col gap-5 lg:flex-row">
              <InputField
                name={`branches.${index}.address`}
                label="Address"
                register={register}
                errors={errors}
                validationSchema={{ required: "Address is required" }}
              />
              <InputField
                name={`branches.${index}.phoneNumber`}
                label="Phone Number"
                register={register}
                errors={errors}
                validationSchema={{ required: "Location is required" }}
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
        <Button
          onClick={() =>
            append({
              address: "",
              location: "",
              phoneNumber: "",
              id: "",
              shopId: shop?.id,
            })
          }
        >
          Add Branch
        </Button>
        <Button type="submit">
          {`${getValues().id ? "Edit" : "Add"} Shop`}
        </Button>
      </form>
    </Card>
  );
};

export default AddShopForm;
