import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type IButton = {
  variant?: "primary" | "danger";
  children: React.ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  variant = "primary",
  children,
  ...props
}: IButton) => {
  return (
    <button
      {...props}
      className={`my-3 flex items-center gap-2 rounded py-2  px-4 text-white duration-300 hover:scale-105 ${
        variant === "primary" ? "bg-blue-800" : "bg-red-700"
      }`}
    >
      {children}
    </button>
  );
};
