import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Home() {
  return (
    <>
      <Header />
      <PageHero src="/img/photos/home.jpg" title="Welcome to Brillar Hospital" subtitle="Specialist-led care near Botanic Gardens. Same-day appointments and 24/7 Urgent Care Centre." />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {t:"Health Screening", d:"Baseline to executive, same-day results."},
            {t:"Maternity", d:"Antenatal to postnatal lactation support."},
            {t:"Heart Centre", d:"Cardiology consults, ECG, interventional care."},
            {t:"Urgent Care 24/7", d:"Walk-in urgent care and stabilisation."},
          ].map((c)=>(
            <div key={c.t} className="card">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.d}</p>
              <a className="mt-3 inline-flex text-sky-700" href="/services">Learn more →</a>
            </div>
          ))}
        </div>

        <section className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold">Key Contacts (Singapore)</h3>
            <p className="mt-2 text-sm text-slate-700">
              <strong>Main Line:</strong> <a href="tel:+6561234567" className="text-sky-600 hover:underline">+65 6123 4567</a><br/>
              <strong>UCC (24/7):</strong> <a href="tel:+6561234568" className="text-sky-600 hover:underline">+65 6123 4568</a><br/>
              <strong>Ambulance:</strong> <a href="tel:1800123456" className="text-sky-600 hover:underline">1800 (123 456)</a><br/>
              <strong>WhatsApp (Appt):</strong> <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">+65 9123 4567</a>
            </p>
          </div>
          <div className="card lg:col-span-2">
            <h3 className="font-semibold">On Your Side</h3>
            <p className="mt-2 text-slate-700">Access specialists quickly with modern diagnostics and coordinated care teams focused on outcomes and comfort.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {[
                {k:"270", v:"Beds"},
                {k:"24/7", v:"Urgent Care"},
                {k:"30+", v:"Specialties"},
                {k:"200+", v:"Specialists"},
              ].map((k)=>(
                <div key={k.v} className="text-center rounded-xl border border-slate-200 p-4">
                  <div className="text-2xl font-bold">{k.k}</div>
                  <div className="text-slate-500 text-sm">{k.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
