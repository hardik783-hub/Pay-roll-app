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
    icon: <CheckCircle2 size={18} />,
    text: "Payroll batch RUN-203 completed",
    time: "2 min ago",
  },
  {
    icon: <FileText size={18} />,
    text: "Payslip generated for EMP1023",
    time: "5 min ago",
  },
  {
    icon: <Activity size={18} />,
    text: "SQS workers scaled to 18 instances",
    time: "8 min ago",
  },
  {
    icon: <Mail size={18} />,
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
      p-5
      backdrop-blur-xl
    ">
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Live Activity
        </h2>

        <p className="text-sm text-gray-400">
          Realtime payroll infrastructure events
        </p>
      </div>

      <div className="space-y-4">

        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            className="
              flex items-center justify-between
              p-4 rounded-xl
              bg-white/5
              border border-white/10
              hover:border-cyan-400/20
              transition
            "
          >

            <div className="flex items-center gap-4">

              <div className="
                p-2 rounded-lg
                bg-cyan-500/10
                text-cyan-300
              ">
                {activity.icon}
              </div>

              <p className="text-sm">
                {activity.text}
              </p>

            </div>

            <span className="text-xs text-gray-400">
              {activity.time}
            </span>

          </motion.div>
        ))}

      </div>
    </div>
  );
}