import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { sectorsData } from '../data/sectorsData.js'
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiCheckCircle, 
  FiMapPin, 
  FiAward, 
  FiLayers, 
  FiPhoneCall, 
  FiFileText 
} from 'react-icons/fi'

function SectorDetail() {
  const { slug } = useParams()
  const sector = sectorsData[slug]

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!sector) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-[#151515] text-[#F5F0E7]">
        <h2 className="text-3xl font-bold mb-4">Sector Not Found</h2>
        <p className="text-white/70 mb-6">The requested market sector does not exist or has moved.</p>
        <Link 
          to="/"
          className="px-6 py-3 rounded-xl bg-[#B08D57] text-[#151515] font-semibold hover:brightness-110 transition-all"
        >
          Return to Home
        </Link>
      </div>
    )
  }

  // Find next and previous sector for footer carousel
  const sectorKeys = Object.keys(sectorsData)
  const currentIndex = sectorKeys.indexOf(slug)
  const prevKey = sectorKeys[(currentIndex - 1 + sectorKeys.length) % sectorKeys.length]
  const nextKey = sectorKeys[(currentIndex + 1) % sectorKeys.length]
  const prevSector = sectorsData[prevKey]
  const nextSector = sectorsData[nextKey]

  return (
    <div className="bg-white text-[#151515] min-h-screen font-sans selection:bg-[#B08D57] selection:text-[#151515]">
      
      {/* ============================================================ */}
      {/* 1. DYNAMIC HERO SECTION WITH SECTOR IMAGE                     */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[65vh] sm:min-h-[75vh] flex items-end overflow-hidden bg-[#151515]">
        
        {/* Dynamic Sector Background Image */}
        <img
          src={sector.image}
          alt={sector.title}
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-90 contrast-105"
        />

        {/* Ambient Dark Gradient Overlays for Luxury Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/70 to-[#151515]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/90 via-[#151515]/50 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 max-w-[1720px] mx-auto text-[#F5F0E7]">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-6 font-medium">
            <Link to="/" className="hover:text-[#B08D57] transition-colors flex items-center gap-1.5">
              <FiArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link to="/#what-we-do" className="hover:text-[#B08D57] transition-colors">
              What we do
            </Link>
            <span>/</span>
            <span className="text-[#B08D57]">{sector.title}</span>
          </div>

          {/* Top Sector Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/40 text-[#B08D57] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <FiAward className="w-3.5 h-3.5" />
            <span>{sector.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]">
            {sector.title}
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-base sm:text-xl text-white/80 max-w-3xl font-light leading-relaxed">
            {sector.tagline}
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects-showcase"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#151515] bg-gradient-to-r from-[#B08D57] via-[#d4af72] to-[#B08D57] hover:brightness-110 shadow-lg shadow-[#B08D57]/20 transition-all"
            >
              <span>View Portfolio Projects</span>
              <FiArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all"
            >
              <FiPhoneCall className="w-4 h-4 text-[#B08D57]" />
              <span>Consult Our Specialists</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. KEY SECTOR METRICS BAR                                    */}
      {/* ============================================================ */}
      <section className="bg-[#181818] text-[#F5F0E7] border-b border-white/10 py-8 px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="max-w-[1720px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {sector.stats.map((stat, idx) => (
            <div key={idx} className="border-l-2 border-[#B08D57] pl-4 sm:pl-6">
              <div className="text-2xl sm:text-3xl font-bold text-[#B08D57]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SECTOR OVERVIEW & TECHNICAL SCOPE HIGHLIGHTS              */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sector Narrative */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-2">
              Engineering Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#151515] tracking-tight leading-tight">
              Delivering Integrated Excellence for {sector.title}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-black/75 leading-relaxed">
              {sector.overview}
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#151515] mb-3 flex items-center gap-2">
                <FiLayers className="text-[#B08D57]" /> Multidisciplinary Integration
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                DEC combines architecture, structural calculations, full mechanical and electrical design (MEP), and Civil Defense (QCD) approvals under a single coordinated framework. This guarantees zero clashes, fast-track building permits, and seamless contractor handover.
              </p>
            </div>
          </div>

          {/* Right Column: Technical Scope Highlights */}
          <div className="lg:col-span-5 bg-[#151515] text-[#F5F0E7] p-8 sm:p-10 rounded-3xl shadow-xl border border-black">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-2">
              Scope of Deliverables
            </span>
            <h3 className="text-2xl font-bold text-white mb-6">
              Core Engineering Scope
            </h3>
            <ul className="space-y-4">
              {sector.scopeHighlights.map((scope, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="mt-1 text-[#B08D57] flex-shrink-0">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base text-white/85 leading-snug">
                    {scope}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-white/50">Classification</span>
                <span className="text-sm font-bold text-[#B08D57]">MMUP Grade A Consultancy</span>
              </div>
              <a
                href="/DEC_Company_Profile_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#B08D57] underline transition-colors"
              >
                <FiFileText className="w-4 h-4 text-[#B08D57]" />
                <span>DEC Profile (PDF)</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. REAL PORTFOLIO PROJECTS SHOWCASE (FROM DEC PDF)           */}
      {/* ============================================================ */}
      <section id="projects-showcase" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-slate-50 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-2">
                DEC Project Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#151515] tracking-tight">
                Featured {sector.title} Projects
              </h2>
            </div>
            <p className="text-sm sm:text-base text-black/60 max-w-md">
              A curated selection of DEC’s completed and ongoing engagements from the official 2026 Company Profile.
            </p>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sector.projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#B08D57]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Location Tag */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#B08D57] font-semibold mb-3">
                    <FiMapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors leading-snug mb-3">
                    {proj.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-black/65 leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Scope Badge */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-black/40 block mb-1">
                    Scope of Work
                  </span>
                  <span className="text-xs font-bold text-slate-800 leading-tight block">
                    {proj.scope}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. TRUSTED CLIENTS IN THIS SECTOR                            */}
      {/* ============================================================ */}
      {sector.clients && sector.clients.length > 0 && (
        <section className="py-16 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white border-b border-black/10">
          <div className="max-w-[1720px] mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-black/40 block mb-3">
              Trusted Partnerships in {sector.title}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
              {sector.clients.map((client, idx) => (
                <span 
                  key={idx}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-100 text-[#151515] border border-slate-200 hover:border-[#B08D57] hover:bg-[#B08D57]/10 transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* 6. NEXT & PREVIOUS SECTOR QUICK SWITCHER                     */}
      {/* ============================================================ */}
      <section className="py-16 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#151515] text-[#F5F0E7]">
        <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Previous Sector */}
          <Link
            to={`/sector/${prevSector.slug}`}
            className="group flex items-center gap-4 text-left p-4 rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            <div className="w-11 h-11 rounded-full border border-white/20 group-hover:border-[#B08D57] group-hover:bg-[#B08D57] group-hover:text-[#151515] flex items-center justify-center text-white transition-all flex-shrink-0">
              <FiArrowLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/50 block">Previous Sector</span>
              <span className="text-base font-bold text-white group-hover:text-[#B08D57] transition-colors">{prevSector.title}</span>
            </div>
          </Link>

          {/* Center Call to Action */}
          <Link
            to="/contact"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#B08D57] via-[#d4af72] to-[#B08D57] text-[#151515] font-bold text-sm tracking-wide shadow-lg shadow-[#B08D57]/20 hover:brightness-110 transition-all flex-shrink-0"
          >
            Start Your Project With DEC
          </Link>

          {/* Next Sector */}
          <Link
            to={`/sector/${nextSector.slug}`}
            className="group flex items-center gap-4 text-right p-4 rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto justify-end"
          >
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/50 block">Next Sector</span>
              <span className="text-base font-bold text-white group-hover:text-[#B08D57] transition-colors">{nextSector.title}</span>
            </div>
            <div className="w-11 h-11 rounded-full border border-white/20 group-hover:border-[#B08D57] group-hover:bg-[#B08D57] group-hover:text-[#151515] flex items-center justify-center text-white transition-all flex-shrink-0">
              <FiArrowRight className="w-5 h-5" />
            </div>
          </Link>

        </div>
      </section>

    </div>
  )
}

export default SectorDetail
