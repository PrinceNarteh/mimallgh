import React from "react";
import { FieldErrorsImpl, FieldValues, UseFormRegister } from "react-hook-form";

interface IInputField {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  validationSchema?: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
  };
}

const InputField = ({
  name,
  label,
  register,
  errors,
  type = "text",
  validationSchema,
  required = false,
}: IInputField) => (
  <div className="my-2 w-full">
    <label
      htmlFor={name}
      className="capitalize block mb-1.5 pl-2 tracking-widest"
    >
      {label}
      {required && "*"}
    </label>
    <input
      id={name}
      type={type}
      {...register(name, validationSchema)}
      className="outline-none bg-transparent border border-gray-500 rounded w-full p-2"
    />
    {errors && errors[name] && (
      <span className="text-sm text-red-500 pl-1">
        {errors[name]?.message as string}
      </span>
    )}
  </div>
);
export default InputField;
