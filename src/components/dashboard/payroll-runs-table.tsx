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
        p-5
        backdrop-blur-xl
      "
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Payroll Runs
        </h2>

        <p className="text-sm text-gray-400">
          Recent payroll execution activity
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="text-gray-400 border-b border-white/10">
            <tr>
              <th className="text-left py-4">Run ID</th>
              <th className="text-left py-4">Employees</th>
              <th className="text-left py-4">Amount</th>
              <th className="text-left py-4">Status</th>
              <th className="text-left py-4">Executed</th>
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

                <td className="py-4 font-medium">
                  {run.id}
                </td>

                <td className="py-4">
                  {run.employees.toLocaleString()}
                </td>

                <td className="py-4">
                  {run.amount}
                </td>

                <td className="py-4">

                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs
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

                <td className="py-4 text-gray-400">
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