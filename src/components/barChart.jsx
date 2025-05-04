"use client";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BarChartProject({
  data,
  title = "Bar Chart",
  xKey = "department",
  yKey = "students",
}) {
  return (
    <div className="w-full h-100 bg-white px-4 py-10 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ReBarChart
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 30 }}
        >
          <defs>
            <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey={xKey} angle={-15} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#f9fafb", borderColor: "#ddd" }}
            labelStyle={{ color: "#4b5563" }}
            cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
          />
          <Bar
            dataKey={yKey}
            fill="url(#barColor)"
            radius={[6, 6, 0, 0]}
            barSize={40}
          />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}

// "use client";
// import {
//   BarChart as ReBarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function BarChartProject({
//   data,
//   title = "Students by Department",
// }) {
//   return (
//     <div className="w-full h-100 bg-white px-4 py-10 rounded-xl shadow">
//       <h2 className="text-lg font-semibold mb-4">{title}</h2>
//       <ResponsiveContainer width="100%" height="100%">
//         <ReBarChart
//           data={data}
//           margin={{ top: 10, right: 20, left: 10, bottom: 30 }}
//         >
//           <defs>
//             <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#6366f1" stopOpacity={0.9} />
//               <stop offset="95%" stopColor="#6366f1" stopOpacity={0.3} />
//             </linearGradient>
//           </defs>
//           <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//           <XAxis
//             dataKey="department"
//             angle={-15}
//             textAnchor="end"
//             height={60}
//           />
//           <YAxis />
//           <Tooltip
//             contentStyle={{ backgroundColor: "#f9fafb", borderColor: "#ddd" }}
//             labelStyle={{ color: "#4b5563" }}
//             cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
//           />
//           <Bar
//             dataKey="students"
//             fill="url(#barColor)"
//             radius={[6, 6, 0, 0]}
//             barSize={40}
//           />
//         </ReBarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
