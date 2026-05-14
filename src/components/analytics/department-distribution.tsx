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
        p-7
        lg:p-8
        min-h-[480px]
        lg:min-h-[500px]
      "
    >

      <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
        Department Distribution
      </h2>

      <p className="text-base text-gray-400 mt-2 leading-relaxed">
        Workforce allocation by department
      </p>

      <div className="h-[300px] lg:h-[320px] mt-8 lg:mt-9">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={78}
              outerRadius={112}
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

      <div className="space-y-3.5 mt-5">

        {data.map((item, index) => (

          <div
            key={item.name}
            className="flex items-center justify-between gap-3"
          >

            <div className="flex items-center gap-3 min-w-0">

              <div
                className="w-3.5 h-3.5 shrink-0 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="text-[15px] text-gray-200 truncate">
                {item.name}
              </span>

            </div>

            <span className="text-[15px] text-gray-400 tabular-nums shrink-0">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}