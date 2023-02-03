import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Card from "../../../../components/admin/Card";
import InputField from "../../../../components/InputField";
import { api } from "../../../../utils/api";
import { createShopOwnerDto } from "../../../../utils/validations";

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

  const createUser = api.auth.register.useMutation({
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

  // console.log(errors);

  return (
    <div className="mx-auto max-w-4xl">
      <Card heading="Add Shop Owner">
        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
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
          <InputField
            name="address"
            label="Address"
            register={register}
            errors={errors}
            validationSchema={{ required: "Address is required" }}
          />

          <InputField
            name="phoneNumber"
            label="Phone Number"
            register={register}
            errors={errors}
            validationSchema={{ required: "Phone number is required" }}
          />

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
