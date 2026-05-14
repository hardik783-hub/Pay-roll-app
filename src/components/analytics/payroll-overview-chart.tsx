"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", payroll: 1.2 },
  { month: "Feb", payroll: 1.5 },
  { month: "Mar", payroll: 1.9 },
  { month: "Apr", payroll: 1.7 },
  { month: "May", payroll: 2.1 },
  { month: "Jun", payroll: 2.27 },
];

export default function PayrollOverviewChart() {
  return (

    <div
      className="
        relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
        h-[420px]
      "
    >

      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-cyan-500/[0.04]
          to-purple-500/[0.04]
        "
      />

      <div className="relative z-10">

        <h2 className="text-2xl font-semibold">
          Payroll Overview
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Monthly payroll processing trends
        </p>

        <div className="h-[320px] mt-8">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>

              <XAxis
                dataKey="month"
                stroke="#6b7280"
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

    </div>
  );
}