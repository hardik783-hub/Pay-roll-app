"use client";

import { motion } from "framer-motion";

import {
  DollarSign,
  TimerReset,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Monthly Payroll",
    value: "$2.27M",
    icon: DollarSign,
  },
  {
    title: "Avg Processing Time",
    value: "1.8s",
    icon: TimerReset,
  },
  {
    title: "Success Rate",
    value: "99.97%",
    icon: Activity,
  },
];

export default function AnalyticsStats() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        grid grid-cols-1
        md:grid-cols-3
        gap-5
      "
    >

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (

          <motion.div
            key={stat.title}
            whileHover={{
              y: -3,
            }}
            transition={{ duration: 0.2 }}
            className="
              relative overflow-hidden
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6
            "
          >

            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-cyan-500/[0.06]
                to-purple-500/[0.06]
              "
            />

            <div
              className="
                relative z-10
                flex items-start justify-between
              "
            >

              <div>

                <p className="text-sm text-gray-400 mb-2">
                  {stat.title}
                </p>

                <h3 className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </h3>

              </div>

              <div
                className="
                  p-3 rounded-xl
                  bg-cyan-500/10
                  border border-cyan-400/20
                  text-cyan-300
                "
              >
                <Icon size={20} />
              </div>

            </div>

          </motion.div>

        );
      })}

    </motion.div>
  );
}