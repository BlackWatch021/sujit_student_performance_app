"use client";
import DataTable from "@/components/table";
import { poppins, roboto } from "@/utils/fonts";
import {
  analyticsTableColumns,
  analyticsTableData,
  stressTableColumns,
  stressTableData,
} from "@/utils/tableData";
import React from "react";

const Analytics = () => {
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
      <div className="mt-10">
        <DataTable
          columns={analyticsTableColumns}
          data={analyticsTableData}
          title="Student Wellbeing Overview"
        />
      </div>
    </div>
  );
};

export default Analytics;
