import Button from "@/components/btn";
import { poppins, roboto } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

const Signup = () => {
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
          Create your account
        </h2>
        <form>
          <div className=" flex flex-col mb-4">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="full_name"
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="John Wick"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
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
          <div className=" flex flex-col mb-4">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
        </form>
        <div className="my-6">
          <div className="flex mt-4 justify-between">
            <Button num={1} text={"Register"} />
          </div>

          <p className={`${roboto.className} text-para mt-4`}>
            Already have an account{" "}
            <Link href="/" className=" text-secondary underline">
              Login!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
