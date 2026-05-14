import AnalyticsStats from "@/components/analytics/analytics-stats";
import PayrollOverviewChart from "@/components/analytics/payroll-overview-chart";
import DepartmentDistribution from "@/components/analytics/department-distribution";
import SystemMetrics from "@/components/analytics/system-metrics";
import AIInsights from "@/components/analytics/ai-insights";

export default function AnalyticsPage() {
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
          Analytics
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Monitor payroll intelligence and infrastructure performance.
        </p>

      </div>

      <AnalyticsStats />

      {/* Charts */}
      <div
        className="
          grid grid-cols-1
          2xl:grid-cols-3
          gap-6
        "
      >

        <div className="2xl:col-span-2">
          <PayrollOverviewChart />
        </div>

        <DepartmentDistribution />

      </div>

      {/* Bottom Grid */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >

        <SystemMetrics />

        <AIInsights />

      </div>

    </div>
  );
}