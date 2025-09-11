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
<li className='mt-1'>General: +65 6473 7222</li>
<li className='mt-1'>UCC (24/7): +65 6470 5688</li>
<li className='mt-1'>Ambulance: 1800-PARKWAY (727 5929)</li>
<li className='mt-1'>WhatsApp (Appointments): +65 8111 9777</li>
</ul>
<h2 className='text-xl font-semibold mt-8'>Visit Us</h2>
<p className='mt-2 text-slate-700'>We’re located near the Singapore Botanic Gardens and Napier MRT (TE12). Parking is available on-site with valet during selected hours.</p>
<ul className='mt-2 list-disc pl-6 text-slate-700'>
<li className='mt-1'>Address: 88 Napier Road, Singapore 258522</li>
<li className='mt-1'>MRT: Napier (TE12), Exit 1</li>
<li className='mt-1'>Bus services along Napier Road</li>
</ul>
      </main>
      <Footer />
    </>
  );
}
