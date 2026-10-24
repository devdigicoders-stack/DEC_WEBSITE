import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiArrowRight,
  FiCheckCircle, 
  FiShield, 
  FiLayers, 
  FiX
} from 'react-icons/fi'
import { 
  FaFileCircleCheck, 
  FaUsersGear 
} from 'react-icons/fa6'

function WhyDEC() {
  const [activeStage, setActiveStage] = useState(1)

  const corePillars = [
    {
      number: '01',
      title: 'Grade A MMUP / UPDA Standing',
      subtitle: 'Highest Statutory Classification',
      desc: 'DEC holds the prestigious Grade A accreditation from the Ministry of Municipality, granting unrestricted authority to design and supervise commercial, residential, high-rise, and institutional developments without height or scale ceilings.',
      icon: FiShield,
      highlight: 'Unlimited Height & Scale'
    },
    {
      number: '02',
      title: 'Centralized Multidisciplinary Synergy',
      subtitle: 'All Disciplines Under One Roof',
      desc: 'We eliminate the traditional disconnect between external architects, structural designers, and MEP contractors. Architecture, Civil, Mechanical, Electrical, QCDD Fire Safety, and BIM operate as a single unified engine.',
      icon: FiLayers,
      highlight: 'Zero Subcontractor Clashes'
    },
    {
      number: '03',
      title: 'Dual-Hub Delivery Model',
      subtitle: 'Qatar Front-Office + Egypt Tech Center',
      desc: 'Our Lusail headquarters commands client advisory, site supervision, and municipality permitting, while our Dokki technical center deploys heavy BIM drafting and structural computational modeling for round-the-clock speed.',
      icon: FaUsersGear,
      highlight: '24/7 Production Capacity'
    },
    {
      number: '04',
      title: '100% First-Pass Permitting Record',
      subtitle: 'Deep Regulatory Authority Mastery',
      desc: 'Decades of direct regulatory familiarity with QCDD (Civil Defense), Kahramaa, Ashghal, Ooredoo, and all 8 Qatar Municipalities ensure permits are secured swiftly without design compromises or milestone delays.',
      icon: FaFileCircleCheck,
      highlight: 'BCC Guaranteed Completion'
    }
  ]

  const deliveryStages = [
    {
      stage: 1,
      name: 'Brief & Feasibility',
      phase: 'Inception',
      desc: 'Establish project scope, client aspirations, commercial targets, site constraints, and municipal zoning thresholds.',
      deliverables: [
        'Zoning & Planning Verification',
        'Authority Pre-Consultation',
        'Multidisciplinary Project Charter',
        'Risk & Feasibility Matrix'
      ]
    },
    {
      stage: 2,
      name: 'Concept Design',
      phase: 'Spatial Vision',
      desc: 'Translate architectural vision into initial massing, volumetric efficiency, and preliminary structural/MEP schematics.',
      deliverables: [
        'Architectural Massing Models',
        'Spatial Programming & Circulation',
        'Passive Environmental Strategy (GSAS)',
        'Initial Engineering Schematics'
      ]
    },
    {
      stage: 3,
      name: 'Schematic Design & Pre-Approvals',
      phase: 'Coordination',
      desc: 'Deepen engineering calculations, initiate 3D BIM integration, and conduct preliminary statutory submissions.',
      deliverables: [
        '3D Revit Architectural Model',
        'Structural Load Calculations',
        'MEP Concept & Utility Demand Loads',
        'QCDD Life Safety Strategy Pre-Filing'
      ]
    },
    {
      stage: 4,
      name: 'Detailed Design & Tender Packages',
      phase: 'Precision',
      desc: 'Perform 3D multi-discipline clash resolution, detailed specifications, BOQs, and complete tender documentation.',
      deliverables: [
        'BIM & Digital Twin Delivery Models',
        'Detailed Engineering Working Drawings',
        'Comprehensive Bills of Quantities (BOQ)',
        'Contractor Tender Specifications'
      ]
    },
    {
      stage: 5,
      name: 'Authority Approvals & Permitting',
      phase: 'Statutory Clearance',
      desc: 'Orchestrate rigorous authority submissions across all Qatar government entities until final permits are issued.',
      deliverables: [
        'Municipality Building Permit (DC1 & DC2)',
        'Civil Defense (QCDD) Fire Approval',
        'Kahramaa Water & Electricity Clearance',
        'Ashghal Drainage & Road Connection'
      ]
    },
    {
      stage: 6,
      name: 'Construction Supervision & BCC Handover',
      phase: 'Execution & Completion',
      desc: 'Deliver periodic site supervision, quality assurance, contractor compliance oversight, and final Building Completion Certificate.',
      deliverables: [
        'On-Site Engineering Quality Control',
        'Site Variation & RFI Resolution',
        'Testing, Commissioning & Snagging',
        'Statutory BCC Issuance & Handover'
      ]
    }
  ]

  const comparisonData = [
    {
      metric: 'Multidisciplinary Coordination',
      dec: 'Unified under one centralized DEC technical umbrella with full BIM & Digital Twin synchronization.',
      traditional: 'Fragmented between independent architects, separate MEP firms, and outsourced structural engineers.'
    },
    {
      metric: 'Authority Permitting Timeline',
      dec: 'Fast-tracked via concurrent pre-approvals and established relationships across QCDD, Kahramaa & Municipalities.',
      traditional: 'Sequential submissions resulting in back-and-forth rejections, resubmissions, and costly project pauses.'
    },
    {
      metric: 'Site Clashes & Variations',
      dec: 'Virtually 0 site clashes; resolved digitally in 3D Revit Navisworks prior to site mobilization.',
      traditional: 'Frequent on-site clashes discovered during fitout or structural works, causing expensive variation claims.'
    },
    {
      metric: 'Accountability & Governance',
      dec: 'Single point of institutional responsibility from initial concept straight through BCC handover.',
      traditional: 'Blame shifting between architect, engineers, and contractors when delays or compliance issues occur.'
    },
    {
      metric: 'Sustainability (GSAS)',
      dec: 'Native GSAS green building integration engineered into energy, lighting, and HVAC systems from Day\u00A01.',
      traditional: 'Sustainability treated as an afterthought or expensive retrofitted add-on.'
    }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] antialiased font-sans">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (100VH IMMERSIVE STRATEGIC ADVANTAGE)        */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Balanced Opacity for Image Richness & Text Readability */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/image.png" 
            alt="DEC Grade A Engineering Headquarters Lusail Landmark" 
            className="w-full h-full object-cover object-center scale-100 opacity-55 transition-transform duration-1000 ease-out"
          />
          {/* Contrast Overlay for Crystal Clear Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 text-center text-[#F5F0E7]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-6">
            <FiShield className="text-sm shrink-0" />
            <span>The Strategic Engineering Advantage · Grade A</span>
          </div>

          {/* Headings */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Why Choose DEC?
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#B08D57] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Grade A Authority. Multidisciplinary Integration. Dependable Delivery.
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E7] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            We bridge the critical gap between conceptual architectural creativity and permit-approved, constructible reality through centralized engineering coordination across Qatar, Egypt, and KSA.
          </p>

          {/* Value Metric Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🏆 <strong>Grade A Standing:</strong> Unlimited Scale & Height Authority
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              📐 <strong>BIM & Digital Twin Delivery:</strong> Zero Multidisciplinary Site Clashes
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🏛️ <strong>300+ Projects:</strong> Delivered Across 30+ Qatar Locations
            </span>
          </div>

          {/* Action Button */}
          <div className="mt-10">
            <a 
              href="#strategic-pillars"
              className="px-7 py-4 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#B08D57]/25 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer"
            >
              <span>Explore Our Core Pillars</span>
              <FiArrowRight className="text-base" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. 4 CORE STRATEGIC PILLARS (LIGHT THEME LUXURY CONTAINER)   */}
      {/* ============================================================ */}
      <section id="strategic-pillars" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-slate-200">
        <div className="w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
              <FiShield className="text-sm shrink-0" />
              <span>FOUNDATIONAL PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight mt-3">
              The Four Pillars of the DEC Advantage
            </h2>
            {/* Gold Band Accent */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mx-auto mt-4 mb-2 rounded-full" />
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Why leading international corporations, developers, and asset owners select DEC as their trusted engineering partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={pillar.number}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-extrabold text-[#B08D57]">
                        {pillar.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#B08D57] group-hover:scale-110 transition-transform shadow-sm">
                        <Icon className="text-xl" />
                      </div>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-[#B08D57] mb-1">
                      {pillar.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#151515]">
                    <span className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-500 text-sm" />
                      {pillar.highlight}
                    </span>
                    <FiArrowRight className="text-slate-400 group-hover:text-[#B08D57] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. THE 6-STAGE DELIVERY MODEL (FROM PDF PAGES 44-45)         */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#111111] border-b border-white/10">
        <div className="w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
              <FiLayers className="text-sm shrink-0" />
              <span>FULL-LIFECYCLE GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              The DEC 6-Stage Delivery Model
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#F5F0E7]/70">
              A disciplined, milestone-driven framework that guarantees compliance, cost protection, and timely BCC handovers.
            </p>
          </div>

          {/* Interactive Stage Tabs (3 & 3 Stacked Grid with Hover Glow & Enlarge) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-12 max-w-5xl mx-auto">
            {deliveryStages.map((st) => (
              <button
                key={st.stage}
                onClick={() => setActiveStage(st.stage)}
                className={`px-5 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between border cursor-pointer hover:scale-105 ${
                  activeStage === st.stage
                    ? 'bg-[#B08D57] text-[#151515] border-[#B08D57] shadow-xl shadow-[#B08D57]/30 scale-105'
                    : 'bg-white/5 hover:bg-[#B08D57]/15 text-white/80 hover:text-white border-white/10 hover:border-[#B08D57]/60 hover:shadow-lg hover:shadow-[#B08D57]/25'
                }`}
              >
                <span className="font-extrabold tracking-widest">Stage 0{st.stage}</span>
                <span className="text-[11px] font-semibold opacity-90 truncate ml-2">· {st.name}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Details Card - Flush Aligned Right with Left Side */}
          {deliveryStages.map((st) => {
            if (st.stage !== activeStage) return null
            return (
              <div 
                key={st.stage}
                className="p-8 sm:p-12 rounded-3xl bg-[#161616] border border-[#B08D57]/40 shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3.5 py-1 rounded-full bg-[#B08D57]/20 text-[#B08D57] font-extrabold text-xs tracking-widest uppercase">
                          Stage 0{st.stage} · {st.phase}
                        </span>
                        <span className="text-xs text-white/50">Comprehensive Phase Oversight</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                        {st.name}
                      </h3>
                      <p className="text-base text-[#F5F0E7]/80 leading-relaxed font-light">
                        {st.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B08D57] hover:text-[#C7A673] transition-colors group"
                      >
                        <span>Inquire</span>
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Deliverables Box */}
                  <div className="lg:col-span-5 p-7 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-widest text-[#B08D57] mb-4 pb-2 border-b border-white/10">
                        Key Deliverables & Milestones
                      </h4>
                      <div className="space-y-3">
                        {st.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F0E7]/90 font-medium">
                            <FiCheckCircle className="text-emerald-400 text-base shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3.5 VISUAL SPOTLIGHT: BIM LEVEL 2 ZERO-CLASH COORDINATION     */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#0e0e0e] border-b border-white/10 text-white">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 6 Cols: Technical Context */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
                <FiLayers className="text-sm shrink-0" />
                <span>Digital Engineering Superiority</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
                Virtual Construction Before <span className="text-[#B08D57]">Physical Groundbreaking</span>
              </h2>

              <p className="text-base text-[#F5F0E7]/80 leading-relaxed font-light">
                At DEC, multidisciplinary coordination isn't an afterthought. We build every project twice — first as a millimeter-accurate federated 3D digital twin, resolving thousands of structural and MEP clashes digitally before any concrete is poured or ductwork hung.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-2xl font-bold text-[#B08D57]">100%</div>
                  <div className="text-xs uppercase font-semibold text-white mt-1">First-Pass QCDD Approval</div>
                  <p className="text-[11px] text-[#F5F0E7]/60 mt-1">Pre-tested fire & life safety digital egress models.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-2xl font-bold text-emerald-400">0</div>
                  <div className="text-xs uppercase font-semibold text-white mt-1">Site Rework Variation Claims</div>
                  <p className="text-[11px] text-[#F5F0E7]/60 mt-1">Guaranteed clash-free MEP and structural routing.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/expertise"
                  className="px-7 py-4 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#B08D57]/25 hover:scale-105 hover:shadow-2xl hover:shadow-[#B08D57]/50 inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Explore BIM & Digital Twins</span>
                  <FiArrowRight className="text-base" />
                </Link>
              </div>
            </div>

            {/* Right 6 Cols: BIM Coordination Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#B08D57]/40 shadow-2xl shadow-black/90 group">
                <img 
                  src="/images/why_dec_bim_edge.jpg" 
                  alt="DEC 3D BIM Level 2 Coordination and Clash Detection"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between text-xs font-bold text-[#B08D57] uppercase tracking-wider mb-1">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
                      Federated 3D Coordination
                    </span>
                    <span className="text-emerald-400 font-mono text-[11px]">BIM LEVEL 2 ACTIVE</span>
                  </div>
                  <p className="text-xs text-[#F5F0E7]/80">
                    Synchronized Revit & Navisworks models across Architecture, Structure, HVAC & Electrical ELV.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. DEC vs TRADITIONAL MODEL COMPARISON                      */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-slate-200">
        <div className="w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
              <FiShield className="text-sm shrink-0" />
              <span>VALUE DIFFERENTIATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight mt-3">
              DEC Centralized Model vs Traditional Consultancy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Clear comparative analysis showing how centralized coordination mitigates risk and protects capital investment.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#151515] text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="p-6 font-bold w-1/4">Evaluation Criterion</th>
                  <th className="p-6 font-bold w-3/8 text-[#B08D57] border-l border-white/10 bg-[#1c1c1c]">
                    ⭐ The DEC Integrated Model
                  </th>
                  <th className="p-6 font-bold w-3/8 text-slate-300 border-l border-white/10">
                    Traditional Fragmented Model
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-6 font-bold text-[#151515]">
                      {row.metric}
                    </td>
                    <td className="p-6 font-semibold text-slate-800 border-l border-slate-200 bg-amber-50/20">
                      <div className="flex items-start gap-2.5">
                        <FiCheckCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
                        <span>{row.dec}</span>
                      </div>
                    </td>
                    <td className="p-6 text-slate-500 border-l border-slate-200">
                      <div className="flex items-start gap-2.5">
                        <FiX className="text-rose-400 text-base shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>


    </div>
  )
}

export default WhyDEC
