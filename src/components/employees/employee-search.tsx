"use client";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function EmployeeSearch() {
  return (

    <div
      className="
        flex flex-col lg:flex-row
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
          placeholder="Search employees..."
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

      {/* Filter */}
      <button
        className="
          flex items-center justify-center gap-2
          px-5 py-3
          rounded-2xl
          border border-cyan-400/20
          bg-cyan-500/10
          text-cyan-300
          hover:bg-cyan-500/20
          hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]
          transition-all duration-300
        "
      >

        <SlidersHorizontal size={18} />

        <span className="text-sm font-medium">
          Filters
        </span>

      </button>

    </div>
  );
}