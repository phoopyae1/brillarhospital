import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/billing.jpg" title="Billing & Payment" />
      <main className="mx-auto max-w-6xl px-4 py-10">
<h2 className='text-xl font-semibold mt-8'>Bill Estimates & Counselling</h2>
<p className='mt-2 text-slate-700'>Receive indicative cost ranges for common procedures. Final charges vary depending on length of stay, consumables, specialist fees, and other factors.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Appendicectomy (keyhole): SGD 9,000–14,000</li>
<li className='mt-1'>Knee arthroscopy (day surgery): SGD 6,000–10,000</li>
<li className='mt-1'>Coronary angiogram (day surgery): SGD 4,500–7,500</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>Insurance & Payment</h2>
<p className='mt-2 text-slate-700'>We work with a wide panel of insurers and offer direct billing where available. Our team can assist you with pre-authorisations and claims paperwork.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>International and local insurer panels</li>
<li className='mt-1'>Direct billing for partner plans</li>
<li className='mt-1'>Payment by cards, bank transfer, PayNow</li>
</ul>
      </main>
      <Footer />
    </>
  );
}
