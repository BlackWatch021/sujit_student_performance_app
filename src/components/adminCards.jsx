import React from "react";
import { poppins, roboto } from "@/utils/fonts";
import Image from "next/image";

const AdminCards = () => {
  const cards = [
    {
      heading: "Students",
      src: "students.svg",
      alt: "student",
      text: "1200",
      subText: "+5% this month",
    },
    {
      heading: "Average GPA",
      src: "gpa.svg",
      alt: "gpa",
      text: "3.4",
      subText: "+0.2 from last term",
    },
    {
      heading: "Attendance",
      src: "attendance.svg",
      alt: "attendance",
      text: "92%",
      subText: "+1% from last month",
    },
    {
      heading: "Stress",
      src: "stress.svg",
      alt: "stress",
      text: "60%",
      subText: "-2% from last term",
    },
  ];

  return (
    <div className="flex w-full justify-between">
      {cards.map(({ heading, src, alt, text, subText }, index) => {
        return (
          <div key={index} className="px-8 py-6 rounded-xl bg-white shadow-xl">
            <h1
              className={`${poppins.className} font-semibold text-sectionHeading`}
            >
              {heading}
            </h1>
            <div className="flex gap-x-3 mt-2">
              <Image
                src={`/assets/cards/${src}`}
                alt={alt}
                width={100}
                height={100}
              />
              <div className="mt-5">
                <p className={`${roboto.className} text-para`}>{text}</p>
                <p className={`${roboto.className} text-navbar`}>{subText}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminCards;
