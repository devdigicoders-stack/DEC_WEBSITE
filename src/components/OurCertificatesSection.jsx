import React, { useState, useRef, useEffect } from 'react'
import { 
  FiAward, 
  FiShield, 
  FiDownload, 
  FiExternalLink, 
  FiChevronLeft, 
  FiChevronRight, 
  FiX, 
  FiEye 
} from 'react-icons/fi'
import { 
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

  const [modalTab, setModalTab] = useState('image') // 'image' or 'pdf'

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
    }, 4500)

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
        {/* 4-CARDS VISIBLE SLIDING CAROUSEL CONTAINER (IMAGE-FIRST)     */}
        {/* ============================================================ */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14 xl:-mx-20 xl:px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="group flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-gradient-to-b from-[#1C1C1C] to-[#141414] rounded-2xl border border-white/10 hover:border-[#B08D57] hover:shadow-2xl hover:shadow-[#B08D57]/20 transition-all duration-500 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Top Accent Strip */}
              <div 
                className="h-1.5 w-full transition-all duration-500 group-hover:h-2"
                style={{ backgroundColor: cert.accentColor }}
              />

              {/* Framed Certificate Image Container */}
              <div 
                onClick={() => {
                  setActiveModalPdf(cert)
                  setModalTab('image')
                }}
                className="relative m-4 rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 group-hover:border-[#B08D57]/60 shadow-lg cursor-pointer aspect-[1/1.32] flex items-center justify-center p-2.5"
              >
                {/* Real High-Resolution Certificate Document Image */}
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-md transition-transform duration-500 group-hover:scale-[1.03] drop-shadow-md bg-white"
                  loading="lazy"
                />

                {/* Hover Overlay with Inspect Action */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
                  <span className="w-12 h-12 rounded-full bg-[#B08D57] text-[#151515] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <FiEye className="text-xl" />
                  </span>
                  <span className="text-[11px] font-bold text-white tracking-wider uppercase bg-[#151515]/90 px-3 py-1 rounded-full border border-[#B08D57]/40">
                    Inspect Certificate
                  </span>
                </div>

                {/* Top Badge Overlay */}
                <span 
                  className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-md backdrop-blur-md"
                  style={{ 
                    backgroundColor: `${cert.accentColor}25`, 
                    borderColor: `${cert.accentColor}60`,
                    color: '#FFFFFF' 
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              {/* Card Details Below Image */}
              <div className="px-5 pb-5 pt-1 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] truncate">
                      {cert.category}
                    </span>
                    <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: `${cert.accentColor}20` }}>
                      {renderIcon(cert.iconType, cert.accentColor)}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#B08D57] transition-colors leading-snug mb-1.5 line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white/5 text-[11px] font-mono text-[#F5F0E7]/80 border border-white/5 mb-3">
                    <FiAward className="text-xs text-[#B08D57] shrink-0" />
                    <span className="truncate">{cert.code}</span>
                  </div>

                  <p className="text-xs text-white/60 leading-relaxed line-clamp-2 mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Action Buttons: Inspect & Download */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveModalPdf(cert)
                      setModalTab('image')
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-[#B08D57] shadow-sm cursor-pointer"
                  >
                    <FiEye className="text-sm" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.file}
                    download
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#B08D57] hover:text-[#151515] text-white/80 flex items-center justify-center transition-all duration-300 border border-white/10 shrink-0"
                    title="Download Official PDF"
                  >
                    <FiDownload className="text-sm" />
                  </a>
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

              {/* View Switcher Tabs & Actions */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Tabs: Image vs PDF */}
                <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex items-center gap-1 text-xs font-semibold">
                  <button
                    onClick={() => setModalTab('image')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      modalTab === 'image' 
                        ? 'bg-[#B08D57] text-[#151515] font-bold shadow' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Image
                  </button>
                  <button
                    onClick={() => setModalTab('pdf')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      modalTab === 'pdf' 
                        ? 'bg-[#B08D57] text-[#151515] font-bold shadow' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    PDF
                  </button>
                </div>

                <a
                  href={activeModalPdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold text-white items-center gap-1.5 transition-colors border border-white/10"
                >
                  <FiExternalLink />
                  <span>Open PDF</span>
                </a>

                <a
                  href={activeModalPdf.file}
                  download
                  className="px-3 py-1.5 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-xs font-bold text-[#151515] flex items-center gap-1.5 transition-colors"
                >
                  <FiDownload />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <button
                  onClick={() => setActiveModalPdf(null)}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-rose-500 hover:text-white text-white/70 flex items-center justify-center transition-colors cursor-pointer ml-1"
                  aria-label="Close Viewer"
                >
                  <FiX className="text-lg" />
                </button>
              </div>
            </div>

            {/* Modal Body: High-Res Image View or Embedded PDF */}
            <div className="flex-1 w-full bg-[#0D0D0D] relative overflow-auto p-4 flex items-center justify-center">
              {modalTab === 'image' ? (
                <div className="max-w-3xl w-full h-full flex items-center justify-center p-2">
                  <img 
                    src={activeModalPdf.image} 
                    alt={activeModalPdf.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl bg-white border border-white/10"
                  />
                </div>
              ) : (
                <iframe
                  src={`${activeModalPdf.file}#toolbar=1&navpanes=0`}
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
