import React from "react";

type ISelectOption = {
  label: string;
  value: string;
} & React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>;

export const SelectOption = ({ label, value, ...props }: ISelectOption) => (
  <option value={value} className="bg-light-gray" {...props}>
    {label}
  </option>
);
