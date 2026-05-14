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
      p-6
      lg:p-7
      backdrop-blur-xl
    ">

      <div className="flex items-center justify-between mb-7">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
            Payroll Trends
          </h2>

          <p className="text-gray-300 text-base mt-1.5 leading-relaxed">
            Monthly payroll processing analytics
          </p>
        </div>
      </div>

      <div className="h-[380px] lg:h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 4 }}>

            <XAxis
              dataKey="month"
              stroke="#6b7280"
              tick={{ fill: "#a3a3a3", fontSize: 15, fontWeight: 500 }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(9, 9, 11, 0.92)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                fontSize: "15px",
                padding: "12px 16px",
              }}
              labelStyle={{ color: "#e5e7eb", fontWeight: 600, fontSize: "15px" }}
              itemStyle={{ color: "#d1d5db", fontSize: "15px", fontWeight: 500 }}
            />

            <Line
              type="monotone"
              dataKey="payroll"
              stroke="#22d3ee"
              strokeWidth={3.5}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}