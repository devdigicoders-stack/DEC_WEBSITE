import React, { useState, useRef, useEffect } from 'react'
import { 
  FiDownload, 
  FiExternalLink, 
  FiChevronLeft, 
  FiChevronRight, 
  FiX, 
  FiEye 
} from 'react-icons/fi'
import { FaStamp } from 'react-icons/fa'
import { certificatesData } from '../data/certificatesData.js'

export default function OurCertificatesSection() {
  const scrollContainerRef = useRef(null)
  const [activeModalPdf, setActiveModalPdf] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  // Widen card scroll step: 3 cards visible on desktop
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
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
    }, 4500)

    return () => clearInterval(timer)
  }, [isPaused, activeModalPdf])

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
            
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
              <FaStamp className="text-sm shrink-0" />
              <span>Official Statutory & Quality Standards</span>
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
        {/* WIDER CARDS SLIDING CAROUSEL CONTAINER                       */}
        {/* ============================================================ */}
        <div
          ref={scrollContainerRef}
          className="flex gap-7 overflow-x-auto scrollbar-none scroll-smooth pb-6 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14 xl:-mx-20 xl:px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="group flex-shrink-0 w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] xl:w-[410px] bg-[#181818] rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl"
            >
              {/* Framed Certificate Image Container (No dark overlay on hover) */}
              <div 
                onClick={() => setActiveModalPdf(cert)}
                className="relative m-4 sm:m-5 rounded-xl overflow-hidden bg-[#0c0c0c] cursor-pointer aspect-[1/1.32] flex items-center justify-center p-3 sm:p-4 transition-transform duration-300 group-hover:scale-[1.01]"
              >
                {/* Real High-Resolution Certificate Document Image */}
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-lg drop-shadow-md"
                  loading="lazy"
                />

                {/* Top Badge Overlay */}
                <span 
                  className="absolute top-3.5 right-3.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-2xl z-10"
                  style={{ 
                    backgroundColor: cert.accentColor || '#B08D57', 
                    color: cert.id === 'mmup-grade-a' || cert.id === 'iso-45001' ? '#121212' : '#FFFFFF' 
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              {/* Minimal Clean Card Details Below Image */}
              <div className="px-5 sm:px-6 pb-5 pt-1 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] block mb-1">
                    {cert.category}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#B08D57] transition-colors leading-snug mb-1 line-clamp-1">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-[#F5F0E7]/60">
                    {cert.code}
                  </div>
                </div>

                {/* Action Button: View Certificate Only (No Download) */}
                <div className="pt-3 border-t border-white/10">
                  <button
                    onClick={() => setActiveModalPdf(cert)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-[#B08D57] shadow-md cursor-pointer"
                  >
                    <FiEye className="text-sm" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ============================================================ */}
      {/* HIGH-RES CERTIFICATE VIEWER MODAL                            */}
      {/* ============================================================ */}
      {activeModalPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1C1C1C] border border-[#B08D57]/40 w-full max-w-5xl h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-scaleUp">
            
            {/* Modal Top Bar */}
            <div className="px-5 py-3.5 bg-[#151515] border-b border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-[#B08D57]/20 text-[#B08D57] flex items-center justify-center shrink-0">
                  <FaStamp className="text-base" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    {activeModalPdf.title}
                  </h4>
                  <p className="text-[11px] text-white/60 truncate">
                    {activeModalPdf.authority} • {activeModalPdf.code}
                  </p>
                </div>
              </div>

              {/* Close Action */}
              <button
                onClick={() => setActiveModalPdf(null)}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-rose-500 hover:text-white text-white/70 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close Viewer"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Modal Body: High-Res Certificate Document View */}
            <div className="flex-1 w-full bg-[#0D0D0D] relative overflow-auto p-4 flex items-center justify-center select-none">
              {activeModalPdf.image ? (
                <div className="max-w-4xl w-full h-full flex items-center justify-center p-2">
                  <img 
                    src={activeModalPdf.image} 
                    alt={activeModalPdf.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
                  />
                </div>
              ) : (
                <iframe
                  src={`${activeModalPdf.file}#toolbar=0&navpanes=0`}
                  title={activeModalPdf.title}
                  className="w-full h-full border-0 rounded-lg"
                />
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
