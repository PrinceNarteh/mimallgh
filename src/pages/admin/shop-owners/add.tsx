import { zodResolver } from "@hookform/resolvers/zod";
import { MouseEvent, useState, useCallback, MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Card from "../../../components/admin/Card";
import InputField from "../../../components/InputField";
import { api } from "../../../utils/api";
import { createShopOwnerDto } from "../../../utils/validations";

const AddShopOwner = () => {
  // const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(createShopOwnerDto),
  });
  const [state, setState] = useState("");

  const createUser = api.users.register.useMutation({
    onSuccess: () => {
      toast.success("Shop owner created successfully.");
    },
    onError: (error) => {
      setError("email", { message: error.message });
    },
  });

  const submitHandler = async (data: any) => {
    createUser.mutate({
      ...data,
      role: "shop_owner",
    });
  };

  return (
    <div className="mx-auto max-w-4xl">
      <Card heading="Add Shop Owner">
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

export default AddShopOwner;
