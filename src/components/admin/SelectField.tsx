import React, { SelectHTMLAttributes } from "react";
import {
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { SelectOption } from "./SelectOption";

interface ISelectField {
  name: string;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

const SelectField = ({
  name,
  label,
  options,
  validationSchema,
  errors,
  register,
}: ISelectField) => {
  return (
    <div className="my-2 w-full">
      <label
        htmlFor={name}
        className="mb-1.5 block pl-2 capitalize tracking-widest"
      >
        {label}
        {validationSchema?.required && "*"}
      </label>
      <select
        className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none"
        {...register(name, validationSchema)}
      >
        {options.map(({ label, value }, index) => (
          <option value={value} className="bg-light-gray">
            {label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="pl-1 text-sm text-red-500">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default SelectField;
