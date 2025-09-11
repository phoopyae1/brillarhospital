import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/whyus.jpg" title="Why Choose Us" />
      <main className="mx-auto max-w-6xl px-4 py-10">
<h2 className='text-xl font-semibold mt-8'>Our Hospital</h2>
<p className='mt-2 text-slate-700'>A private acute-care facility in the Napier Road medical district offering modern diagnostics, comfortable wards, and coordinated inpatient and outpatient services.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Specialist-led care pathways</li>
<li className='mt-1'>Coordinated multi-disciplinary teams</li>
<li className='mt-1'>Emphasis on communication and patient experience</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>Quality & Safety</h2>
<p className='mt-2 text-slate-700'>We follow international benchmarks for clinical governance, medication safety, infection prevention, and monitoring of outcomes.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Regular audits and drills</li>
<li className='mt-1'>Transparent feedback and improvement</li>
<li className='mt-1'>Dedicated quality office</li>
</ul>
      </main>
      <Footer />
    </>
  );
}
