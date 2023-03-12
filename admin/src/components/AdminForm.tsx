import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { api } from "./../utils/api";
import { createAdminDto, updateAdminDto } from "./../utils/validations";
import InputField from "./InputField";
import { Button } from "./Button";
import Card from "./Card";

const convertLevelToString = (level: string) => {
  switch (level) {
    case "LEVEL_ONE":
      return "level_one";
    case "LEVEL_TWO":
      return "level_two";
    case "LEVEL_THREE":
      return "level_three";
    case "SUPER_USER":
      return "super_user";
    default:
      break;
  }
};

const AdminForm = ({ admin }: { admin?: User | null | undefined }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    handleSubmit,
  } = useForm({
    defaultValues: {
      id: admin?.id || "",
      firstName: admin?.firstName || "",
      lastName: admin?.lastName || "",
      middleName: admin?.middleName || "",
      email: admin?.email || "",
      address: admin?.address || "",
      nationality: admin?.nationality || "",
      cardType: admin?.cardType || "",
      cardNumber: admin?.cardNumber || "",
      phoneNumber: admin?.phoneNumber || "",
      alternateNumber: admin?.alternateNumber || "",
      password: admin?.password || "",
      level: (admin?.level && convertLevelToString(admin.level)) || "",
      role: admin?.role || "ADMIN",
    },
    resolver: zodResolver(admin?.id ? updateAdminDto : createAdminDto),
  });
  const router = useRouter();

  const createAdmin = api.users.createAdmin.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const updateAdmin = api.users.updateAdmin.useMutation();

  const submitHandler = async (data: any) => {
    if (!data.id) {
      createAdmin.mutate(data, {
        onSuccess: (data) => {
          toast.success("Admin created successfully");
          reset();
          router.push(`/administrators/${data.id}`);
        },
      });
    } else {
      updateAdmin.mutate(data, {
        onSuccess: (data) => {
          toast.success("Admin updated successfully");
          reset();
          router.push(`/administrators/${data.id}`);
        },
      });
    }
  };

  return (
    <div className="mx-auto max-w-4xl pb-7">
      <Card heading={`${admin?.id ? "Edit" : "Add"} Administrator`}>
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
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="my-2 w-full">
              <label
                htmlFor=""
                className="mb-1.5 block pl-2 capitalize tracking-widest"
              >
                ID Card Type
              </label>
              <select
                className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none"
                {...register("cardType")}
                defaultValue={getValues().cardType}
              >
                <option value="">Select Card</option>
                <option value="ghana_card">Ghana Card</option>
                <option value="student_id">Student ID</option>
                <option value="voters_id">Voters ID</option>
              </select>
            </div>
            <div className="my-2 w-full">
              <label
                htmlFor={"cardNumber"}
                className="mb-1.5 block pl-2 capitalize tracking-widest"
              >
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                {...register("cardNumber")}
                className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none"
              />
              {errors && errors["cardNumber"] && (
                <span className="pl-1 text-sm text-red-500">
                  {errors["cardNumber"]?.message as string}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <InputField
              label="Phone Number"
              name="phoneNumber"
              register={register}
              errors={errors}
              validationSchema={{ required: "Phone number is required" }}
            />
            <InputField
              name="alternateNumber"
              label="Alternate Phone Number"
              register={register}
              errors={errors}
            />
          </div>
          {!admin?.id && (
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
          <div>
            <label
              htmlFor="level"
              className="mb-1.5 block pl-2 capitalize tracking-widest"
            >
              Level
            </label>
            <select
              id="level"
              className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none"
              {...register("level")}
            >
              <option
                className="bg-light-gray"
                value="level_one"
                selected={admin?.level === "LEVEL_ONE"}
              >
                Level One
              </option>
              <option
                className="bg-light-gray"
                value="level_two"
                selected={admin?.level === "LEVEL_TWO"}
              >
                Level Two
              </option>
              <option
                className="bg-light-gray"
                value="level_three"
                selected={admin?.level === "LEVEL_THREE"}
              >
                Level Three
              </option>
              <option
                className="bg-light-gray"
                value="super_user"
                selected={admin?.level === "SUPER_USER"}
              >
                Super User
              </option>
            </select>
            {errors && errors["level"] && (
              <span className="pl-1 text-sm text-red-500">
                {errors["level"]?.message as string}
              </span>
            )}
          </div>
          <Button
            type="submit"
            className="rounded bg-blue-600 py-2 px-4 text-white"
            disabled={isSubmitting}
          >
            {`${admin?.id ? "Edit" : "Add"} Administrator`}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AdminForm;
