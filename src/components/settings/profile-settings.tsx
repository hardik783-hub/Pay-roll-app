"use client";

export default function ProfileSettings() {
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
          Profile Settings
        </h2>

        <p className="text-base text-gray-400 mt-2">
          Manage organization profile and payroll identity.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <InputField
          label="Company Name"
          value="PayrollAI Systems"
        />

        <InputField
          label="Admin Email"
          value="admin@payrollai.io"
        />

        <InputField
          label="Payroll Region"
          value="United States"
        />

        <InputField
          label="Timezone"
          value="UTC -05:00"
        />

      </div>

    </div>
  );
}

function InputField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (

    <div>

      <label className="text-sm text-gray-400 mb-2 block">
        {label}
      </label>

      <input
        defaultValue={value}
        className="
          w-full
          px-5 py-4
          rounded-2xl
          bg-black/30
          border border-white/10
          outline-none
          text-white
          focus:border-cyan-400/30
          transition-all
        "
      />

    </div>
  );
}