import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaSmile } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function AppointmentForm({ onSubmit }) {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  })
  const [sending, setSending] = React.useState(false)
  const [sent, setSent] = React.useState(false)

  const services = [
    { id: 'cleaning', label: 'Teeth Cleaning' },
    { id: 'root-canal', label: 'Root Canal' },
    { id: 'orthodontics', label: 'Orthodontics' }
  ]

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function pickService(id) {
    setForm(prev => ({ ...prev, service: id }))
  }

  function validate() {
    return form.name.trim() && form.phone.trim() && form.email.trim() && form.service
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) {
      const missing = !form.name ? 'Full Name' : !form.phone ? 'Phone Number' : !form.email ? 'Email' : 'Service'
      toast.error(`Please complete: ${missing}`, { position: 'top-right' })
      return
    }
    setSending(true)
    toast.info('Submitting appointment…', { position: 'top-right', autoClose: 1500 })
    // simulate network request
    try {
      await new Promise(res => setTimeout(res, 900))
      setSending(false)
      setSent(true)
      toast.success('Appointment requested — we will contact you soon.', { position: 'top-right' })
      if (onSubmit) onSubmit(form)
    } catch (err) {
      setSending(false)
      toast.error('Something went wrong. Please try again.', { position: 'top-right' })
    }
  }

  if (sent) {
    return (
      <div className="card text-center p-8 rounded-lg shadow-lg">
        <div className="mx-auto w-20 h-20 rounded-full bg-tealmed text-white flex items-center justify-center text-3xl mb-5 shadow-lg">
          <FaSmile aria-hidden="true" />
        </div>
        <h4 className="text-2xl font-semibold text-primary mb-2">Appointment Requested</h4>
        <p className="mt-2 text-slate-600 max-w-md mx-auto">
          Thanks! Our front desk will contact you to confirm the appointment date & time.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/appointment"
            className="bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#002244] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
          >
            Make another request
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accentgray bg-white text-primary font-medium shadow-sm hover:bg-primary/5 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-5">
        <label className="relative">
          <span className="sr-only">Full Name</span>
          <div className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none"><FaUser /></div>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full pl-11 p-3 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition"
            placeholder="Full Name"
            aria-label="Full Name"
          />
        </label>

        <label className="relative">
          <span className="sr-only">Phone Number</span>
          <div className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none"><FaPhoneAlt /></div>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full pl-11 p-3 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition"
            placeholder="Phone Number"
            aria-label="Phone Number"
            inputMode="tel"
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <label className="relative">
          <span className="sr-only">Email</span>
          <div className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none"><FaEnvelope /></div>
          <input
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full pl-11 p-3 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition"
            placeholder="Email address"
            aria-label="Email"
            type="email"
          />
        </label>

        <label className="relative">
          <span className="sr-only">Preferred Date</span>
          <div className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none"><FaCalendarAlt /></div>
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            type="date"
            className="w-full pl-11 p-3 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition"
            aria-label="Preferred Date"
          />
        </label>
      </div>

      <div>
        <div className="text-sm font-semibold text-slate-700 mb-3">
          Choose a Service <span className="text-xs text-slate-400">(required)</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {services.map(s => {
            const selected = form.service === s.id
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => pickService(s.id)}
                aria-pressed={selected}
                className={`px-5 py-2 rounded-full border font-semibold transition focus:ring-2 focus:ring-tealmed/40 ${
                  selected
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-white text-primary border-accentgray hover:bg-primary hover:text-white hover:border-primary'
                }`}
              >
                {s.label}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-4 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition resize-none"
          placeholder="Message (optional)"
          aria-label="Message"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          aria-busy={sending}
          className="bg-primary text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#002244] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 disabled:opacity-60"
        >
          {sending ? 'Sending…' : 'Submit Appointment'}
        </button>

        <button
          type="button"
          onClick={() => setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' })}
          className="inline-flex px-5 py-3 rounded-lg border border-accentgray bg-white text-primary font-semibold shadow-sm hover:bg-primary hover:text-white hover:border-primary transition duration-300 ease-in-out"
        >
          Clear
        </button>
      </div>
    </form>
  )
}