'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useMemo, useState } from "react";

type Doc = {"name": string; "dept": string; "phone": string; "email": string; "room": string; "langs": string; };
const ALL_DOCTORS: Doc[] = [{'name': 'Uma Lee', 'dept': 'Cardiology', 'phone': '+65 6859 5506', 'email': 'umalee@brillar.sg', 'room': 'Clinic 4‑08', 'langs': 'English, Mandarin, Malay'}, {'name': 'Ravi Lim', 'dept': 'Neurology', 'phone': '+65 6532 1520', 'email': 'ravilim@brillar.sg', 'room': 'Clinic 3‑03', 'langs': 'English, Mandarin, Tamil'}, {'name': 'Gurpreet Pang', 'dept': 'Dermatology', 'phone': '+65 6818 9928', 'email': 'gurpreetpang@brillar.sg', 'room': 'Clinic 6‑08', 'langs': 'English, Mandarin, Malay'}, {'name': 'Yusuf Chua', 'dept': 'Endocrinology', 'phone': '+65 6532 6574', 'email': 'yusufchua@brillar.sg', 'room': 'Clinic 5‑05', 'langs': 'English, Mandarin, Tamil'}, {'name': 'Marcus Lee', 'dept': 'Ophthalmology', 'phone': '+65 6967 6635', 'email': 'marcuslee@brillar.sg', 'room': 'Clinic 7‑09', 'langs': 'English'}, {'name': 'Marcus Lim', 'dept': 'Paediatrics', 'phone': '+65 6400 6925', 'email': 'marcuslim@brillar.sg', 'room': 'Clinic 7‑07', 'langs': 'English, Malay'}, {'name': 'Julia Lim', 'dept': 'General Surgery', 'phone': '+65 6987 2654', 'email': 'julialim@brillar.sg', 'room': 'Clinic 6‑09', 'langs': 'English, Mandarin, Tamil'}, {'name': 'Lena Goh', 'dept': 'Dermatology', 'phone': '+65 6373 2169', 'email': 'lenagoh@brillar.sg', 'room': 'Clinic 7‑21', 'langs': 'English, Mandarin, Tamil'}, {'name': 'Marcus Chong', 'dept': 'Dermatology', 'phone': '+65 6804 4598', 'email': 'marcuschong@brillar.sg', 'room': 'Clinic 8‑11', 'langs': 'English'}, {'name': 'Benjamin Koh', 'dept': 'ENT', 'phone': '+65 6374 2084', 'email': 'benjaminkoh@brillar.sg', 'room': 'Clinic 4‑19', 'langs': 'English'}, {'name': 'Marcus Quek', 'dept': 'Urology', 'phone': '+65 6246 5339', 'email': 'marcusquek@brillar.sg', 'room': 'Clinic 4‑08', 'langs': 'English'}, {'name': 'Nadia Sim', 'dept': 'ENT', 'phone': '+65 6470 4593', 'email': 'nadiasim@brillar.sg', 'room': 'Clinic 4‑17', 'langs': 'English, Mandarin'}, {'name': 'Evelyn Quek', 'dept': 'Gastroenterology', 'phone': '+65 6911 7916', 'email': 'evelynquek@brillar.sg', 'room': 'Clinic 7‑03', 'langs': 'English, Mandarin'}, {'name': 'Ivan Foo', 'dept': 'Cardiology', 'phone': '+65 6796 2876', 'email': 'ivanfoo@brillar.sg', 'room': 'Clinic 8‑29', 'langs': 'English, Mandarin, Malay'}, {'name': 'Daniel Teo', 'dept': 'ENT', 'phone': '+65 6261 8433', 'email': 'danielteo@brillar.sg', 'room': 'Clinic 3‑24', 'langs': 'English, Malay'}, {'name': 'Farah Fong', 'dept': 'Orthopaedics', 'phone': '+65 6991 5889', 'email': 'farahfong@brillar.sg', 'room': 'Clinic 9‑21', 'langs': 'English, Mandarin, Malay'}, {'name': 'Farah Foo', 'dept': 'Respiratory Medicine', 'phone': '+65 6643 1009', 'email': 'farahfoo@brillar.sg', 'room': 'Clinic 7‑11', 'langs': 'English, Mandarin, Malay'}, {'name': 'Zara Teo', 'dept': 'General Surgery', 'phone': '+65 6159 4946', 'email': 'zarateo@brillar.sg', 'room': 'Clinic 7‑03', 'langs': 'English, Mandarin, Tamil'}, {'name': 'Yusuf Foo', 'dept': 'Respiratory Medicine', 'phone': '+65 6228 3103', 'email': 'yusuffoo@brillar.sg', 'room': 'Clinic 8‑16', 'langs': 'English, Malay'}, {'name': 'Thomas Chan', 'dept': 'General Surgery', 'phone': '+65 6652 4295', 'email': 'thomaschan@brillar.sg', 'room': 'Clinic 8‑10', 'langs': 'English, Mandarin'}];

export default function Page() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return ALL_DOCTORS;
    return ALL_DOCTORS.filter(d => d.name.toLowerCase().includes(term));
  }, [q]);

  return (
    <>
      <Header />
      <PageHero src="/img/photos/doctors.jpg" title="Find a Doctor" subtitle="Browse specialists by name and department" />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center gap-3">
          <input
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Search by doctor name…"
            className="w-full md:w-1/2 rounded-xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-sky-300"
          />
          <span className="text-sm text-slate-500">{filtered.length} result{filtered.length===1?'':'s'}</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {filtered.map((d)=> (
            <div key={d.email} className="card">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{d.name}</h3>
                <span className="text-xs rounded-full border px-2 py-0.5">{d.dept}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{d.room} • Languages: {d.langs}</p>
              <div className="mt-3 text-sm">
                <div><strong>Phone:</strong> {d.phone}</div>
                <div><strong>Email:</strong> <a className="underline" href={`mailto:${d.email}`}>{d.email}</a></div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
