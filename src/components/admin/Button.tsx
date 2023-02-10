import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type IButton = {
  children: React.ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ children, ...props }: IButton) => {
  return (
    <button
      {...props}
      className="my-3 rounded bg-blue-600 py-2 px-4 text-white"
    >
      {children}
    </button>
  );
};
