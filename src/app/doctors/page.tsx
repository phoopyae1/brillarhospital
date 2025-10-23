'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useMemo, useState } from "react";
import { doctors } from "@/data/doctors";

export default function Page() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return doctors;
    return doctors.filter((d) => d.name.toLowerCase().includes(term));
  }, [q]);

  return (
    <>
      <Header />
      <PageHero src="/img/photos/doctors.jpg" title="Find a Doctor" subtitle="Browse specialists by name and department" />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by doctor name…"
            className="w-full md:w-1/2 rounded-xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-sky-300"
          />
          <span className="text-sm text-slate-500">{filtered.length} result{filtered.length === 1 ? "" : "s"}</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {filtered.map((d) => (
            <Link key={d.email} href={`/doctors/${d.slug}`} className="card transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{d.name}</h3>
                <span className="text-xs rounded-full border px-2 py-0.5">{d.dept}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{d.room} • Languages: {d.langs}</p>
              <div className="mt-3 text-sm">
                <div><strong>Phone:</strong> {d.phone}</div>
                <div>
                  <strong>Email:</strong> <span className="underline">{d.email}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-sky-600">View profile &amp; request appointment →</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
