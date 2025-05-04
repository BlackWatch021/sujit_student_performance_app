import { poppins, roboto } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const StudentDashboard = () => {
  const cards = [
    {
      heading: "Students",
      src: "students.svg",
      alt: "student",
      text: "1200",
    },
    {
      heading: "Average GPA",
      src: "gpa.svg",
      alt: "gpa",
      text: "3.4",
    },
    {
      heading: "Attendance",
      src: "attendance.svg",
      alt: "attendance",
      text: "92%",
    },
    {
      heading: "Stress",
      src: "stress.svg",
      alt: "stress",
      text: "Moderate",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1
          className={`${poppins.className} font-semibold text-sectionHeading`}
        >
          Hi Sasuke
        </h1>
        <p className={`${roboto.className} text-para`}>
          “Keep pushing your limits!”
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-between gap-y-10 px-28">
        {cards.map(({ heading, src, alt, text }, index) => {
          return (
            <div
              key={index}
              className="w-5/12 px-8 py-6 rounded-xl bg-white shadow-xl"
            >
              <h1
                className={`${poppins.className} font-semibold text-sectionHeading`}
              >
                {heading}
              </h1>
              <div className="flex justify-center items-center gap-x-10 mt-2">
                <Image
                  src={`/assets/cards/${src}`}
                  alt={alt}
                  width={150}
                  height={150}
                />
                <div className="">
                  <p
                    className={`${poppins.className} font-semibold text-sectionHeading`}
                  >
                    {text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentDashboard;
