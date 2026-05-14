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

        <table className="w-full min-w-[980px] text-base leading-relaxed">

          <thead
            className="
              border-b border-white/10
              text-gray-300
              text-base
              font-semibold
            "
          >

            <tr>

              <th className="text-left px-6 lg:px-7 py-4">
                Employee
              </th>

              <th className="text-left px-6 lg:px-7 py-4">
                Month
              </th>

              <th className="text-left px-6 lg:px-7 py-4">
                Amount
              </th>

              <th className="text-left px-6 lg:px-7 py-4">
                Status
              </th>

              <th className="text-left px-6 lg:px-7 py-4">
                Delivery
              </th>

              <th className="text-left px-6 lg:px-7 py-4">
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
                <td className="px-6 lg:px-7 py-6">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-12 h-12
                        rounded-full
                        bg-gradient-to-br
                        from-cyan-500/20
                        to-purple-500/20
                        border border-cyan-400/20
                        flex items-center justify-center
                        text-base font-semibold
                      "
                    >
                      {payslip.initials}
                    </div>

                    <div>

                      <p className="font-semibold text-gray-100 text-lg leading-snug">
                        {payslip.employee}
                      </p>

                      <p className="text-base text-gray-300 mt-1 leading-relaxed">
                        Payroll Batch #APR-2026
                      </p>

                    </div>

                  </div>

                </td>

                {/* Month */}
                <td className="px-6 lg:px-7 py-6 text-gray-200 text-base">
                  {payslip.month}
                </td>

                {/* Amount */}
                <td className="px-6 lg:px-7 py-6 text-cyan-300 font-semibold text-lg tabular-nums">
                  {payslip.amount}
                </td>

                {/* Status */}
                <td className="px-6 lg:px-7 py-6">

                  <span
                    className={`
                      inline-flex items-center
                      px-3.5 py-2
                      rounded-full
                      text-base font-semibold
                      ${statusStyles[
                        payslip.status as keyof typeof statusStyles
                      ]}
                    `}
                  >
                    {payslip.status}
                  </span>

                </td>

                {/* Delivery */}
                <td className="px-6 lg:px-7 py-6 text-gray-200 text-base">
                  {payslip.delivery}
                </td>

                {/* Actions */}
                <td className="px-6 lg:px-7 py-6">

                  <div className="flex items-center gap-3">

                    <button
                      className="
                        px-5 py-2.5
                        rounded-xl
                        text-base font-semibold
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
                        px-5 py-2.5
                        rounded-xl
                        text-base font-semibold
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