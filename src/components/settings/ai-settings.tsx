"use client";

const aiConfigs = [
  "AI Anomaly Detection",
  "Predictive Payroll Analysis",
  "Smart Approval Routing",
  "Realtime Compliance Monitoring",
];

export default function AISettings() {
  return (

    <div
      className="
        relative overflow-hidden
        rounded-3xl
        border border-cyan-400/10
        bg-gradient-to-br
        from-cyan-500/[0.05]
        to-purple-500/[0.05]
        backdrop-blur-xl
        p-7 lg:p-8
      "
    >

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)]
        "
      />

      <div className="relative z-10">

        <div className="mb-8">

          <div className="flex items-center gap-3">

            <div
              className="
                w-3 h-3
                rounded-full
                bg-cyan-400
                animate-pulse
              "
            />

            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              AI Configuration
            </h2>

          </div>

          <p className="text-base text-gray-300 mt-2 leading-relaxed">
            Intelligent payroll automation and monitoring systems.
          </p>

        </div>

        <div className="space-y-5">

          {aiConfigs.map((config) => (

            <div
              key={config}
              className="
                flex items-center justify-between
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-5 py-4
              "
            >

              <span className="text-base font-medium text-gray-100 leading-snug">
                {config}
              </span>

              <div
                className="
                  w-14 h-8
                  rounded-full
                  bg-cyan-500/20
                  border border-cyan-400/20
                  flex items-center px-1
                "
              >

                <div
                  className="
                    w-6 h-6
                    rounded-full
                    bg-cyan-300
                    ml-auto
                  "
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}