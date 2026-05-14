"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  Users,
  DollarSign,
  Activity,
} from "lucide-react";

import PayrollPipeline from "@/components/dashboard/payroll-pipeline";
import PayrollChart from "@/components/charts/payroll-chart";
import ActivityFeed from "@/components/dashboard/activity-feed";
import CloudScene from "@/components/3d/cloud-scene";
import PayrollRunsTable from "@/components/dashboard/payroll-runs-table";

export default function DashboardPage() {

  const [metrics, setMetrics] = useState({
    employees: 12548,
    payroll: 1.2,
    success: 99.98,
  });

  useEffect(() => {

    const interval = setInterval(() => {

      setMetrics((prev) => ({
        employees:
          prev.employees + Math.floor(Math.random() * 3),

        payroll: +(
          prev.payroll + Math.random() * 0.02
        ).toFixed(2),

        success: +(
          99.95 + Math.random() * 0.04
        ).toFixed(2),
      }));

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="space-y-8 lg:space-y-10">

      {/* Header */}
      <div>

        <h1
          className="
            text-4xl
            lg:text-5xl
            2xl:text-6xl
            font-semibold
            tracking-tight
            bg-gradient-to-r
            from-white
            to-cyan-300
            bg-clip-text
            text-transparent
          "
        >
          Dashboard
        </h1>

        <p className="text-base text-gray-400 mt-2 max-w-3xl leading-relaxed">
          Monitor payroll processing and system health.
        </p>

      </div>

      {/* Analytics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-7">

          <AnalyticsCard
            title="Employees"
            value={metrics.employees.toLocaleString()}
            icon={<Users size={22} strokeWidth={1.75} />}
          />

          <AnalyticsCard
            title="Payroll Processed"
            value={`$${metrics.payroll}M`}
            icon={<DollarSign size={22} strokeWidth={1.75} />}
          />

          <AnalyticsCard
            title="Success Rate"
            value={`${metrics.success}%`}
            icon={<Activity size={22} strokeWidth={1.75} />}
          />

        </div>

      </motion.div>

      {/* Pipeline + Activity */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-3
          gap-7
          lg:gap-8
          items-start
        "
      >

        <div className="xl:col-span-2">
          <PayrollPipeline />
        </div>

        <ActivityFeed />

      </div>

      {/* Runs + Chart */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-3
          gap-7
          lg:gap-8
          items-start
        "
      >

        <div className="xl:col-span-2">
          <PayrollRunsTable />
        </div>

        <PayrollChart />

      </div>

      {/* AI Mesh */}
      <CloudScene />

    </div>
  );
}

function AnalyticsCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {

  return (

    <motion.div
      whileHover={{
        y: -4,
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

      {/* Glow */}
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

          <p className="text-base text-gray-400 mb-2.5">
            {title}
          </p>

          <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold tracking-tight">
            {value}
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
          {icon}
        </div>

      </div>

    </motion.div>
  );
}