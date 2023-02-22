import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type IButton = {
  variant?: "primary" | "success" | "danger";
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
      className={`my-3 flex items-center gap-2 rounded bg-blue-600 py-2  px-4 text-white duration-300 hover:scale-105 ${
        variant === "success" && "bg-green-600"
      } ${variant === "danger" && "bg-red-600"}`}
    >
      {children}
    </button>
  );
};
