"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  FileText,
  Activity,
} from "lucide-react";

const activities = [
  {
    icon: <CheckCircle2 size={20} strokeWidth={1.75} />,
    text: "Payroll batch RUN-203 completed",
    time: "2 min ago",
  },
  {
    icon: <FileText size={20} strokeWidth={1.75} />,
    text: "Payslip generated for EMP1023",
    time: "5 min ago",
  },
  {
    icon: <Activity size={20} strokeWidth={1.75} />,
    text: "SQS workers scaled to 18 instances",
    time: "8 min ago",
  },
  {
    icon: <Mail size={20} strokeWidth={1.75} />,
    text: "Payslip email delivered successfully",
    time: "12 min ago",
  },
];

export default function ActivityFeed() {
  return (
    <div className="
      bg-white/5
      border border-white/10
      rounded-2xl
      p-6
      lg:p-7
      backdrop-blur-xl
    ">
      
      <div className="mb-7">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
          Live Activity
        </h2>

        <p className="text-base text-gray-400 mt-1.5 leading-relaxed">
          Realtime payroll infrastructure events
        </p>
      </div>

      <div className="space-y-3.5">

        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            className="
              flex items-center justify-between gap-4
              p-4 min-h-[56px] rounded-xl
              bg-white/5
              border border-white/10
              hover:border-cyan-400/20
              transition
            "
          >

            <div className="flex items-center gap-4 min-w-0">

              <div className="
                shrink-0 p-2.5 rounded-lg
                bg-cyan-500/10
                text-cyan-300
              ">
                {activity.icon}
              </div>

              <p className="text-[15px] leading-snug text-gray-100 min-w-0">
                {activity.text}
              </p>

            </div>

            <span className="shrink-0 text-sm text-gray-400 tabular-nums">
              {activity.time}
            </span>

          </motion.div>
        ))}

      </div>
    </div>
  );
}