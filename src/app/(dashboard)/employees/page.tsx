import EmployeeStats from "@/components/employees/employee-stats";
import EmployeeSearch from "@/components/employees/employee-search";
import EmployeeTable from "@/components/employees/employee-table";

export default function EmployeesPage() {
  return (
    <div className="space-y-8 lg:space-y-10">

      {/* Header */}
      <div>

        <h1
          className="
            text-4xl
            lg:text-5xl
            2xl:text-6xl
            font-semibold
            tracking-tight
            bg-gradient-to-r
            from-white
            to-cyan-300
            bg-clip-text
            text-transparent
          "
        >
          Employees
        </h1>

        <p className="text-base text-gray-300 mt-2 max-w-3xl leading-relaxed">
          Manage workforce payroll operations and employee records.
        </p>

      </div>

      {/* Stats */}
      <EmployeeStats />

      {/* Search */}
      <EmployeeSearch />

      {/* Table */}
      <EmployeeTable />

    </div>
  );
}