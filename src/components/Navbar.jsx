import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiArrowUpRight } from 'react-icons/fi'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Track scroll position for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer and submenus on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileAboutOpen(false)
  }, [location.pathname])

  // Submenu items under ABOUT DEC
  const aboutSubLinks = [
    { name: 'About DEC', path: '/about', desc: 'Overview, Vision & Grade A Credentials' },
    { name: 'Our Team', path: '/team', desc: 'Leadership & 50+ In-House Engineers' },
    { name: 'Regional Presence', path: '/presence', desc: 'Qatar HQ, Egypt Hub & KSA Delivery' },
  ]

  // Main Top-Level Navigation Links (Excluding items now under ABOUT DEC)
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'EXPERTISE', path: '/expertise' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'WHY DEC', path: '/why-dec' },
    { name: 'INSIGHTS', path: '/insights' },
    { name: 'CAREERS', path: '/careers' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const isAboutActive = 
    location.pathname.startsWith('/about') || 
    location.pathname.startsWith('/team') || 
    location.pathname.startsWith('/our-team') || 
    location.pathname.startsWith('/presence')

  const isContactActive = location.pathname.startsWith('/contact')

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#151515] border-b border-[#B08D57]/30 shadow-2xl shadow-black/90'
          : 'bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 mx-auto">
        <div className="flex items-center justify-between h-24 sm:h-28">
          
          {/* 1. Left: Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="DEC - Desentral Engineering Consultancy" 
              className="w-[140px] sm:w-[160px] md:w-[170px] lg:w-[185px] h-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            />
          </Link>

          {/* 2. Center: Semantic UL & LI Navigation Links with Dropdown & Active Gold Indicator */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-8">
            <ul className="flex items-center gap-3 xl:gap-5 2xl:gap-7">
              {/* HOME LINK */}
              <li>
                <Link
                  to="/"
                  className={`relative py-1.5 text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wider transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] whitespace-nowrap inline-flex flex-col items-center group/nav ${
                    isActive('/') ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  <span>HOME</span>
                  {/* Subtle Gold Indicator for Active Page */}
                  {isActive('/') && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full shadow-[0_0_8px_rgba(176,141,87,0.8)]" />
                  )}
                </Link>
              </li>

              {/* ABOUT DEC DROPDOWN (Contains About, Our Team & Regional Presence) */}
              <li className="relative group py-2">
                <Link
                  to="/about"
                  className={`relative py-1.5 inline-flex items-center gap-1.5 text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wider transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] whitespace-nowrap ${
                    isAboutActive ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  <span>ABOUT DEC</span>
                  <FiChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#B08D57]" />
                  {/* Subtle Gold Indicator for Active Page */}
                  {isAboutActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full shadow-[0_0_8px_rgba(176,141,87,0.8)]" />
                  )}
                </Link>

                {/* Dropdown Floating Menu */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-64 bg-[#141414]/95 border border-[#B08D57]/40 rounded-2xl p-2.5 shadow-2xl shadow-black/95 backdrop-blur-md">
                    {aboutSubLinks.map((sub) => {
                      const isSubActive = location.pathname === sub.path || (sub.path === '/team' && location.pathname === '/our-team')
                      return (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                            isSubActive
                              ? 'bg-[#B08D57]/20 text-[#B08D57]'
                              : 'text-white/85 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className="text-xs font-bold tracking-wider">{sub.name}</div>
                          <div className="text-[10px] text-[#F5F0E7]/50 font-normal mt-0.5">{sub.desc}</div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </li>

              {/* REMAINING CORE LINKS */}
              {navLinks.filter(item => item.name !== 'HOME').map((item) => {
                const active = isActive(item.path)
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`relative py-1.5 text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wider transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] whitespace-nowrap inline-flex flex-col items-center ${
                        active ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                      }`}
                    >
                      <span>{item.name}</span>
                      {/* Subtle Gold Indicator for Active Page */}
                      {active && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full shadow-[0_0_8px_rgba(176,141,87,0.8)]" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* 3. Right: Dedicated Contact Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className={`group relative inline-flex items-center gap-2 px-7 py-2.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
                isContactActive
                  ? 'bg-gradient-to-r from-[#DFBF82] via-[#F6E6CC] to-[#DFBF82] text-[#111111] ring-2 ring-[#B08D57] shadow-[0_4px_22px_rgba(176,141,87,0.55)] scale-[1.02]'
                  : 'bg-gradient-to-r from-[#B08D57] via-[#DFBF82] to-[#B08D57] text-[#111111] border border-[#F6E5CA]/40 shadow-[0_4px_20px_rgba(176,141,87,0.4)] hover:shadow-[0_6px_28px_rgba(176,141,87,0.65)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0'
              }`}
            >
              <span>CONTACT US</span>
              <FiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
          <ul className="flex flex-col space-y-3.5">
            {/* HOME */}
            <li>
              <Link
                to="/"
                className={`flex items-center justify-between py-1 text-sm font-bold tracking-wider transition-colors ${
                  isActive('/') ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                }`}
              >
                <span>HOME</span>
                {isActive('/') && (
                  <span className="w-2 h-2 rounded-full bg-[#B08D57] shadow-[0_0_6px_rgba(176,141,87,0.9)]" />
                )}
              </Link>
            </li>

            {/* ABOUT DEC WITH SUBMENU ACCORDION */}
            <li>
              <div className="flex items-center justify-between py-1">
                <Link
                  to="/about"
                  className={`flex items-center gap-2 text-sm font-bold tracking-wider transition-colors ${
                    isAboutActive ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  <span>ABOUT DEC</span>
                  {isAboutActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B08D57] shadow-[0_0_6px_rgba(176,141,87,0.9)]" />
                  )}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="p-1.5 rounded-lg text-white hover:text-[#B08D57] hover:bg-white/5 transition-colors"
                  aria-label="Toggle About DEC submenu"
                >
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#B08D57] ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileAboutOpen && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-[#B08D57]/30 ml-2">
                  {aboutSubLinks.map((sub) => {
                    const isSubActive = location.pathname === sub.path || (sub.path === '/team' && location.pathname === '/our-team')
                    return (
                      <li key={sub.name}>
                        <Link
                          to={sub.path}
                          className={`flex items-center justify-between py-1 text-xs font-semibold tracking-wider transition-colors ${
                            isSubActive ? 'text-[#B08D57]' : 'text-[#F5F0E7]/70 hover:text-white'
                          }`}
                        >
                          <span>{sub.name}</span>
                          {isSubActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
                          )}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>

            {/* OTHER NAV LINKS */}
            {navLinks.filter(item => item.name !== 'HOME').map((item) => {
              const active = isActive(item.path)
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between py-1 text-sm font-bold tracking-wider transition-colors ${
                      active ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-[#B08D57] shadow-[0_0_6px_rgba(176,141,87,0.9)]" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="pt-4 mt-4 border-t border-white/10">
            <Link
              to="/contact"
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
                isContactActive
                  ? 'bg-gradient-to-r from-[#DFBF82] via-[#F6E6CC] to-[#DFBF82] text-[#111111] ring-2 ring-[#B08D57] shadow-lg shadow-[#B08D57]/35'
                  : 'bg-gradient-to-r from-[#B08D57] via-[#DFBF82] to-[#B08D57] text-[#111111] border border-[#F6E5CA]/40 shadow-lg shadow-[#B08D57]/30 hover:brightness-110'
              }`}
            >
              <span>CONTACT US</span>
              <FiArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
