import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import DoctorAppointmentForm from "@/components/DoctorAppointmentForm";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

type PageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return { title: "Doctor not found" };
  }

  return {
    title: `${doctor.name} | Brillar Hospital`,
    description: `Learn more about ${doctor.name}, ${doctor.dept} specialist at Brillar Hospital. View contact details and request an appointment.`,
  };
}

export default function DoctorDetailPage({ params }: PageProps) {
  const doctor = getDoctorBySlug(params.slug);

  if (!doctor) {
    notFound();
  }

  const [firstName] = doctor.name.split(" ");

  return (
    <>
      <Header />
      <PageHero src="/img/photos/doctors.jpg" title={doctor.name} subtitle={`${doctor.dept} • ${doctor.room}`} />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <section className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">About Dr. {doctor.name}</h2>
              <p className="mt-3 text-slate-700">
                Dr. {doctor.name} is part of the Brillar Hospital {doctor.dept.toLowerCase()} team and consults at {doctor.room}. With extensive
                experience caring for patients in Singapore, Dr. {firstName} believes in compassionate, evidence-based medicine tailored to every
                individual.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Contact &amp; visiting information</h3>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-slate-500">Clinic</dt>
                  <dd className="text-base text-slate-800">{doctor.room}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Phone</dt>
                  <dd className="text-base text-slate-800">
                    <a href={`tel:${doctor.phone.replace(/[^+\d]/g, "")}`} className="text-sky-600 hover:underline">
                      {doctor.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Email</dt>
                  <dd className="text-base text-slate-800">
                    <a href={`mailto:${doctor.email}`} className="text-sky-600 hover:underline">
                      {doctor.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Languages</dt>
                  <dd className="text-base text-slate-800">{doctor.langs}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Achievements</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                <li>
                  Recognised for outstanding contributions to {doctor.dept.toLowerCase()} with multiple hospital-wide awards for
                  patient care and innovation.
                </li>
                <li>
                  Published peer-reviewed research advancing best practices in {doctor.dept.toLowerCase()} care and treatment
                  approaches.
                </li>
                <li>
                  Frequently invited speaker at regional medical conferences representing Brillar Hospital.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Past experience</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                <li>
                  Former senior consultant at leading tertiary hospitals across Singapore specialising in complex {doctor.dept.toLowerCase()} cases.
                </li>
                <li>
                  Completed advanced fellowship training overseas, bringing global insights back to local patient care.
                </li>
                <li>
                  Mentored junior physicians and medical students as part of Brillar Hospital&apos;s clinical education programme.
                </li>
              </ul>
            </div>
          </section>

          <DoctorAppointmentForm doctorName={doctor.name} />
        </div>
      </main>
      <Footer />
    </>
  );
}
