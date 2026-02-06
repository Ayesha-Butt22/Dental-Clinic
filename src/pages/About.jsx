import React from 'react'
import { Link } from 'react-router-dom'
import { FaTooth, FaHandsHelping, FaAward } from 'react-icons/fa'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="text-5xl font-heading text-primary leading-tight">About Our Clinic</h1>
        <p className="mt-2 text-primary max-w-3xl leading-relaxed text-lg">
          We are dedicated to delivering high-quality dental care in a calm and professional environment. Our mission is to keep your smile healthy and confident through modern treatments and a caring team.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="card p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-3">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Provide compassionate, evidence-based dental care with a patient-first approach. We emphasize pain-minimizing techniques and education so patients feel calm and informed.
            </p>
          </div>

          <div className="card p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-3">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be the trusted dental clinic in our community known for gentle care, modern facilities, and measurable patient outcomes.
            </p>
          </div>
          <div className="mt-4 p-4 bg-offwhite border border-accentgray rounded-lg">
              <h4 className="font-medium text-primary mb-2">Our Approach</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We combine the latest dental techniques with a caring approach — clear explanations, gentle treatments, and personalised plans so every patient feels comfortable and confident.
              </p>
            </div>

          
        </div>

        <div className="space-y-6">
          <div className="bg-offwhite p-6 rounded-xl shadow-sm border border-accentgray">
            <h4 className="font-medium text-lg mb-3">Why Patients Choose Us</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-tealmed mt-1"><FaHandsHelping /></span>
                <div>
                  <div className="font-medium text-primary">Patient‑Centred Care</div>
                  <div className="text-xs">Comfort-first treatments and clear communication.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-tealmed mt-1"><FaTooth /></span>
                <div>
                  <div className="font-medium text-primary">Modern Techniques</div>
                  <div className="text-xs">Up-to-date clinical protocols and sterilization.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-tealmed mt-1"><FaAward /></span>
                <div>
                  <div className="font-medium text-primary">Experienced Team</div>
                  <div className="text-xs">Certified dentists with years of experience.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="card p-6 rounded-lg border border-slate-200 shadow-md">
            <h4 className="font-medium text-lg mb-3">Clinic Environment</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clean, safe and calming interiors designed for families and children. We follow strict infection control and maintain a friendly atmosphere.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white rounded-lg p-3 border border-accentgray">
                <div className="text-xs text-slate-400">Years</div>
                <div className="font-semibold text-primary">15+</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-accentgray">
                <div className="text-xs text-slate-400">Patients</div>
                <div className="font-semibold text-primary">20k+</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-accentgray">
                <div className="text-xs text-slate-400">Satisfied</div>
                <div className="font-semibold text-primary">99%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}