"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Engineering", value: 40 },
  { name: "Finance", value: 20 },
  { name: "HR", value: 15 },
  { name: "Operations", value: 15 },
  { name: "Infrastructure", value: 10 },
];

const COLORS = [
  "#22d3ee",
  "#8b5cf6",
  "#06b6d4",
  "#0ea5e9",
  "#6366f1",
];

export default function DepartmentDistribution() {
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

      <h2 className="text-2xl font-semibold">
        Department Distribution
      </h2>

      <p className="text-sm text-gray-400 mt-1">
        Workforce allocation by department
      </p>

      <div className="h-[260px] mt-8">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
            >

              {data.map((_, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="space-y-3 mt-4">

        {data.map((item, index) => (

          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="text-sm text-gray-300">
                {item.name}
              </span>

            </div>

            <span className="text-sm text-gray-400">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}