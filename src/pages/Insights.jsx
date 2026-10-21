import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiArrowRight, 
  FiArrowUpRight, 
  FiClock, 
  FiCalendar, 
  FiBookOpen, 
  FiCheckCircle, 
  FiSearch,
  FiFilter,
  FiDownload
} from 'react-icons/fi'
import { 
  FaLightbulb, 
  FaBuilding, 
  FaShieldHalved, 
  FaSeedling, 
  FaLaptopCode 
} from 'react-icons/fa6'

function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'All',
    'Regulatory & Permitting',
    'BIM & Digital Delivery',
    'GSAS Sustainability',
    'Structural & MEP',
    'Corporate Updates'
  ]

  const articles = [
    {
      id: 1,
      category: 'Regulatory & Permitting',
      title: 'Navigating QCDD Fire & Life Safety Approvals in Qatar: A Grade A Roadmap',
      excerpt: 'How centralized engineering coordination accelerates Civil Defense certifications, smoke control compliance, and statutory Building Completion Certificates (BCC).',
      author: 'Mohamed Mokhtar',
      authorRole: 'Technical Manager',
      date: 'October 2026',
      readTime: '6 min read',
      featured: true,
      tag: 'Qatar Regulations',
      stat: '100% First-Pass Approvals'
    },
    {
      id: 2,
      category: 'BIM & Digital Delivery',
      title: 'Eliminating Site Clashes: How BIM Level 2 Protects Asset Capital Expenditure',
      excerpt: 'A deep dive into 3D multi-discipline clash resolution across architectural, structural, and MEP models before physical procurement begins.',
      author: 'Mostafa Magdy',
      authorRole: 'Design Manager',
      date: 'September 2026',
      readTime: '8 min read',
      featured: true,
      tag: 'Digital Engineering',
      stat: '0 Site Reworks'
    },
    {
      id: 3,
      category: 'GSAS Sustainability',
      title: 'GSAS 3-Star & 4-Star Implementation for Commercial Fitouts & Developments',
      excerpt: 'Practical engineering methodologies for energy reduction, indoor environmental quality, and water efficiency under Gulf Organization for Research & Development (GORD) standards.',
      author: 'DEC Sustainability Cell',
      authorRole: 'GSAS Certified Team',
      date: 'August 2026',
      readTime: '5 min read',
      featured: false,
      tag: 'Sustainability',
      stat: 'GSAS Service Provider'
    },
    {
      id: 4,
      category: 'Structural & MEP',
      title: 'High-Load Precision: Specialized Engineering for Regional Data & Logistics Hubs',
      excerpt: 'Addressing vibration mitigation, redundant power architecture, and heavy slab load capacities for critical enterprise infrastructure in the GCC.',
      author: 'Reda Mabrouk',
      authorRole: 'Head of Structural Department',
      date: 'July 2026',
      readTime: '7 min read',
      featured: false,
      tag: 'Structural Rigor',
      stat: 'Grade A Certified'
    },
    {
      id: 5,
      category: 'Corporate Updates',
      title: 'DEC Regional Expansion: Scaling Dual-Hub Production across Qatar, Egypt & KSA',
      excerpt: 'How our integrated engineering office model connects Lusail executive management with Dokki technical centers for round-the-clock delivery.',
      author: 'Islam Farid',
      authorRole: 'General Manager',
      date: 'June 2026',
      readTime: '4 min read',
      featured: false,
      tag: 'Regional Footprint',
      stat: '3 Regional Hubs'
    },
    {
      id: 6,
      category: 'Regulatory & Permitting',
      title: 'Municipal Building Permits (MMUP / UPDA): Fast-Tracking Commercial Approvals',
      excerpt: 'Understanding municipality review thresholds in Doha, Al Rayyan, Al Daayen, and Al Wakrah to eliminate permitting bottlenecks.',
      author: 'Mohammed Ashfin',
      authorRole: 'Senior Architect & FLS Specialist',
      date: 'May 2026',
      readTime: '5 min read',
      featured: false,
      tag: 'MMUP / UPDA',
      stat: '30+ Qatar Locations'
    }
  ]

  const filteredArticles = articles.filter(art => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.tag.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] antialiased font-sans">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (100VH IMMERSIVE ARCHITECTURAL KNOWLEDGE HUB) */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Natural Background Image - No Heavy Dark Overlay */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/images/insights_hero.jpg" 
            alt="DEC Engineering Knowledge & BIM Studio" 
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 text-center text-[#F5F0E7]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[#B08D57]/70 backdrop-blur-md mb-6 shadow-xl shadow-black/50">
            <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B08D57]">
              DEC Insights · Engineering Thought Leadership
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Knowledge & Innovation
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#B08D57] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Technical Rigor. Regulatory Clarity. Sustainable GCC Impact.
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E7] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Explore authoritative engineering whitepapers, regulatory roadmaps, BIM Level 2 case studies, and sustainable design insights from DEC specialists across Qatar, Egypt, and KSA.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              📚 <strong>Technical Research:</strong> BIM, MEP & Civil Defense
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🌱 <strong>Sustainability:</strong> GSAS & Green Building Standards
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🏛️ <strong>Regulatory:</strong> MMUP Grade A Permitting Roadmaps
            </span>
          </div>

          {/* Jump to Filter */}
          <div className="mt-10">
            <a 
              href="#articles-section"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-black/40 hover:scale-105"
            >
              Explore All Publications <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SEARCH & CATEGORY FILTER STRIP (LIGHT LUXURY CONTAINER)   */}
      {/* ============================================================ */}
      <section id="articles-section" className="bg-white text-[#151515] py-12 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-slate-200">
        <div className="w-full mx-auto">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#B08D57] block mb-1">
                Library of Engineering Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight">
                Authoritative Articles & Whitepapers
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              <input
                type="text"
                placeholder="Search articles, BIM, QCDD..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B08D57] bg-slate-50 text-sm text-slate-800"
              />
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#151515] text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ARTICLES GRID (FEATURED & STANDARD PUBLICATIONS)         */}
      {/* ============================================================ */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 xl:px-20 bg-slate-50 text-[#151515] border-b border-slate-200">
        <div className="w-full mx-auto">
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
              <p className="text-slate-500 text-lg">No articles found matching your query.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="mt-4 px-5 py-2.5 rounded-xl bg-[#151515] text-white text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((art) => (
                <article
                  key={art.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-[#B08D57] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="p-8">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-[#B08D57] border border-[#B08D57]/30">
                        {art.tag}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <FiClock /> {art.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors leading-snug mb-3">
                      {art.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6">
                      {art.excerpt}
                    </p>

                    {/* Highlight Metric */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <FiCheckCircle className="text-emerald-500 text-sm shrink-0" />
                      <span>{art.stat}</span>
                    </div>
                  </div>

                  {/* Footer Author & CTA */}
                  <div className="px-8 py-5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#151515]">{art.author}</div>
                      <div className="text-[11px] text-slate-500">{art.authorRole}</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#151515] group-hover:bg-[#B08D57] group-hover:text-white group-hover:border-[#B08D57] transition-all">
                      <FiArrowUpRight className="text-sm" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TECHNICAL KNOWLEDGE ADVISORY BANNER                       */}
      {/* ============================================================ */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#111111] text-[#F5F0E7]">
        <div className="w-full mx-auto">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#161616] border border-[#B08D57]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] block">
                Direct Engineering Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Require Authority Approval Guidance for Your GCC Asset?
              </h3>
              <p className="text-sm text-[#F5F0E7]/80 leading-relaxed font-light">
                Consult with DEC’s Grade A engineers on municipality permits, QCDD compliance, GSAS green certification, and BIM clash elimination across Qatar, Egypt, and Saudi Arabia.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
              >
                Schedule Consultation <FiArrowRight />
              </Link>
              <Link
                to="/expertise"
                className="px-8 py-4 rounded-xl border border-white/20 hover:border-[#B08D57] hover:text-[#B08D57] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                Our Core Services <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Insights
