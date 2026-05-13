"use client";

import { motion } from "framer-motion";
import { Bell, LayoutDashboard, Users, FileText, BarChart3, Settings, DollarSign, Activity } from "lucide-react";
import PayrollPipeline from "./payroll-pipeline";
import PayrollChart from "../charts/payroll-chart";
import ActivityFeed from "./activity-feed";
import CloudScene from "../3d/cloud-scene";
import PayrollRunsTable from "./payroll-runs-table";

export default function DashboardLayout() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white flex">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />


      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-white/5 backdrop-blur-xl p-6 hidden md:flex flex-col">
        
        <h1 className="text-2xl font-semibold tracking-tight mb-10">
          PayrollAI
        </h1>

        <nav className="space-y-6">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <SidebarItem icon={<Users size={20} />} label="Employees" />
          <SidebarItem icon={<FileText size={20} />} label="Payslips" />
          <SidebarItem icon={<BarChart3 size={20} />} label="Analytics" />
          <SidebarItem icon={<Settings size={20} />} label="Settings" />
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1  overflow-y-auto">
      <div className="max-w-[2200px] mx-auto p-6 space-y-6">

<div className="space-y-5">

  {/* Header */}
  <div>
    <h1 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
      Dashboard
    </h1>

    <p className="text-sm text-gray-400 mt-1">
      Monitor payroll processing and system health.
    </p>
  </div>

  {/* Analytics Cards */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

      <AnalyticsCard
        title="Employees"
        value="12,548"
        icon={<Users size={20} />}
      />

      <AnalyticsCard
        title="Payroll Processed"
        value="$1.2M"
        icon={<DollarSign size={20} />}
      />

      <AnalyticsCard
        title="Success Rate"
        value="99.98%"
        icon={<Activity size={20} />}
      />

    </div>
  </motion.div>

  {/* Pipeline + Activity */}
  <div className="grid grid-cols-1 2xl:grid-cols-3 gap-5 items-start">

    <div className="xl:col-span-2 flex justify-center">

      <div className="w-full max-w-5xl">
        <PayrollPipeline />
      </div>

    </div>

    <div>
      <ActivityFeed />
    </div>

  </div>

  {/* Payroll Runs + Chart */}
  <div className="grid grid-cols-1 2xl:grid-cols-3 gap-5">

    <div className="xl:col-span-2">
      <PayrollRunsTable />
    </div>

    <div className="h-full">
      <PayrollChart />
    </div>

  </div>

  {/* 3D Scene */}
  <CloudScene />

</div>
</div>
</main>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-300 cursor-pointer transition">
      {icon}
      <span>{label}</span>
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
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="
          relative overflow-hidden
          bg-white/5
          border border-white/10
          rounded-2xl
          p-6
          backdrop-blur-xl
          hover:border-cyan-400/30
          hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-50" />
  
        {/* Floating Glow Orb */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
  
        <div className="relative z-10 flex items-start justify-between">
  
          <div>
            <p className="text-gray-400 mb-2">
              {title}
            </p>
  
            <h3 className="text-3xl font-semibold tracking-tight tracking-tight">
              {value}
            </h3>
          </div>
  
          <div className="
            p-3 rounded-xl
            bg-cyan-500/10
            border border-cyan-400/20
            text-cyan-300
          ">
            {icon}
          </div>
  
        </div>
      </motion.div>
    );
  }