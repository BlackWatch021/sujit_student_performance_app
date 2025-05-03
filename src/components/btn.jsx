import { roboto } from "@/utils/fonts";
import React from "react";

const Button = ({ num, text }) => {
  return (
    <button
      className={`${
        roboto.className
      } min-w-[200px] max-w-[400px] cursor-pointer text-para rounded-md px-6 py-2 ${
        num === 1 ? "bg-black" : "bg-white"
      } ${num === 1 ? "text-white" : "text-black"} ${(num =
        !1 || "border-black border-1")}
        `}
    >
      {text || "Click here"}
    </button>
  );
};

export default Button;
