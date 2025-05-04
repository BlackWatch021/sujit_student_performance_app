"use client";
import BarChartProject from "@/components/barChart";
import LineChartProject from "@/components/lineChart";
import DataTable from "@/components/table";
import {
  departmentDataAdmin,
  performanceDataAdmin,
  studentSubjectGradesBarData,
} from "@/utils/chartData";
import { poppins, roboto } from "@/utils/fonts";
import {
  studentPerformanceColumns,
  studentPerformanceData,
} from "@/utils/tableData";
import React from "react";

const Performance = () => {
  return (
    <div>
      {" "}
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
      <div className="flex gap-x-8 mt-10">
        <LineChartProject data={performanceDataAdmin} />
        <BarChartProject
          data={studentSubjectGradesBarData}
          title="Grades by Subject"
          xKey="subject"
          yKey="grade"
        />
      </div>
      <div className="mt-10">
        <DataTable
          columns={studentPerformanceColumns}
          data={studentPerformanceData}
          title="Student Wellbeing Overview"
        />
      </div>
    </div>
  );
};

export default Performance;
