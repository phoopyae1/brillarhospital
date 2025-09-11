import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/sitemap.jpg" title="Sitemap" />
      <main className="mx-auto max-w-6xl px-4 py-10">
<h2 className='text-xl font-semibold mt-8'>Site Sections</h2>
<p className='mt-2 text-slate-700'>Browse all key sections of the Brillar Hospital website.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Home</li>
<li className='mt-1'>Patients & Visitors</li>
<li className='mt-1'>Centres & Services</li>
<li className='mt-1'>Find a Doctor</li>
<li className='mt-1'>Admissions</li>
<li className='mt-1'>Billing & Payment</li>
<li className='mt-1'>Conditions & Treatments</li>
<li className='mt-1'>Why Choose Us</li>
<li className='mt-1'>Contact</li>
<li className='mt-1'>Appointments</li>
<li className='mt-1'><a href='/room-charges'>Room Charges</a></li>
</ul>
      </main>
      <Footer />
    </>
  );
}
