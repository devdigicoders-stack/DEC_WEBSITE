import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Center Navigation Links (ul & li)
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'OUR TEAM', path: '/team' },
    { name: 'EXPERTISE', path: '/expertise' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'PRESENCE', path: '/presence' },
    { name: 'WHY DEC', path: '/why-dec' },
    { name: 'INSIGHTS', path: '/insights' },
    { name: 'CAREERS', path: '/careers' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const isContactActive = location.pathname.startsWith('/contact')

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/85 via-black/40 to-transparent transition-all duration-300 font-sans">
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 mx-auto">
        <div className="flex items-center justify-between h-24">
          
          {/* 1. Left: Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="DEC - Desentral Engineering Consultancy" 
              className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            />
          </Link>

          {/* 2. Center: Semantic UL & LI Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-2 xl:px-6">
            <ul className="flex items-center gap-2 xl:gap-4 2xl:gap-6">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wider transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] whitespace-nowrap ${
                      isActive(item.path)
                        ? 'text-[#B08D57]'
                        : 'text-white hover:text-[#B08D57]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. Right: Dedicated Contact Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md ${
                isContactActive
                  ? 'bg-white text-[#151515] ring-2 ring-[#B08D57]'
                  : 'bg-gradient-to-r from-[#B08D57] via-[#d4af72] to-[#B08D57] text-[#151515] hover:brightness-110 shadow-[#B08D57]/20 hover:scale-105 active:scale-95'
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-white hover:text-[#B08D57] hover:bg-white/10 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#151515] border-b border-[#B08D57]/30 px-6 py-6 shadow-2xl">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`block py-1.5 text-sm font-bold tracking-wider transition-colors ${
                    isActive(item.path)
                      ? 'text-[#B08D57]'
                      : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 mt-4 border-t border-white/10">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm tracking-wider uppercase text-[#151515] bg-gradient-to-r from-[#B08D57] via-[#d4af72] to-[#B08D57] shadow-lg shadow-[#B08D57]/20"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
