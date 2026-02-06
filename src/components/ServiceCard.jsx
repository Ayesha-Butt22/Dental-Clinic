import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="card rounded-xl bg-white shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1 p-6">
      <div className="flex gap-6 items-start">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-tealmed/20 to-primary/10 grid place-items-center text-primary shadow-md">
          <Icon size={36} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-xl text-primary">{service.title}</h3>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">{service.short}</p>
          <div className="mt-6 flex items-center justify-between">
            <Link
              to="/services"
              className="text-sm text-primary hover:underline inline-flex items-center gap-2 font-medium transition-colors duration-200"
            >
              Learn more <FaArrowRight className="text-xs" />
            </Link>

            <Link
              to="/appointment"
              className="bg-primary text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#002244] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}