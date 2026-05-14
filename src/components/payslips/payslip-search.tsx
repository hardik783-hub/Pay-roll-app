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
        lg:gap-5
      "
    >

      {/* Search */}
      <div
        className="
          flex-1
          flex items-center gap-3.5
          px-6 py-3.5
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          transition-all duration-300
          focus-within:border-cyan-400/30
        "
      >

        <Search
          size={20}
          className="text-gray-400 shrink-0"
        />

        <input
          type="text"
          placeholder="Search payslips..."
          className="
            bg-transparent
            outline-none
            w-full
            text-base
            text-white
            placeholder:text-gray-500
            leading-normal
          "
        />

      </div>

      {/* Month */}
      <button
        className="
          flex items-center justify-center gap-2.5
          px-6 py-3.5
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          text-gray-300
          hover:bg-white/[0.05]
          transition-all duration-300
        "
      >

        <Calendar size={20} />

        <span className="text-base font-semibold leading-snug">
          April 2026
        </span>

      </button>

      {/* Filters */}
      <button
        className="
          flex items-center justify-center gap-2.5
          px-6 py-3.5
          rounded-2xl
          border border-cyan-400/20
          bg-cyan-500/10
          text-cyan-300
          hover:bg-cyan-500/20
          transition-all duration-300
        "
      >

        <SlidersHorizontal size={20} />

        <span className="text-base font-semibold leading-snug">
          Filters
        </span>

      </button>

      {/* Generate */}
      <button
        className="
          px-7 py-3.5
          rounded-2xl
          text-base font-semibold leading-snug
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          text-black
          hover:scale-[1.02]
          transition-all duration-300
        "
      >
        Generate Payslips
      </button>

    </div>
  );
}