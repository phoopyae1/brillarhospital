import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/contact.jpg" title="Contact" />
      <main className="mx-auto max-w-6xl px-4 py-10">
<h2 className='text-xl font-semibold mt-8'>Get in Touch</h2>
<p className='mt-2 text-slate-700'>Our main line connects you to general enquiries, clinic appointments, and urgent care guidance. Messaging via WhatsApp is available for appointment coordination.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>General: <a href="tel:+6561234567" className="text-sky-600 hover:underline">+65 6123 4567</a></li>
<li className='mt-1'>UCC (24/7): <a href="tel:+6561234568" className="text-sky-600 hover:underline">+65 6123 4568</a></li>
<li className='mt-1'>Ambulance: <a href="tel:1800123456" className="text-sky-600 hover:underline">1800 (123 456)</a></li>
<li className='mt-1'>WhatsApp (Appointments): <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">+65 9123 4567</a></li>
</ul>
<h2 className='text-xl font-semibold mt-8'>Visit Us</h2>
<p className='mt-2 text-slate-700'>We&apos;re located in the heart of Singapore&apos;s medical district. Parking is available on-site with valet during selected hours.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Address: 200 Healthcare Boulevard, Singapore 238850</li>
<li className='mt-1'>MRT: Medical Centre (CC15), Exit 2</li>
<li className='mt-1'>Bus services along Healthcare Boulevard</li>
</ul>
      </main>
      <Footer />
    </>
  );
}
