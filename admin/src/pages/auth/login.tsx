import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../../components/InputField";
import { useSession } from "next-auth/react";

const loginValidation = z.object({
  email: z.string({ required_error: "Email is required." }).email(),
  password: z
    .string({ required_error: "Password is required." })
    .min(6, "Minimum characters should be six."),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidation),
  });
  const router = useRouter();

  const submitHandler = async (data: { email: string; password: string }) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    if (res?.error === null) {
      router.push("/shop").catch((error) => console.log(error));
    }
  };

  return (
    <div className="min-h-screen bg-authImage bg-cover bg-no-repeat">
      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,100,0.7)] bg-[rgba(0_0_100_0.7)] bg-gradient-to-r px-5">
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
            <p className="mt-3 text-gray-500">
              Don't have an account?{" "}
              <Link href={`/auth/register`} className="text-blue-500">
                Create
              </Link>{" "}
              account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
