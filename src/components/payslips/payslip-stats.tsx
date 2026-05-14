"use client";

import { motion } from "framer-motion";

import {
  FileText,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Payslips Generated",
    value: "12,548",
    icon: FileText,
  },
  {
    title: "Delivered Successfully",
    value: "12,301",
    icon: CheckCircle2,
  },
  {
    title: "Pending Delivery",
    value: "247",
    icon: Clock3,
  },
];

export default function PayslipStats() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        grid grid-cols-1
        md:grid-cols-3
        gap-6
        xl:gap-7
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
              p-7
              lg:p-8
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

                <p className="text-base font-medium text-gray-300 mb-2.5 leading-snug">
                  {stat.title}
                </p>

                <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold tracking-tight tabular-nums">
                  {stat.value}
                </h3>

              </div>

              <div
                className="
                  p-3.5 rounded-xl
                  bg-cyan-500/10
                  border border-cyan-400/20
                  text-cyan-300
                "
              >
                <Icon size={22} strokeWidth={1.75} />
              </div>

            </div>

          </motion.div>

        );
      })}

    </motion.div>
  );
}