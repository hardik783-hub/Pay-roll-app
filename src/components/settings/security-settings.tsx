"use client";

const securityItems = [
  {
    label: "Multi-Factor Authentication",
    status: "Enabled",
  },
  {
    label: "API Access Keys",
    status: "Managed",
  },
  {
    label: "Audit Logs",
    status: "Active",
  },
  {
    label: "Role Permissions",
    status: "Configured",
  },
];

export default function SecuritySettings() {
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
          Security
        </h2>

        <p className="text-base text-gray-400 mt-2">
          Infrastructure access and protection settings.
        </p>

      </div>

      <div className="space-y-5">

        {securityItems.map((item) => (

          <div
            key={item.label}
            className="
              flex items-center justify-between
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-5 py-4
            "
          >

            <span className="text-base text-gray-300">
              {item.label}
            </span>

            <span
              className="
                px-4 py-2
                rounded-xl
                border border-emerald-400/20
                bg-emerald-500/10
                text-emerald-300
                text-sm
              "
            >
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}