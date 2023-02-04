import React from "react";
import {
  FieldErrorsImpl,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface IInputField {
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  validationSchema?: RegisterOptions;
}

const InputField = ({
  name,
  label,
  register,
  errors,
  type = "text",
  validationSchema,
}: IInputField) => (
  <div className="my-2 w-full">
    <label
      htmlFor={name}
      className="mb-1.5 block pl-2 capitalize tracking-widest"
    >
      {label}
      {validationSchema?.required && "*"}
    </label>
    <input
      id={name}
      type={type}
      {...register(name, validationSchema)}
      className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none"
    />
    {errors && errors[name] && (
      <span className="pl-1 text-sm text-red-500">
        {errors[name]?.message as string}
      </span>
    )}
  </div>
);
export default InputField;
