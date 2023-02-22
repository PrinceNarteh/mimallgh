import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import InputField from "./../components/InputField";
import { api } from "./../utils/api";
import { createShopOwnerDto, updateShopOwnerDto } from "./../utils/validations";
import { Button } from "./Button";
import Card from "./Card";

const ShopOwnerForm = ({
  shopOwner,
}: {
  shopOwner?: User | null | undefined;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: {
      ...(shopOwner?.id && { id: shopOwner?.id }),
      firstName: shopOwner?.firstName || "",
      lastName: shopOwner?.lastName || "",
      middleName: shopOwner?.middleName || "",
      email: shopOwner?.email || "",
      address: shopOwner?.address || "",
      nationality: shopOwner?.nationality || "",
      cardType: shopOwner?.cardType || "",
      cardNumber: shopOwner?.cardNumber || "",
      phoneNumber: shopOwner?.phoneNumber || "",
      alternateNumber: shopOwner?.alternateNumber || "",
      password: shopOwner?.password || "",
      role: shopOwner?.role || "shop_owner",
    },
    resolver: zodResolver(
      shopOwner?.id ? updateShopOwnerDto : createShopOwnerDto
    ),
  });

  console.log(getValues());
  console.log(errors);

  const createUser = api.users.register.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const updateUser = api.users.updateUser.useMutation();
  const router = useRouter();

  const submitHandler = async (data: any) => {
    if (!shopOwner?.id) {
      createUser.mutate(
        {
          ...data,
          role: "SHOP_OWNER",
        },
        {
          onSuccess: (data) => {
            toast.success("Shop owner created successfully.");
            router.push(`/admin/shop-owners/${data.id}`);
          },
        }
      );
    } else {
      updateUser.mutate(
        {
          ...data,
          role: "SHOP_OWNER",
        },
        {
          onSuccess: (data) => {
            toast.success("Shop owner updated successfully.");
            router.push(`/admin/shop-owners/${data.id}`);
          },
        }
      );
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <Card heading={`${shopOwner?.id ? "Edit" : "Add"} Shop Owner`}>
        <form
          className="w-full space-y-3"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col gap-5 lg:flex-row">
            <InputField
              name="firstName"
              label="First name"
              register={register}
              errors={errors}
              validationSchema={{ required: "First Name is required" }}
            />
            <InputField
              name="middleName"
              label="Other name(s)"
              register={register}
              errors={errors}
              validationSchema={{ required: false }}
            />
            <InputField
              name="lastName"
              label="Last name"
              register={register}
              errors={errors}
              validationSchema={{ required: "Last Name is required" }}
            />
          </div>
          <InputField
            name="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            validationSchema={{ required: "Email is required" }}
          />
          <div className="flex flex-col gap-5 md:flex-row">
            <InputField
              name="address"
              label="Address"
              register={register}
              errors={errors}
              validationSchema={{ required: "Address is required" }}
            />
            <InputField
              name="nationality"
              label="Nationality"
              register={register}
              errors={errors}
              validationSchema={{ required: "Nationality is required" }}
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="mb-1.5 block pl-2 capitalize tracking-widest"
            >
              ID Card Type
            </label>
            <div className="flex flex-col gap-5 md:flex-row">
              <select className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none">
                <option value="">Select Card</option>
                <option value="ghana-card">Ghana Card</option>
                <option value="student-id">Student ID</option>
                <option value="voters-id">Voters ID</option>
              </select>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <InputField
              name="phoneNumber"
              label="Phone Number"
              register={register}
              errors={errors}
              validationSchema={{ required: "Phone number is required" }}
            />
            <InputField
              name="alternatePhoneNumber"
              label="Alternate Phone Number"
              register={register}
              errors={errors}
            />
          </div>
          {!shopOwner?.id && (
            <div className="flex flex-col gap-5 md:flex-row">
              <InputField
                name="password"
                label="Password"
                type="password"
                register={register}
                errors={errors}
                validationSchema={{ required: "Password is required" }}
              />
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                register={register}
                errors={errors}
                validationSchema={{ required: "Confirm password is required" }}
              />
            </div>
          )}
          <Button type="submit">
            {`${shopOwner?.id ? "Edit" : "Add"} Shop Owner`}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ShopOwnerForm;
