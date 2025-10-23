'use client';
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  doctorName: string;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  preferredDate: "",
  message: "",
};

export default function DoctorAppointmentForm({ doctorName }: Props) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Request an Appointment</h2>
      <p className="mt-1 text-sm text-slate-600">Let us know how we can reach you. Our care team will call back to confirm your visit with Dr. {doctorName}.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">Full name</label>
          <input
            id="fullName"
            value={form.fullName}
            onChange={handleChange("fullName")}
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="Jane Doe"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
            <input
              id="phone"
              value={form.phone}
              onChange={handleChange("phone")}
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="(+65) 6123 4567"
            />
          </div>
        </div>
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700">Preferred date</label>
          <input
            id="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={handleChange("preferredDate")}
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Reason for visit</label>
          <textarea
            id="message"
            value={form.message}
            onChange={handleChange("message")}
            rows={4}
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="Tell us about your symptoms or questions."
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-sky-600 px-4 py-2 text-white shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Submit request
        </button>
        {submitted ? (
          <p className="rounded-lg bg-sky-50 px-4 py-3 text-sm text-sky-800">Thank you! Our scheduling team will contact you soon to finalise your appointment.</p>
        ) : null}
      </form>
    </div>
  );
}
