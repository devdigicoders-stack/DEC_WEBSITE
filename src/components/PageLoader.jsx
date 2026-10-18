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
      const duration = 800 // fills smoothly in 800ms

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
      className={`fixed inset-0 z-[99999] bg-[#0c0c0c] flex flex-col items-center justify-center select-none ${
        fadeAnim 
          ? 'opacity-100' 
          : 'opacity-0 pointer-events-none transition-opacity duration-400 ease-out'
      }`}
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute w-[450px] h-[450px] bg-[#B08D57]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Grid Pattern Watermark (Architectural Blueprint Feel) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #B08D57 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm select-none">
        
        {/* Animated Architectural Rings & DEC Logo */}
        <div className="relative flex items-center justify-center mb-8">
          
          {/* Outer Rotating Architectural Compass Ring */}
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-dashed border-[#B08D57]/30 animate-spin-slow">
            {/* 4 Coordinate Tick Dots */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
            <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
          </div>

          {/* Middle Smooth Arc Ring */}
          <div 
            className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-transparent border-t-[#B08D57] border-l-[#B08D57]/40 animate-spin" 
            style={{ animationDuration: '2s' }} 
          />
          
          {/* Inner Counter-Rotating Orbit */}
          <div className="absolute w-28 h-28 sm:w-34 sm:h-34 rounded-full border border-dotted border-[#B08D57]/50 animate-spin-reverse" />

          {/* Center Logo Showcase Box */}
          <div className="relative z-10 w-24 sm:w-28 h-24 sm:h-28 rounded-2xl bg-[#121212]/90 border border-[#B08D57]/50 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center justify-center p-3.5 transition-transform duration-300 hover:scale-105">
            <img 
              src="/logo.png" 
              alt="DEC Logo" 
              className="w-full h-auto object-contain drop-shadow-[0_2px_14px_rgba(176,141,87,0.5)]"
            />
          </div>
        </div>

        {/* Brand Identity Typography */}
        <div className="space-y-1 mb-6">
          <h2 className="text-sm sm:text-base font-extrabold tracking-[0.2em] text-white uppercase">
            DESENTRAL ENGINEERING
          </h2>
          <p className="text-[11px] font-bold text-[#B08D57] tracking-[0.25em] uppercase">
            Consultancy · Grade A
          </p>
        </div>

        {/* High-Precision Luxury Progress Bar */}
        <div className="w-52 sm:w-60 h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-[#B08D57] via-[#D8B478] to-[#B08D57] rounded-full transition-all duration-100 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer Light Flare */}
            <div className="absolute inset-0 bg-white/40 animate-gold-shimmer" />
          </div>
        </div>

        {/* Progress Percentage & Status */}
        <div className="mt-4 flex items-center justify-between w-52 sm:w-60 text-[10px] tracking-wider text-[#F5F0E7]/60 font-mono">
          <span className="flex items-center gap-1.5 text-[#B08D57] font-semibold font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] animate-ping" />
            {getStatusText()}
          </span>
          <span className="text-white font-bold">{progress}%</span>
        </div>

        {/* Regional Hubs Footprint Note */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-3 text-[10px] text-[#F5F0E7]/40 tracking-widest uppercase">
          <span>Qatar</span>
          <span>•</span>
          <span>Egypt</span>
          <span>•</span>
          <span>KSA</span>
        </div>

      </div>
    </aside>
  )
}

export default PageLoader
