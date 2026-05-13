"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", payroll: 40000 },
  { month: "Feb", payroll: 52000 },
  { month: "Mar", payroll: 61000 },
  { month: "Apr", payroll: 58000 },
  { month: "May", payroll: 72000 },
  { month: "Jun", payroll: 81000 },
];

export default function PayrollChart() {
  return (
    <div className="
      h-full
      bg-white/5
      border border-white/10
      rounded-2xl
      p-5
      backdrop-blur-xl
    ">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Payroll Trends
          </h2>

          <p className="text-gray-400 text-sm">
            Monthly payroll processing analytics
          </p>
        </div>
      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis
              dataKey="month"
              stroke="#888"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="payroll"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}