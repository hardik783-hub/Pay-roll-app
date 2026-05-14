"use client";

import {
  Search,
  Calendar,
  SlidersHorizontal,
} from "lucide-react";

export default function PayslipSearch() {
  return (

    <div
      className="
        flex flex-col xl:flex-row
        gap-4
      "
    >

      {/* Search */}
      <div
        className="
          flex-1
          flex items-center gap-3
          px-5 py-3
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          transition-all duration-300
          focus-within:border-cyan-400/30
        "
      >

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search payslips..."
          className="
            bg-transparent
            outline-none
            w-full
            text-sm
            text-white
            placeholder:text-gray-500
          "
        />

      </div>

      {/* Month */}
      <button
        className="
          flex items-center justify-center gap-2
          px-5 py-3
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          text-gray-300
          hover:bg-white/[0.05]
          transition-all duration-300
        "
      >

        <Calendar size={18} />

        <span className="text-sm font-medium">
          April 2026
        </span>

      </button>

      {/* Filters */}
      <button
        className="
          flex items-center justify-center gap-2
          px-5 py-3
          rounded-2xl
          border border-cyan-400/20
          bg-cyan-500/10
          text-cyan-300
          hover:bg-cyan-500/20
          transition-all duration-300
        "
      >

        <SlidersHorizontal size={18} />

        <span className="text-sm font-medium">
          Filters
        </span>

      </button>

      {/* Generate */}
      <button
        className="
          px-6 py-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          text-black
          font-semibold
          hover:scale-[1.02]
          transition-all duration-300
        "
      >
        Generate Payslips
      </button>

    </div>
  );
}