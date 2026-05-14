import EmployeeStats from "@/components/employees/employee-stats";
import EmployeeSearch from "@/components/employees/employee-search";
import EmployeeTable from "@/components/employees/employee-table";

export default function EmployeesPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>

        <h1
          className="
            text-4xl
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

        <p className="text-sm text-gray-400 mt-1">
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