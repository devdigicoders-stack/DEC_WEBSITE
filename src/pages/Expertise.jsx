import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  FiCheckCircle, 
  FiLayers, 
  FiCpu, 
  FiShield, 
  FiZap, 
  FiTool, 
  FiCompass, 
  FiArrowRight 
} from 'react-icons/fi'
import { FaCompassDrafting } from 'react-icons/fa6'
import { Building2 } from 'lucide-react'
import { fetchServices } from '../services/api'

// Helper to render matching icon dynamically based on icon name or service slug
const renderServiceIcon = (iconName, slug) => {
  const iconProps = { className: "text-3xl text-[#B08D57]" }
  
  if (iconName === 'FaCompassDrafting') return <FaCompassDrafting {...iconProps} />
  if (iconName === 'FiLayers') return <FiLayers {...iconProps} />
  if (iconName === 'FiTool') return <FiTool {...iconProps} />
  if (iconName === 'FiZap') return <FiZap {...iconProps} />
  if (iconName === 'FiShield') return <FiShield {...iconProps} />
  if (iconName === 'FiCpu') return <FiCpu {...iconProps} />
  if (iconName === 'Building2') return <Building2 className="w-8 h-8 text-[#B08D57]" />

  // Semantic slug fallbacks
  if (slug === 'architecture') return <FaCompassDrafting {...iconProps} />
  if (slug === 'structural') return <FiLayers {...iconProps} />
  if (slug === 'mechanical') return <FiTool {...iconProps} />
  if (slug === 'electrical') return <FiZap {...iconProps} />
  if (slug === 'regulatory') return <FiShield {...iconProps} />
  if (slug === 'bim') return <FiCpu {...iconProps} />

  return <FiCompass {...iconProps} />
}

function Expertise() {
  const location = useLocation()
  const [disciplines, setDisciplines] = useState([])
  const [loadingDisciplines, setLoadingDisciplines] = useState(true)

  // Fetch active engineering disciplines dynamically from MongoDB Backend
  useEffect(() => {
    let isMounted = true

    const loadDisciplines = async () => {
      try {
        const data = await fetchServices()
        if (isMounted && Array.isArray(data) && data.length > 0) {
          const sorted = [...data].sort((a, b) => (a.order || 0) - (b.order || 0))
          setDisciplines(sorted)
        }
      } catch (err) {
        console.error('Failed to load services dynamically:', err)
      } finally {
        if (isMounted) setLoadingDisciplines(false)
      }
    }

    loadDisciplines()
    return () => {
      isMounted = false
    }
  }, [])

  // Smooth scroll to target anchor once loaded or on hash change
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '')
      const scrollToEl = () => {
        const el = document.getElementById(elementId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      scrollToEl()
      const timer = setTimeout(scrollToEl, 250)
      return () => clearTimeout(timer)
    }
  }, [location.hash, location.pathname, disciplines])

  const technicalPillars = [
    {
      stat: 'Grade A',
      title: 'MMUP / UPDA Certified',
      desc: 'Multidisciplinary engineering consultancy licensed at the highest statutory grade in Qatar, enabling us to deliver projects of significant scale and complexity.',
      image: '/Expertise/Minimalist Modern Cityscape in White Space.png',
      imgPosition: 'inset-0 w-full h-full object-cover object-bottom-right',
      icon: (
        <svg className="w-9 h-9 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="10" width="5" height="11" rx="0.5" />
          <line x1="3" y1="13.5" x2="8" y2="13.5" />
          <line x1="3" y1="17" x2="8" y2="17" />
          <rect x="8" y="3" width="7" height="18" rx="0.5" />
          <line x1="11.5" y1="6.5" x2="11.5" y2="7.5" />
          <line x1="11.5" y1="10" x2="11.5" y2="11" />
          <line x1="11.5" y1="13.5" x2="11.5" y2="14.5" />
          <line x1="11.5" y1="17" x2="11.5" y2="18" />
          <rect x="15" y="7" width="6" height="14" rx="0.5" />
          <line x1="15" y1="11" x2="21" y2="11" />
          <line x1="15" y1="15" x2="21" y2="15" />
        </svg>
      )
    },
    {
      stat: 'QCDD',
      title: 'Fire & Life Safety Expertise',
      desc: 'In-depth knowledge of QCDD regulations, NFPA 101/5000 and Civil Defense requirements, ensuring compliant, safe and efficient design solutions.',
      image: '/Expertise/Minimalist Chrome Fire Sprinkler on White Ceiling.png',
      imgPosition: 'inset-0 w-full h-full object-cover object-bottom-right',
      icon: (
        <svg className="w-9 h-9 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8c.5 1.5 2 2.5 2 4a2 2 0 1 1-4 0c0-1.5 1.5-2.5 2-4z" />
        </svg>
      )
    },
    {
      stat: 'GSAS',
      title: 'Certified Sustainability Service Provider',
      desc: 'Green building certified practitioners integrating energy-efficient and water-conservation strategies to deliver sustainable, high-performance buildings.',
      image: '/Expertise/Minimalist Glass Facade in Mist.png',
      imgPosition: 'inset-0 w-full h-full object-cover object-bottom-right',
      icon: (
        <svg className="w-9 h-9 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 11 3s7 4 7 10a7 7 0 0 1-7 7Z" />
          <path d="M11 20V9" />
          <path d="M15 15c2-1 4-1 5 1s0 4-2 4-4 0-5-2" />
        </svg>
      )
    },
    {
      stat: 'BIM',
      title: 'Integrated Digital Delivery',
      desc: 'Connecting architectural, structural and MEP disciplines through coordinated BIM models, early clash detection and efficient digital project delivery.',
      image: '/Expertise/Minimalist BIM Wireframe Building.png',
      imgPosition: 'inset-0 w-full h-full object-cover object-bottom-right',
      icon: (
        <svg className="w-9 h-9 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l-7 4v6l7 4 7-4V6l-7-4z" />
          <path d="M12 22V12" />
          <path d="M5 12l7 4 7-4" />
          <path d="M12 7l7-4M12 7L5 3M12 7v5" />
        </svg>
      )
    }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (IMMERSIVE MULTIDISCIPLINARY EXPERTISE)      */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Clean with Controlled Opacity */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/image copy 2.png" 
            alt="DEC Multidisciplinary Engineering Design Studio" 
            className="w-full h-full object-cover object-center scale-100 opacity-60 transition-transform duration-1000 ease-out"
          />
          {/* Contrast Overlay for Crystal Clear Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#151515] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 text-center text-[#F5F0E7]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-5">
            <FiCompass className="text-sm shrink-0" />
            <span>Comprehensive Engineering Capabilities · Grade A Certified</span>
          </div>

          {/* Headings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Multidisciplinary Engineering Excellence
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-xl lg:text-2xl font-semibold text-[#B08D57] tracking-wide max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Architecture · Structural · MEP · Fire Life Safety · BIM Modeling
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#F5F0E7]/80 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal">
            Delivering unified, high-performance engineering solutions with statutory rigor and technical precision across Qatar and the GCC.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. OVERVIEW & MULTIDISCIPLINARY RIGOR                        */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
              <span>GRADE A MULTIDISCIPLINARY PRACTICE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-[#151515] leading-tight">
              Engineering Precision Across Every Built Discipline
            </h1>
            <p className="mt-6 text-base sm:text-xl text-black/70 font-light leading-relaxed">
              At Desentral Engineering Consultancy (DEC), our integrated practice centralizes architecture, structural analysis, MEP systems, fire life safety, and municipal permitting under one collaborative Grade A umbrella.
            </p>
          </div>

          {/* 4 Technical Capability Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20">
            {technicalPillars.map((item, idx) => (
              <div 
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#B08D57]/60 transition-all duration-300 flex flex-col justify-start min-h-[320px] sm:min-h-[340px] overflow-hidden group"
              >
                {/* Background Image behind text */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-2xl z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`absolute ${item.imgPosition} opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`} 
                  />
                </div>

                {/* Card Content (z-10 on top of background image) */}
                <div className="relative z-10 flex-1 flex flex-col justify-start">
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-start text-[#B08D57] mb-3 sm:mb-4">
                    {item.icon}
                  </div>

                  {/* Stat / Header */}
                  <div className="text-2xl sm:text-[28px] font-extrabold text-[#B08D57] tracking-tight leading-none mb-1.5">
                    {item.stat}
                  </div>

                  {/* Subtitle */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#151515] leading-snug">
                    {item.title}
                  </h3>

                  {/* Small Gold Divider Line */}
                  <div className="w-7 h-[2px] bg-[#B08D57] my-3 rounded-full" />

                  {/* Description text sitting over background graphic */}
                  <p className="text-[11.5px] sm:text-xs text-slate-700 font-medium sm:font-normal leading-relaxed max-w-[92%] sm:max-w-none">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section Heading for Core Disciplines */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pt-10 border-t border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-2">
                OUR ENGINEERING DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]">
                Specialized Technical Capabilities
              </h2>
            </div>
            <p className="text-sm sm:text-base text-black/60 max-w-md font-normal">
              From initial architectural concept to post-construction Building Completion Certificates (BCC), DEC delivers unmatched technical rigor.
            </p>
          </div>

          {/* 6 Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loadingDisciplines && disciplines.length === 0 ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200 animate-pulse flex flex-col justify-between min-h-[460px]"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 mb-6" />
                    <div className="h-7 bg-slate-200 rounded-lg w-3/4 mb-4" />
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-slate-100 rounded w-full" />
                      <div className="h-4 bg-slate-100 rounded w-11/12" />
                      <div className="h-4 bg-slate-100 rounded w-4/5" />
                    </div>
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-slate-200 shrink-0" />
                          <div className="h-3.5 bg-slate-100 rounded w-3/4" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-end">
                    <div className="h-3.5 bg-slate-200 rounded w-24" />
                  </div>
                </div>
              ))
            ) : (
              disciplines.map((item) => (
                <div 
                  key={item._id || item.slug || item.id}
                  id={item.slug || item.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl target:ring-2 target:ring-[#B08D57] target:border-[#B08D57] target:shadow-2xl transition-all duration-300 flex flex-col justify-between group scroll-mt-32"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-[#B08D57]/10 flex items-center justify-center mb-6 group-hover:bg-[#B08D57]/20 transition-colors">
                      {renderServiceIcon(item.icon, item.slug)}
                    </div>

                    <h3 className="text-2xl font-bold text-[#151515] mb-4 group-hover:text-[#B08D57] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-black/70 leading-relaxed mb-6 font-light">
                      {item.description || item.shortDescription}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {(Array.isArray(item.capabilities) ? item.capabilities : []).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-black/80 font-medium">
                          <FiCheckCircle className="text-[#B08D57] mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-end">
                    <Link 
                      to={item.ctaLink || "/contact"}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08D57] hover:text-[#151515] uppercase tracking-wider transition-colors"
                    >
                      {item.ctaText || "Consult Engineers"} <FiArrowRight />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CTA & PROJECT INQUIRY BANNER                              */}
      {/* ============================================================ */}
      <section className="bg-[#151515] py-20 px-6 sm:px-10 lg:px-14 xl:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
            <span>NEED GRADE A ENGINEERING EXPERTISE?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F0E7] tracking-tight mb-6">
            Partner With Our Multidisciplinary Engineering Leads
          </h2>
          <p className="text-base sm:text-lg text-[#F5F0E7]/70 font-light mb-10 max-w-2xl mx-auto">
            Discuss your commercial, retail, residential, or industrial development requirements in Qatar, Egypt, or Saudi Arabia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="px-7 py-4 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border border-white/20 hover:border-[#B08D57] shadow-lg hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Request Engineering Consultation</span>
              <FiArrowRight className="text-base" />
            </Link>
            <Link 
              to="/projects"
              className="px-7 py-4 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border border-white/20 hover:border-[#B08D57] shadow-lg hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>Explore Our Projects</span>
              <FiLayers className="text-base text-[#B08D57] group-hover:text-[#151515] transition-colors" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Expertise
