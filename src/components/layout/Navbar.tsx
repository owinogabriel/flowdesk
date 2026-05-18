import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../../data/siteData'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { isAuthenticated, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-[72px] flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-2xl text-ink hover:opacity-75 transition-opacity"
        >
          Flow<span className="text-accent">Desk</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="relative text-sm font-medium transition-colors group"
              >
                <span
                  className={
                    pathname === item.path
                      ? 'text-ink'
                      : 'text-muted group-hover:text-ink transition-colors'
                  }
                >
                  {item.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ${
                    pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}

          <li className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-muted hover:text-ink transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="bg-ink text-paper text-sm font-semibold px-5 py-2 rounded-full hover:bg-accent transition-colors"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-muted hover:text-ink transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="bg-ink text-paper text-sm font-semibold px-5 py-2 rounded-full hover:bg-accent transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </li>
        </ul>

        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-border px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium transition-colors ${
                pathname === item.path ? 'text-ink' : 'text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted hover:text-ink transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={() => { logout(); setMobileOpen(false) }}
                className="bg-ink text-paper text-sm font-semibold px-5 py-2.5 rounded-full text-center"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted hover:text-ink transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="bg-ink text-paper text-sm font-semibold px-5 py-2.5 rounded-full text-center"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}