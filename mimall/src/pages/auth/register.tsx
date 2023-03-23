import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import registerImg from "../../../assets/images/register.jpg";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { api } from "../../utils/api";

const registerValidation = z
  .object({
    firstName: z.string({ required_error: "First name is required" }),
    lastName: z.string({ required_error: "Last name is required" }),
    email: z.string({ required_error: "Email is required." }).email(),
    phoneNumber: z
      .string({ required_error: "Phone number is required." })
      .min(1, "Phone number must be 10 digits"),
    password: z
      .string({ required_error: "Password is required." })
      .min(6, "Minimum characters should be six."),
    confirmPassword: z
      .string({ required_error: "Confirm password name is required." })
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((val) => val?.password === val?.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerValidation),
  });
  const registerMutation = api.users.register.useMutation();

  const submitHandler = async (data: any) => {
    try {
      const user = {
        ...data,
        role: "USER",
      };
      const res = registerMutation.mutate(user);
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh_-_56px)] items-center bg-slate-100 pt-5">
      <div className="mx-auto h-full max-w-6xl bg-white shadow-lg md:w-8/12">
        <div className="grid grid-cols-1 rounded-md p-3 lg:grid-cols-3">
          <div className="relative hidden overflow-hidden rounded-md lg:block">
            <Image
              src={registerImg}
              alt="Taking notes image"
              className="w-full object-cover"
              fill={true}
            />
          </div>
          <div className="col-span-2 ml-5 rounded-md p-5">
            <h3 className="text-3xl font-bold text-slate-700">Register</h3>
            <p className="my-2 text-sm text-slate-500">
              Enter your information to get an account
            </p>
            {/* {error && <p className="py-2 text-center text-red-500">{error}</p>} */}
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:gap-5">
                  <InputField
                    label="First Name"
                    name="firstName"
                    register={register}
                    errors={errors}
                    validationSchema={{ required: "First name is required" }}
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    register={register}
                    errors={errors}
                    validationSchema={{ required: "Last name is required" }}
                  />
                </div>
                <div className="flex flex-col md:flex-row md:gap-5">
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    register={register}
                    errors={errors}
                    validationSchema={{ required: "Last name is required" }}
                  />
                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    register={register}
                    errors={errors}
                    validationSchema={{ required: "Phone number is required" }}
                  />
                </div>
                <div className="flex flex-col md:flex-row md:gap-5">
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    errors={errors}
                    validationSchema={{ required: "Password is required" }}
                  />
                  <InputField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    register={register}
                    errors={errors}
                    validationSchema={{ required: "Passwords do not match" }}
                  />
                </div>
              </div>
              <button className="mt-2 flex items-center justify-center space-x-3 rounded bg-slate-700 px-10 py-2 text-white">
                {/* {isSubmitting && <Spinner />}{" "} */}
                <span className="inline-block">Register</span>
              </button>
            </form>
            <p className="mt-2 text-center text-slate-600">
              Don't have an account?
              <Link href={"/auth/login"} className="text-blue-500">
                {" "}
                Login
              </Link>{" "}
              Here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
