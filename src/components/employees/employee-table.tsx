"use client";

const employees = [
  {
    name: "Sarah Chen",
    role: "Frontend Engineer",
    department: "Engineering",
    salary: "$8,400",
    status: "Active",
    initials: "SC",
  },
  {
    name: "Michael Torres",
    role: "DevOps Engineer",
    department: "Infrastructure",
    salary: "$9,100",
    status: "Active",
    initials: "MT",
  },
  {
    name: "Emma Wilson",
    role: "HR Manager",
    department: "Human Resources",
    salary: "$7,200",
    status: "Processing",
    initials: "EW",
  },
  {
    name: "David Kim",
    role: "Backend Engineer",
    department: "Platform",
    salary: "$8,900",
    status: "Active",
    initials: "DK",
  },
  {
    name: "Olivia Brown",
    role: "Finance Lead",
    department: "Finance",
    salary: "$10,200",
    status: "Pending",
    initials: "OB",
  },
];

const statusStyles = {
  Active:
    "bg-emerald-500/10 text-emerald-300 border border-emerald-400/20",

  Processing:
    "bg-cyan-500/10 text-cyan-300 border border-cyan-400/20",

  Pending:
    "bg-yellow-500/10 text-yellow-300 border border-yellow-400/20",
};

export default function EmployeeTable() {
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

        <table className="w-full min-w-[920px] text-base leading-relaxed">

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
                Department
              </th>

              <th className="text-left px-6 lg:px-7 py-4">
                Salary
              </th>

              <th className="text-left px-6 lg:px-7 py-4">
                Status
              </th>

              <th className="text-left px-6 lg:px-7 py-4">
                Payroll
              </th>

            </tr>

          </thead>

          <tbody>

            {employees.map((employee) => (

              <tr
                key={employee.name}
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
                      {employee.initials}
                    </div>

                    <div>

                      <p className="font-semibold text-gray-100 text-lg leading-snug">
                        {employee.name}
                      </p>

                      <p className="text-base text-gray-300 mt-1 leading-relaxed">
                        {employee.role}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Department */}
                <td className="px-6 lg:px-7 py-6">

                  <span
                    className="
                      inline-flex items-center
                      px-3.5 py-2
                      rounded-full
                      text-base
                      font-medium
                      border border-white/10
                      bg-white/[0.03]
                    "
                  >
                    {employee.department}
                  </span>

                </td>

                {/* Salary */}
                <td className="px-6 lg:px-7 py-6 text-cyan-300 font-semibold text-lg tabular-nums">
                  {employee.salary}
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
                        employee.status as keyof typeof statusStyles
                      ]}
                    `}
                  >
                    {employee.status}
                  </span>

                </td>

                {/* Payroll */}
                <td className="px-6 lg:px-7 py-6">

                  <button
                    className="
                      px-5 py-2.5
                      rounded-xl
                      text-base font-semibold
                      border border-cyan-400/20
                      bg-cyan-500/10
                      text-cyan-300
                      hover:bg-cyan-500/20
                      hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                      transition-all duration-300
                    "
                  >
                    View Payroll
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}