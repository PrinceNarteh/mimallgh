import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import registerImg from "../../../assets/images/register.jpg";
import Link from "next/link";
import { signIn } from "next-auth/react";

const loginValidation = z.object({
  email: z.string({ required_error: "Email is required." }).email(),
  password: z
    .string({ required_error: "Password is required." })
    .min(6, "Minimum characters should be six."),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginValidation),
  });

  const submitHandler = async (data: { email: string; password: string }) => {
    try {
      const res = await signIn("credentials", data);
    } catch (error) {}
  };

  return (
    <div className="min-h-[calc(100vh-56px)] overflow-hidden bg-authImage bg-cover bg-no-repeat">
      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(31,41,55,0.8)] bg-[rgba(31,41,55,0.8)] bg-gradient-to-r px-5">
        <div className="min-h-96 mx-auto grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-md  bg-gray-100 p-5 shadow-lg md:grid-cols-3">
          <div className="relative overflow-hidden rounded-md">
            <Image
              src={registerImg}
              alt="Taking notes image"
              className="w-full object-cover"
              fill={true}
            />
          </div>
          <div className="col-span-2 ml-5">
            <div className="my-4 flex justify-center">
              {/* <Image src={logo} alt="logo" /> */}
            </div>
            <h3 className="text-3xl font-bold text-slate-700">Register</h3>
            <p className="my-2 text-slate-500">
              Enter your information to get an account
            </p>
            {/* {error && <p className="py-2 text-center text-red-500">{error}</p>} */}
            <form>
              <div className="flex flex-col gap-2">
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
              </div>
              <button className="mt-2 flex w-full items-center justify-center space-x-3 rounded bg-slate-700 py-2 text-white">
                {/* {isSubmitting && <Spinner />}{" "} */}
                <span className="inline-block">Login</span>
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
