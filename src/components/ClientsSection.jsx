import React, { useMemo } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { clientsData } from '../data/clientsData.js'

export default function ClientsSection() {
  // Split all 91 clients across 3 distinct streaming rows
  const marqueeRow1 = useMemo(() => clientsData.slice(0, 31), [])
  const marqueeRow2 = useMemo(() => clientsData.slice(31, 61), [])
  const marqueeRow3 = useMemo(() => clientsData.slice(61, 91), [])

  return (
    <section 
      id="clients" 
      className="bg-[#121212] text-[#F5F0E7] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-[#B08D57]/20 relative overflow-hidden font-sans"
    >
      {/* Background Ambient Glow & Blueprint Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#B08D57]/8 rounded-full blur-[140px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #B08D57 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="w-full mx-auto relative z-10">
        
        {/* ============================================================ */}
        {/* HEADER & SECTION INTRO                                      */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
            Proven Track Record & Client Network
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Trusted by Over <span className="text-[#B08D57]">100+ Regional & Global Leaders</span>
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E7]/75 font-light leading-relaxed max-w-3xl mx-auto">
            From Fortune 500 corporations, tech innovators, and royal/semi-government developers to premier luxury retailers across Qatar, Egypt, and Saudia Arabia — DEC delivers world-class engineering, design, and Grade A statutory clearances.
          </p>

          {/* Quick Stats Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#F5F0E7]/90 font-medium">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-[#B08D57] text-base" />
              <span><strong>100+</strong> Verified Client Engagements</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-[#B08D57] text-base" />
              <span><strong>300+</strong> Delivered Facilities</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-[#B08D57] text-base" />
              <span><strong>Grade A</strong> MMUP / UPDA Fast-Track</span>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 3 ROWS OF INFINITE CONTINUOUS MARQUEE STRIPS (ALL 91 LOGOS)  */}
        {/* ============================================================ */}
        <div className="relative -mx-6 sm:-mx-10 lg:-mx-14 xl:-mx-20 overflow-hidden py-4 space-y-5">
          
          {/* Edge Blur Vignette Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Moving Left (31 Logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
              {[...marqueeRow1, ...marqueeRow1].map((client, idx) => (
                <div
                  key={`m1-${client.id}-${idx}`}
                  className="w-40 sm:w-48 h-20 sm:h-24 bg-white rounded-2xl p-3 flex items-center justify-center shadow-lg border border-white/20 hover:border-[#B08D57] hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer group"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Right (30 Logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-right flex items-center gap-4 sm:gap-6">
              {[...marqueeRow2, ...marqueeRow2].map((client, idx) => (
                <div
                  key={`m2-${client.id}-${idx}`}
                  className="w-40 sm:w-48 h-20 sm:h-24 bg-white rounded-2xl p-3 flex items-center justify-center shadow-lg border border-white/20 hover:border-[#B08D57] hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer group"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Moving Left (30 Logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
              {[...marqueeRow3, ...marqueeRow3].map((client, idx) => (
                <div
                  key={`m3-${client.id}-${idx}`}
                  className="w-40 sm:w-48 h-20 sm:h-24 bg-white rounded-2xl p-3 flex items-center justify-center shadow-lg border border-white/20 hover:border-[#B08D57] hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer group"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <span className="text-[11px] uppercase tracking-widest text-white/40">
              Hover over any logo to pause • Seamless multidisciplinary delivery across 90+ GCC client engagements
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
