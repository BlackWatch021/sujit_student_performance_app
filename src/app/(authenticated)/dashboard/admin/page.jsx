"use client";
import AdminCards from "@/components/adminCards";
import BarChartProject from "@/components/barChart";

import LineChartProject from "@/components/lineChart";
import DataTable from "@/components/table";
import { departmentDataAdmin, performanceDataAdmin } from "@/utils/chartData";
import { poppins, roboto } from "@/utils/fonts";
import { stressTableColumns, stressTableData } from "@/utils/tableData";
import React from "react";

const AdminDashboard = () => {
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
      <AdminCards />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"> */}
      <div className="flex gap-x-8 mt-10">
        <LineChartProject data={performanceDataAdmin} />
        <BarChartProject data={departmentDataAdmin} />
      </div>
      <div className="mt-10">
        <DataTable
          columns={stressTableColumns}
          data={stressTableData}
          title="Student Wellbeing Overview"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
