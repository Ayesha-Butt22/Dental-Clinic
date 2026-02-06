import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-image.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-offwhite">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-heading text-primary leading-tight">
            Gentle care. Confident smiles.
          </h1>
          <p className="text-lg text-slate-700 max-w-lg leading-relaxed">
            Patient first dental services, comfortable treatments, modern clinic,
            caring team.
            <br />
            <b> Book a visit or talk to our specialists</b>
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
       <Link
  to="/appointment"
  className="bg-primary text-white px-8 py-4 rounded-xl shadow-md
             hover:bg-[#002244] hover:shadow-lg
             focus:outline-none focus:ring-2 focus:ring-primary/40
             transition-all duration-300"
>
  Book Appointment
</Link>


            <Link
  to="/services"
  className="bg-primary text-white px-8 py-4 rounded-xl shadow-md
             hover:bg-[#002244] hover:shadow-lg
             focus:outline-none focus:ring-2 focus:ring-primary/40
             transition-all duration-300"
>
  Our Services
</Link>

          </div>

          <div className="mt-10 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-offwhite grid place-items-center text-primary font-semibold text-xl">
                ✓
              </div>
              <div>
                <div className="text-base font-semibold text-primary">
                  Certified Dentists
                </div>
                <div className="text-sm text-slate-500">Experienced & friendly</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-offwhite grid place-items-center text-primary font-semibold text-xl">
                🕒
              </div>
              <div>
                <div className="text-base font-semibold text-primary">Flexible Hours</div>
                <div className="text-sm text-slate-500">Weekdays & Saturday</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div >
            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
