import React, { useMemo } from 'react'
import { clientsCopyData } from '../data/clientsCopyData.js'

export default function ClientPartnersSection() {
  // Divide all 90 clients evenly into 3 distinct streaming rows (30 per row)
  const row1 = useMemo(() => clientsCopyData.slice(0, 30), [])
  const row2 = useMemo(() => clientsCopyData.slice(30, 60), [])
  const row3 = useMemo(() => clientsCopyData.slice(60, 90), [])

  return (
    <section 
      id="clients-portfolio"
      className="bg-[#0D0D0D] text-[#F5F0E7] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-[#B08D57]/20 relative overflow-hidden font-sans"
    >
      {/* Background Subtle Ambient Lighting & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#B08D57]/7 rounded-full blur-[160px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #B08D57 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="w-full mx-auto relative z-10">

        {/* ============================================================ */}
        {/* SECTION HEADER & TITLE                                       */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          
          {/* Gold Band Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151515] border border-[#B08D57] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#B08D57]">
              PROVEN TRACK RECORD & CLIENT NETWORK
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Trusted by Over <span className="text-[#B08D57]">100+ Regional & Global Leaders</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#F5F0E7]/75 font-light leading-relaxed max-w-3xl mx-auto">
            From Fortune 500 corporations, tech innovators, and royal/semi-government developers to premier luxury retailers across Qatar, Egypt, and Saudia Arabia — DEC delivers world-class engineering, design, and Grade A statutory clearances.
          </p>

          {/* Quick Stats Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#F5F0E7]/90 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#B08D57]">✔</span>
              <span><strong>100+</strong> Verified Client Engagements</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#B08D57]">✔</span>
              <span><strong>300+</strong> Delivered Facilities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#B08D57]">✔</span>
              <span><strong>Grade A</strong> MMUP / UPDA Fast-Track</span>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 3 CONTINUOUS SCROLLING ROWS (1 FORWARD, 1 BACKWARD, 1 FORWARD)*/}
        {/* ============================================================ */}
        <div className="relative -mx-6 sm:-mx-10 lg:-mx-14 xl:-mx-20 overflow-hidden py-2 space-y-5 sm:space-y-6">
          
          {/* Soft Edge Blurs / Vignette */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/85 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#0D0D0D] via-[#0D0D0D]/85 to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Scrolling Forward / Left (30 Logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
              {[...row1, ...row1].map((client, idx) => (
                <div
                  key={`r1-${client.id}-${idx}`}
                  className="w-40 sm:w-48 h-20 sm:h-24 bg-white rounded-2xl p-3 flex items-center justify-center shadow-lg border border-white/20 hover:border-[#B08D57] hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer group"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Backward / Right (30 Logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-right flex items-center gap-4 sm:gap-6">
              {[...row2, ...row2].map((client, idx) => (
                <div
                  key={`r2-${client.id}-${idx}`}
                  className="w-40 sm:w-48 h-20 sm:h-24 bg-white rounded-2xl p-3 flex items-center justify-center shadow-lg border border-white/20 hover:border-[#B08D57] hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer group"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Scrolling Forward / Left (30 Logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
              {[...row3, ...row3].map((client, idx) => (
                <div
                  key={`r3-${client.id}-${idx}`}
                  className="w-40 sm:w-48 h-20 sm:h-24 bg-white rounded-2xl p-3 flex items-center justify-center shadow-lg border border-white/20 hover:border-[#B08D57] hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer group"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
