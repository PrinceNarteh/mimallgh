import React from "react";

interface IStatus {
  variant: "success" | "primary" | "danger";
  children: React.ReactNode;
}

const Status = ({ variant = "success", children }: IStatus) => {
  let color = "";

  switch (variant) {
    case "success":
      color = "green";
      break;
    case "primary":
      color = "blue";
      break;
    case "danger":
      color = "red";
      break;
    default:
      color = "green";
      break;
  }

  return (
    <span
      className={`rounded-sm bg-opacity-30 p-1.5 text-xs font-medium  uppercase tracking-wider`}
    >
      {children}
    </span>
  );
};

export default Status;
