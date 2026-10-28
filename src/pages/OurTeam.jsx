import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiShield, 
  FiMapPin,
  FiLayers
} from 'react-icons/fi'
import { 
  FaHandshake
} from 'react-icons/fa6'

function OurTeam() {

  const foundingPartners = [
    {
      name: 'Islam Farid',
      role: 'General Manager',
      category: 'partners',
      initials: 'IF',
      experience: '20+ Years Industry Leadership',
      location: 'Qatar Headquarters',
      focus: ['Strategic Expansion', 'Executive Governance', 'Institutional Partnerships', 'Grade A Compliance'],
      summary: 'Steering the strategic regional expansion, governance, and institutional client partnerships for DEC across Qatar, Egypt, and Saudi Arabia. With over two decades of engineering leadership, Islam leads high-value commercial, hospitality, and residential masterplans while overseeing Grade A statutory compliance and corporate decision-making across all GCC jurisdictions.'
    },
    {
      name: 'Mohamed Mokhtar',
      role: 'Technical Manager',
      category: 'partners',
      initials: 'MM',
      experience: '18+ Years Multidisciplinary Oversight',
      location: 'Qatar Headquarters',
      focus: ['BIM Level 2 Protocols', 'Multidisciplinary QA/QC', 'QCDD Fire Life Safety', 'Structural & MEP Integration'],
      summary: 'Directing DEC’s multidisciplinary engineering excellence, quality management frameworks, and BIM Level 2 protocols. Mohamed ensures every architectural, structural, and MEP deliverable meets rigorous statutory standards, zero-clash coordination, and seamless MMUP / QCDD authority approval across the GCC region.'
    },
    {
      name: 'Mohamed Maher',
      role: 'Operations Manager',
      category: 'partners',
      initials: 'MM',
      experience: '16+ Years Project Delivery',
      location: 'Qatar Headquarters',
      focus: ['Cross-Border Pipelines', 'Site Supervision', 'Resource Allocation', 'Milestone Assurance'],
      summary: 'Orchestrating cross-border operational delivery between the Qatar headquarters, Egypt design hub, and KSA project sites. Mohamed streamlines project lifecycle timelines, technical resource deployment, and rigorous on-site construction supervision, ensuring on-budget execution without schedule slippage.'
    },
    {
      name: 'Ahmed Bakry',
      role: 'Contracts Manager',
      category: 'partners',
      initials: 'AB',
      experience: '17+ Years Commercial Governance',
      location: 'Qatar Headquarters',
      focus: ['FIDIC Contracts', 'Commercial Risk Mitigation', 'Procurement Strategy', 'Statutory Agreements'],
      summary: 'Managing commercial frameworks, FIDIC contractual compliance, risk mitigation, and institutional procurement strategy. Ahmed safeguards client investments, establishes robust contractor coordination, and oversees institutional contract administration across all developmental and construction phases.'
    }
  ]

  const leadershipTeam = [
    {
      name: 'Said Gamal',
      role: 'Technical Office Manager',
      department: 'Technical Coordination & Production',
      category: 'leadership',
      badge: 'Technical Office',
      initials: 'SG',
      desc: 'Supervising multidisciplinary engineering documentation, detailed shop drawing production, cross-departmental reviews, and site technical query resolutions.'
    },
    {
      name: 'Mostafa Magdy',
      role: 'Design Manager',
      department: 'Architectural Design & Space Planning',
      category: 'leadership',
      badge: 'Design Manager',
      initials: 'MM',
      desc: 'Specializing in concept space planning, architectural drafting, luxury interior coordination, and GSAS-compliant building envelope documentation.'
    },
    {
      name: 'Reda Mabrouk',
      role: 'Head of Structural Department',
      department: 'Structural & Geotechnical Engineering',
      category: 'leadership',
      badge: 'Structural Head',
      initials: 'RM',
      desc: 'Leading advanced structural analysis, high-rise structural designs, post-tensioned systems, foundation engineering, and seismic code compliance in accordance with Qatar National Construction Standards (QCS).'
    },
    {
      name: 'Aya Saleh',
      role: 'Senior Architect',
      department: 'Architectural Design & Space Planning',
      category: 'leadership',
      badge: 'Design Architecture',
      initials: 'AS',
      desc: 'Directing spatial architecture, master planning, luxury interior coordination, and sustainable envelope designs for high-profile commercial, retail flagships, and residential developments.'
    },
    {
      name: 'Mohammed Ashfin',
      role: 'Senior Architect & FLS Specialist',
      department: 'Fire Life Safety & Authority Approvals',
      category: 'leadership',
      badge: 'QCDD / FLS Authority',
      initials: 'MA',
      desc: 'Specializing in QCDD Fire Life Safety compliance, NFPA international fire codes, egress calculations, smoke management integration, and direct authority permit liaison.'
    },
    {
      name: 'Leonard Baltazar',
      role: 'Senior Executive Secretary',
      department: 'Executive Administration & Liaison',
      category: 'leadership',
      badge: 'Executive Office',
      initials: 'LB',
      desc: 'Managing executive correspondence, statutory authority filing coordination, high-level client interface, and operational administrative synchronization across all regional offices.'
    }
  ]

  const stats = [
    { value: '4', label: 'Founding Partners', sub: 'Single unified vision' },
    { value: '50+', label: 'In-House Specialists', sub: 'Multidisciplinary experts' },
    { value: '3', label: 'Regional Hubs', sub: 'Qatar · Egypt · KSA' },
    { value: 'Grade A', label: 'MMUP Classification', sub: 'Unlimited scale & height' },
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] antialiased font-sans">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (IMMERSIVE LEADERSHIP & TEAM SHOWCASE)       */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Clean with Controlled Opacity */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/image copy 5.png" 
            alt="DEC Engineering Leadership Team in Lusail" 
            className="w-full h-full object-cover object-center scale-100 opacity-60 transition-transform duration-1000 ease-out"
          />
          {/* Contrast Overlay for Crystal Clear Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#151515] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 text-center text-[#F5F0E7]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-5">
            <FiShield className="text-sm shrink-0" />
            <span>DEC Leadership & Technical Minds · Grade A Excellence</span>
          </div>

          {/* Headings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            The Leadership & Multidisciplinary Minds Behind DEC
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-xl lg:text-2xl font-semibold text-[#B08D57] tracking-wide max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Four Founding Partners · 50+ In-House Engineers & Specialists
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#F5F0E7]/80 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal">
            Uniting two decades of technical rigor, executive governance, and Grade A statutory compliance across Qatar, Egypt, and Saudi Arabia.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FOUNDING PARTNERS (PRIMARY LEADERSHIP PROFILES)          */}
      {/* ============================================================ */}
      <section id="founding-partners" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-slate-200">
        <div className="w-full mx-auto">
          
          {/* Section Header & Stats Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
                <FiShield className="text-sm shrink-0" />
                <span>Primary Executive Leadership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight">
                Founding Partners
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Four founding directors uniting strategic vision, technical excellence, operational execution, and commercial governance under a centralized single-window delivery model across Qatar, Egypt, and Saudi Arabia.
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              {stats.map((s, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center min-w-[130px]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#B08D57]">{s.value}</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">{s.label}</div>
                  <div className="text-[10px] text-slate-500">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Partners Detailed Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {foundingPartners.map((partner) => (
              <div 
                key={partner.name}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B08D57]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  {/* Header Row: Initials Badge + Name & Role */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#151515]/75 backdrop-blur-md text-[#B08D57] font-extrabold text-2xl sm:text-3xl flex items-center justify-center border-2 border-[#B08D57] shadow-lg shadow-[#B08D57]/20 shrink-0 group-hover:scale-105 transition-all">
                      {partner.initials}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#B08D57] block mb-1">
                        Founding Partner
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151515] group-hover:text-[#B08D57] transition-colors leading-tight">
                        {partner.name}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 mt-1">
                        {partner.role}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <FiMapPin className="text-[#B08D57]" /> {partner.location}
                      </div>
                    </div>
                  </div>

                  {/* Core Focus Badges */}
                  <div className="pt-5 border-t border-slate-200 space-y-2.5 mb-6">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                      Core Areas of Responsibility:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {partner.focus.map((f, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-[#B08D57]">{partner.experience}</span>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#B08D57] transition-colors uppercase tracking-wider"
                  >
                    Contact Office <FiArrowRight />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. LEADERSHIP TEAM (DEPARTMENT HEADS & KEY LEADS)           */}
      {/* ============================================================ */}
      <section id="leadership-team" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#111111] border-b border-white/10">
        <div className="w-full mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3 py-1 rounded-full">
              Engineering Disciplines & Department Heads
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              DEC Leadership Team
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#F5F0E7]/70">
              Senior engineering directors, structural heads, certified design architects, and statutory compliance specialists overseeing technical delivery.
            </p>
          </div>

          {/* Department Heads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leadershipTeam.map((lead) => (
              <div 
                key={lead.name}
                className="p-8 rounded-3xl bg-[#161616] border border-white/10 hover:border-[#B08D57]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Top Bar with Initials & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#151515]/75 backdrop-blur-md border-2 border-[#B08D57] text-[#B08D57] font-bold text-lg flex items-center justify-center group-hover:bg-[#B08D57] group-hover:text-[#151515] transition-all">
                      {lead.initials}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#B08D57]/10 text-[#B08D57] border border-[#B08D57]/30">
                      {lead.badge}
                    </span>
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B08D57] transition-colors">
                    {lead.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-[#B08D57] mt-1 mb-2">
                    {lead.role}
                  </div>
                  <div className="text-xs text-white/50 mb-4 font-mono">
                    {lead.department}
                  </div>

                  {/* Scope Description */}
                  <p className="text-xs sm:text-sm text-[#F5F0E7]/80 leading-relaxed font-light">
                    {lead.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-end text-xs">
                  <span className="text-white/40">DEC Senior Staff</span>
                </div>

              </div>
            ))}
          </div>

          {/* Multidisciplinary Support Team Banner */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="text-xs uppercase font-bold tracking-widest text-[#B08D57]">
                Cross-Functional Engine
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Backed by 50+ In-House Engineers & Specialists
              </h4>
              <p className="text-xs sm:text-sm text-[#F5F0E7]/70 max-w-2xl">
                Our core leadership is supported by multidisciplinary BIM modelers, civil engineers, MEP consultants, site inspectors, and authority liaisons operating seamlessly across Qatar and Egypt.
              </p>
            </div>
            <Link
              to="/careers"
              className="px-6 py-3.5 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs uppercase tracking-wider transition-all border border-white/20 hover:border-[#B08D57] shadow-md shrink-0 flex items-center gap-2"
            >
              Explore Engineering Careers <FiArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TEAM CULTURE & SINGLE-WINDOW ACCOUNTABILITY              */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-slate-200">
        <div className="w-full mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left 6 Columns */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
                  <span>HOW WE OPERATE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight leading-[1.15]">
                  One Team. Multiple Disciplines. Zero Fragmentation.
                </h2>
                <p className="mt-4 text-base text-slate-700 leading-relaxed">
                  In standard construction frameworks, architectural vision, MEP calculations, and structural designs are often divided among disparate firms. At DEC, our leadership team ensures unified coordination from the first concept sketch to final permit approval.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <FiCheckCircle className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Centralized Engineering Oversight</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Every drawing and model is reviewed by our Technical Manager and Structural Head before client submittal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <FiCheckCircle className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Direct Authority Permitting Speed</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Dedicated QCDD & MMUP liaisons ensure statutory building permits are secured without procedural delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <FiCheckCircle className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Cross-Border Dual Hub Synchronization</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Seamless interaction between our Qatar executive office and Egypt technical production centers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Interactive Callout Card Aligned Perfectly with Left */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="h-full p-8 sm:p-12 rounded-3xl bg-[#151515] text-white border border-[#B08D57]/40 shadow-2xl flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
                    <FaHandshake className="text-sm shrink-0" />
                    <span>Executive Direct Access</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    Connect Directly with DEC Founding Leadership
                  </h3>
                  <p className="text-sm sm:text-base text-[#F5F0E7]/80 leading-relaxed font-light">
                    Whether you are planning a high-rise commercial headquarters, luxury retail flagship, industrial facility, or hospitality complex, our partners are accessible to review your project brief.
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-7 py-4 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-[#B08D57] shadow-lg hover:scale-105 flex items-center gap-2"
                  >
                    <span>Schedule Leadership Briefing</span>
                    <FiArrowRight className="text-base" />
                  </Link>
                  <Link
                    to="/projects"
                    className="px-7 py-4 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-[#B08D57] shadow-lg hover:scale-105 flex items-center gap-2 group"
                  >
                    <span>View Completed Works</span>
                    <FiLayers className="text-base text-[#B08D57] group-hover:text-[#151515] transition-colors" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default OurTeam
