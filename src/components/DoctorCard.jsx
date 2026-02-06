import React from 'react'
import { FaStar, FaMapMarkerAlt, FaCheckCircle, FaPhoneAlt, FaClock } from 'react-icons/fa'

/*
Enhanced DoctorCard
Usage: <DoctorCard doctor={doctor} />
doctor should include: name, photo, specialization, qualification, experience, rating, ratingCount, waitTime, clinicName, price, verified
*/
export default function DoctorCard({ doctor = {} }) {
  const {
    name = 'Dr. Name',
    photo,
    specialization = 'General Dentist',
    qualification = '',
    experience = '—',
    rating = 4.8,
    ratingCount = 120,
    waitTime = '15 mins',
    clinicName = 'Clinic Name',
    price = '—',
    verified = false,
    phone = ''
  } = doctor

  const roundedRating = Math.round(rating * 10) / 10

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300 border border-accentgray overflow-hidden">
      <div className="p-5 md:p-6">
        <div className="flex gap-4 items-start">
          {/* Avatar */}
          <div className="w-22 h-22 md:w-24 md:h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 ring-1 ring-accentgray">
            <img
              src={photo || '/src/assets/doctor-placeholder.jpg'}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary leading-tight truncate">
                    {name}
                  </h3>
                  {verified && (
                    <span title="Verified" className="text-tealmed">
                      <FaCheckCircle />
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 mt-1 truncate">{specialization}</p>
                {qualification && <p className="text-xs text-slate-400 mt-1 truncate">{qualification}</p>}
              </div>

              {/* Compact rating block on the right (small) */}
              <div className="flex-shrink-0 text-right">
                <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1 rounded-full">
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className={i < Math.round(rating) ? 'text-yellow-400' : 'text-slate-200'} />
                    ))}
                  </div>
                  <div className="text-sm font-semibold">{roundedRating}</div>
                </div>
                <div className="text-xs text-slate-400 mt-1">{ratingCount} reviews</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-4 grid grid-cols-3 text-center text-xs text-slate-600 border-t border-b border-accentgray/60 py-2">
              <div>
                <div className="text-slate-400 text-[11px]">Experience</div>
                <div className="font-medium text-primary text-sm mt-1">{experience} yrs</div>
              </div>

              <div className="border-x border-accentgray/60">
                <div className="text-slate-400 text-[11px]">Ratings</div>
                <div className="font-medium text-primary text-sm mt-1">{roundedRating} <span className="text-[11px] text-slate-400">({ratingCount})</span></div>
              </div>

              <div>
                <div className="text-slate-400 text-[11px]">Wait</div>
                <div className="font-medium text-primary text-sm mt-1"><FaClock className="inline mr-1 text-xs" />{waitTime}</div>
              </div>
            </div>

            {/* Location + Price */}
            <div className="mt-4 flex items-center justify-between gap-3 bg-offwhite border border-accentgray rounded-lg px-3 py-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-md bg-white grid place-items-center text-primary">
                  <FaMapMarkerAlt />
                </div>
                <div className="text-sm text-slate-700 truncate">{clinicName}</div>
              </div>

              <div className="text-sm font-semibold text-primary">Rs. {price}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="px-5 pb-5">
        <div className="flex gap-3">
          <a
            href={`/appointment`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-[#002244] hover:shadow-lg transition"
          >
            Book Appointment
          </a>

          {/* Secondary quick-call button */}
          <a
            href={phone ? `tel:${phone}` : '#'}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-accentgray text-primary text-sm font-medium hover:bg-primary/5 transition"
            aria-label={`Call ${name}`}
          >
            <FaPhoneAlt /> Call
          </a>
        </div>
      </div>
    </article>
  )
}