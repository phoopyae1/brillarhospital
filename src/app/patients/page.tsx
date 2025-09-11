import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/patients.jpg" title="Patients & Visitors" />
      <main className="mx-auto max-w-6xl px-4 py-10">
<h2 className='text-xl font-semibold mt-8'>Becoming a Patient</h2>
<p className='mt-2 text-slate-700'>Whether you are visiting for a consultation, a diagnostic test, or a planned procedure, our coordinators help you schedule appointments, advise on preparation, and arrange any pre-admission tests.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Find a doctor by specialty or language</li>
<li className='mt-1'>Request teleconsults for suitable follow-ups</li>
<li className='mt-1'>Receive pre-admission guidance for fasting or medication adjustments</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>International Patients</h2>
<p className='mt-2 text-slate-700'>Our team supports regional visitors with travel documentation, airport transfer, interpreters, and accommodation close to the Botanic Gardens and Orchard area. There is no administrative surcharge for using this service.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Doctor recommendations and second opinions</li>
<li className='mt-1'>Visa support letters and document checklists</li>
<li className='mt-1'>Hotel or serviced apartment coordination</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>Visiting Guidelines</h2>
<p className='mt-2 text-slate-700'>To protect rest and safety, we maintain visiting windows and capacity limits. Children under 12 are generally discouraged in critical units.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>General wards: 08:00–20:00 daily (max 2 visitors at a time)</li>
<li className='mt-1'>ICU/HDU: 12:00–14:00 & 17:30–20:00 (1 visitor at a time)</li>
<li className='mt-1'>NICU: 08:00–20:00 (parents only unless authorised)</li>
</ul>
      </main>
      <Footer />
    </>
  );
}
