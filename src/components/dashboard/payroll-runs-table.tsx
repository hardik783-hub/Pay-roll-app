"use client";

import { motion } from "framer-motion";

const payrollRuns = [
  {
    id: "RUN-203",
    employees: 12548,
    amount: "$1.2M",
    status: "Completed",
    time: "2 min ago",
  },
  {
    id: "RUN-202",
    employees: 12410,
    amount: "$1.1M",
    status: "Processing",
    time: "15 min ago",
  },
  {
    id: "RUN-201",
    employees: 12302,
    amount: "$980K",
    status: "Completed",
    time: "1 hour ago",
  },
  {
    id: "RUN-200",
    employees: 12144,
    amount: "$930K",
    status: "Failed",
    time: "3 hours ago",
  },
];

export default function PayrollRunsTable() {
  return (
    <div
      className="
        bg-white/5
        border border-white/10
        rounded-2xl
        p-6
        lg:p-7
        backdrop-blur-xl
      "
    >
      <div className="mb-7">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
          Payroll Runs
        </h2>

        <p className="text-base text-gray-400 mt-1.5 leading-relaxed">
          Recent payroll execution activity
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-[15px] leading-snug">

          <thead className="text-gray-400 border-b border-white/10 text-sm font-medium">
            <tr>
              <th className="text-left py-4 px-1 font-medium">Run ID</th>
              <th className="text-left py-4 px-1 font-medium">Employees</th>
              <th className="text-left py-4 px-1 font-medium">Amount</th>
              <th className="text-left py-4 px-1 font-medium">Status</th>
              <th className="text-left py-4 px-1 font-medium">Executed</th>
            </tr>
          </thead>

          <tbody>

            {payrollRuns.map((run, index) => (

              <motion.tr
                key={run.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >

                <td className="py-5 font-medium text-gray-100">
                  {run.id}
                </td>

                <td className="py-5 text-gray-200">
                  {run.employees.toLocaleString()}
                </td>

                <td className="py-5 text-gray-200">
                  {run.amount}
                </td>

                <td className="py-5">

                  <span
                    className={`
                      inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium
                      ${
                        run.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-300"
                          : run.status === "Processing"
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "bg-red-500/10 text-red-300"
                      }
                    `}
                  >
                    {run.status}
                  </span>

                </td>

                <td className="py-5 text-gray-400">
                  {run.time}
                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}