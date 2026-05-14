"use client";

const settings = [
  {
    label: "Payroll Cycle",
    value: "Monthly",
  },
  {
    label: "Default Currency",
    value: "USD",
  },
  {
    label: "Tax Mode",
    value: "Automatic",
  },
  {
    label: "Auto Processing",
    value: "Enabled",
  },
];

export default function PayrollSettings() {
  return (

    <div
      className="
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-7 lg:p-8
      "
    >

      <div className="mb-8">

        <h2 className="text-2xl font-semibold">
          Payroll Configuration
        </h2>

        <p className="text-base text-gray-400 mt-2">
          Configure payroll processing preferences.
        </p>

      </div>

      <div className="space-y-5">

        {settings.map((setting) => (

          <div
            key={setting.label}
            className="
              flex items-center justify-between
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-5 py-4
            "
          >

            <span className="text-base text-gray-300">
              {setting.label}
            </span>

            <span
              className="
                px-4 py-2
                rounded-xl
                bg-cyan-500/10
                border border-cyan-400/20
                text-cyan-300
                text-sm
              "
            >
              {setting.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}