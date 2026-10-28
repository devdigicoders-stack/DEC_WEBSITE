import React, { useEffect, useState } from 'react'

function PageLoader({ isLoading }) {
  const [prevLoading, setPrevLoading] = useState(isLoading)
  const [shouldRender, setShouldRender] = useState(isLoading)
  const [fadeAnim, setFadeAnim] = useState(isLoading)
  const [progress, setProgress] = useState(0)

  // Synchronously update during render when isLoading flips to true
  if (isLoading && !prevLoading) {
    setPrevLoading(true)
    setShouldRender(true)
    setFadeAnim(true)
    setProgress(0)
  }
  if (!isLoading && prevLoading) {
    setPrevLoading(false)
  }

  useEffect(() => {
    let progressTimer = null
    let exitTimer = null

    if (isLoading) {
      setShouldRender(true)
      setFadeAnim(true)
      setProgress(0)

      // Smooth progress counter simulation from 0 to 100%
      const startTime = Date.now()
      const duration = 1800 // fills smoothly in 1.8s of the 2.4s loader window

      progressTimer = setInterval(() => {
        const elapsed = Date.now() - startTime
        const pct = Math.min(Math.round((elapsed / duration) * 100), 100)
        setProgress(pct)
        if (pct >= 100) {
          clearInterval(progressTimer)
        }
      }, 25)

      return () => {
        if (progressTimer) clearInterval(progressTimer)
      }
    } else {
      setProgress(100)
      // Fade out transition
      setFadeAnim(false)
      exitTimer = setTimeout(() => {
        setShouldRender(false)
      }, 400)

      return () => {
        if (exitTimer) clearTimeout(exitTimer)
      }
    }
  }, [isLoading])

  if (!shouldRender) return null

  // Dynamic engineering status label based on progress
  const getStatusText = () => {
    if (progress < 35) return 'CENTRALIZING DISCIPLINES...'
    if (progress < 75) return 'SYNCHRONIZING BIM DATA...'
    return 'GRADE A ENVIRONMENT READY'
  }

  return (
    <aside 
      aria-label="Loading page"
      role="status"
      className={`fixed inset-0 z-[99999] bg-[#07090e] flex flex-col items-center justify-center select-none overflow-hidden ${
        fadeAnim 
          ? 'opacity-100' 
          : 'opacity-0 pointer-events-none transition-opacity duration-400 ease-out'
      }`}
    >
      {/* ============================================================== */}
      {/* 1. CLEAN LUXURY DARK BACKGROUND WITH AMBIENT GOLD GLOW         */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep luxury radial dark gradient */}
        <div 
          className="absolute inset-0 bg-[#07090e]"
          style={{
            background: 'radial-gradient(circle at center, #0d1322 0%, #080c16 55%, #04060a 100%)'
          }}
        />
        {/* Soft Golden Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B08D57]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      </div>

      {/* ============================================================== */}
      {/* 2. MAIN CENTER HERO CONTENT CONTAINER                          */}
      {/* ============================================================== */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full select-none">
        
        {/* Stage Container: Orbits, DEC Square Box & Perimeter Moving Dots */}
        <div className="relative flex items-center justify-center w-72 h-72 sm:w-84 sm:h-84 md:w-92 md:h-92 mb-6 sm:mb-8 shrink-0">
          
          {/* Subtle Ambient Backlight */}
          <div className="absolute w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 bg-[#B08D57]/20 rounded-full blur-[70px] pointer-events-none" />

          {/* Outer Golden Compass Orbit Ring */}
          <div className="absolute w-72 h-72 sm:w-84 sm:h-84 md:w-92 md:h-92 rounded-full border border-[#B08D57]/20 pointer-events-none">
            {/* 4 Coordinate Tick Dots on the Orbit */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#DFBF82]/70 shadow-[0_0_8px_#DFBF82]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#DFBF82]/70 shadow-[0_0_8px_#DFBF82]" />
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#DFBF82]/70 shadow-[0_0_8px_#DFBF82]" />
            <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#DFBF82]/70 shadow-[0_0_8px_#DFBF82]" />
          </div>

          {/* Middle Rotating Dashed Architectural Compass Orbit (Encloses Square & Dots) */}
          <div 
            className="absolute w-64 h-64 sm:w-74 sm:h-74 md:w-82 md:h-82 rounded-full border border-dashed border-[#B08D57]/30 pointer-events-none animate-spin-slow"
          />

          {/* Inner Golden Arc Orbit (Counter-Rotating, Encloses Square & Dots) */}
          <div 
            className="absolute w-56 h-56 sm:w-66 sm:h-66 md:w-72 md:h-72 rounded-full border border-transparent border-t-[#DFBF82]/40 border-r-[#DFBF82]/20 pointer-events-none animate-spin-reverse"
          />

          {/* ============================================================== */}
          {/* THE DEC SQUARE BOX (COMPLETELY INSIDE ALL ORBIT CIRCLES)      */}
          {/* ============================================================== */}
          <div className="relative z-10 w-32 h-32 sm:w-38 sm:h-38 md:w-42 md:h-42 rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden border border-[#B08D57]/70 shadow-[0_12px_40px_rgba(0,0,0,0.95),0_0_30px_rgba(176,141,87,0.3)] flex items-center justify-center transition-transform duration-300">
            {/* Authentic DEC Square Artwork */}
            <img 
              src="/dec-exact-square.png" 
              alt="DEC Logo Box" 
              className="w-full h-full object-cover scale-[1.03]"
            />
          </div>

          {/* ============================================================== */}
          {/* LOADING DOTS MOVING AROUND THE SQUARE (CLOCKWISE PERIMETER)   */}
          {/* Matches Client's Red Arrows: Top (→), Right (↓), Bottom (←), Left (↑) */}
          {/* ============================================================== */}
          <div className="absolute z-20 w-[138px] h-[138px] sm:w-[162px] sm:h-[162px] md:w-[178px] md:h-[178px] pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 240 240">
              <defs>
                {/* Glow Filter for Moving Golden Dots */}
                <filter id="goldDotGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Linear Gradient for Perimeter Tracer Line */}
                <linearGradient id="tracerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFBF82" stopOpacity="0" />
                  <stop offset="50%" stopColor="#DFBF82" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Perimeter Square Guide Track (Subtle Dashed Gold) */}
              <path 
                d="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z"
                fill="none" 
                stroke="rgba(176,141,87,0.35)" 
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Clockwise Perimeter Tracer Light Beam */}
              <path 
                d="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z"
                fill="none" 
                stroke="url(#tracerGradient)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                strokeDasharray="70 710"
                className="animate-gold-trace"
              />

              {/* 4 Glowing Golden Dots Moving Around the Square (Clockwise Loop) */}
              {/* Dot 1: Moves along Top Edge Rightward (→) */}
              <g>
                <circle r="5" fill="#DFBF82" filter="url(#goldDotGlow)">
                  <animateMotion 
                    dur="4s" 
                    repeatCount="indefinite" 
                    path="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z" 
                  />
                </circle>
                <circle r="2.5" fill="#FFFFFF">
                  <animateMotion 
                    dur="4s" 
                    repeatCount="indefinite" 
                    path="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z" 
                  />
                </circle>
              </g>

              {/* Dot 2: Moves along Right Edge Downward (↓) */}
              <g>
                <circle r="5" fill="#DFBF82" filter="url(#goldDotGlow)">
                  <animateMotion 
                    dur="4s" 
                    begin="-1s" 
                    repeatCount="indefinite" 
                    path="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z" 
                  />
                </circle>
                <circle r="2.5" fill="#FFFFFF">
                  <animateMotion 
                    dur="4s" 
                    begin="-1s" 
                    repeatCount="indefinite" 
                    path="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z" 
                  />
                </circle>
              </g>

              {/* Dot 3: Moves along Bottom Edge Leftward (←) */}
              <g>
                <circle r="5" fill="#DFBF82" filter="url(#goldDotGlow)">
                  <animateMotion 
                    dur="4s" 
                    begin="-2s" 
                    repeatCount="indefinite" 
                    path="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z" 
                  />
                </circle>
                <circle r="2.5" fill="#FFFFFF">
                  <animateMotion 
                    dur="4s" 
                    begin="-2s" 
                    repeatCount="indefinite" 
                    path="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z" 
                  />
                </circle>
              </g>

              {/* Dot 4: Moves along Left Edge Upward (↑) */}
              <g>
                <circle r="5" fill="#DFBF82" filter="url(#goldDotGlow)">
                  <animateMotion 
                    dur="4s" 
                    begin="-3s" 
                    repeatCount="indefinite" 
                    path="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z" 
                  />
                </circle>
                <circle r="2.5" fill="#FFFFFF">
                  <animateMotion 
                    dur="4s" 
                    begin="-3s" 
                    repeatCount="indefinite" 
                    path="M 44 10 H 196 A 34 34 0 0 1 230 44 V 196 A 34 34 0 0 1 196 230 H 44 A 34 34 0 0 1 10 196 V 44 A 34 34 0 0 1 44 10 Z" 
                  />
                </circle>
              </g>
            </svg>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. BRAND IDENTITY TYPOGRAPHY & SKYLINE SILHOUETTE              */}
        {/* ============================================================== */}
        <div className="space-y-1.5 mb-3 pt-2 sm:pt-3">
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold tracking-[0.22em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            DESENTRAL ENGINEERING CONSULTANCY
          </h2>
          <p className="text-xs sm:text-sm font-bold text-[#DFBF82] tracking-[0.24em] uppercase">
            Grade A | Multidisciplinary Engineering Consultancy
          </p>
        </div>

        {/* Golden Architectural Skyline Graphic */}
        <div className="w-full flex items-center justify-center my-1.5 opacity-90">
          <img 
            src="/dec-splash-skyline.png" 
            alt="DEC Architecture Skyline" 
            className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(223,191,130,0.45)]"
          />
        </div>

        {/* ============================================================== */}
        {/* 4. LUXURY HIGH-PRECISION PROGRESS BAR & METRICS                */}
        {/* ============================================================== */}
        <div className="w-64 sm:w-72 md:w-80 h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-inner mt-2">
          <div 
            className="h-full bg-gradient-to-r from-[#B08D57] via-[#F6E6CC] to-[#B08D57] rounded-full transition-all duration-100 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer Light Flare */}
            <div className="absolute inset-0 bg-white/40 animate-gold-shimmer" />
          </div>
        </div>

        {/* Progress Percentage & Status Indicator */}
        <div className="mt-3 flex items-center justify-between w-64 sm:w-72 md:w-80 text-[10px] tracking-wider text-[#F5F0E7]/60 font-mono">
          <span className="flex items-center gap-1.5 text-[#DFBF82] font-semibold font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF82] animate-ping" />
            {getStatusText()}
          </span>
          <span className="text-white font-bold">{progress}%</span>
        </div>

        {/* Regional Footprint Note */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-3 text-[11px] text-[#DFBF82]/80 font-semibold tracking-[0.25em] uppercase">
          <span>Qatar</span>
          <span className="text-[#DFBF82]/40">•</span>
          <span>Egypt</span>
          <span className="text-[#DFBF82]/40">•</span>
          <span>KSA</span>
        </div>

      </div>
    </aside>
  )
}

export default PageLoader
