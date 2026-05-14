import PayslipStats from "@/components/payslips/payslip-stats";
import PayslipSearch from "@/components/payslips/payslip-search";
import PayslipTable from "@/components/payslips/payslip-table";

export default function PayslipsPage() {
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
          Payslips
        </h1>

        <p className="text-base text-gray-400 mt-2 max-w-3xl leading-relaxed">
          Generate, track and deliver employee payslips.
        </p>

      </div>

      <PayslipStats />

      <PayslipSearch />

      <PayslipTable />

    </div>
  );
}
