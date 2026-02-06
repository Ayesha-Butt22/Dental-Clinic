import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import { services } from '../data/services';
import { doctors } from '../data/doctors';

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-16 relative">
  {/* Background accent shape */}
  <div className="absolute inset-0 -z-10 bg-off-white from-tealmed/10 via-transparent to-primary/10 rounded-xl"></div>

  <h2 className="font-heading text-4xl md:text-5xl text-primary tracking-wide font-extrabold mb-4">
    Why Choose Us
  </h2>
  <p className="text-lg max-w-lg leading-relaxed text-primary">Professional care, gentle treatments, and a calm environment tailored for you.</p>


  <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-10">
    {/* Card 1 */}
    <div className="card p-8 rounded-xl shadow-lg border border-accentgray hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-white">
      <div className="text-tealmed text-4xl mb-4 select-none">🦷</div>
      <h3 className="font-semibold text-xl mb-3 text-primary">Experienced Dentists</h3>
      <p className="text-sm text-slate-700 leading-relaxed">
        Certified professionals with years of hands-on experience to ensure top-quality care.
      </p>
    </div>

    {/* Card 2 */}
    <div className="card p-8 rounded-xl shadow-lg border border-accentgray hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-white">
      <div className="text-tealmed text-4xl mb-4 select-none">💙</div>
      <h3 className="font-semibold text-xl mb-3 text-primary">Patient-Focused</h3>
      <p className="text-sm text-slate-700 leading-relaxed">
        Comfortable treatments, clear communication, and personalized care plans.
      </p>
    </div>

    {/* Card 3 */}
    <div className="card p-8 rounded-xl shadow-lg border border-accentgray hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-white">
      <div className="text-tealmed text-4xl mb-4 select-none">🏥</div>
      <h3 className="font-semibold text-xl mb-3 text-primary">Modern Clinic</h3>
      <p className="text-sm text-slate-700 leading-relaxed">
        Clean, safe, and equipped with the latest technology for your peace of mind.
      </p>
    </div>
  </div>
</section>

      <section className="bg-offwhite py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="font-heading text-4xl md:text-5xl text-primary tracking-wide font-extrabold mb-4">
            Our Services
          </h2>
          <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="font-heading text-4xl md:text-5xl text-primary tracking-wide font-extrabold mb-4">
    Meet Our Doctors
  </h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
    {doctors.map((d) => (
      <DoctorCard
        key={d.id}
        doctor={d}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
      />
    ))}
  </div>
</section>

    </div>
  );
}
