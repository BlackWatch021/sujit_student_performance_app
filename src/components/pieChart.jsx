"use client";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];

export default function PieChartProject({ data, title = "Distribution" }) {
  return (
    <div className="w-full md:h-96 bg-white px-6 py-8 rounded-xl shadow flex flex-col md:flex-row gap-8">
      <div className="flex-1 h-72">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <ResponsiveContainer width="100%" height="100%">
          <RePieChart>
            <Tooltip />
            <Pie
              data={data}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </RePieChart>
        </ResponsiveContainer>
      </div>
      {/* Legend */}
      <div className="flex flex-col justify-center gap-3">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text-sm text-gray-700">{entry.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
