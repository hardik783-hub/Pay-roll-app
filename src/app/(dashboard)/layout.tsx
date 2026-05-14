"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div
      className="
        relative overflow-hidden
        min-h-screen
        w-full
        min-w-0
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        text-white
        flex
        flex-row
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute top-0 left-0
          w-[500px] h-[500px]
          bg-cyan-500/10
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          absolute bottom-0 right-0
          w-[500px] h-[800px]
          bg-purple-500/10
          blur-3xl
          rounded-full
        "
      />

      {/* Sidebar */}
      <aside
        className="
          w-[308px]
          shrink-0
          border-r border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          hidden md:flex
          flex-col
          justify-between
          p-8
        "
      >

        <div>

          {/* Logo */}
          <div className="mb-12">

            <h1
              className="
                text-4xl
                font-bold
                tracking-tight
                bg-gradient-to-r
                from-white
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              PayrollAI
            </h1>

            <p
              className="
                text-[15px]
                text-gray-400
                mt-2.5
                leading-relaxed
              "
            >
              Intelligent payroll orchestration
            </p>

          </div>

          {/* Navigation */}
          <nav className="space-y-2.5">

            <SidebarItem
              icon={<LayoutDashboard size={22} strokeWidth={1.75} />}
              label="Dashboard"
              href="/"
            />

            <SidebarItem
              icon={<Users size={22} strokeWidth={1.75} />}
              label="Employees"
              href="/employees"
            />

            <SidebarItem
              icon={<FileText size={22} strokeWidth={1.75} />}
              label="Payslips"
              href="/payslips"
            />

            <SidebarItem
              icon={<BarChart3 size={22} strokeWidth={1.75} />}
              label="Analytics"
              href="/analytics"
            />

            <SidebarItem
              icon={<Settings size={22} strokeWidth={1.75} />}
              label="Settings"
              href="/settings"
            />

          </nav>

        </div>

        {/* Status Card */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-cyan-400/10
            bg-gradient-to-br
            from-cyan-500/[0.08]
            to-purple-500/[0.08]
            p-6
          "
        >

          {/* Glow */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_70%)]
            "
          />

          <div className="relative z-10">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.22em]
                text-cyan-300/80
                mb-3
              "
            >
              System Status
            </p>

            <h3 className="text-2xl font-semibold leading-snug">
              All Systems Operational
            </h3>

            <div className="flex items-center gap-2.5 mt-4">

              <div
                className="
                  w-2.5 h-2.5
                  rounded-full
                  bg-emerald-400
                  animate-pulse
                "
              />

              <span className="text-[15px] text-gray-300">
                99.98% uptime
              </span>

            </div>

          </div>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 w-full min-h-0 overflow-y-auto">

        <div className="w-full max-w-none min-w-0 min-h-screen px-6 py-9 sm:px-8 sm:py-10 xl:px-11 xl:py-11 2xl:px-16 2xl:py-12">
          {children}
        </div>

      </main>

    </div>
  );
}

function SidebarItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (

    <Link href={href}>

      <motion.div
        whileHover={{
          x: 4,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          relative
          w-full
          flex items-center gap-4
          px-5 py-4 min-h-[52px]
          rounded-xl
          overflow-hidden
          transition-all duration-300
          border border-transparent
          hover:bg-white/[0.04]
          hover:border-cyan-400/10
          cursor-pointer
        "
      >

        {/* Hover Glow */}
        <div
          className="
            absolute inset-0
            opacity-0 hover:opacity-100
            transition-opacity duration-300
            bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.12),transparent_70%)]
          "
        />

        {/* Icon */}
        <div className="relative z-10 text-gray-300">
          {icon}
        </div>

        {/* Label */}
        <span
          className="
            relative z-10
            text-base
            font-medium
            text-gray-200
          "
        >
          {label}
        </span>

      </motion.div>

    </Link>
  );
}