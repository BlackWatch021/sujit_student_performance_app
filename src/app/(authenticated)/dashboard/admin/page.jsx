import AdminCards from "@/components/adminCards";
import { poppins, roboto } from "@/utils/fonts";
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
    </div>
  );
};

export default AdminDashboard;
