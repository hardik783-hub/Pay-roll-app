import PayslipStats from "@/components/payslips/payslip-stats";
import PayslipSearch from "@/components/payslips/payslip-search";
import PayslipTable from "@/components/payslips/payslip-table";

export default function PayslipsPage() {
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
          Payslips
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Generate, track and deliver employee payslips.
        </p>

      </div>

      <PayslipStats />

      <PayslipSearch />

      <PayslipTable />

    </div>
  );
}
