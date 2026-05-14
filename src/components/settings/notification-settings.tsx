"use client";

const notifications = [
  "Payroll Completion Alerts",
  "AI Anomaly Alerts",
  "Weekly Reports",
  "Employee Payment Notifications",
];

export default function NotificationSettings() {
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
          Notification Preferences
        </h2>

        <p className="text-base text-gray-400 mt-2">
          Configure realtime payroll notifications.
        </p>

      </div>

      <div className="space-y-5">

        {notifications.map((item) => (

          <div
            key={item}
            className="
              flex items-center justify-between
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-5 py-4
            "
          >

            <span className="text-base text-gray-300">
              {item}
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
  );
}