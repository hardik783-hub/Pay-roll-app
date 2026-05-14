"use client";

const insights = [
  "Payroll anomaly detected in Finance department",
  "Payroll costs increased 12% this month",
  "97 employees received performance bonuses",
  "SES email delivery rate improved by 3.2%",
];

export default function AIInsights() {
  return (

    <div
      className="
        relative overflow-hidden
        rounded-2xl
        border border-cyan-400/10
        bg-gradient-to-br
        from-cyan-500/[0.04]
        to-purple-500/[0.05]
        backdrop-blur-xl
        p-7
        lg:p-8
      "
    >

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)]
        "
      />

      <div className="relative z-10">

        <div className="flex items-center gap-3 mb-7">

          <div
            className="
              w-3.5 h-3.5 rounded-full
              bg-cyan-400
              animate-pulse
            "
          />

          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            AI Insights
          </h2>

        </div>

        <div className="space-y-3.5">

          {insights.map((insight) => (

            <div
              key={insight}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-5
              "
            >

              <p className="text-[15px] text-gray-200 leading-relaxed">
                {insight}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}