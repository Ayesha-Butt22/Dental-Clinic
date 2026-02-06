import React from 'react';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

export default function Doctors() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-heading text-primary leading-tight">
        Our Doctors
      </h1>
      <p className="mt-2 text-primary max-w-3xl leading-relaxed text-lg"
>
        Meet our certified, experienced dentists.
      </p>

      <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {doctors.map((d) => (
          <DoctorCard key={d.id} doctor={d} />
        ))}
      </div>
    </div>
  );
}
