import ProfileSettings from "@/components/settings/profile-settings";
import PayrollSettings from "@/components/settings/payroll-settings";
import NotificationSettings from "@/components/settings/notification-settings";
import SecuritySettings from "@/components/settings/security-settings";
import AISettings from "@/components/settings/ai-settings";

export default function SettingsPage() {
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
          Settings
        </h1>

        <p className="text-base text-gray-400 mt-2 max-w-3xl">
          Configure payroll infrastructure, AI systems,
          notifications, and organizational preferences.
        </p>

      </div>

      {/* Top Grid */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-2
          gap-7
        "
      >

        <ProfileSettings />

        <PayrollSettings />

      </div>

      {/* Middle Grid */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-2
          gap-7
        "
      >

        <NotificationSettings />

        <SecuritySettings />

      </div>

      {/* AI Section */}
      <AISettings />

    </div>
  );
}