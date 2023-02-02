import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginValidation = z.object({
  email: z.string({ required_error: "Email is required." }).email(),
  password: z
    .string({ required_error: "Password is required." })
    .min(6, "Minimum characters should be six."),
});

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidation),
  });

  const submitHandler = (data: any) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="min-h-screen bg-authImage bg-cover bg-no-repeat">
      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,100,0.7)] bg-[rgba(0_0_100_0.7)] bg-gradient-to-r">
        <div className="relative flex w-full max-w-md flex-col items-center rounded  bg-white p-5 pt-10">
          <div
            className="absolute -top-11 flex h-20 w-20 items-center justify-center rounded-full border bg-white text-3xl text-gray-500 shadow-md
          "
          >
            Mi
          </div>
          <div className="relative w-full">
            <h3 className="text-center text-3xl font-bold text-blue-800">
              Sign In
            </h3>
            <form onSubmit={handleSubmit(submitHandler)}>
              <InputField
                label="Email"
                name="email"
                type="email"
                register={register}
                errors={errors}
                validationSchema={{ required: "Email is required" }}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                register={register}
                errors={errors}
                validationSchema={{ required: "Password is required" }}
              />
              <input
                type="submit"
                className="mt-2 w-full cursor-pointer rounded bg-blue-800 py-2 text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
