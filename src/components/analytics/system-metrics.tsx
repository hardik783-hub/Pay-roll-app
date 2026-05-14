"use client";

const metrics = [
  {
    label: "API Latency",
    value: "182ms",
  },
  {
    label: "Queue Health",
    value: "98%",
  },
  {
    label: "SES Delivery",
    value: "99.9%",
  },
  {
    label: "Worker Utilization",
    value: "74%",
  },
];

export default function SystemMetrics() {
  return (

    <div
      className="
        relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-7
        lg:p-8
      "
    >

      <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
        System Metrics
      </h2>

      <p className="text-base text-gray-300 mt-2 leading-relaxed">
        Realtime infrastructure health
      </p>

      <div className="grid grid-cols-2 gap-4 lg:gap-5 mt-8 lg:mt-9">

        {metrics.map((metric) => (

          <div
            key={metric.label}
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-5
              lg:p-6
            "
          >

            <p className="text-base font-medium text-gray-300 leading-snug">
              {metric.label}
            </p>

            <h3 className="text-2xl lg:text-3xl font-semibold mt-2.5 text-cyan-300 tabular-nums tracking-tight">
              {metric.value}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}