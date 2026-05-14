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
        p-6
      "
    >

      <h2 className="text-2xl font-semibold">
        System Metrics
      </h2>

      <p className="text-sm text-gray-400 mt-1">
        Realtime infrastructure health
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">

        {metrics.map((metric) => (

          <div
            key={metric.label}
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-5
            "
          >

            <p className="text-sm text-gray-400">
              {metric.label}
            </p>

            <h3 className="text-2xl font-semibold mt-2 text-cyan-300">
              {metric.value}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}