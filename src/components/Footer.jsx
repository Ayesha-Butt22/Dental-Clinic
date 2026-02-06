import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8">

        {/* Branding Section */}
        <div>
          <h3 className="font-heading text-2xl">SmileCare</h3>
          <div className="text-xs text-white select-none">Trusted care for your smile</div>

          <div className="mt-6 flex flex-col gap-3 text-sm max-w-xs">
            <div className="flex items-center gap-3">
              <FaPhoneAlt aria-hidden="true" />
              <a
                href="tel:5551234567"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                (555) 123-4567
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope aria-hidden="true" />
              <a
                href="mailto:hello@dentalclinic.com"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                hello@dentalclinic.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick links" className="md:col-span-1">
          <h4 className="font-medium text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/doctors"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Doctors
              </Link>
            </li>
            <li>
              <Link
                to="/appointment"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Appointment
              </Link>
            </li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div>
          <h4 className="font-medium text-lg mb-4">Join Newsletter</h4>
          <p className="text-sm mt-1 text-primary/90 max-w-xs">Get oral care tips & offers</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Subscribed (demo)')
            }}
            className="mt-4 flex gap-2 max-w-xs"
            aria-label="Subscribe to newsletter"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-grow p-3 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-tealmed"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-white text-primary px-6 py-3 rounded-md shadow-md hover:bg-[#002244] hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
            >
              Join
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-white">
            <a
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#00243f] text-sm py-3 text-center select-none">
        © {new Date().getFullYear()} SmileCare Dental. All rights reserved.
      </div>
    </footer>
  )
}
