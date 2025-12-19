export default function Footer(){
  return (
    <footer className="mt-12 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-white font-semibold">Contact</div>
          <p className="mt-2 text-sm">
            200 Healthcare Boulevard<br/>Singapore 238850<br/>
            General: <a href="tel:+6561234567" className="text-sky-400 hover:underline">+65 6123 4567</a><br/>
            UCC (24/7): <a href="tel:+6561234568" className="text-sky-400 hover:underline">+65 6123 4568</a><br/>
            Ambulance: <a href="tel:1800123456" className="text-sky-400 hover:underline">1800 (123 456)</a>
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
            <li><a href="/healthcare-packages">Healthcare Packages</a></li>
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
