import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/admissions.jpg" title="Admissions" />
      <main className="mx-auto max-w-6xl px-4 py-10">
<h2 className='text-xl font-semibold mt-8'>Before Admission</h2>
<p className='mt-2 text-slate-700'>We’ll confirm appointment details, pre-operative tests, and fasting instructions if required. Bring identification, insurance information, and your current medication list.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>ID/passport and referral letter</li>
<li className='mt-1'>Insurance card/policy details</li>
<li className='mt-1'>Medication list and allergies</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>During Your Stay</h2>
<p className='mt-2 text-slate-700'>Our nursing team will orient you to the ward environment and call-bell system. You’ll review consent forms, procedure briefings, and pain management plans with your care team.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Ward orientation and visiting hours</li>
<li className='mt-1'>Consent & safety checklists</li>
<li className='mt-1'>Meal services and special diets</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>Discharge</h2>
<p className='mt-2 text-slate-700'>Discharge includes medication counselling, medical certificates if applicable, follow-up appointments, and a clear summary of next steps. Billing and insurance claims can be completed on-site.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Medication pickup or delivery options</li>
<li className='mt-1'>Follow-up scheduling</li>
<li className='mt-1'>Claims and bill settlement</li>
</ul>
      </main>
      <Footer />
    </>
  );
}
