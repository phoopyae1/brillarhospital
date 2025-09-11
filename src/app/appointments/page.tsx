import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/home.jpg" title="Appointments" />
      <main className="mx-auto max-w-6xl px-4 py-10">
<h2 className='text-xl font-semibold mt-8'>How to Book</h2>
<p className='mt-2 text-slate-700'>Choose a specialty or doctor, then contact us to find the earliest available slots. For non-urgent issues, teleconsult may be suitable after an initial assessment.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Email: appointments@napiergardenshealth.sg</li>
<li className='mt-1'>WhatsApp: +65 8111 9777</li>
<li className='mt-1'>Share referral letters and preferred dates</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>What to Bring</h2>
<p className='mt-2 text-slate-700'>Bring identification, insurance details, a list of medications, and prior reports or scans to facilitate review and planning.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>ID and insurance card</li>
<li className='mt-1'>Medication list & allergies</li>
<li className='mt-1'>Prior lab or imaging results</li>
</ul>
      </main>
      <Footer />
    </>
  );
}
