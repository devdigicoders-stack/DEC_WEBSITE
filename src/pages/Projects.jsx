import React, { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  FiMapPin, 
  FiSearch, 
  FiArrowRight, 
  FiLayers, 
  FiCompass
} from 'react-icons/fi'
import ProjectGallerySection from '../components/ProjectGallerySection.jsx'
import { projectsData, projectCategories } from '../data/projectsData.js'
import { fetchProjects, getImageUrl } from '../services/api'

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'All'
  const [searchQuery, setSearchQuery] = useState('')

  // Live dynamic projects from MongoDB Backend API, initialized with project records
  const [projects, setProjects] = useState(projectsData)
  const [loadingProjects, setLoadingProjects] = useState(true)

  useEffect(() => {
    let isMounted = true

    const loadProjects = async () => {
      try {
        const liveProjects = await fetchProjects({ limit: 200 })
        if (isMounted && Array.isArray(liveProjects) && liveProjects.length > 0) {
          setProjects(liveProjects)
        }
      } catch (err) {
        console.error('Failed to load projects dynamically from API:', err)
      } finally {
        if (isMounted) setLoadingProjects(false)
      }
    }

    loadProjects()
    return () => {
      isMounted = false
    }
  }, [])

  const handleCategorySelect = (categoryValue) => {
    if (categoryValue === 'All') {
      const nextParams = new URLSearchParams(searchParams)
      nextParams.delete('category')
      setSearchParams(nextParams)
    } else {
      setSearchParams({ category: categoryValue })
    }
  }

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const pSectorSlug = (project.sectorSlug || '').toLowerCase()
      const pSector = (project.sector || '').toLowerCase()
      const targetCat = selectedCategory.toLowerCase()

      const matchesCategory = 
        selectedCategory === 'All' || 
        pSectorSlug === targetCat ||
        pSector === targetCat

      const q = searchQuery.toLowerCase().trim()
      const matchesSearch = 
        !q ||
        (project.name && project.name.toLowerCase().includes(q)) ||
        (project.location && project.location.toLowerCase().includes(q)) ||
        (project.scope && project.scope.toLowerCase().includes(q)) ||
        (project.type && project.type.toLowerCase().includes(q)) ||
        (project.keywords && project.keywords.toLowerCase().includes(q)) ||
        (Array.isArray(project.tags) && project.tags.some(t => t.toLowerCase().includes(q)))

      return matchesCategory && matchesSearch
    })
  }, [projects, selectedCategory, searchQuery])

  // Dynamic sector counts
  const categoriesWithCounts = useMemo(() => {
    return projectCategories.map(cat => {
      if (cat.value === 'All') {
        return { ...cat, count: projects.length }
      }
      const c = projects.filter(p => {
        const sSlug = (p.sectorSlug || '').toLowerCase()
        const sName = (p.sector || '').toLowerCase()
        const target = cat.value.toLowerCase()
        return sSlug === target || sName === target
      }).length
      return { ...cat, count: c }
    })
  }, [projects])

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (IMMERSIVE LANDMARK PORTFOLIO SHOWCASE)     */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Clean with Controlled Opacity */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/image copy 4.png" 
            alt="DEC Landmark Projects Portfolio Doha Qatar" 
            className="w-full h-full object-cover object-center scale-100 opacity-60 transition-transform duration-1000 ease-out"
          />
          {/* Contrast Overlay for Crystal Clear Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#151515] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 text-center text-[#F5F0E7]">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-5">
            <FiLayers className="text-sm shrink-0" />
            <span>Landmark Project Portfolio · {projects.length || 84}+ Engagements</span>
          </div>

          {/* Headings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Shaping the Architectural & Engineering Skyline
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-xl lg:text-2xl font-semibold text-[#B08D57] tracking-wide max-w-4xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Offices · Retail · Hospitality · F&B · Residential · Industrial · Medical
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#F5F0E7]/80 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal">
            Explore our portfolio of iconic Grade A engineering achievements, delivered with design distinction and precision across Qatar and the GCC.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. STATS & PORTFOLIO METRICS                                 */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-16 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#B08D57] tracking-tight">{projects.length || 84}</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">Registered Landmark Projects</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#151515] tracking-tight">7 Sectors</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">Market Engineering Disciplines</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#B08D57] tracking-tight">Grade A</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">MMUP / UPDA Certified</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#151515] tracking-tight">3 Hubs</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">Qatar · Egypt · KSA</div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SEARCH & CATEGORY FILTER BAR                              */}
      {/* ============================================================ */}
      <section id="projects-filter-section" className="bg-slate-50 text-[#151515] py-12 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] bg-[#B08D57]/10 border border-[#B08D57]/40 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                DELIVERED ENGINEERING EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                DEC Projects Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Official register of delivered engineering engagements across Qatar & regional delivery
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              <input
                type="text"
                placeholder="Search by project name, location, or scope..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#B08D57] bg-white text-sm text-slate-800 shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Sector Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categoriesWithCounts.map((cat) => {
              const isSelected = 
                selectedCategory === cat.value ||
                (cat.value === 'All' && selectedCategory === 'All') ||
                selectedCategory.toLowerCase() === cat.value.toLowerCase()

              return (
                <button
                  key={cat.value}
                  onClick={() => handleCategorySelect(cat.value)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#151515] text-[#F5F0E7] shadow-lg shadow-black/20 ring-1 ring-[#B08D57]'
                      : 'bg-white hover:bg-slate-200/80 text-slate-700 border border-slate-200 shadow-sm'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PROJECTS SHOWCASE GRID                                    */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          {loadingProjects && projects.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="relative bg-slate-50/90 rounded-3xl p-7 sm:p-8 border border-slate-200 animate-pulse flex flex-col justify-between min-h-[380px]"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-5 w-20 bg-slate-200 rounded-full" />
                    </div>
                    <div className="h-7 w-3/4 bg-slate-300 rounded-lg mb-3" />
                    <div className="h-4 w-1/2 bg-slate-200 rounded mb-4" />
                    <div className="h-16 bg-white border border-slate-200 rounded-xl mb-4" />
                    <div className="flex gap-2">
                      <div className="h-5 w-16 bg-slate-200 rounded-lg" />
                      <div className="h-5 w-20 bg-slate-200 rounded-lg" />
                    </div>
                  </div>
                  <div className="pt-5 border-t border-slate-200 flex justify-end">
                    <div className="h-4 w-20 bg-slate-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 p-8 max-w-xl mx-auto">
              <FiCompass className="w-12 h-12 text-[#B08D57] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-slate-800 mb-1">No matching projects found</h3>
              <p className="text-slate-500 text-sm mb-6">Try clearing your search query or switching to another category.</p>
              <button 
                onClick={() => { handleCategorySelect('All'); setSearchQuery('') }}
                className="px-6 py-2.5 rounded-xl bg-[#151515] text-white hover:text-[#151515] text-xs font-bold uppercase tracking-wider hover:bg-[#B08D57] border border-white/20 hover:border-[#B08D57] transition-all shadow-md cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <Link 
                  to={`/sector/${project.sectorSlug}`}
                  key={project._id || project.id || project.code}
                  className="relative bg-slate-50/90 rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden group min-h-[380px] cursor-pointer block"
                >
                  {/* Real Project Photo Revealed on Hover - Ultra Sharp, Full Brightness & Crystal Clear */}
                  {project.image && (
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <img 
                        src={getImageUrl(project.image)} 
                        alt={project.name} 
                        loading="lazy"
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out" 
                        onError={(e) => {
                          e.currentTarget.src = '/projects-gallery/01.jpg'
                        }}
                      />
                    </div>
                  )}

                  {/* Card Content (z-10) - Disappears completely on hover so ONLY the photo shows */}
                  <div className="relative z-10 flex flex-col justify-between h-full transition-opacity duration-300 group-hover:opacity-0">
                    <div>
                      {/* Header: Sector Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57]">
                          {project.sector}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#151515] mb-2 leading-snug">
                        {project.name}
                      </h3>

                      {/* Location Pin */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mb-4">
                        <FiMapPin className="text-[#B08D57] shrink-0" />
                        <span>{project.location}</span>
                      </div>

                      {/* Scope Highlight */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200/90 mb-4 text-xs font-semibold text-slate-700 flex items-start gap-2.5 shadow-xs">
                        <FiLayers className="text-[#B08D57] mt-0.5 shrink-0 text-sm" />
                        <span className="leading-relaxed">{project.scope}</span>
                      </div>

                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white text-slate-600 border border-slate-200 capitalize"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Bottom: Link */}
                    <div className="pt-5 border-t border-slate-200 flex items-center justify-end mt-auto">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B08D57] uppercase tracking-wider">
                        <span>Sector Specs</span>
                        <FiArrowRight />
                      </span>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. VISUAL PHOTOGRAPHIC SITE GALLERY (84 RECORDS + LIGHTBOX)  */}
      {/* ============================================================ */}
      <ProjectGallerySection />

    </div>
  )
}

export default Projects
