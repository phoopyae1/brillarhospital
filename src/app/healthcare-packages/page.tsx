import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Page(){
  return (
    <>
      <Header />
      <PageHero src="/img/photos/services.jpg" title="Healthcare Packages" subtitle="Comprehensive health screening and wellness packages tailored to your needs" />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Health Screening Packages</h2>
          <p className="text-slate-700">Our health screening packages are designed to provide comprehensive assessments tailored to different age groups, lifestyles, and health concerns. All packages include same-day results, detailed reports, and follow-up consultations with our specialists.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Package */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Basic Health Screening</h3>
              <span className="text-2xl font-bold text-sky-600">S$280</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Essential health check for adults aged 18-40</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Full blood count & lipid profile</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Liver & kidney function tests</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Diabetes screening (HbA1c)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Urine analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Chest X-ray</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>ECG</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Doctor consultation & report review</span>
              </li>
            </ul>
            <a href="/appointments" className="btn w-full text-center justify-center">Book Now</a>
          </div>

          {/* Comprehensive Package */}
          <div className="card border-2 border-sky-500 relative">
            <div className="absolute -top-3 left-4 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Comprehensive Health Screening</h3>
              <span className="text-2xl font-bold text-sky-600">S$580</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Complete assessment for adults aged 40-60</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>All Basic package items</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Thyroid function test</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Cardiac markers (Troponin, BNP)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Cancer markers (CEA, PSA for men, CA 125 for women)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Abdominal ultrasound</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Bone density scan (DEXA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Stress test (treadmill ECG)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Eye examination</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Specialist consultation & lifestyle counselling</span>
              </li>
            </ul>
            <a href="/appointments" className="btn w-full text-center justify-center">Book Now</a>
          </div>

          {/* Executive Package */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Executive Health Screening</h3>
              <span className="text-2xl font-bold text-sky-600">S$1,280</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Premium comprehensive screening with advanced diagnostics</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>All Comprehensive package items</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>CT coronary calcium score</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Full body MRI scan</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Colonoscopy (with sedation)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Gastroscopy</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Advanced cardiac imaging (Echocardiogram)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Nutritionist consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Personalized health report & action plan</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>6-month follow-up consultation</span>
              </li>
            </ul>
            <a href="/appointments" className="btn w-full text-center justify-center">Book Now</a>
          </div>

          {/* Women&apos;s Health Package */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Women&apos;s Health Package</h3>
              <span className="text-2xl font-bold text-sky-600">S$450</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Comprehensive screening tailored for women</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Basic health screening panel</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Pap smear & HPV test</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Breast ultrasound</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Mammography (for 40+)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Bone density scan</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Hormone panel (FSH, LH, Estradiol)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Gynaecologist consultation</span>
              </li>
            </ul>
            <a href="/appointments" className="btn w-full text-center justify-center">Book Now</a>
          </div>

          {/* Men&apos;s Health Package */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Men&apos;s Health Package</h3>
              <span className="text-2xl font-bold text-sky-600">S$420</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Comprehensive screening tailored for men</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Basic health screening panel</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>PSA (Prostate-specific antigen)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Testosterone level</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Cardiac stress test</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Abdominal ultrasound</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Urologist consultation</span>
              </li>
            </ul>
            <a href="/appointments" className="btn w-full text-center justify-center">Book Now</a>
          </div>

          {/* Senior Health Package */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Senior Health Package</h3>
              <span className="text-2xl font-bold text-sky-600">S$680</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Comprehensive screening for adults 60+</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>All Comprehensive package items</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Cognitive assessment (MMSE)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Falls risk assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Vitamin D & B12 levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Hearing test (audiometry)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Geriatrician consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>Medication review</span>
              </li>
            </ul>
            <a href="/appointments" className="btn w-full text-center justify-center">Book Now</a>
          </div>
        </div>

        <section className="mt-12 card">
          <h2 className="text-2xl font-semibold mb-4">Package Inclusions & Notes</h2>
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold mb-2">What&apos;s Included:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Same-day results for most tests (advanced imaging may take 2-3 business days)</li>
                <li>Detailed health report with explanations</li>
                <li>Follow-up consultation with specialist</li>
                <li>Digital access to all test results via patient portal</li>
                <li>Lifestyle counselling and health recommendations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Preparation Guidelines:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Fasting required: 8-12 hours before blood tests (water is allowed)</li>
                <li>Continue regular medications unless advised otherwise</li>
                <li>Wear comfortable clothing for physical examinations</li>
                <li>Bring previous medical reports if available</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Additional Services:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Add-on tests available based on individual risk factors</li>
                <li>Family packages and corporate group discounts available</li>
                <li>Insurance claims support (Medisave, private insurance)</li>
                <li>Teleconsultation follow-ups available</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <a href="/contact" className="btn">Enquire About Custom Packages</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

