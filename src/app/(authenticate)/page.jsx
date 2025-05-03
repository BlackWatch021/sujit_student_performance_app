import Button from "@/components/btn";
import { poppins, roboto } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <div className="w-1/2 min-h-[500px] rounded-xl px-40 py-10 border-secondary border-2">
        <div
          className={`${poppins.className} text-heading underline font-extrabold text-center `}
        >
          EduDash
        </div>
        <h2
          className={`${poppins.className} font-semibold text-sectionHeading my-4`}
        >
          Login to your account
        </h2>
        <form>
          <div className=" flex flex-col mb-4">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
          <div className=" flex flex-col mb-4">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="your password"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
        </form>
        <div className="my-6">
          <p className={`${roboto.className} text-para text-secondary`}>
            Forgot Password??
          </p>
          <h2
            className={`${poppins.className} font-semibold text-sectionHeading mt-4`}
          >
            Login as-
          </h2>
          <div className="flex mt-4 justify-between">
            <Button num={1} text={"Admin"} />
            <Button num={2} text={"Student"} />
          </div>

          <p className={`${roboto.className} text-para mt-4`}>
            Don't have an account, create one from{" "}
            <Link href="/signup" className="text-secondary underline">
              here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
