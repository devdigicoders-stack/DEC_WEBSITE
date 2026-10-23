import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  FiMapPin, 
  FiSearch, 
  FiArrowRight, 
  FiLayers, 
  FiCheckCircle,
  FiCompass,
  FiCamera
} from 'react-icons/fi'
import ProjectGallerySection from '../components/ProjectGallerySection.jsx'
import { projectsData, projectCategories } from '../data/projectsData.js'

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'All'
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategorySelect = (categoryValue) => {
    if (categoryValue === 'All') {
      const nextParams = new URLSearchParams(searchParams)
      nextParams.delete('category')
      setSearchParams(nextParams)
    } else {
      setSearchParams({ category: categoryValue })
    }
  }

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = 
      selectedCategory === 'All' || 
      project.sectorSlug === selectedCategory.toLowerCase() ||
      project.sector.toLowerCase() === selectedCategory.toLowerCase()

    const q = searchQuery.toLowerCase().trim()
    const matchesSearch = 
      !q ||
      project.name.toLowerCase().includes(q) ||
      project.location.toLowerCase().includes(q) ||
      project.scope.toLowerCase().includes(q) ||
      (project.type && project.type.toLowerCase().includes(q)) ||
      (project.keywords && project.keywords.toLowerCase().includes(q)) ||
      project.tags.some(t => t.toLowerCase().includes(q))

    return matchesCategory && matchesSearch
  })

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION - PURE CLEAR ARCHITECTURAL SHOWCASE IMAGE    */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#151515]">
        <img 
          src="/image copy 4.png" 
          alt="DEC Landmark Projects Portfolio Doha Qatar" 
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
      </section>

      {/* ============================================================ */}
      {/* 2. STATS & PORTFOLIO METRICS                                 */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-16 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#B08D57] tracking-tight">84</div>
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
              <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] block mb-1">
                DELIVERED ENGINEERING EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                DEC Projects Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing <span className="font-bold text-[#151515]">{filteredProjects.length}</span> of <span className="font-bold text-[#151515]">{projectsData.length}</span> official register projects
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
            {projectCategories.map((cat) => {
              const isSelected = 
                selectedCategory === cat.value ||
                (cat.value === 'All' && selectedCategory === 'All') ||
                selectedCategory.toLowerCase() === cat.value.toLowerCase()

              return (
                <button
                  key={cat.value}
                  onClick={() => handleCategorySelect(cat.value)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#151515] text-[#F5F0E7] shadow-lg shadow-black/20 ring-1 ring-[#B08D57]'
                      : 'bg-white hover:bg-slate-200/80 text-slate-700 border border-slate-200 shadow-sm'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isSelected ? 'bg-[#B08D57] text-[#151515]' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {cat.count}
                  </span>
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
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 p-8 max-w-xl mx-auto">
              <FiCompass className="w-12 h-12 text-[#B08D57] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-slate-800 mb-1">No matching projects found</h3>
              <p className="text-slate-500 text-sm mb-6">Try clearing your search query or switching to another category.</p>
              <button 
                onClick={() => { handleCategorySelect('All'); setSearchQuery('') }}
                className="px-6 py-2.5 rounded-xl bg-[#151515] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B08D57] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="relative bg-slate-50/90 rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden group min-h-[380px]"
                >
                  {/* Real Project Photo Revealed on Hover - Ultra Sharp & Crystal Clear */}
                  {project.image && (
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        loading="lazy"
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out" 
                      />
                      {/* Crisp Clean Gradient: Clear in the center, dark at top/bottom for text contrast (No Blur) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                    </div>
                  )}

                  {/* Card Content (z-10 on top of photo) */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Header: Sector Badge + Photo indicator + Project Code */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#B08D57]/15 text-[#8F6F3E] group-hover:bg-[#B08D57] group-hover:text-[#111111] transition-all">
                            {project.sector}
                          </span>
                          {project.type && (
                            <span className="text-[11px] font-medium text-slate-500 bg-white group-hover:bg-white/10 group-hover:text-white/80 group-hover:border-white/20 px-2 py-0.5 rounded-md border border-slate-200 capitalize transition-all">
                              {project.type}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          {project.image && (
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold text-[#D8B478] bg-black/50 px-2 py-0.5 rounded-md flex items-center gap-1 border border-[#B08D57]/30">
                              <FiCamera className="text-[11px]" /> Photo
                            </span>
                          )}
                          <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#D8B478] transition-colors">
                            {project.code}
                          </span>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#151515] group-hover:text-white transition-colors mb-2 leading-snug">
                        {project.name}
                      </h3>

                      {/* Location Pin */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 group-hover:text-white/80 font-medium mb-4 transition-colors">
                        <FiMapPin className="text-[#B08D57] shrink-0" />
                        <span>{project.location}</span>
                      </div>

                      {/* Scope Highlight */}
                      <div className="p-3 rounded-xl bg-white group-hover:bg-white/10 border border-slate-200/90 group-hover:border-[#B08D57]/40 mb-4 text-xs font-semibold text-slate-700 group-hover:text-[#F5F0E7] flex items-start gap-2.5 shadow-xs transition-all">
                        <FiLayers className="text-[#B08D57] mt-0.5 shrink-0 text-sm" />
                        <span className="leading-relaxed">{project.scope}</span>
                      </div>

                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white group-hover:bg-white/10 text-slate-600 group-hover:text-white/90 border border-slate-200 group-hover:border-white/20 capitalize transition-all"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Bottom: DEC Delivery & Link */}
                    <div className="pt-5 border-t border-slate-200 group-hover:border-white/20 flex items-center justify-between mt-auto transition-colors">
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-[#D8B478] font-medium transition-colors">
                        <FiCheckCircle className="text-[#B08D57]" />
                        <span>Grade A Compliance</span>
                      </span>
                      <Link 
                        to={`/sector/${project.sectorSlug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#B08D57] group-hover:text-white uppercase tracking-wider transition-all group-hover:translate-x-1"
                      >
                        <span>Sector Specs</span>
                        <FiArrowRight />
                      </Link>
                    </div>

                  </div>
                </div>
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
