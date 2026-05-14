"use client";

const payslips = [
  {
    employee: "Sarah Chen",
    month: "April 2026",
    amount: "$8,400",
    status: "Delivered",
    delivery: "Email Sent",
    initials: "SC",
  },
  {
    employee: "Michael Torres",
    month: "April 2026",
    amount: "$9,100",
    status: "Processing",
    delivery: "Generating PDF",
    initials: "MT",
  },
  {
    employee: "Emma Wilson",
    month: "April 2026",
    amount: "$7,200",
    status: "Failed",
    delivery: "SMTP Retry",
    initials: "EW",
  },
  {
    employee: "David Kim",
    month: "April 2026",
    amount: "$8,900",
    status: "Delivered",
    delivery: "Email Sent",
    initials: "DK",
  },
];

const statusStyles = {
  Delivered:
    "bg-emerald-500/10 text-emerald-300 border border-emerald-400/20",

  Processing:
    "bg-cyan-500/10 text-cyan-300 border border-cyan-400/20",

  Failed:
    "bg-red-500/10 text-red-300 border border-red-400/20",
};

export default function PayslipTable() {
  return (

    <div
      className="
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
    >

      <div className="overflow-x-auto">

        <table className="w-full min-w-[950px]">

          <thead
            className="
              border-b border-white/10
              text-gray-400
              text-sm
            "
          >

            <tr>

              <th className="text-left px-6 py-4">
                Employee
              </th>

              <th className="text-left px-6 py-4">
                Month
              </th>

              <th className="text-left px-6 py-4">
                Amount
              </th>

              <th className="text-left px-6 py-4">
                Status
              </th>

              <th className="text-left px-6 py-4">
                Delivery
              </th>

              <th className="text-left px-6 py-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {payslips.map((payslip) => (

              <tr
                key={payslip.employee}
                className="
                  border-b border-white/5
                  hover:bg-white/[0.03]
                  transition-all duration-300
                "
              >

                {/* Employee */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-11 h-11
                        rounded-full
                        bg-gradient-to-br
                        from-cyan-500/20
                        to-purple-500/20
                        border border-cyan-400/20
                        flex items-center justify-center
                        text-sm font-semibold
                      "
                    >
                      {payslip.initials}
                    </div>

                    <div>

                      <p className="font-medium">
                        {payslip.employee}
                      </p>

                      <p className="text-sm text-gray-400">
                        Payroll Batch #APR-2026
                      </p>

                    </div>

                  </div>

                </td>

                {/* Month */}
                <td className="px-6 py-5 text-gray-300">
                  {payslip.month}
                </td>

                {/* Amount */}
                <td className="px-6 py-5 text-cyan-300 font-medium">
                  {payslip.amount}
                </td>

                {/* Status */}
                <td className="px-6 py-5">

                  <span
                    className={`
                      px-3 py-1
                      rounded-full
                      text-sm
                      ${statusStyles[
                        payslip.status as keyof typeof statusStyles
                      ]}
                    `}
                  >
                    {payslip.status}
                  </span>

                </td>

                {/* Delivery */}
                <td className="px-6 py-5 text-gray-300">
                  {payslip.delivery}
                </td>

                {/* Actions */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <button
                      className="
                        px-4 py-2
                        rounded-xl
                        border border-cyan-400/20
                        bg-cyan-500/10
                        text-cyan-300
                        hover:bg-cyan-500/20
                        transition-all duration-300
                      "
                    >
                      View PDF
                    </button>

                    <button
                      className="
                        px-4 py-2
                        rounded-xl
                        border border-white/10
                        bg-white/[0.03]
                        text-gray-300
                        hover:bg-white/[0.05]
                        transition-all duration-300
                      "
                    >
                      Download
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}