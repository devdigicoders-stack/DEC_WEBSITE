import React, { useState, useRef, useEffect } from 'react'
import { 
  FiAward, 
  FiShield, 
  FiDownload, 
  FiExternalLink, 
  FiChevronLeft, 
  FiChevronRight, 
  FiCheckCircle, 
  FiX, 
  FiEye 
} from 'react-icons/fi'
import { 
  FaFilePdf, 
  FaStamp, 
  FaCertificate, 
  FaLeaf, 
  FaHardHat 
} from 'react-icons/fa'
import { certificatesData } from '../data/certificatesData.js'

export default function OurCertificatesSection() {
  const scrollContainerRef = useRef(null)
  const [activeModalPdf, setActiveModalPdf] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  // Infinite/Looping Cards or smooth scroll step
  // 4 cards visible at a time on desktop (lg:w-[calc(25%-18px)])
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      // Calculate scroll width of 1 card + gap (~320-380px)
      const scrollAmount = container.clientWidth / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1)
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Auto-scroll forward timer (pauses when user hovers or modal is open)
  useEffect(() => {
    if (isPaused || activeModalPdf) return

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        // If near end, loop smoothly back to start
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scroll('right')
        }
      }
    }, 4000)

    return () => clearInterval(timer)
  }, [isPaused, activeModalPdf])

  // Get icon component based on type
  const renderIcon = (type, color) => {
    switch (type) {
      case 'shield':
        return <FiShield className="text-xl" style={{ color }} />
      case 'leaf':
        return <FaLeaf className="text-xl" style={{ color }} />
      case 'safety':
        return <FaHardHat className="text-xl" style={{ color }} />
      default:
        return <FaCertificate className="text-xl" style={{ color }} />
    }
  }

  return (
    <section 
      id="our-certificates"
      className="bg-[#121212] text-[#F5F0E7] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-[#B08D57]/20 relative overflow-hidden font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambient Glow & Subtle Pattern */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-[#B08D57]/7 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[250px] bg-[#B08D57]/5 rounded-full blur-[120px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #B08D57 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-[1720px] mx-auto relative z-10">

        {/* ============================================================ */}
        {/* SECTION HEADER & NAVIGATION CONTROLS                         */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
              <FaStamp className="text-sm" /> Official Statutory & Quality Standards
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Accreditations & <span className="text-[#B08D57]">Certified Excellence</span>
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E7]/75 font-light leading-relaxed">
              DEC operates under Qatar’s highest engineering standing (MMUP Grade A), triple ISO certifications (9001, 14001, 45001), GSAS Green Building credentials, and national Tawteen ICV accreditation.
            </p>
          </div>

          {/* Navigation Controls: Scroll Left/Right Arrows */}
          <div className="flex items-center gap-3 self-start lg:self-auto shrink-0">
            <span className="text-xs uppercase font-bold tracking-wider text-[#F5F0E7]/50 mr-2 hidden sm:inline-block">
              {isPaused ? 'Auto-scroll Paused' : 'Auto-scrolling'}
            </span>
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#B08D57] hover:text-[#151515] border border-white/10 hover:border-[#B08D57] flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#B08D57] hover:text-[#151515] border border-white/10 hover:border-[#B08D57] flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4-CARDS VISIBLE SLIDING CAROUSEL CONTAINER                   */}
        {/* ============================================================ */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14 xl:-mx-20 xl:px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="group flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-gradient-to-b from-[#1C1C1C] to-[#141414] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#B08D57] hover:shadow-2xl hover:shadow-[#B08D57]/10 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Light Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 group-hover:h-2"
                style={{ backgroundColor: cert.accentColor }}
              />

              {/* Watermark Logo/Stamp in Background */}
              <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <FaStamp className="text-[160px] text-white" />
              </div>

              <div>
                {/* Header Strip with Icon, Badge & Category */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-inner transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${cert.accentColor}15`, 
                      borderColor: `${cert.accentColor}40` 
                    }}
                  >
                    {renderIcon(cert.iconType, cert.accentColor)}
                  </div>

                  <span 
                    className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm"
                    style={{ 
                      backgroundColor: `${cert.accentColor}18`, 
                      borderColor: `${cert.accentColor}40`,
                      color: cert.accentColor 
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Authority & Category */}
                <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1">
                  {cert.category}
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#B08D57] transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Registration / Standard Code */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono font-medium text-[#B08D57] mb-4 border border-white/5">
                  <FiAward className="text-xs shrink-0" />
                  <span>{cert.code}</span>
                </div>

                {/* Issuing Authority */}
                <p className="text-xs font-medium text-white/75 mb-3">
                  <strong>Issued By:</strong> {cert.authority}
                </p>

                {/* Description */}
                <p className="text-xs text-white/60 leading-relaxed line-clamp-3 mb-5">
                  {cert.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-1.5 pt-4 border-t border-white/10 mb-6">
                  {cert.keyPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-[#F5F0E7]/80">
                      <FiCheckCircle className="text-emerald-400 shrink-0 text-xs" />
                      <span className="truncate">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: View PDF in Modal & Open Direct */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalPdf(cert)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-[#B08D57] shadow-sm cursor-pointer"
                >
                  <FiEye className="text-sm" />
                  <span>View PDF</span>
                </button>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                  title="Open in new tab"
                >
                  <FiExternalLink className="text-sm" />
                </a>

                <a
                  href={cert.file}
                  download
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#B08D57] hover:text-[#151515] text-white/80 flex items-center justify-center transition-all duration-300 border border-white/10"
                  title="Download Certificate PDF"
                >
                  <FiDownload className="text-sm" />
                </a>
              </div>

            </div>
          ))}
        </div>



      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE IN-PAGE PDF VIEWER MODAL                         */}
      {/* ============================================================ */}
      {activeModalPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1C1C1C] border border-[#B08D57]/40 w-full max-w-5xl h-[88vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-scaleUp">
            
            {/* Modal Top Bar */}
            <div className="px-6 py-4 bg-[#151515] border-b border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-[#B08D57]/20 text-[#B08D57] flex items-center justify-center shrink-0">
                  <FaFilePdf className="text-lg" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-base font-bold text-white truncate">
                    {activeModalPdf.title}
                  </h4>
                  <p className="text-xs text-white/50 truncate">
                    {activeModalPdf.standard} • {activeModalPdf.code}
                  </p>
                </div>
              </div>

              {/* Actions & Close */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeModalPdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                >
                  <FiExternalLink />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
                <a
                  href={activeModalPdf.file}
                  download
                  className="px-3.5 py-2 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-xs font-bold text-[#151515] flex items-center gap-1.5 transition-colors"
                >
                  <FiDownload />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setActiveModalPdf(null)}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-rose-500 hover:text-white text-white/70 flex items-center justify-center transition-colors cursor-pointer ml-2"
                  aria-label="Close PDF Viewer"
                >
                  <FiX className="text-lg" />
                </button>
              </div>
            </div>

            {/* Embedded Native PDF Viewer */}
            <div className="flex-1 w-full bg-[#2A2A2A] relative">
              <iframe
                src={`${activeModalPdf.file}#toolbar=1&navpanes=0`}
                title={activeModalPdf.title}
                className="w-full h-full border-0"
              />
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
