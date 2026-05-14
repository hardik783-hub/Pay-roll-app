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

        <table className="w-full min-w-[900px]">

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
                Department
              </th>

              <th className="text-left px-6 py-4">
                Salary
              </th>

              <th className="text-left px-6 py-4">
                Status
              </th>

              <th className="text-left px-6 py-4">
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
                      {employee.initials}
                    </div>

                    <div>

                      <p className="font-medium">
                        {employee.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        {employee.role}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Department */}
                <td className="px-6 py-5">

                  <span
                    className="
                      px-3 py-1
                      rounded-full
                      text-sm
                      border border-white/10
                      bg-white/[0.03]
                    "
                  >
                    {employee.department}
                  </span>

                </td>

                {/* Salary */}
                <td className="px-6 py-5 text-cyan-300 font-medium">
                  {employee.salary}
                </td>

                {/* Status */}
                <td className="px-6 py-5">

                  <span
                    className={`
                      px-3 py-1
                      rounded-full
                      text-sm
                      ${statusStyles[
                        employee.status as keyof typeof statusStyles
                      ]}
                    `}
                  >
                    {employee.status}
                  </span>

                </td>

                {/* Payroll */}
                <td className="px-6 py-5">

                  <button
                    className="
                      px-4 py-2
                      rounded-xl
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