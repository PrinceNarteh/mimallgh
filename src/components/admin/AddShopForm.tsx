import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "../../utils/api";
import { createShopOwnerDto, IUpdateShop } from "../../utils/validations";
import Card from "../admin/Card";
import SearchFilter from "../admin/SearchFilter";
import InputField from "../InputField";

const AddShopForm = ({ shop }: { shop?: IUpdateShop }) => {
  const {
    register,
    formState: { errors },
    setValue,
    setError,
    handleSubmit,
  } = useForm({
    defaultValues: {
      shop_owner: shop?.ownerId || null,
      name: shop?.name || "",
      location: shop?.location || "",
      address: shop?.address || "",
      phoneNumber: shop?.phoneNumber || "",
      description: shop?.description || "",
    },
    resolver: zodResolver(createShopOwnerDto),
  });
  const shopOwners = api.shop.getAllShopOwners.useQuery();
  const createShopMutation = api.shop.createShop.useMutation({});

  const submitHandler = async (data: any) => {
    if (data.shop_owner === "") {
      return setError("shop_owner", {
        message: "Shop owner is required.",
      });
    }
    try {
      const res = await createShopMutation.mutate(data);
    } catch (error: any) {
      // setError(error.response.data.error);
    }
  };

  return (
    <Card heading="Add Shop">
      <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
        <div className="my-2 w-full">
          <label
            htmlFor="shop_owner"
            className="mb-1.5 block pl-2 capitalize tracking-widest"
          >
            Shop Owner
          </label>
          <SearchFilter
            shopOwners={shopOwners.data || []}
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
  );
};

export default AddShopForm;
