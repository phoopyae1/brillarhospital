import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/conditions.jpg" title="Conditions & Treatments" />
      <main className="mx-auto max-w-6xl px-4 py-10">
<h2 className='text-xl font-semibold mt-8'>Common Conditions</h2>
<p className='mt-2 text-slate-700'>Learn about symptoms, risks, and common tests. Educational content only—seek a qualified clinician for diagnosis and advice tailored to your situation.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Hypertension and heart disease</li>
<li className='mt-1'>Diabetes and metabolic disorders</li>
<li className='mt-1'>Gastrointestinal issues such as GERD and fatty liver</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>Treatment Options</h2>
<p className='mt-2 text-slate-700'>From lifestyle counselling to minimally invasive procedures, our specialists individualise plans around your goals and medical history.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Medication and monitoring plans</li>
<li className='mt-1'>Endoscopy, arthroscopy, and interventional cardiology</li>
<li className='mt-1'>Rehabilitation and long-term care coordination</li>
</ul>
      </main>
      <Footer />
    </>
  );
}
