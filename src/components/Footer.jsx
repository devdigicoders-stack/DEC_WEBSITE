import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  FiArrowUp, 
  FiArrowUpRight, 
  FiCheckCircle, 
  FiShield,
  FiMapPin
} from 'react-icons/fi'
import { 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaAward
} from 'react-icons/fa6'

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleRequestConsultation = (e) => {
    e.preventDefault()
    if (location.pathname === '/contact') {
      const el = document.getElementById('inquiry-form')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    navigate('/contact#inquiry-form')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = CURRENT_YEAR

  return (
    <footer className="w-full bg-[#0d0d0d] text-[#F5F0E7] border-t border-[#B08D57]/30 font-sans selection:bg-[#B08D57] selection:text-[#151515] relative overflow-hidden">
      
      {/* Subtle Ambient Gold Glow in the Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================ */}
      {/* 1. TOP CTA PRE-FOOTER BANNER                                */}
      {/* ============================================================ */}
      <div className="w-full border-b border-white/10 bg-[#141414]/90 backdrop-blur-md">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/40 text-[#B08D57] text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
                Grade A Engineering Consultancy · Qatar & Regional Delivery
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Ready to mobilize your next landmark project?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#F5F0E7]/70">
                Transforming complex architectural visions into permit-ready, high-performance environments with full MMUP & QCDD authority coordination.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 shrink-0">
              <button
                type="button"
                onClick={handleRequestConsultation}
                className="px-6 py-3.5 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#B08D57]/20 hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                Request Consultation <FiArrowUpRight className="text-base" />
              </button>
              <a
                href="https://wa.me/97431601117"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border border-white/15 hover:border-emerald-500 shadow-md flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <FaWhatsapp className="text-lg text-emerald-400 group-hover:text-white" /> WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN 5-COLUMN FOOTER CONTENT GRID                        */}
      {/* ============================================================ */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Link to="/" className="inline-block group">
              <img 
                src="/logo.png" 
                alt="DEC - Desentral Engineering Consultancy" 
                className="w-[190px] sm:w-[220px] lg:w-[250px] h-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mx-auto lg:mx-0"
              />
            </Link>

            <div className="space-y-1 text-center lg:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Desentral Engineering Consultancy (DEC)
              </h4>
              <p className="text-base sm:text-lg font-bold text-[#B08D57] tracking-wider font-serif">
                دسنترال للاستشارات الهندسية
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#F5F0E7]/70 leading-relaxed max-w-md lg:max-w-none">
              DEC is a Grade A multidisciplinary engineering and design consultancy delivering integrated solutions across architecture, civil, structural, MEP, and fire & life safety across Qatar, Egypt, and Saudi Arabia.
            </p>

            {/* Accreditations Badges */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2 text-[11px] font-semibold text-[#F5F0E7]/80">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <FaAward className="text-[#B08D57]" /> MMUP / UPDA Grade A
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <FiShield className="text-[#B08D57]" /> QCDD Civil Defense Approved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <FiCheckCircle className="text-emerald-400" /> GSAS Certified Provider
              </span>
            </div>
          </div>

          {/* Column 2: Navigation & All Pages (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#B08D57] border-b border-white/10 pb-2 w-full text-center lg:text-left">
              Content
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm flex flex-col items-center lg:items-start w-full">
              <li>
                <Link to="/about" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  About DEC
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Leadership & Team
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link to="/presence" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Regional Presence
                </Link>
              </li>
              <li>
                <Link to="/why-dec" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Why DEC (6-Stage Model)
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Careers at DEC
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5 font-semibold text-[#B08D57]">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Privacy Policy & Data
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors flex items-center justify-center lg:justify-start gap-1.5">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Disciplines & Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#B08D57] border-b border-white/10 pb-2 w-full text-center lg:text-left">
              Disciplines & Sectors
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm flex flex-col items-center lg:items-start w-full">
              <li>
                <Link to="/expertise#architecture" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors">
                  Architecture & Interior Fit-Out
                </Link>
              </li>
              <li>
                <Link to="/expertise#structural" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors">
                  Civil & Structural Engineering
                </Link>
              </li>
              <li>
                <Link to="/expertise#mechanical" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors">
                  Mechanical, HVAC & Plumbing (MEP)
                </Link>
              </li>
              <li>
                <Link to="/expertise#electrical" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors">
                  Electrical & ELV Systems
                </Link>
              </li>
              <li>
                <Link to="/expertise#bim" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors">
                  BIM Level 2 & 3D Clash Detection
                </Link>
              </li>
              <li>
                <Link to="/expertise#regulatory" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors">
                  Fire & Life Safety (QCDD Permitting)
                </Link>
              </li>
              <li>
                <Link to="/sector/offices" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors">
                  Commercial Offices & Workplace
                </Link>
              </li>
              <li>
                <Link to="/sector/retail" className="text-[#F5F0E7]/75 hover:text-[#B08D57] transition-colors">
                  Luxury Retail, Hospitality & F&B
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#B08D57] border-b border-white/10 pb-2 w-full text-center lg:text-left">
              Headquarters & Offices
            </h5>

            <div className="space-y-4 text-xs sm:text-sm flex flex-col items-center lg:items-start w-full">
              {/* Qatar HQ */}
              <div>
                <strong className="text-white block font-semibold">🇶🇦 Qatar Headquarters</strong>
                <p className="text-[#F5F0E7]/70 text-xs mt-0.5">
                  Office 704, Manarat Lusail Tower, Qatar
                </p>
                <a 
                  href="https://maps.google.com/?q=Manarat+Lusail+Tower+Qatar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B08D57] hover:underline mt-1"
                >
                  <FiMapPin className="text-xs" /> View on Google Maps <FiArrowUpRight className="text-[10px]" />
                </a>
                <div className="mt-1 space-y-0.5 text-xs">
                  <p><span className="text-slate-400">Tel:</span> <a href="tel:+97444554383" className="hover:text-[#B08D57] text-[#F5F0E7]">+974 4455 4383</a></p>
                  <p><span className="text-slate-400">Mob:</span> <a href="tel:+97431601117" className="hover:text-[#B08D57] text-[#F5F0E7]">+974 3160 1117</a></p>
                </div>
              </div>

              {/* Egypt Technical Center */}
              <div>
                <strong className="text-white block font-semibold">🇪🇬 Egypt Technical Office</strong>
                <p className="text-[#F5F0E7]/70 text-xs mt-0.5">
                  Flat 32, 3rd floor, Bldg 20, Ahmed Elzaiat St., Dokki, Giza
                </p>
                <a 
                  href="https://www.google.com/maps/place/Desentral+engineering+services/@30.0294102,31.2048569,883m/data=!3m2!1e3!4b1!4m6!3m5!1s0x145847000dbc6525:0x3dcc37cac37a42d4!8m2!3d30.0294102!4d31.2048569!16s%2Fg%2F11y_ppbmtj?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B08D57] hover:underline mt-1"
                >
                  <FiMapPin className="text-xs" /> View on Google Maps <FiArrowUpRight className="text-[10px]" />
                </a>
                <p className="text-xs mt-1">
                  <span className="text-slate-400">Tel:</span> <a href="tel:+201101083005" className="hover:text-[#B08D57] text-[#F5F0E7]">+20 110 108 3005</a>
                </p>
              </div>

              {/* Official Inquiries Routing */}
              <div className="pt-2 border-t border-white/10 w-full">
                <strong className="text-[#B08D57] block text-xs font-semibold mb-1">
                  Direct Inquiries Routing:
                </strong>
                <div className="space-y-1 text-xs">
                  <a href="mailto:info@desentralqatar.com" className="block text-[#F5F0E7]/80 hover:text-[#B08D57] underline">
                    info@desentralqatar.com
                  </a>
                  <a href="mailto:bd@desentralqatar.com" className="block text-[#F5F0E7]/80 hover:text-[#B08D57] underline">
                    bd@desentralqatar.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* ============================================================ */}
      {/* 4. BOTTOM COPYRIGHT & SOCIAL MEDIA BAR                      */}
      {/* ============================================================ */}
      <div className="w-full bg-[#080808] py-8 px-6 sm:px-10 lg:px-14 xl:px-20 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#F5F0E7]/60">
          
          {/* Copyright text & Legal Links */}
          <div className="text-center md:text-left">
            <p>
              © {currentYear} <strong>Desentral Engineering Consultancy (DEC)</strong>. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1.5 text-[11px] text-[#F5F0E7]/60">
              <span className="text-[#F5F0E7]/40">Grade A Engineering Consultancy · Qatar · Egypt · KSA</span>
              <span>•</span>
              <Link to="/privacy-policy" className="hover:text-[#B08D57] transition-colors underline">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms-and-conditions" className="hover:text-[#B08D57] transition-colors underline">
                Terms & Conditions
              </Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-[#B08D57] transition-colors underline">
                Statutory Compliance
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/desentral-engineering-consultancy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B08D57] text-white hover:text-[#151515] flex items-center justify-center transition-all duration-300 border border-white/10 hover:scale-110"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
            <a
              href="https://wa.me/97431601117"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:scale-110"
            >
              <FaWhatsapp className="text-sm" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#B08D57] text-white hover:text-[#151515] font-semibold text-xs transition-all duration-300 border border-white/10 cursor-pointer shadow-sm hover:scale-105"
          >
            Back to Top <FiArrowUp className="text-sm" />
          </button>
        </div>
      </div>

    </footer>
  )
}

export default Footer
