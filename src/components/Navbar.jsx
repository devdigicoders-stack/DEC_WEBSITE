import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiArrowUpRight } from 'react-icons/fi'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)
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

  // Close mobile drawer and submenus on route/hash change
  const currentFullRoute = location.pathname + location.search + location.hash
  const [prevRoute, setPrevRoute] = useState(currentFullRoute)
  if (prevRoute !== currentFullRoute) {
    setPrevRoute(currentFullRoute)
    setMobileOpen(false)
    setMobileAboutOpen(false)
    setMobileProjectsOpen(false)
    setMobileExpertiseOpen(false)
  }

  const handleScrollToHash = (hash) => {
    if (location.pathname === '/expertise') {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Submenu items under ABOUT DEC
  const aboutSubLinks = [
    { name: 'About DEC', path: '/about', desc: 'Overview, Vision & Grade A Credentials' },
    { name: 'Our Team', path: '/team', desc: 'Leadership & 50+ In-House Engineers' },
    { name: 'Regional Presence', path: '/presence', desc: 'Qatar HQ, Egypt Hub & KSA Delivery' },
  ]

  // Submenu items under EXPERTISE (6 Core Engineering Disciplines)
  const expertiseSubLinks = [
    { name: 'Architectural & Space Planning', path: '/expertise#architecture', hash: '#architecture', desc: 'Concepts, space planning & fit-outs' },
    { name: 'Civil & Structural Engineering', path: '/expertise#structural', hash: '#structural', desc: 'RC, steel, PEB & foundation design' },
    { name: 'Mechanical & HVAC Engineering', path: '/expertise#mechanical', hash: '#mechanical', desc: 'HVAC, chilled water & smoke management' },
    { name: 'Electrical & Low Voltage (ELV)', path: '/expertise#electrical', hash: '#electrical', desc: 'Power, substation, lighting & BMS' },
    { name: 'Statutory Permitting Approvals', path: '/expertise#regulatory', hash: '#regulatory', desc: 'QCD, MME, Kahramaa & Ashghal' },
    { name: 'BIM & Digital Twin Delivery', path: '/expertise#bim', hash: '#bim', desc: '3D coordinated models & clash detection' },
  ]

  // Submenu items under PROJECTS (7 Sectors + All Projects) - Consistent Sector Naming
  const projectSubLinks = [
    { name: 'All Delivered Projects', path: '/projects?category=All' },
    { name: 'Offices – Corporate & Workplaces', path: '/projects?category=offices' },
    { name: 'Retail – Luxury & Commercial', path: '/projects?category=retail' },
    { name: 'F&B – Food & Beverage', path: '/projects?category=fnb' },
    { name: 'Hospitality – Hotels & Resorts', path: '/projects?category=hospitality' },
    { name: 'Residential – High-End Residential', path: '/projects?category=residential' },
    { name: 'Industrial – Manufacturing & Logistics', path: '/projects?category=industrial' },
    { name: 'Medical – Healthcare & Pharma', path: '/projects?category=medical' },
  ]

  // Other Top-Level Navigation Links
  const otherNavLinks = [
    { name: 'WHY DEC', path: '/why-dec' },
    { name: 'CORPORATE CREDENTIALS', path: '/insights' },
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

  const isExpertiseActive = location.pathname.startsWith('/expertise')
  const isProjectsActive = location.pathname.startsWith('/projects')
  const isContactActive = location.pathname.startsWith('/contact')

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#151515] border-b border-[#B08D57]/40 shadow-2xl shadow-black/95'
          : 'bg-[#0d0d0d] border-b border-[#B08D57]/30 shadow-xl shadow-black/80'
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

          {/* 2. Center: Semantic UL & LI Navigation Links with Dropdowns & Active Gold Indicator */}
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
                  {isActive('/') && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full shadow-[0_0_8px_rgba(176,141,87,0.8)]" />
                  )}
                </Link>
              </li>

              {/* ABOUT DEC DROPDOWN */}
              <li className="relative group py-2">
                <Link
                  to="/about"
                  className={`relative py-1.5 inline-flex items-center gap-1.5 text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wider transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] whitespace-nowrap ${
                    isAboutActive ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  <span>ABOUT DEC</span>
                  <FiChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#B08D57]" />
                  {isAboutActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full shadow-[0_0_8px_rgba(176,141,87,0.8)]" />
                  )}
                </Link>

                {/* About Dropdown Floating Menu */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-64 bg-[#141414]/98 border border-[#B08D57]/40 rounded-2xl p-2.5 shadow-2xl shadow-black/95 backdrop-blur-md">
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

              {/* EXPERTISE DROPDOWN (Contains 6 Disciplines) */}
              <li className="relative group py-2">
                <Link
                  to="/expertise"
                  className={`relative py-1.5 inline-flex items-center gap-1.5 text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wider transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] whitespace-nowrap ${
                    isExpertiseActive ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  <span>EXPERTISE</span>
                  <FiChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#B08D57]" />
                  {isExpertiseActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full shadow-[0_0_8px_rgba(176,141,87,0.8)]" />
                  )}
                </Link>

                {/* Expertise Dropdown Floating Menu (2-Column Grid) */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-[450px] bg-[#141414]/98 border border-[#B08D57]/40 rounded-2xl p-3.5 shadow-2xl shadow-black/95 backdrop-blur-md">
                    <div className="px-3 py-1.5 mb-2.5 border-b border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#B08D57]">
                        OUR ENGINEERING DISCIPLINES
                      </span>
                      <Link 
                        to="/expertise" 
                        onClick={() => {
                          if (location.pathname === '/expertise') {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#B08D57]/20 hover:bg-[#B08D57] text-[#B08D57] hover:text-[#151515] border border-[#B08D57]/40 text-[11px] font-bold tracking-wide transition-all duration-200 cursor-pointer shadow-sm group/all"
                      >
                        <span>All Capabilities</span>
                        <FiArrowUpRight className="text-xs transition-transform duration-200 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {expertiseSubLinks.map((sub) => {
                        const isSubActive = location.pathname === '/expertise' && location.hash === sub.hash

                        return (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => handleScrollToHash(sub.hash)}
                            className={`block px-3 py-2 rounded-xl transition-all ${
                              isSubActive
                                ? 'bg-[#B08D57]/20 text-[#B08D57] ring-1 ring-[#B08D57]/40'
                                : 'text-white/85 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <div className="text-xs font-bold tracking-wide truncate">{sub.name}</div>
                            <div className="text-[10px] text-[#F5F0E7]/50 font-normal truncate mt-0.5">{sub.desc}</div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </li>

              {/* PROJECTS DROPDOWN (Contains 7 Sectors + All Projects) */}
              <li className="relative group py-2">
                <Link
                  to="/projects"
                  className={`relative py-1.5 inline-flex items-center gap-1.5 text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wider transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] whitespace-nowrap ${
                    isProjectsActive ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  <span>PROJECTS</span>
                  <FiChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#B08D57]" />
                  {isProjectsActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full shadow-[0_0_8px_rgba(176,141,87,0.8)]" />
                  )}
                </Link>

                {/* Projects Dropdown Floating Menu (2-Column Rich Grid) */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-[560px] bg-[#141414]/98 border border-[#B08D57]/40 rounded-2xl p-3.5 shadow-2xl shadow-black/95 backdrop-blur-md">
                    <div className="px-3 py-1.5 mb-2.5 border-b border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#B08D57]">
                        PORTFOLIO BY SECTOR
                      </span>
                      <Link to="/projects" className="text-[10px] text-[#F5F0E7]/60 hover:text-white underline">
                        Explore All Projects
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {projectSubLinks.map((sub) => {
                        const currentCat = new URLSearchParams(location.search).get('category')
                        const subCat = new URLSearchParams(sub.path.split('?')[1] || '').get('category')
                        const isSubActive = location.pathname === '/projects' && (
                          (subCat === 'All' && (!currentCat || currentCat === 'All')) ||
                          (subCat && currentCat === subCat)
                        )

                        return (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`block px-3 py-2.5 rounded-xl transition-all ${
                              isSubActive
                                ? 'bg-[#B08D57]/20 text-[#B08D57] ring-1 ring-[#B08D57]/40'
                                : 'text-white/85 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <span className="text-xs font-bold tracking-wide truncate block">{sub.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </li>

              {/* REMAINING NAV LINKS */}
              {otherNavLinks.map((item) => {
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
                      {active && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full shadow-[0_0_8px_rgba(176,141,87,0.8)]" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* 3. Right: Social Quick Links & Dedicated Contact Button */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/company/desentral-engineering-consultancy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DEC Official LinkedIn"
              title="DEC LinkedIn"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#0077B5] border border-white/10 hover:border-[#0077B5] text-[#F5F0E7]/80 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/97431601117"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              title="WhatsApp Direct"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] text-[#F5F0E7]/80 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>

            {/* Contact Button */}
            <Link
              to="/contact"
              className={`group relative inline-flex items-center gap-2 px-6 xl:px-7 py-2.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
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

            {/* EXPERTISE WITH SUBMENU ACCORDION */}
            <li>
              <div className="flex items-center justify-between py-1">
                <Link
                  to="/expertise"
                  className={`flex items-center gap-2 text-sm font-bold tracking-wider transition-colors ${
                    isExpertiseActive ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  <span>EXPERTISE</span>
                  {isExpertiseActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B08D57] shadow-[0_0_6px_rgba(176,141,87,0.9)]" />
                  )}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                  className="p-1.5 rounded-lg text-white hover:text-[#B08D57] hover:bg-white/5 transition-colors"
                  aria-label="Toggle Expertise submenu"
                >
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#B08D57] ${mobileExpertiseOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileExpertiseOpen && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-[#B08D57]/30 ml-2 max-h-60 overflow-y-auto pr-1">
                  <li>
                    <Link
                      to="/expertise"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setMobileOpen(false)
                      }}
                      className="flex items-center justify-between py-1 text-xs font-bold text-[#B08D57] hover:underline"
                    >
                      <span>All Capabilities</span>
                      <FiArrowUpRight className="text-xs" />
                    </Link>
                  </li>
                  {expertiseSubLinks.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        to={sub.path}
                        onClick={() => handleScrollToHash(sub.hash)}
                        className="flex items-center justify-between py-1 text-xs font-semibold tracking-wider text-[#F5F0E7]/70 hover:text-[#B08D57] transition-colors"
                      >
                        <span>{sub.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* PROJECTS WITH SUBMENU ACCORDION */}
            <li>
              <div className="flex items-center justify-between py-1">
                <Link
                  to="/projects"
                  className={`flex items-center gap-2 text-sm font-bold tracking-wider transition-colors ${
                    isProjectsActive ? 'text-[#B08D57]' : 'text-white hover:text-[#B08D57]'
                  }`}
                >
                  <span>PROJECTS</span>
                  {isProjectsActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B08D57] shadow-[0_0_6px_rgba(176,141,87,0.9)]" />
                  )}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="p-1.5 rounded-lg text-white hover:text-[#B08D57] hover:bg-white/5 transition-colors"
                  aria-label="Toggle Projects submenu"
                >
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#B08D57] ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileProjectsOpen && (
                <ul className="pl-4 mt-2 space-y-2 border-l border-[#B08D57]/30 ml-2 max-h-60 overflow-y-auto pr-1">
                  {projectSubLinks.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        to={sub.path}
                        className="flex items-center justify-between py-1 text-xs font-semibold tracking-wider text-[#F5F0E7]/70 hover:text-[#B08D57] transition-colors"
                      >
                        <span>{sub.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* OTHER NAV LINKS */}
            {otherNavLinks.map((item) => {
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

          <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/desentral-engineering-consultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#0077B5] border border-white/10 text-white flex items-center justify-center gap-2 text-xs font-semibold transition-colors"
              >
                <FaLinkedinIn className="text-sm" /> LinkedIn
              </a>
              <a
                href="https://wa.me/97431601117"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#25D366] border border-white/10 text-white flex items-center justify-center gap-2 text-xs font-semibold transition-colors"
              >
                <FaWhatsapp className="text-sm text-emerald-400" /> WhatsApp
              </a>
            </div>

            <Link
              to="/contact"
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
                isContactActive
                  ? 'bg-gradient-to-r from-[#DFBF82] via-[#F6E6CC] to-[#DFBF82] text-[#111111] ring-2 ring-[#B08D57]'
                  : 'bg-gradient-to-r from-[#B08D57] via-[#DFBF82] to-[#B08D57] text-[#111111]'
              }`}
            >
              <span>CONTACT US</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
