import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
       ${isActive
         ? 'bg-primary text-white shadow-md'
         : 'text-primary hover:bg-[#002244] hover:text-white hover:shadow-lg'
       }`
    }
    tabIndex={0}
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-accentgray shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-tealmed rounded">
          <img src={logo} alt="SmileCare Dental Logo" className="w-10 h-10 object-contain" />
          <div>
            <div className="text-primary font-heading text-lg select-none">SmileCare Dental</div>
            <div className="text-xs text-slate-500 select-none">Trusted care for your smile</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2" aria-label="Primary Navigation">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/doctors">Doctors</NavItem>
          <NavItem to="/contact">Contact</NavItem>

          <Link
            to="/appointment"
            className="ml-3 bg-primary text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#002244] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
          >
            Book Appointment
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md border border-accentgray hover:bg-tealmed/10 focus:outline-none focus:ring-2 focus:ring-tealmed"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden fixed inset-0 z-50 bg-black/40" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 w-72 h-full bg-white p-6 shadow-lg flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-tealmed rounded">
                <img src={logo} alt="SmileCare Dental Logo" className="w-8 h-8" />
                <div className="text-primary font-medium select-none">SmileCare</div>
              </Link>
              <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-tealmed/10 focus:outline-none focus:ring-2 focus:ring-tealmed" aria-label="Close menu">
                <FaTimes size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-primary font-medium" aria-label="Mobile Navigation">
              {[ 
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/doctors', label: 'Doctors' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} onClick={() => setOpen(false)} className="py-2 px-3 rounded-md hover:bg-tealmed/10 focus:outline-none focus:ring-2 focus:ring-tealmed">
                  {label}
                </Link>
              ))}

              <Link to="/appointment" onClick={() => setOpen(false)} className="py-3 px-4 rounded-md bg-primary text-white text-center shadow-md hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-primary/40 transition mt-6">
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}