import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiMapPin, 
  FiSearch, 
  FiArrowRight, 
  FiCheckCircle, 
  FiLayers, 
  FiExternalLink 
} from 'react-icons/fi'

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { label: 'All Projects', value: 'All' },
    { label: 'Offices & Corporate', value: 'offices' },
    { label: 'Retail & Luxury', value: 'retail' },
    { label: 'Hospitality & Hotels', value: 'hospitality' },
    { label: 'F&B & Dining', value: 'fnb' },
    { label: 'Residential & Villas', value: 'residential' },
    { label: 'Industrial & Logistics', value: 'industrial' }
  ]

  const allProjects = [
    // Offices
    {
      id: 'off-1',
      name: 'Snoonu HQ Offices',
      sector: 'Offices & Corporate',
      sectorSlug: 'offices',
      location: 'Lusail, Qatar',
      scope: 'ARCH R&M, STR, MEP, QCD Design & Supervision',
      description: 'Comprehensive headquarters facility integrating collaborative agile zones, executive suites, and full MEP/QCD infrastructure.',
      tags: ['Corporate HQ', 'Lusail', 'Full MEP', 'QCD Approved']
    },
    {
      id: 'off-2',
      name: 'Amazon Ads Office',
      sector: 'Offices & Corporate',
      sectorSlug: 'offices',
      location: 'Msheireb Downtown, Qatar',
      scope: 'ARCH R&M, MEP & QCD Design & Supervision',
      description: 'Prime corporate workspace within sustainable district with high acoustic ratings, MEP coordination and LEED/GSAS conformity.',
      tags: ['Global Tech', 'Msheireb', 'GSAS Compliant', 'MEP']
    },
    {
      id: 'off-3',
      name: 'BlackRock Office',
      sector: 'Offices & Corporate',
      sectorSlug: 'offices',
      location: 'Lusail, Qatar',
      scope: 'ARCH R&M, MEP & QCD Design & Supervision',
      description: 'Ultra-secure financial services workspace with redundant power distribution, precision HVAC, and luxury architectural detailing.',
      tags: ['Financial Services', 'Lusail Marina', 'Redundant Power']
    },
    {
      id: 'off-4',
      name: 'Boeing Office',
      sector: 'Offices & Corporate',
      sectorSlug: 'offices',
      location: 'Al Dafna, Qatar',
      scope: 'ARCH R&M, QCD Design & Supervision',
      description: 'Global aerospace corporate office with strict international life safety compliance, secure access partitions, and QCD approvals.',
      tags: ['Aerospace', 'Al Dafna', 'Life Safety', 'QCDD']
    },
    {
      id: 'off-5',
      name: 'Maalomatia CEO Office',
      sector: 'Offices & Corporate',
      sectorSlug: 'offices',
      location: 'Lusail, Qatar',
      scope: 'ARCH R&M, MEP, QCD Design, Tender & Supervision',
      description: 'C-suite executive floor featuring custom acoustic treatments, smart automation, and integrated executive boardroom systems.',
      tags: ['Executive Suite', 'Smart BMS', 'Tender Support']
    },
    {
      id: 'off-6',
      name: 'SkipCash Corporate Office',
      sector: 'Offices & Corporate',
      sectorSlug: 'offices',
      location: 'Lusail, Qatar',
      scope: 'ARCH R&M, MEP & QCD Design & Supervision',
      description: 'Fintech corporate headquarters designed for high-density agile teams, modern brand identity, and secure IT infrastructure.',
      tags: ['Fintech Hub', 'Lusail', 'Fast-Track Fitout']
    },

    // Retail
    {
      id: 'ret-1',
      name: 'DIOR Flagship Boutique',
      sector: 'Retail & Luxury',
      sectorSlug: 'retail',
      location: 'Doha Festival City (DFC)',
      scope: 'ARCH R&M, MEP & QCD Design & Supervision',
      description: 'Haute couture luxury retail store requiring meticulous lighting lux levels, specialized stone finishes, and life safety coordination.',
      tags: ['Haute Couture', 'DFC Mall', 'Lighting Engineering', 'QCD']
    },
    {
      id: 'ret-2',
      name: 'Armani Casa',
      sector: 'Retail & Luxury',
      sectorSlug: 'retail',
      location: 'Msheireb Downtown, Qatar',
      scope: 'ARCH R&M, MEP & QCD Design & Supervision',
      description: 'Luxury furniture and home design showroom with custom architectural ceiling rafts and specialized lighting design.',
      tags: ['Luxury Furnishing', 'Msheireb', 'Custom Ceilings']
    },
    {
      id: 'ret-3',
      name: 'NARS Cosmetics Boutique',
      sector: 'Retail & Luxury',
      sectorSlug: 'retail',
      location: 'Doha Festival City (DFC)',
      scope: 'ARCH & MEP R&M & Supervision',
      description: 'Premium beauty boutique with high-lumen color rendering lighting, custom HVAC makeup air, and brand guideline conformity.',
      tags: ['Beauty Flagship', 'HVAC Makeup Air', 'DFC Mall']
    },
    {
      id: 'ret-4',
      name: 'Hibobi Flagship',
      sector: 'Retail & Luxury',
      sectorSlug: 'retail',
      location: 'Place Vendôme Mall, Lusail',
      scope: 'ARCH R&M, STR, MEP & QCD Supervision',
      description: 'Flagship concept store in Qatar’s premier luxury mall with custom structural support frames and fire sprinkler coordination.',
      tags: ['Place Vendôme', 'Structural Steel', 'Fire Sprinklers']
    },
    {
      id: 'ret-5',
      name: 'Xiaomi Tech Hub',
      sector: 'Retail & Luxury',
      sectorSlug: 'retail',
      location: 'Doha Festival City (DFC)',
      scope: 'ARCH R&M, MEP & QCD Design & Supervision',
      description: 'Modern consumer technology experience center with high-density power networking and interactive display engineering.',
      tags: ['Consumer Tech', 'Power Networking', 'DFC Mall']
    },

    // Hospitality
    {
      id: 'hosp-1',
      name: 'Waldorf Astoria Luxury Suites Fitout',
      sector: 'Hospitality & Hotels',
      sectorSlug: 'hospitality',
      location: 'Lusail, Qatar',
      scope: 'ARCH R&M, MEP & QCD Design Coordination',
      description: 'Ultra-luxury hospitality engineering for signature penthouses and VIP guest accommodations overlooking the Arabian Gulf.',
      tags: ['5-Star Luxury', 'Lusail Waterfront', 'Acoustic Privacy']
    },
    {
      id: 'hosp-2',
      name: 'Banana Island Resort Overwater Spa',
      sector: 'Hospitality & Hotels',
      sectorSlug: 'hospitality',
      location: 'Doha Island, Qatar',
      scope: 'Specialized MEP & Marine-Grade Structural Analysis',
      description: 'Marine-grade HVAC and environmental protection engineering for premium overwater spa facilities.',
      tags: ['Island Resort', 'Marine Engineering', 'Specialized HVAC']
    },
    {
      id: 'hosp-3',
      name: 'Lusail Boutique Hotel & Wellness',
      sector: 'Hospitality & Hotels',
      sectorSlug: 'hospitality',
      location: 'Lusail Marina, Qatar',
      scope: 'Full Integrated MEP, STR & Civil Defense Compliance',
      description: 'Full-service boutique hospitality venue with central chilled water, wet wellness systems, and guest room management systems (GRMS).',
      tags: ['Boutique Hotel', 'GRMS Systems', 'Chilled Water Plant']
    },

    // F&B
    {
      id: 'fnb-1',
      name: 'Signor Sassi Fine Dining',
      sector: 'F&B & Dining',
      sectorSlug: 'fnb',
      location: 'WestWalk, Doha, Qatar',
      scope: 'ARCH R&M, MEP Kitchen Ventilation & QCD Approvals',
      description: 'Iconic Italian fine dining establishment featuring commercial kitchen hood ecology units, gas detection, and NFPA 96 compliance.',
      tags: ['Fine Dining', 'Commercial Kitchen', 'Ecology Unit', 'NFPA 96']
    },
    {
      id: 'fnb-2',
      name: 'Carbone Restaurant',
      sector: 'F&B & Dining',
      sectorSlug: 'fnb',
      location: 'Al Maha Island, Lusail',
      scope: 'ARCH R&M, STR, MEP & QCD Life Safety',
      description: 'Celebrated high-end restaurant destination demanding heavy kitchen gas suppression, bespoke acoustic ceilings, and structural supports.',
      tags: ['Al Maha Island', 'Gas Suppression', 'Heavy Kitchen MEP']
    },
    {
      id: 'fnb-3',
      name: 'LPM Restaurant & Bar',
      sector: 'F&B & Dining',
      sectorSlug: 'fnb',
      location: 'Al Maha Island, Lusail',
      scope: 'ARCH R&M, MEP & QCD Design & Supervision',
      description: 'French Mediterranean dining venue coordinating exhaust make-up air balance, grease separators, and luxury interior lighting.',
      tags: ['French Riviera Vibe', 'Grease Interceptors', 'Luxury Ambience']
    },

    // Residential
    {
      id: 'res-1',
      name: 'Palatial Private Residence',
      sector: 'Residential & Villas',
      sectorSlug: 'residential',
      location: 'West Bay Lagoon, Doha',
      scope: 'Architecture, Civil, MEP & Kahramaa Substation Engineering',
      description: 'Grand waterfront villa development comprising private wellness pavilion, Olympic lap pool filtration, and dedicated power substation.',
      tags: ['Waterfront Palace', 'Dedicated Substation', 'Smart Home Automation']
    },
    {
      id: 'res-2',
      name: 'Pearl Qatar Penthouse Duplex',
      sector: 'Residential & Villas',
      sectorSlug: 'residential',
      location: 'Porto Arabia, The Pearl',
      scope: 'ARCH R&M, Structural Slab Openings & MEP Retrofit',
      description: 'Structural modification and high-end MEP engineering for a double-height luxury penthouse overlooking marina berths.',
      tags: ['The Pearl', 'Structural Slab Modification', 'Luxury Fitout']
    },
    {
      id: 'res-3',
      name: 'Al Waab Luxury Compound Villas',
      sector: 'Residential & Villas',
      sectorSlug: 'residential',
      location: 'Al Waab, Doha',
      scope: 'Civil, STR, MEP & Baladiya BCC Clearances',
      description: 'Gated residential community villas designed for multi-generational luxury with sustainable building envelope and BCC permits.',
      tags: ['Compound Living', 'Baladiya BCC Permit', 'QCS Certified']
    },

    // Industrial
    {
      id: 'ind-1',
      name: 'Barwa Logistics Distribution Facility',
      sector: 'Industrial & Logistics',
      sectorSlug: 'industrial',
      location: 'Industrial Area, Doha',
      scope: 'STR PEB Design, MEP Infrastructure & QCD Fire Suppression',
      description: 'Pre-Engineered Building (PEB) logistics distribution warehouse featuring ESFR sprinkler arrays and high-capacity floor slabs.',
      tags: ['PEB Structural Steel', 'ESFR Fire Sprinklers', 'High-Bay Storage']
    },
    {
      id: 'ind-2',
      name: 'Pharmaceutical Cold-Chain Hub',
      sector: 'Industrial & Logistics',
      sectorSlug: 'industrial',
      location: 'Ras Bufontas Free Zone',
      scope: 'Precision Refrigeration, Cleanroom MEP & Redundant Power',
      description: 'Critical temperature-controlled storage facility meeting international GMP medical guidelines and Qatar Free Zones Authority codes.',
      tags: ['Cleanroom HVAC', 'Cold Chain', 'Redundant Gensets', 'QFZA Zone']
    }
  ]

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.sectorSlug === selectedCategory
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION - PURE CLEAR ARCHITECTURAL SHOWCASE IMAGE    */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#151515]">
        <img 
          src="/images/projects_hero.jpg" 
          alt="DEC Landmark Projects Portfolio Doha Qatar" 
          className="w-full h-full object-cover object-center scale-100"
        />
      </section>

      {/* ============================================================ */}
      {/* 2. STATS & PORTFOLIO METRICS                                 */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-16 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#B08D57] tracking-tight">300+</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">Project Engagements</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#151515] tracking-tight">Grade A</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">MMUP / UPDA Certified</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#B08D57] tracking-tight">30+</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">Qatar Prime Locations</div>
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
      <section className="bg-slate-50 text-[#151515] py-10 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] block mb-1">
                DELIVERED ENGINEERING EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                DEC Projects Portfolio
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              <input
                type="text"
                placeholder="Search projects by name, location, or MEP/QCD..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#B08D57] bg-white text-sm text-slate-800 shadow-sm"
              />
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-[#151515] text-[#F5F0E7] shadow-md'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PROJECTS SHOWCASE GRID                                    */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 p-8">
              <p className="text-slate-500 text-lg">No projects found matching your search.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#151515] text-white text-xs font-bold uppercase tracking-wider"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Sector Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#B08D57]/15 text-[#8F6F3E]">
                        {project.sector}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <FiMapPin className="text-[#B08D57]" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors mb-3 leading-snug">
                      {project.name}
                    </h3>

                    {/* Scope Highlight */}
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 mb-4 text-xs font-semibold text-slate-700 flex items-start gap-2">
                      <FiLayers className="text-[#B08D57] mt-0.5 shrink-0 text-sm" />
                      <span>{project.scope}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-black/70 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white text-slate-600 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">DEC Grade A Delivery</span>
                    <Link 
                      to={`/sector/${project.sectorSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08D57] hover:text-[#151515] uppercase tracking-wider transition-colors"
                    >
                      View Sector <FiArrowRight />
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. CONSULTATION & RFP INQUIRY BANNER                         */}
      {/* ============================================================ */}
      <section className="bg-[#151515] py-20 px-6 sm:px-10 lg:px-14 xl:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-3">
            HAVE A LANDMARK PROJECT IN MIND?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F0E7] tracking-tight mb-6">
            Bring Your Vision to Life with Grade A Precision
          </h2>
          <p className="text-base sm:text-lg text-[#F5F0E7]/70 font-light mb-10 max-w-2xl mx-auto">
            From initial architectural feasibility to turnkey MEP engineering and civil defense permits, DEC delivers certainty at every project milestone.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#B08D57] hover:bg-[#8F6F3E] text-[#151515] font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-[#B08D57]/20"
            >
              Submit RFP / Project Inquiry
            </Link>
            <Link 
              to="/expertise"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold text-sm uppercase tracking-wider transition-all"
            >
              Explore Engineering Disciplines
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Projects
