import React, { useState } from "react";
import Card from "../../../../components/admin/Card";
import InputField from "../../../../components/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createShopOwnerDto } from "../../../../utils/validations";
import { httpClient } from "../../../../utils/httpClient";
import { toast } from "react-hot-toast";

const AddShopOwner = () => {
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(createShopOwnerDto),
  });

  const submitHandler = async (data: any) => {
    try {
      const res = await httpClient.post("/auth/register", data);
      console.log(res.data.user);
      toast.success("Account created successfully");
    } catch (error: any) {
      setError(error.response.data.error);
    }
  };

  console.log(errors);

  return (
    <div className="mx-auto max-w-4xl">
      <Card heading="Add Shop Owner">
        {error && <li className="py-2">Email already in use.</li>}
        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
          <div className="flex flex-col gap-5 lg:flex-row">
            <InputField
              name="firstName"
              label="First name"
              register={register}
              errors={errors}
              required
              validationSchema={{ required: "First Name is required" }}
            />
            <InputField
              name="middleName"
              label="Other name(s)"
              register={register}
              errors={errors}
            />
            <InputField
              name="lastName"
              label="Last name"
              register={register}
              errors={errors}
              required
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
            required
          />
          <div className="flex flex-col gap-5 md:flex-row">
            <InputField
              name="password"
              label="Password"
              type="password"
              register={register}
              errors={errors}
              validationSchema={{ required: "Password is required" }}
              required
            />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              register={register}
              errors={errors}
              validationSchema={{ required: "Confirm password is required" }}
              required
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
