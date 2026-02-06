import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-6">
        <h1 className="text-5xl font-heading text-primary leading-tight">Our Services</h1>
        <p className="mt-2 text-primary max-w-3xl leading-relaxed text-lg"
>
          We provide a wide range of dental treatments using modern techniques and a gentle approach. Choose a service to learn more or book an appointment.
        </p>
      </header>

      <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  )
}