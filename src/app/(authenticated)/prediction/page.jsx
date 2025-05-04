import Button from "@/components/btn";
import { poppins, roboto } from "@/utils/fonts";
import React from "react";

const Prediction = () => {
  return (
    <div>
      <div className="mb-6">
        <h1
          className={`${poppins.className} font-semibold text-sectionHeading`}
        >
          Dashboard
        </h1>
        <p className={`${roboto.className} text-para`}>Hi, John</p>
      </div>

      <div className="min-h-[200px] w-full bg-white shadow-xl py-8 px-18 rounded-xl">
        <div className="mb-6">
          <h1
            className={`${poppins.className} font-semibold text-sectionHeading`}
          >
            Fill in all the details of the student
          </h1>
        </div>
        <div className="flex gap-x-18 my-4">
          <div className="w-1/2 flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="First_name"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Wick"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
        </div>
        <div className="flex gap-x-18 my-4">
          <div className="w-1/2 flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="Attendance"
            >
              Attendance
            </label>
            <input
              type="number"
              min={0}
              max={100}
              placeholder="68"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="Study_Hours_per_Week"
            >
              Study Hours per Week
            </label>
            <input
              type="number"
              min={0}
              max={168}
              placeholder="5"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
        </div>
        <div className="flex gap-x-18 my-4">
          <div className="w-1/2 flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="Stress_Level(1-10)"
            >
              Stress Level(1-10)
            </label>
            <input
              type="number"
              min={0}
              max={10}
              placeholder="6"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="Sleep_hours_per_night"
            >
              Sleep hours per night
            </label>
            <input
              type="number"
              min={0}
              max={24}
              placeholder="5"
              className="rounded-md border-black border-1 px-2 py-1 text-para placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            />
          </div>
        </div>
        <div className="flex gap-x-18 my-4">
          <div className="w-1/2 flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="Sleep_hours_per_night"
            >
              Family Income Group
            </label>
            <select
              defaultValue=""
              className="rounded-md border-black border-[1px] px-2 py-2 text-para text-black placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            >
              <option value="" disabled className="text-black/40 italic">
                Select Level
              </option>
              <option value="low">Low</option>
              <option value="mid">Mid</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="w-1/2 flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="Sleep_hours_per_night"
            >
              Participation in Extracurricular
            </label>
            <select
              defaultValue=""
              className="rounded-md border-black border-[1px] px-2 py-2 text-para text-black placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            >
              <option value="" disabled className="text-black/40 italic">
                Select Option
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="flex w-[518.4px] gap-x-18 my-4">
          <div className="w-full flex flex-col">
            <label
              className={`${roboto.className} font-semibold text-navbar`}
              htmlFor="Sleep_hours_per_night"
            >
              Family Income Group
            </label>
            <select
              defaultValue=""
              className="rounded-md border-black border-[1px] px-2 py-2 text-para text-black placeholder:italic placeholder:text-[12pt] placeholder:text-black/40"
              required
            >
              <option value="" disabled className="text-black/40 italic">
                Select Department
              </option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="Civil">Civil</option>
              <option value="Electronics">Electronics</option>
              <option value="Chemical">Chemical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Sales">Sales</option>
              <option value="Management">Management</option>
              <option value="Hospitality">Hospitality</option>
            </select>
          </div>
        </div>
        <div className="flex w-[518.4px] gap-x-18 mt-8">
          <Button text={"Predict"} num={1} href={""} />
        </div>
        <h1
          className={`${poppins.className} font-semibold text-sectionHeading mt-8`}
        >
          Prediction Output
        </h1>
        <div>
          <p className={`${roboto.className} text-para`}>
            Predicted Total Score: -
          </p>
          <p className={`${roboto.className} text-para`}>Predicted Grade: -</p>
        </div>
        <div>
          <h1
            className={`${poppins.className} font-semibold text-sectionHeading`}
          ></h1>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
