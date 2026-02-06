import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

export default function Appointment() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl text-primary tracking-wide mb-4">
        Book an Appointment
      </h1>
      <p className="mt-2 text-primary max-w-3xl leading-relaxed text-lg"
>
        Schedule your appointment easily using this form.

      </p>
      <div className="mt-8 card p-8 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
        <AppointmentForm />
      </div>
    </div>
  );
}
