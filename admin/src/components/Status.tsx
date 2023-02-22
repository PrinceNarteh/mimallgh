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

  let bgColor = `text-${color}-800 bg-${color}-300`;

  return (
    <span
      className={`p-1.5 text-xs font-medium uppercase tracking-wider ${bgColor}  rounded-sm bg-opacity-30`}
    >
      {children}
    </span>
  );
};

export default Status;
