"use client";

import { motion } from "framer-motion";

const steps = [
  "API Gateway",
  "Lambda",
  "SQS Queue",
  "Workers",
  "PDF Generator",
  "SES Delivery",
];

export default function PayrollPipeline() {
  return (
    <div
      className="
        relative
        overflow-hidden
        min-h-[188px]
        bg-gradient-to-br
        from-white/[0.04]
        to-white/[0.02]
        border border-white/10
        rounded-2xl
        px-8 py-7
        lg:px-9 lg:py-8
        backdrop-blur-xl
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.06),transparent_55%)]" />

      {/* Header */}
      <div className="relative z-10 mb-8 lg:mb-9">

        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
          Payroll Processing Pipeline
        </h2>

        <p className="text-base text-gray-400 mt-2 leading-relaxed">
          Realtime distributed payroll orchestration
        </p>

      </div>

      {/* Pipeline */}
      <div
        className="
          relative z-10
          flex items-center justify-center
          gap-1
          w-full
        "
      >

        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center"
          >

            {/* Step */}
            <motion.div
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: [0.7, 1, 0.7],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="
                relative overflow-hidden
                px-4 py-2.5
                rounded-xl
                border border-cyan-400/20
                bg-gradient-to-br
                from-cyan-500/10
                to-purple-500/10
                text-[18px] lg:text-[19px] font-medium
                whitespace-nowrap
                shadow-[0_0_25px_rgba(34,211,238,0.06)]
                backdrop-blur-xl
              "
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/[0.03]" />

              <span className="relative z-10">
                {step}
              </span>

            </motion.div>

            {/* Connector */}
            {index !== steps.length - 1 && (

              <div className="relative w-12 h-[2px] mx-2.5 overflow-hidden">

                {/* Static Line */}
                <div className="absolute inset-0 bg-cyan-400/20" />

                {/* Moving Packet */}
                <motion.div
                  animate={{
                    x: ["-100%", "350%"],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2,
                  }}
                  className="
                    absolute top-1/2 -translate-y-1/2
                    w-2.5 h-2.5 rounded-full
                    bg-cyan-300
                    shadow-[0_0_14px_rgba(34,211,238,0.9)]
                  "
                />

              </div>

            )}

          </div>
        ))}

      </div>

    </div>
  );
}