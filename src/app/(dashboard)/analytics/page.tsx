import AnalyticsStats from "@/components/analytics/analytics-stats";
import PayrollOverviewChart from "@/components/analytics/payroll-overview-chart";
import DepartmentDistribution from "@/components/analytics/department-distribution";
import SystemMetrics from "@/components/analytics/system-metrics";
import AIInsights from "@/components/analytics/ai-insights";

export default function AnalyticsPage() {
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
          Analytics
        </h1>

        <p className="text-base text-gray-300 mt-2 max-w-3xl leading-relaxed">
          Monitor payroll intelligence and infrastructure performance.
        </p>

      </div>

      <AnalyticsStats />

      {/* Charts */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-3
          gap-7
          lg:gap-8
        "
      >

        <div className="xl:col-span-2">
          <PayrollOverviewChart />
        </div>

        <DepartmentDistribution />

      </div>

      {/* Bottom Grid */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-2
          gap-7
          lg:gap-8
        "
      >

        <SystemMetrics />

        <AIInsights />

      </div>

    </div>
  );
}