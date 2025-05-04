"use client";

import { roboto } from "@/utils/fonts";

export default function DataTable({ columns, data, title = "Table" }) {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>

      <table className="min-w-full table-auto text-sm text-left border-collapse">
        <thead className="bg-indigo-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className={`${roboto.className} text-para px-4 py-2 font-semibold text-gray-700`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-indigo-50"}
            >
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className={`${roboto.className} text-para px-4 py-2 text-black/50 w-60 max-w-[240px] truncate`}
                >
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
