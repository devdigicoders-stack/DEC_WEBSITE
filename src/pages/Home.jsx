import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiArrowRight, 
  FiCompass, 
  FiLayers, 
  FiTool, 
  FiZap, 
  FiShield, 
  FiCpu 
} from 'react-icons/fi'
import WhatWeDo from '../components/WhatWeDo.jsx'
import ClientPartnersSection from '../components/ClientPartnersSection.jsx'
import OurCertificatesSection from '../components/OurCertificatesSection.jsx'
import { FaCompassDrafting } from 'react-icons/fa6'

function Home() {
  const disciplines = [
    {
      id: 'architecture',
      title: 'Architectural & Space Planning',
      icon: FaCompassDrafting,
      desc: 'Comprehensive architectural concepts, functional space planning, luxury interior fit-outs, and construction documentation complying with QCS and international codes.',
      capabilities: [
        'Corporate & Luxury Space Planning',
        'Facade & Envelope Engineering',
        'NFPA Life Safety & Egress Planning'
      ]
    },
    {
      id: 'structural',
      title: 'Civil & Structural Engineering',
      icon: FiLayers,
      desc: 'Rigorous structural analysis and design for reinforced concrete (RC), post-tensioned slabs, structural steel, and deep foundations optimized for GCC geotechnical conditions.',
      capabilities: [
        'Seismic & Dynamic Wind Modeling',
        'High-Rise & Industrial Facilities',
        'Structural Peer Reviews & Value Engineering'
      ]
    },
    {
      id: 'mechanical',
      title: 'Mechanical & HVAC Engineering',
      icon: FiTool,
      desc: 'High-performance HVAC systems, chilled water plant integrations, smoke management, and drainage engineering engineered for extreme Gulf climates.',
      capabilities: [
        'Central Chilled Water & VRF Systems',
        'HAP Thermal Load & Energy Modeling',
        'Smoke Evacuation & Pressurization'
      ]
    },
    {
      id: 'electrical',
      title: 'Electrical & Smart Low Voltage (ELV)',
      icon: FiZap,
      desc: 'End-to-end power distribution design, substation layouts, architectural lighting, building management systems (BMS), and security/ICT infrastructure.',
      capabilities: [
        'Medium & Low Voltage Distribution',
        'Kahramaa Substation Approvals',
        'Smart BMS, CCTV & Access Control'
      ]
    },
    {
      id: 'regulatory',
      title: 'Statutory Permitting Approvals',
      icon: FiShield,
      desc: 'Expedited statutory permits through our certified Grade A MMUP status covering QCDD Civil Defense, MME Municipalities, Kahramaa, and BCC handovers.',
      capabilities: [
        'Grade A MMUP Statutory Endorsements',
        'QCDD Fire Life Safety Licenses',
        'Building Completion Certificates (BCC)'
      ]
    },
    {
      id: 'bim',
      title: 'BIM Level 2 & Clash-Free Delivery',
      icon: FiCpu,
      desc: 'End-to-end digital engineering utilizing Autodesk Revit and Navisworks for 3D multidisciplinary coordination, eliminating on-site clashes.',
      capabilities: [
        'LOD 200 to LOD 500 BIM Models',
        'Inter-Disciplinary Clash Detection Matrix',
        'As-Built Digital Asset Modeling'
      ]
    }
  ]

  const foundingPartners = [
    {
      name: 'Islam Farid',
      role: 'General Manager',
      initials: 'IF',
      focus: 'Regional Strategy & Governance',
      location: 'Doha HQ & Regional Hubs'
    },
    {
      name: 'Mohamed Mokhtar',
      role: 'Technical Manager',
      initials: 'MM',
      focus: 'Engineering QA/QC & BIM Level 2',
      location: 'Qatar & Egypt Technical Hub'
    },
    {
      name: 'Mohamed Maher',
      role: 'Operations Manager',
      initials: 'MM',
      focus: 'Cross-Border Pipelines & Site Delivery',
      location: 'Qatar Operations (Lusail)'
    },
    {
      name: 'Ahmed Bakry',
      role: 'Contracts Manager',
      initials: 'AB',
      focus: 'FIDIC Frameworks & Procurement',
      location: 'Commercial & Statutory Office'
    }
  ]

  return (
    <div className="bg-[#151515] min-h-screen font-sans">
      
      {/* HERO SECTION - PURE VIDEO FULL SCREEN BELOW SEPARATE NAVBAR */}
      <section className="relative w-full h-[calc(100vh-6rem)] sm:h-[calc(100vh-7rem)] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/IMG_5427 (1).MP4" type="video/mp4" />
          <source src="/IMG_5427 (1).MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* ============================================================ */}
      {/* INTEGRATED DELIVERY & STATISTICS SHOWCASE (PDF PAGE 4)      */}
      {/* ============================================================ */}
      <section className="bg-[#111111] text-[#F5F0E7] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-[#B08D57]/20 relative overflow-hidden">
        
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full mx-auto">
          
          {/* Top Eyebrow, Headline & Subtext Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
            
            {/* Left 7 Columns: Text Content & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#B08D57]/40 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
                <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#B08D57]">
                  DESENTRAL ENGINEERING CONSULTANCY | GRADE A
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                ONE TEAM. MULTIPLE DISCIPLINES. INTEGRATED DELIVERY.
              </h2>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-[#F5F0E7]/80 leading-relaxed max-w-2xl font-light">
                A Grade A multidisciplinary engineering consultancy delivering integrated architectural, civil, structural, MEP and specialist engineering solutions across Qatar, Egypt and KSA.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/expertise"
                  className="px-7 py-4 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#B08D57]/25 hover:scale-105 flex items-center gap-2.5"
                >
                  Explore Our Expertise <FiArrowRight className="text-base" />
                </Link>
                <Link
                  to="/projects"
                  className="px-7 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border border-white/20 hover:border-[#B08D57] flex items-center gap-2.5"
                >
                  View Our Projects <FiArrowRight className="text-base" />
                </Link>
              </div>

            </div>

            {/* Right 5 Columns: Generated Team & Delivery Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#B08D57]/30 shadow-2xl shadow-black/80 group">
                <img 
                  src="/images/dec_integrated_engineering.jpg" 
                  alt="DEC Integrated Multi-Discipline Engineering and 3D BIM Delivery"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B08D57] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Coordinated Engineering Leadership
                  </div>
                  <p className="text-xs text-[#F5F0E7]/80 mt-1">
                    Delivering end-to-end design, authority approvals and site supervision across Qatar, Egypt, and Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Profile-Based Facts & Statistics Grid (6 Cards from PDF) */}
          <div className="pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              
              {/* Stat 1 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B08D57]/60 hover:bg-[#B08D57]/[0.06] transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#B08D57] group-hover:scale-105 transition-transform">
                  300+
                </div>
                <div className="mt-2 text-xs uppercase font-bold tracking-wider text-white">
                  Project Engagements
                </div>
                <p className="text-[11px] text-[#F5F0E7]/60 mt-1">
                  Commercial, retail, workplace & luxury developments.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B08D57]/60 hover:bg-[#B08D57]/[0.06] transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#B08D57] group-hover:scale-105 transition-transform tracking-tight">
                  GRADE A
                </div>
                <div className="mt-2 text-xs uppercase font-bold tracking-wider text-white">
                  MMUP / UPDA Certified
                </div>
                <p className="text-[11px] text-[#F5F0E7]/60 mt-1">
                  Highest statutory engineering standing in Qatar.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B08D57]/60 hover:bg-[#B08D57]/[0.06] transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#B08D57] group-hover:scale-105 transition-transform">
                  50+
                </div>
                <div className="mt-2 text-xs uppercase font-bold tracking-wider text-white">
                  Professionals & Specialists
                </div>
                <p className="text-[11px] text-[#F5F0E7]/60 mt-1">
                  Multi-disciplinary engineers, architects & BIM leads.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B08D57]/60 hover:bg-[#B08D57]/[0.06] transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#B08D57] group-hover:scale-105 transition-transform">
                  30+
                </div>
                <div className="mt-2 text-xs uppercase font-bold tracking-wider text-white">
                  Locations Across Qatar
                </div>
                <p className="text-[11px] text-[#F5F0E7]/60 mt-1">
                  Lusail, Msheireb, West Bay, The Pearl, Gewan Island, Major Hubs & Industrial Areas.
                </p>
              </div>

              {/* Stat 5 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B08D57]/60 hover:bg-[#B08D57]/[0.06] transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#B08D57] group-hover:scale-105 transition-transform">
                  3
                </div>
                <div className="mt-2 text-xs uppercase font-bold tracking-wider text-white">
                  Regional Capabilities
                </div>
                <p className="text-[11px] text-[#F5F0E7]/60 mt-1">
                  Active operations across Qatar, Egypt & KSA.
                </p>
              </div>

              {/* Stat 6 */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B08D57]/60 hover:bg-[#B08D57]/[0.06] transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#B08D57] group-hover:scale-105 transition-transform tracking-tight">
                  GSAS
                </div>
                <div className="mt-2 text-xs uppercase font-bold tracking-wider text-white">
                  Service Provider
                </div>
                <p className="text-[11px] text-[#F5F0E7]/60 mt-1">
                  Green building, sustainability & resource efficiency.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STATEMENT INTRO SECTION (WHITE BACKGROUND, BLACK TEXT FROM PDF) */}
      <section className="bg-white text-[#151515] py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          {/* Main Statement & Arrow Grid */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
            
            {/* Big Headline from DEC PDF */}
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151515] border border-[#B08D57] shadow-sm mb-5">
                <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#B08D57]">
                  DESENTRAL ENGINEERING CONSULTANCY | GRADE A
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#151515] leading-[1.15]">
                Grade A Multidisciplinary Engineering Consultancy
              </h2>
            </div>

            {/* Interactive Arrow Link */}
            <div className="flex-shrink-0 pb-2">
              <Link 
                to="/about"
                className="group inline-flex items-center gap-4 text-[#151515] hover:text-[#B08D57] transition-all duration-300"
                aria-label="Learn more about DEC"
              >
                <span className="text-sm sm:text-base font-medium hidden sm:inline-block tracking-wide">
                  About DEC
                </span>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-black/20 group-hover:border-[#B08D57] group-hover:bg-[#B08D57] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <FiArrowRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT WE DO SECTION (CAROUSEL WITH GENERATED SECTOR IMAGES) */}
      <WhatWeDo />

      {/* ============================================================ */}
      {/* OUR EXPERTISE SECTION (6 CORE MULTIDISCIPLINARY DISCIPLINES)*/}
      {/* ============================================================ */}
      <section className="bg-[#111111] text-[#F5F0E7] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-t border-b border-[#B08D57]/20 relative overflow-hidden">
        
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full mx-auto">
          
          {/* Section Header with Split Text and CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/40 text-[#B08D57] text-xs font-semibold uppercase tracking-wider">
                <FiCompass className="text-sm" /> Grade A Engineering Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Our Core Engineering Disciplines
              </h2>
              <p className="text-sm sm:text-base text-[#F5F0E7]/75 font-light leading-relaxed">
                Six interconnected engineering departments coordinated under one roof for complete single-window delivery across Qatar, Egypt, and Saudi Arabia.
              </p>
            </div>

            <Link
              to="/expertise"
              className="px-7 py-4 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#B08D57]/20 hover:scale-105 flex items-center gap-2 self-start lg:self-auto shrink-0"
            >
              Explore Full Engineering Scope <FiArrowRight className="text-base" />
            </Link>
          </div>

          {/* 6 Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {disciplines.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="p-7 sm:p-8 rounded-3xl bg-[#161616] border border-white/10 hover:border-[#B08D57]/60 hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#B08D57]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#B08D57] flex items-center justify-center text-xl group-hover:bg-[#B08D57] group-hover:text-[#151515] transition-all">
                      <Icon />
                    </div>
                  </div>

                  {/* General Header */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#B08D57] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Explanatory Text */}
                  <p className="text-sm text-[#F5F0E7]/75 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR TEAM SECTION (LEADERSHIP & IN-HOUSE TALENT SHOWCASE)   */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-slate-200">
        <div className="w-full mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl space-y-3">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight leading-[1.15]">
                The Leadership Driving DEC’s Excellence
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Four founding directors and 50+ in-house licensed engineers uniting multidisciplinary expertise under a single source of accountability across Qatar, Egypt, and Saudi Arabia.
              </p>
            </div>

            <Link
              to="/team"
              className="px-7 py-4 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2 self-start lg:self-auto shrink-0"
            >
              Meet Full Leadership Team <FiArrowRight className="text-base" />
            </Link>
          </div>

          {/* 4 Founding Partners Cards (4 Cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {foundingPartners.map((partner) => (
              <div
                key={partner.name}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#151515] text-[#B08D57] font-extrabold text-2xl flex items-center justify-center border border-[#B08D57]/30 mb-5 group-hover:scale-105 transition-transform shadow-md">
                    {partner.initials}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B08D57] block mb-1">
                    Founding Partner
                  </span>
                  <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors leading-tight">
                    {partner.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 mt-1 mb-3">
                    {partner.role}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 08 · OFFICIAL ACCREDITATIONS & CERTIFICATES (4 SLIDING)      */}
      {/* ============================================================ */}
      <OurCertificatesSection />

      {/* ============================================================ */}
      {/* 09 · CLIENT PARTNERS DIRECTORY (FROM CLIENTS COPY)           */}
      {/* ============================================================ */}
      <ClientPartnersSection />

    </div>
  )
}


export default Home
