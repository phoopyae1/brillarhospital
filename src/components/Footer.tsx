export default function Footer(){
  return (
    <footer className="mt-12 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-white font-semibold">Contact</div>
          <p className="mt-2 text-sm">
            88 Napier Road<br/>Singapore 258522<br/>
            General: +65 6473 7222<br/>
            UCC (24/7): +65 6470 5688<br/>
            Ambulance: 1800-PARKWAY (727 5929)
          </p>
        </div>
        <div>
          <div className="text-white font-semibold">Patients</div>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="/patients">Patients & Visitors</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/billing">Billing</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Care</div>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="/services">Centres & Services</a></li>
            <li><a href="/conditions">Conditions</a></li>
            <li><a href="/doctors">Find a Doctor</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">About</div>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="/why-us">Why Choose Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 text-xs text-slate-500 py-4 text-center">
        © {new Date().getFullYear()} Brillar Hospital · Mock site for demo use
      </div>
    </footer>
  );
}
