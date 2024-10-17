import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  color: "primary" | "default";
  onClick: () => void;
  children: ReactNode;
};

const colorClasses = (color: Props["color"]) => {
  switch (color) {
    case "primary":
      return "bg-blue-500 text-white";
    case "default":
      return "bg-gray-300 text-black";
    default:
      return color satisfies never;
  }
};

export const Button = ({ color, onClick, children }: Props) => {
  return (
    <button
      className={clsx(colorClasses(color), "rounded", "p-2")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
