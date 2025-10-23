import Link from "next/link";

type Props = {
  doctorName: string;
};

export default function DoctorAppointmentForm({ doctorName }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Book a visit with Dr. {doctorName}</h2>
      <p className="mt-2 text-sm text-slate-600">
        Our scheduling team is ready to help you secure the next available slot. Use our online
        appointments page to reach out and we&apos;ll follow up right away.
      </p>
      <Link
        href="/appointments"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        Make appointment
      </Link>
    </div>
  );
}
