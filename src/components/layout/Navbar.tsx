import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../../data/siteData'


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-serif text-2xl text-ink hover:opacity-75 transition-opacity">
          Flow<span className="text-accent">Desk</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.path ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-ink text-paper text-sm font-semibold px-5 py-2 rounded-full hover:bg-accent transition-colors"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-border px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="bg-ink text-paper text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}