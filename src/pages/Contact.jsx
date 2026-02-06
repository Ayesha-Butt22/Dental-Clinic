import React from 'react'
import { toast } from 'react-toastify'

export default function Contact() {
  const [sending, setSending] = React.useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')?.toString().trim()
    const email = form.get('email')?.toString().trim()
    const message = form.get('message')?.toString().trim()

    if (!name || !email || !message) {
      toast.error('Please complete all required fields.', { position: 'top-right' })
      return
    }

    setSending(true)
    toast.info('Sending message…', { position: 'top-right', autoClose: 1400 })
    // simulate API
    setTimeout(() => {
      setSending(false)
      toast.success('Message sent — we will contact you soon.', { position: 'top-right' })
      e.target.reset()
    }, 900)
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-heading text-primary leading-tight">Contact Us</h1>
      <p className="mt-2 text-primary max-w-3xl leading-relaxed text-lg">Reach out for questions or directions.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="card p-6 rounded-lg shadow-md border border-accentgray">
          <h3 className="font-semibold text-xl mb-4">Clinic Details</h3>
          <p className="text-sm mt-1">Address: 123 Clinic Street, City</p>
          <p className="text-sm mt-1">Phone: (555) 123-4567</p>
          <p className="text-sm mt-1">Email: hello@dentalclinic.com</p>

          <div className="mt-6">
            <iframe
              title="clinic-map"
              src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-52 border border-accentgray rounded-md shadow-sm"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="card p-6 rounded-lg shadow-md border border-accentgray">
          <h3 className="font-semibold text-xl mb-4">Contact Form</h3>
          <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              className="w-full p-3 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition"
              placeholder="Full Name"
              required
              aria-label="Full Name"
            />
            <input
              name="email"
              type="email"
              className="w-full p-3 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition"
              placeholder="Email"
              required
              aria-label="Email"
            />
            <input
              name="phone"
              type="tel"
              className="w-full p-3 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition"
              placeholder="Phone"
              aria-label="Phone"
            />
            <textarea
              name="message"
              className="w-full p-3 border border-accentgray rounded-lg focus:outline-none focus:ring-2 focus:ring-tealmed transition resize-none"
              rows="4"
              placeholder="Message"
              required
              aria-label="Message"
            />
            <div>
              <button
                type="submit"
                disabled={sending}
                className="bg-primary text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#002244] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 disabled:opacity-60"
              >
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}