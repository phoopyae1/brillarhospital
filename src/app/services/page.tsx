import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/services.jpg" title="Centres & Services" subtitle="From urgent care to specialist centres" />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-1.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Urgent Care Centre (24/7)</h3>
          <p className="mt-1 text-sm text-slate-700">Walk‑in urgent care for non‑life‑threatening conditions and stabilisation prior to admission.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Triage & rapid testing</li>
<li className='text-sm text-slate-600'>Observation bays</li>
<li className='text-sm text-slate-600'>On‑call specialists</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-2.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Imaging & Radiology</h3>
          <p className="mt-1 text-sm text-slate-700">Comprehensive diagnostic imaging with same‑day reporting for routine studies.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>X‑ray, Ultrasound</li>
<li className='text-sm text-slate-600'>CT, MRI</li>
<li className='text-sm text-slate-600'>Image‑guided procedures</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-3.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Health Screening</h3>
          <p className="mt-1 text-sm text-slate-700">Baseline to executive packages with personalised counselling.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Pre‑visit fasting guidance</li>
<li className='text-sm text-slate-600'>Add‑on tests by risk</li>
<li className='text-sm text-slate-600'>Lifestyle coaching</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-4.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Cardiac Centre</h3>
          <p className="mt-1 text-sm text-slate-700">Diagnostics and interventional cardiology with integrated rehab support.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>ECG, Echo, Treadmill</li>
<li className='text-sm text-slate-600'>Angiogram</li>
<li className='text-sm text-slate-600'>Risk factor management</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-5.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Cancer Centre</h3>
          <p className="mt-1 text-sm text-slate-700">Multidisciplinary cancer care from screening to survivorship.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Screening & biopsy</li>
<li className='text-sm text-slate-600'>Chemo infusion suite</li>
<li className='text-sm text-slate-600'>Supportive care</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-6.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Digestive Health</h3>
          <p className="mt-1 text-sm text-slate-700">Full spectrum of GI care including endoscopy and liver clinic.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Gastroscopy & Colonoscopy</li>
<li className='text-sm text-slate-600'>HPB clinic</li>
<li className='text-sm text-slate-600'>Dietetic support</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-7.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Orthopaedics & Sports</h3>
          <p className="mt-1 text-sm text-slate-700">Joint care, sports medicine and minimally invasive procedures.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Arthroscopy</li>
<li className='text-sm text-slate-600'>Fracture management</li>
<li className='text-sm text-slate-600'>Rehabilitation</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-8.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Women’s & Maternity</h3>
          <p className="mt-1 text-sm text-slate-700">Preconception advice, antenatal care, delivery suites and postnatal support.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Antenatal classes</li>
<li className='text-sm text-slate-600'>Maternity packages</li>
<li className='text-sm text-slate-600'>Lactation services</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-9.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Neuroscience</h3>
          <p className="mt-1 text-sm text-slate-700">Comprehensive care for brain and nerve conditions.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Neurology consults</li>
<li className='text-sm text-slate-600'>Neuroimaging</li>
<li className='text-sm text-slate-600'>Movement disorders</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-10.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Urology & Kidney</h3>
          <p className="mt-1 text-sm text-slate-700">Kidney stone, prostate and urinary tract care.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Stone treatment</li>
<li className='text-sm text-slate-600'>BPH care</li>
<li className='text-sm text-slate-600'>CKD management</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-11.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Eye Centre</h3>
          <p className="mt-1 text-sm text-slate-700">Medical and surgical eye care for adults and children.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Cataract</li>
<li className='text-sm text-slate-600'>Glaucoma</li>
<li className='text-sm text-slate-600'>Retina</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card flex flex-col">
        <img src="/img/services/svc-12.jpg" alt="" className="h-40 w-full object-cover" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold">Rehabilitation</h3>
          <p className="mt-1 text-sm text-slate-700">Physiotherapy, occupational and speech therapy.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1"><li className='text-sm text-slate-600'>Post‑op rehab</li>
<li className='text-sm text-slate-600'>Swallowing therapy</li>
<li className='text-sm text-slate-600'>Return‑to‑sport plans</li></ul>
          <div className="mt-4">
            <a href="/appointments" className="btn">Book</a>
            <a href="/contact" className="ml-2 inline-flex items-center text-sky-700">Enquire →</a>
          </div>
        </div>
      </div>
    
        </div>
      </main>
      <Footer />
    </>
  );
}
