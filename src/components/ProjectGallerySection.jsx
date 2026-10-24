import React, { useState, useEffect, useCallback } from 'react'
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiX, 
  FiMaximize2,
  FiCamera
} from 'react-icons/fi'
import { projectGalleryData } from '../data/projectGalleryData.js'

export default function ProjectGallerySection() {
  const [selectedIdx, setSelectedIdx] = useState(null)
  const [visibleCount, setVisibleCount] = useState(30)

  const isModalOpen = selectedIdx !== null
  const currentProject = isModalOpen ? projectGalleryData[selectedIdx] : null

  // Next image handler
  const handleNext = useCallback(() => {
    setSelectedIdx((prev) => 
      prev === null ? null : (prev + 1) % projectGalleryData.length
    )
  }, [])

  // Previous image handler
  const handlePrev = useCallback(() => {
    setSelectedIdx((prev) => 
      prev === null ? null : (prev - 1 + projectGalleryData.length) % projectGalleryData.length
    )
  }, [])

  // Close modal
  const handleClose = useCallback(() => {
    setSelectedIdx(null)
  }, [])

  // Keyboard navigation: Left/Right arrows & Escape
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen, handleNext, handlePrev, handleClose])

  // Deterministic irregular aspect ratios for random masonry feel
  const getAspectClass = (id) => {
    const aspectRatios = [
      'aspect-[3/4]',    // Tall portrait
      'aspect-[4/3]',    // Standard landscape
      'aspect-[16/10]',  // Wide landscape
      'aspect-[9/14]',   // Extra tall
      'aspect-square',   // Square
      'aspect-[4/5]',    // Medium portrait
      'aspect-[3/2]',    // Wide photo
      'aspect-[5/7]',    // Architectural portrait
      'aspect-[16/9]',   // Panorama
    ]
    return aspectRatios[id % aspectRatios.length]
  }

  const displayedProjects = projectGalleryData.slice(0, visibleCount)
  const hasMore = visibleCount < projectGalleryData.length

  return (
    <section 
      id="project-gallery" 
      className="bg-white text-[#151515] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-b border-slate-200 font-sans relative"
    >
      <div className="max-w-[1780px] mx-auto">
        
        {/* ============================================================ */}
        {/* MINIMAL ELEGANT HEADER ON WHITE                              */}
        {/* ============================================================ */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-4">
            <FiCamera className="text-sm shrink-0" />
            <span>84 Executed Site & Project Photographs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight leading-[1.15]">
            Visual Project Archives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light mt-3 leading-relaxed">
            A photographic survey of corporate headquarters, luxury fit-outs, and MEP infrastructure delivered by DEC across Qatar and regional hubs. Click on any photograph to view in full resolution.
          </p>
        </div>

        {/* ============================================================ */}
        {/* RANDOM MASONRY PHOTO WALL (PURE IMAGES ONLY - NO TEXT CARDS) */}
        {/* ============================================================ */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 sm:gap-5">
          {displayedProjects.map((item, idx) => {
            const aspect = getAspectClass(item.id)
            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="break-inside-avoid mb-4 sm:mb-5 relative rounded-2xl overflow-hidden group cursor-pointer bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Image with Random / Dynamic Aspect Ratio */}
                <div className={`w-full ${aspect} overflow-hidden bg-slate-200 relative`}>
                  <img
                    src={item.src}
                    alt={item.name || item.title || `DEC Project Photography #${item.id}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Sleek Dark Vignette on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Corner Badge on Hover - Showing Actual Project Name */}
                  <div className="absolute top-3 left-3 right-3 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-[11px] font-bold tracking-wide truncate border border-white/10 shadow-lg">
                      {item.name || item.title}
                    </span>
                  </div>

                  {/* Center Floating Zoom Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#B08D57] text-[#151515] flex items-center justify-center text-lg shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <FiMaximize2 />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ============================================================ */}
        {/* LOAD MORE / EXPAND CONTROLS                                 */}
        {/* ============================================================ */}
        <div className="mt-14 text-center space-y-3">
          {hasMore ? (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 30, projectGalleryData.length))}
                className="px-8 py-3.5 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                Load More Photographs ({displayedProjects.length} of {projectGalleryData.length})
              </button>

              <button
                onClick={() => setVisibleCount(projectGalleryData.length)}
                className="px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-300 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                View All {projectGalleryData.length} Photos
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setVisibleCount(30)
                const element = document.getElementById('project-gallery')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all cursor-pointer"
            >
              Collapse Gallery to 30 Photos
            </button>
          )}

          <p className="text-xs text-slate-500">
            Showing authentic photographic records of DEC deliveries across Qatar and the GCC.
          </p>
        </div>

      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE FULLSCREEN MODAL / LIGHTBOX (NEXT & PREV)       */}
      {/* ============================================================ */}
      {isModalOpen && currentProject && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar: Counter & Close Button */}
          <div className="flex items-center justify-between z-20 pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#B08D57] text-[#151515] font-bold text-xs tracking-wider">
                Photo {selectedIdx + 1} of {projectGalleryData.length}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
                {currentProject.name || currentProject.title}
              </span>
              {currentProject.location && (
                <span className="text-xs text-[#B08D57] hidden md:inline">
                  · {currentProject.location}
                </span>
              )}
            </div>

            <button
              onClick={handleClose}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all hover:rotate-90 text-xl cursor-pointer"
              aria-label="Close modal"
            >
              <FiX />
            </button>
          </div>

          {/* Center Stage: Photo with Previous and Next Controls */}
          <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden">
            
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-[#B08D57] hover:text-[#151515] text-white border border-white/20 transition-all text-xl sm:text-2xl shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>

            {/* Main High-Resolution Photo */}
            <div className="max-h-[75vh] max-w-[88vw] flex items-center justify-center select-none">
              <img
                src={currentProject.src}
                alt={`Photo #${currentProject.id}`}
                decoding="async"
                className="max-h-[75vh] max-w-[88vw] object-contain rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] border border-white/15"
              />

            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-[#B08D57] hover:text-[#151515] text-white border border-white/20 transition-all text-xl sm:text-2xl shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          </div>

          {/* Bottom Bar: Instructions */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
            <span>Use Left (←) and Right (→) arrow keys to navigate</span>
            <span>Press ESC or click ✕ to close</span>
          </div>

        </div>
      )}
    </section>
  )
}
