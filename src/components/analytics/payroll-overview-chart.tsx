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
        p-7
        lg:p-8
        min-h-[480px]
        lg:min-h-[500px]
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

        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
          Payroll Overview
        </h2>

        <p className="text-base text-gray-400 mt-2 leading-relaxed">
          Monthly payroll processing trends
        </p>

        <div className="h-[360px] lg:h-[400px] mt-8 lg:mt-9">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 4 }}>

              <XAxis
                dataKey="month"
                stroke="#6b7280"
                tick={{ fill: "#9ca3af", fontSize: 14 }}
                tickLine={false}
                axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(9, 9, 11, 0.92)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  fontSize: "14px",
                  padding: "10px 14px",
                }}
                labelStyle={{ color: "#e5e7eb", fontWeight: 600 }}
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

    </div>
  );
}