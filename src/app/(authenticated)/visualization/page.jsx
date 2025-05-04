import BarChartProject from "@/components/barChart";
import LineChartProject from "@/components/lineChart";
import PieChartProject from "@/components/pieChart";
import {
  departmentDataAdmin,
  genderDistribution,
  performanceDataAdmin,
  subjectDistribution,
} from "@/utils/chartData";
import { poppins, roboto } from "@/utils/fonts";
import React from "react";

const Visualization = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <PieChartProject
          data={genderDistribution}
          title="Gender Distribution"
        />
        <PieChartProject
          data={subjectDistribution}
          title="Subject Distribution"
        />
      </div>

      <div className="mt-10">
        <LineChartProject data={performanceDataAdmin} />
      </div>
      <div className="mt-10">
        <BarChartProject data={departmentDataAdmin} />
      </div>
    </div>
  );
};

export default Visualization;
