import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import InputField from "../../components/InputField";

const loginValidation = z.object({
  email: z.string({ required_error: "Email is required." }).email(),
  password: z
    .string({ required_error: "Password is required." })
    .min(6, "Minimum characters should be six."),
});

type ILogin = z.infer<typeof loginValidation>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginValidation),
  });
  const router = useRouter();

  const submitHandler: SubmitHandler<ILogin> = async (data) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.error === null) {
      toast.success("Login successful");
      router.push("/").catch((error) => console.log(error));
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-[calc(100vh-56px)] overflow-hidden bg-authImage bg-cover bg-no-repeat">
      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(31,41,55,0.8)] bg-[rgba(31,41,55,0.8)] bg-gradient-to-r px-5">
        <div className="relative flex w-full max-w-md flex-col items-center rounded  bg-white p-5 pt-10">
          <div className="absolute -top-11 flex h-20 w-20 items-center justify-center rounded-full border bg-white text-3xl text-gray-500 shadow-md">
            Mi
          </div>
          <div className="relative w-full">
            <h3 className="text-center text-3xl font-bold text-blue-800">
              Login
            </h3>
            <p className="my-2 text-center text-slate-500">
              Enter your credentials to login
            </p>
            <form
              onSubmit={() => {
                handleSubmit(submitHandler);
              }}
            >
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
                value="Login"
                className="mt-2 w-full cursor-pointer rounded bg-blue-800 py-2 text-white"
              />
            </form>
            <p className="mt-3 text-gray-500">
              Don&apos;t have an account?{" "}
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
