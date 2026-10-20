import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiArrowRight, 
  FiArrowUpRight, 
  FiShield, 
  FiTarget, 
  FiEye, 
  FiCheckCircle, 
  FiAward, 
  FiLayers
} from 'react-icons/fi'
import { 
  FaAward, 
  FaHandshake, 
  FaLightbulb, 
  FaSeedling, 
  FaGraduationCap 
} from 'react-icons/fa6'

function About() {
  const values = [
    {
      number: '01',
      title: 'Excellence & Integrity',
      desc: 'Committed to rigorous engineering standards, complete transparency, and ethical professional conduct on every engagement.',
      icon: FaAward
    },
    {
      number: '02',
      title: 'Innovation & Technology',
      desc: 'Leveraging BIM Level 2, 3D clash detection, and digital workflows to eliminate site reworks and optimize building systems.',
      icon: FaLightbulb
    },
    {
      number: '03',
      title: 'Sustainability',
      desc: 'Integrating green building principles (GSAS), passive environmental design, and resource efficiency for high-performance outcomes.',
      icon: FaSeedling
    },
    {
      number: '04',
      title: 'Client Partnership',
      desc: 'Forging enduring institutional relationships built on trust, active collaboration, and relentless commitment to project milestones.',
      icon: FaHandshake
    },
    {
      number: '05',
      title: 'Knowledge & Growth',
      desc: 'Fostering continuous learning, technical research, and developing localized engineering expertise across Qatar and the GCC.',
      icon: FaGraduationCap
    }
  ]

  const foundingPartners = [
    {
      name: 'Islam Farid',
      role: 'General Manager',
      desc: 'Directing strategic growth, regional partnerships, and institutional governance across Qatar, Egypt, and KSA.',
      initials: 'IF'
    },
    {
      name: 'Mohamed Mokhtar',
      role: 'Technical Manager',
      desc: 'Leading multidisciplinary engineering compliance, structural and MEP quality oversight, and BIM implementation.',
      initials: 'MM'
    },
    {
      name: 'Mohamed Maher',
      role: 'Operations Manager',
      desc: 'Orchestrating seamless project delivery pipelines, cross-border resource allocation, and operational efficiency.',
      initials: 'MM'
    },
    {
      name: 'Ahmed Bakry',
      role: 'Contracts Manager',
      desc: 'Overseeing contractual frameworks, commercial risk management, procurement coordination, and client agreements.',
      initials: 'AB'
    }
  ]

  const leadershipTeam = [
    { name: 'Said Gamal', role: 'Technical Offices Manager' },
    { name: 'Mostafa Magdy', role: 'Design Manager' },
    { name: 'Reda Mabrouk', role: 'Head of Structural Department' },
    { name: 'Aya Saleh', role: 'Senior Architect' },
    { name: 'Mohammed Ashfin', role: 'Senior Architect & FLS Specialist' },
    { name: 'Leonard Baltazar', role: 'Senior Executive Secretary' }
  ]

  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      desc: 'Listen, analyze & define project objectives, site constraints, and authority criteria.'
    },
    {
      num: '02',
      title: 'PLAN',
      desc: 'Develop tailored strategies, spatial programs & coordinated multidisciplinary solutions.'
    },
    {
      num: '03',
      title: 'EXECUTE',
      desc: 'Deliver with technical precision, 3D BIM integration, and rigorous code compliance.'
    },
    {
      num: '04',
      title: 'ENSURE',
      desc: 'Maintain stringent quality assurance, risk mitigation, and authority permit approvals.'
    },
    {
      num: '05',
      title: 'DELIVER',
      desc: 'Create lasting asset value, testing & commissioning, and seamless building completion (BCC).'
    }
  ]

  const credentialsRegister = [
    {
      id: '01',
      title: 'Grade A Engineering Consultancy / MMUP / UPDA Status',
      source: 'Company Profile pp. 1, 4, 44 · Prequalifications pp. 3–4',
      treatment: 'Grade A Multidisciplinary Engineering Consultancy',
      issuer: 'Ministry of Municipality (Qatar)',
      status: 'Active Statutory Standing',
      desc: 'Accredited with the highest statutory classification granting unrestricted authority to design, calculate, and supervise complex commercial, residential, high-rise, and institutional developments without height or scale ceilings.',
      icon: FiShield,
      badge: 'Statutory Grade A'
    },
    {
      id: '02',
      title: 'GSAS Design & Build Service Provider',
      source: 'Company Profile p. 4 · Prequalifications p. 12',
      treatment: 'Certified GSAS Design & Build Service Provider',
      issuer: 'Gulf Organisation for Research & Development (GORD)',
      status: 'Certified Sustainability Provider',
      desc: 'Certified sustainability service provider framework ensuring building engineering, spatial layouts, and MEP systems achieve GSAS Star compliance, passive environmental optimization, and lifecycle resource efficiency.',
      icon: FaSeedling,
      badge: 'Sustainability'
    },
    {
      id: '03',
      title: 'ISO 9001:2015 Quality Management',
      source: 'Prequalifications p. 14',
      treatment: 'ISO 9001:2015 Quality Management Certified Scope',
      issuer: 'International Organization for Standardization (ISO)',
      status: 'Surveillance Verified',
      desc: 'Standardized operational quality management system governing technical design integrity, Revit BIM Level 2 clash detection protocols, and systematic multidisciplinary QA/QC audit cycles.',
      icon: FiAward,
      badge: 'Certified QMS'
    },
    {
      id: '04',
      title: 'ICV Certificate (In-Country Value)',
      source: 'Prequalifications p. 13',
      treatment: 'Recognized In-Country Value Contribution',
      issuer: 'Qatar National ICV Program',
      status: 'Active ICV Certification',
      desc: 'Verified In-Country Value certification demonstrating long-term commitment to localized technical capacity, regional engineering talent growth, and high-performance GCC supply-chain excellence.',
      icon: FiLayers,
      badge: 'National Value'
    },
    {
      id: '05',
      title: 'Professional Memberships & Staff Registrations',
      source: 'Prequalifications pp. 17+, 54+',
      treatment: 'Aggregated Staff Engineering Expertise',
      issuer: 'UPDA, QCDD & International Chartered Bodies',
      status: 'Aggregated Licensed Professionals',
      desc: 'Our multidisciplinary team comprises UPDA / MMUP registered engineers, QCDD Fire Life Safety certified specialists, GSAS-CGP practitioners, and corporate members of ICE, IStructE, ASHRAE, NFPA, and PMI.',
      icon: FiCheckCircle,
      badge: '50+ Licensed Staff'
    }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] antialiased font-sans">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (100VH IMMERSIVE ARCHITECTURAL LANDMARK)    */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Clean, Natural Colors */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/images/about_hero.jpg" 
            alt="DEC Lusail Landmark Architecture" 
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-24 pb-12 text-center text-[#F5F0E7]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[#B08D57]/70 backdrop-blur-md mb-6 shadow-xl shadow-black/50">
            <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B08D57]">
              Desentral Engineering Consultancy · Grade A
            </span>
          </div>

          {/* Headings */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            About DEC
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#B08D57] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Design + Centralization Philosophy
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E7] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Desentral Engineering Consultancy (DEC) is a Grade A multidisciplinary engineering and design consultancy delivering integrated solutions across architecture, civil, structural, mechanical and electrical engineering across Qatar, Egypt and KSA.
          </p>

          {/* Hub Pills */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🇶🇦 <strong>Qatar HQ:</strong> Manarat Lusail Tower
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🇪🇬 <strong>Egypt Center:</strong> Dokki, Giza
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🇸🇦 <strong>KSA:</strong> Riyadh Regional Hub
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. THE PHILOSOPHY OF DES + ENTRAL                           */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-slate-200">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Big Philosophy Statement */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B08D57] block">
                Section 3.2 · About DEC
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight leading-[1.15]">
                Design + Centralization (DES / ENTRAL)
              </h2>
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                <strong>Desentral Engineering Consultancy (DEC)</strong> is a Grade A multidisciplinary engineering and design consultancy delivering integrated solutions across architecture, civil, structural, mechanical and electrical engineering.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Working across Qatar, Egypt and KSA, we combine technical expertise, regulatory knowledge and sustainable design to deliver coordinated solutions from concept through construction.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-[#B08D57]/30 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-[#B08D57] block mb-1">Name Origin (Source-Based):</span>
                <strong>DES / ENTRAL — Design / Centralization.</strong> The name reflects DEC’s approach of bringing architecture, engineering and specialist disciplines together through centralized technical coordination.
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/expertise"
                  className="px-6 py-3.5 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2"
                >
                  Explore Our Expertise <FiArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl border border-slate-300 hover:border-[#B08D57] hover:text-[#B08D57] text-[#151515] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  Contact Leadership <FiArrowUpRight />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Breakdown Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-8 rounded-3xl bg-[#151515] text-white border border-[#B08D57]/40 shadow-2xl space-y-6">
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#B08D57] mb-1">
                    Design Foundation
                  </div>
                  <h3 className="text-3xl font-extrabold text-white flex items-center gap-2">
                    DES <span className="text-[#B08D57]">/</span> DESIGN
                  </h3>
                  <p className="text-xs text-[#F5F0E7]/70 mt-2 leading-relaxed">
                    Creative ingenuity, spatial intelligence, aesthetic elevation, and functional excellence tailored to corporate, retail, residential, and hospitality requirements.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#B08D57] mb-1">
                    Centralized Delivery
                  </div>
                  <h3 className="text-3xl font-extrabold text-white flex items-center gap-2">
                    ENTRAL <span className="text-[#B08D57]">/</span> CENTRALIZATION
                  </h3>
                  <p className="text-xs text-[#F5F0E7]/70 mt-2 leading-relaxed">
                    Unifying Architecture, Civil, Structural, MEP, QCDD Fire Life Safety, and BIM models under one single source of accountability and regulatory compliance.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#B08D57] font-semibold flex items-center gap-2.5">
                  <FiCheckCircle className="text-base text-emerald-400 shrink-0" />
                  <span>Centralized technical coordination eliminating multidisciplinary site reworks.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OUR PURPOSE: MISSION & VISION (SECTION 3.2)               */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#111111] border-b border-white/10">
        <div className="w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3 py-1 rounded-full">
              Section 3.2 · Corporate Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Mission & Vision
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#F5F0E7]/70">
              Guiding our institutional standard of excellence across Qatar, Egypt, and the GCC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-white/10 hover:border-[#B08D57]/60 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <FiTarget />
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] block mb-2">
                  What We Deliver
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-base text-[#F5F0E7]/90 leading-relaxed font-light">
                  Deliver end-to-end consultancy and design solutions that turn complex architectural ideas into compliant, permit-ready and sustainable built environments, while protecting asset value and maintaining transparent delivery.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#B08D57] font-semibold">
                <FiCheckCircle className="text-emerald-400" />
                <span>Compliant · Permit-Ready · Sustainable · Asset Value Protection</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-white/10 hover:border-[#B08D57]/60 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <FiEye />
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] block mb-2">
                  Where We Are Heading
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-base text-[#F5F0E7]/90 leading-relaxed font-light">
                  Be a trusted institutional engineering partner across the GCC, recognized for technical expertise, regulatory knowledge, innovation, sustainability and dependable project delivery.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#B08D57] font-semibold">
                <FiCheckCircle className="text-emerald-400" />
                <span>Institutional Partner · Technical Authority · GCC Regional Impact</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OUR VALUES (PDF PAGE 3)                                  */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-slate-200">
        <div className="w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3 py-1 rounded-full">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight mt-3">
              Our Core Values
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              The foundational pillars that guide every design, calculation, and site inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((val) => {
              const Icon = val.icon
              return (
                <div 
                  key={val.number}
                  className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-bold text-[#B08D57] tracking-widest">
                        {val.number}
                      </span>
                      <Icon className="text-xl text-[#B08D57] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. OUR 5-STEP DELIVERY APPROACH (PDF PAGE 5)                */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#121212] border-b border-white/10">
        <div className="w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3 py-1 rounded-full">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Our 5-Step Approach
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#F5F0E7]/70">
              Integrated engineering and design consultancy services covering the full project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B08D57]/60 hover:bg-[#B08D57]/5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-extrabold text-[#B08D57] group-hover:translate-x-1 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#F5F0E7]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#B08D57] font-semibold">
                  <span>Stage {idx + 1}</span>
                  <FiArrowRight />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CERTIFICATIONS & CREDENTIALS — PUBLICATION REGISTER (06) */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#151515] text-[#F5F0E7] border-b border-white/10 relative overflow-hidden">
        
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3.5 py-1.5 rounded-full border border-[#B08D57]/30">
              06 · Certifications and Credentials — Publication Register
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4">
              Statutory Accreditations & Quality Standards
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#F5F0E7]/70 font-light">
              Official register of verified statutory classifications, sustainability credentials, ISO quality management standards, and aggregated staff engineering registrations.
            </p>
          </div>

          {/* Credentials Publication Register Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {credentialsRegister.map((cred) => {
              const Icon = cred.icon
              return (
                <div 
                  key={cred.id}
                  className="p-8 rounded-3xl bg-[#1b1b1b] border border-white/10 hover:border-[#B08D57]/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Gold Glow Accent on Card Top */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#B08D57]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                  <div>
                    {/* Top Header: ID Badge + Icon + Status */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#B08D57]">
                          #{cred.id}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#B08D57] flex items-center justify-center text-lg group-hover:scale-110 group-hover:bg-[#B08D57] group-hover:text-[#151515] transition-all">
                          <Icon />
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#B08D57]/15 text-[#B08D57] border border-[#B08D57]/30">
                        {cred.badge}
                      </span>
                    </div>

                    {/* Credential Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#B08D57] transition-colors leading-snug">
                      {cred.title}
                    </h3>

                    {/* Authority Issuer */}
                    <div className="text-xs font-semibold text-[#B08D57] mt-1.5 mb-1">
                      {cred.issuer}
                    </div>

                    {/* Source Reference Tag */}
                    <div className="text-[11px] text-[#F5F0E7]/50 font-mono mb-4">
                      Source: {cred.source}
                    </div>

                    {/* Summary Scope */}
                    <p className="text-xs sm:text-sm text-[#F5F0E7]/80 leading-relaxed font-light border-t border-white/10 pt-4">
                      {cred.desc}
                    </p>
                  </div>

                  {/* Treatment / Approval Tag */}
                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <FiCheckCircle className="text-sm shrink-0" /> {cred.status}
                    </span>
                    <span className="text-[11px] text-[#F5F0E7]/50 font-medium">
                      Verified Register
                    </span>
                  </div>
                </div>
              )
            })}

            {/* Verification / Governance Summary Card (6th Card filling the 3x2 grid) */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#201d18] via-[#1a1815] to-[#151515] border border-[#B08D57]/40 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#B08D57]/20 border border-[#B08D57]/50 text-[#B08D57] flex items-center justify-center text-xl mb-5">
                  <FiShield />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-1">
                  Compliance Register
                </span>
                <h4 className="text-xl font-extrabold text-white mb-3">
                  Publication Governance & Redacted Records
                </h4>
                <p className="text-xs sm:text-sm text-[#F5F0E7]/80 leading-relaxed font-light">
                  All company prequalifications, Grade A statutory classifications, and ISO surveillance audits are actively maintained with ministry registers. Public profiles display aggregated staff competence in accordance with institutional data disclosure standards.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-[#B08D57] font-semibold">MMUP / UPDA Grade A Licensed</span>
                <Link to="/contact" className="text-white hover:text-[#B08D57] font-bold inline-flex items-center gap-1">
                  Inquire <FiArrowRight />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. LEADERSHIP AND TEAM (SOURCE LIST 07)                      */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-slate-200">
        <div className="w-full mx-auto">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3.5 py-1.5 rounded-full border border-[#B08D57]/30">
                07 · Leadership and Team — Source List
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight mt-3">
                Founding Partners
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                One team. One standard of excellence across Qatar, Egypt, and Saudi Arabia.
              </p>
            </div>

            <Link
              to="/team"
              className="px-6 py-3 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 self-start lg:self-auto"
            >
              Explore Dedicated Our Team Page <FiArrowRight />
            </Link>
          </div>

          {/* 4 Founding Partners Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {foundingPartners.map((partner) => (
              <div 
                key={partner.name}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#151515] text-[#B08D57] font-extrabold text-xl flex items-center justify-center border border-[#B08D57]/30 mb-5 group-hover:scale-105 transition-transform shadow-md">
                    {partner.initials}
                  </div>
                  <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors">
                    {partner.name}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#B08D57] mt-1 mb-3">
                    {partner.role}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Team Table / Grid */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#151515] text-white border border-[#B08D57]/30 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div>
                <h4 className="text-xl font-bold text-white">DEC Leadership Team</h4>
                <p className="text-xs text-[#F5F0E7]/70 mt-0.5">
                  Senior engineers, structural heads, design managers and FLS specialists.
                </p>
              </div>
              <span className="text-xs text-[#B08D57] font-semibold uppercase tracking-wider bg-[#B08D57]/10 px-3 py-1 rounded-full">
                50+ In-House Specialists
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {leadershipTeam.map((lead) => (
                <div 
                  key={lead.name}
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#B08D57]/60 transition-all flex items-center justify-between"
                >
                  <div>
                    <h5 className="font-bold text-white text-sm">{lead.name}</h5>
                    <p className="text-xs text-[#B08D57] mt-0.5">{lead.role}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. DUAL-HUB INTEGRATED STRUCTURE                            */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#111111]">
        <div className="w-full mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3 py-1 rounded-full">
                Operational Framework
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Integrated Dual-Hub Delivery Model
              </h2>
              <p className="text-base text-[#F5F0E7]/80 leading-relaxed font-light">
                Our structure integrates local client interface and authority permitting in Qatar with high-capacity digital engineering and BIM production centers in Egypt.
              </p>

              <div className="space-y-4 text-sm text-[#F5F0E7]/80">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xl">🇶🇦</span>
                  <div>
                    <strong className="text-white block font-semibold">Qatar Headquarters</strong>
                    <span className="text-xs text-[#B08D57] font-medium block">Office 704, Manarat Lusail Tower, Qatar</span>
                    <p className="text-xs text-[#F5F0E7]/70 mt-1">
                      Executive management, client relations, municipality & civil defense permitting, site supervision, and statutory BCC handovers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xl">🇪🇬</span>
                  <div>
                    <strong className="text-white block font-semibold">Egypt Technical Center</strong>
                    <span className="text-xs text-[#B08D57] font-medium block">Flat 32, 3rd floor, Bldg 20, Ahmed Elzaiat St., Dokki, Giza</span>
                    <p className="text-xs text-[#F5F0E7]/70 mt-1">
                      High-precision structural modeling, MEP detailed engineering, 3D clash resolution, and full BIM Level 2 production.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/presence"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  View Regional Footprint <FiArrowRight />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-[#B08D57]/30 shadow-2xl space-y-6">
                <h4 className="text-xl font-bold text-white">Why Centralization Matters</h4>
                <p className="text-sm text-[#F5F0E7]/70 leading-relaxed">
                  Traditional engineering often suffers from miscommunication between independent architectural firms, separate MEP consultants, and disconnected structural designers. 
                </p>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-[#F5F0E7] space-y-3">
                  <div className="flex items-center gap-2.5 text-[#B08D57] font-bold">
                    <FiCheckCircle className="text-emerald-400 text-base" /> One Single Accountability Source
                  </div>
                  <div className="flex items-center gap-2.5 text-[#B08D57] font-bold">
                    <FiCheckCircle className="text-emerald-400 text-base" /> Clash-Free Revit BIM Models
                  </div>
                  <div className="flex items-center gap-2.5 text-[#B08D57] font-bold">
                    <FiCheckCircle className="text-emerald-400 text-base" /> Accelerated Authority Permitting in Qatar
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default About
