import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/admissions.jpg" title="Room Charges" subtitle="Indicative nightly rates and inclusions" />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-slate-700">
          Rates below are indicative and for comparison only. Final bills vary with length of stay,
          specialist fees, consumables, medications, and procedures performed. Prices are in SGD and
          may change without prior notice. Contact Admissions for a personalised estimate.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="p-3 border-b border-slate-200">Room Type</th>
                <th className="p-3 border-b border-slate-200">Inclusions</th>
                <th className="p-3 border-b border-slate-200">Indicative Rate / Night</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-3 font-medium">Private Suite</td>
                <td className="p-3">Ensuite bathroom, lounge area, guest sofa, premium amenities, complimentary parking</td>
                <td className="p-3">1,200–1,800</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Single</td>
                <td className="p-3">Ensuite bathroom, TV, Wi‑Fi, mini‑fridge</td>
                <td className="p-3">800–1,100</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">2‑Bed</td>
                <td className="p-3">Shared bathroom, Wi‑Fi, TV</td>
                <td className="p-3">450–650</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">4‑Bed</td>
                <td className="p-3">Shared bathroom, Wi‑Fi</td>
                <td className="p-3">250–400</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Maternity Suite</td>
                <td className="p-3">Mother‑baby friendly layout, lactation support access</td>
                <td className="p-3">Package‑based</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 p-4 bg-sky-50">
          <h2 className="text-lg font-semibold">Notes</h2>
          <ul className="list-disc pl-6 text-slate-700 mt-2">
            <li>Rates exclude doctor fees, operating theatre, imaging, laboratory tests, and medications unless stated in a package.</li>
            <li>Day-surgery cases are typically billed per procedure plus facility and consumables, not per-night room charges.</li>
            <li>Corporate/insurer rates may differ. Direct billing is available for partner plans.</li>
            <li>For an exact estimate, contact <a className="underline" href="/billing">Billing &amp; Payment</a> or <a className="underline" href="/admissions">Admissions</a>.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
