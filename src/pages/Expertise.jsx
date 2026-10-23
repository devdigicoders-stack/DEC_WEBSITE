import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  FiCheckCircle, 
  FiLayers, 
  FiCpu, 
  FiShield, 
  FiZap, 
  FiTool, 
  FiCompass, 
  FiArrowRight 
} from 'react-icons/fi'

function Expertise() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '')
      const scrollToEl = () => {
        const el = document.getElementById(elementId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      scrollToEl()
      const timer = setTimeout(scrollToEl, 200)
      return () => clearTimeout(timer)
    }
  }, [location.hash, location.pathname])

  const engineeringDisciplines = [
    {
      id: 'architecture',
      icon: <FiCompass className="text-3xl text-[#B08D57]" />,
      title: 'Architectural & Space Planning',
      description: 'Comprehensive architectural concepts, schematic designs, functional space planning, luxury interior fit-outs, and construction documentation complying with QCS and international codes.',
      capabilities: [
        'Concept & Detailed Architectural Design',
        'Luxury Corporate & Retail Space Planning',
        'Life Safety & NFPA Egress Strategies',
        'Exterior Facade & Envelope Engineering'
      ]
    },
    {
      id: 'structural',
      icon: <FiLayers className="text-3xl text-[#B08D57]" />,
      title: 'Civil & Structural Engineering',
      description: 'Rigorous structural analysis and design for reinforced concrete (RC), post-tensioned slabs, structural steel, PEB systems, and foundation engineering optimized for GCC geotechnical conditions.',
      capabilities: [
        'Seismic, Wind & Dynamic Structural Analysis',
        'High-Rise, Commercial & Industrial Structures',
        'Foundation Design & Soil-Structure Interaction',
        'Structural Peer Review & Value Engineering'
      ]
    },
    {
      id: 'mechanical',
      icon: <FiTool className="text-3xl text-[#B08D57]" />,
      title: 'Mechanical & HVAC Engineering',
      description: 'High-performance heating, ventilation, and air conditioning (HVAC) systems, chilled water plant integrations, smoke management, and building drainage engineering designed for extreme gulf climates.',
      capabilities: [
        'Central Chilled Water & VRF Air Conditioning',
        'HAP Thermal Load & Energy Modeling',
        'Plumbing, Public Health & Drainage Systems',
        'Smoke Evacuation & Pressurization Systems'
      ]
    },
    {
      id: 'electrical',
      icon: <FiZap className="text-3xl text-[#B08D57]" />,
      title: 'Electrical & Low Voltage (ELV)',
      description: 'End-to-end power generation and distribution design, substation layouts, architectural lighting design, building management systems (BMS), and comprehensive ICT/ELV infrastructure.',
      capabilities: [
        'Medium & Low Voltage Power Distribution',
        'Kahramaa Substation Approvals & Compliance',
        'Dialux Architectural & Exterior Lighting',
        'ELV, CCTV, Access Control & BMS Integration'
      ]
    },
    {
      id: 'regulatory',
      icon: <FiShield className="text-3xl text-[#B08D57]" />,
      title: 'Statutory Permitting & Grade A Approvals',
      description: 'Expedited statutory permits through our certified Grade A MMUP / UPDA consulting status, covering Qatar Civil Defense (QCD), Municipalities (MME), Kahramaa, Ashghal, and Building Completion Certificates (BCC).',
      capabilities: [
        'Grade A MMUP / UPDA Licensed Endorsement',
        'Qatar Civil Defense (QCD) Fire Life Safety Permits',
        'Ministry of Municipality (MME) Building Permits',
        'Building Completion Certificates (BCC) Clearance'
      ]
    },
    {
      id: 'bim',
      icon: <FiCpu className="text-3xl text-[#B08D57]" />,
      title: 'BIM & Digital Twin Delivery',
      description: 'End-to-end digital engineering utilizing Autodesk Revit and Navisworks for 3D multidisciplinary coordination, automated clash detection matrix, and seamless digital handovers.',
      capabilities: [
        'LOD 200 to LOD 500 Model Development',
        'Clash Detection & Inter-Disciplinary Coordination',
        'Automated Quantity Take-off (QTO)',
        'As-Built Asset Modeling for Facility Operations'
      ]
    }
  ]

  const technicalPillars = [
    {
      stat: 'Grade A',
      title: 'MMUP / UPDA Certified',
      desc: 'Multidisciplinary engineering consultancy licensed at the highest statutory grade in Qatar, enabling us to deliver projects of significant scale and complexity.',
      image: '/image copy 9.png',
      imgPosition: 'right-0 bottom-0 w-[72%] h-[78%] object-contain object-bottom-right',
      icon: (
        <svg className="w-9 h-9 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="10" width="5" height="11" rx="0.5" />
          <line x1="3" y1="13.5" x2="8" y2="13.5" />
          <line x1="3" y1="17" x2="8" y2="17" />
          <rect x="8" y="3" width="7" height="18" rx="0.5" />
          <line x1="11.5" y1="6.5" x2="11.5" y2="7.5" />
          <line x1="11.5" y1="10" x2="11.5" y2="11" />
          <line x1="11.5" y1="13.5" x2="11.5" y2="14.5" />
          <line x1="11.5" y1="17" x2="11.5" y2="18" />
          <rect x="15" y="7" width="6" height="14" rx="0.5" />
          <line x1="15" y1="11" x2="21" y2="11" />
          <line x1="15" y1="15" x2="21" y2="15" />
        </svg>
      )
    },
    {
      stat: 'QCDD',
      title: 'Fire & Life Safety Expertise',
      desc: 'In-depth knowledge of QCDD regulations, NFPA 101/5000 and Civil Defense requirements, ensuring compliant, safe and efficient design solutions.',
      image: '/image copy 10.png',
      imgPosition: 'right-0 -bottom-2 w-[60%] h-[68%] object-contain object-bottom-right',
      icon: (
        <svg className="w-9 h-9 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8c.5 1.5 2 2.5 2 4a2 2 0 1 1-4 0c0-1.5 1.5-2.5 2-4z" />
        </svg>
      )
    },
    {
      stat: 'GSAS',
      title: 'Certified Sustainability Service Provider',
      desc: 'Green building certified practitioners integrating energy-efficient and water-conservation strategies to deliver sustainable, high-performance buildings.',
      image: '/image copy 11.png',
      imgPosition: 'right-0 bottom-0 w-[74%] h-[80%] object-contain object-bottom-right',
      icon: (
        <svg className="w-9 h-9 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 11 3s7 4 7 10a7 7 0 0 1-7 7Z" />
          <path d="M11 20V9" />
          <path d="M15 15c2-1 4-1 5 1s0 4-2 4-4 0-5-2" />
        </svg>
      )
    },
    {
      stat: 'BIM',
      title: 'Integrated Digital Delivery',
      desc: 'Connecting architectural, structural and MEP disciplines through coordinated BIM models, early clash detection and efficient digital project delivery.',
      image: '/image copy 12.png',
      imgPosition: 'right-0 bottom-0 w-[68%] h-[92%] object-contain object-right-bottom',
      icon: (
        <svg className="w-9 h-9 text-[#B08D57]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l-7 4v6l7 4 7-4V6l-7-4z" />
          <path d="M12 22V12" />
          <path d="M5 12l7 4 7-4" />
          <path d="M12 7l7-4M12 7L5 3M12 7v5" />
        </svg>
      )
    }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION - PURE ARCHITECTURAL ENGINEERING IMAGE       */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#151515]">
        <img 
          src="/image copy 2.png" 
          alt="DEC Multidisciplinary Engineering Design Studio" 
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
      </section>

      {/* ============================================================ */}
      {/* 2. OVERVIEW & MULTIDISCIPLINARY RIGOR                        */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              GRADE A MULTIDISCIPLINARY PRACTICE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-[#151515] leading-tight">
              Engineering Precision Across Every Built Discipline
            </h1>
            <p className="mt-6 text-base sm:text-xl text-black/70 font-light leading-relaxed">
              At Desentral Engineering Consultancy (DEC), our integrated practice centralizes architecture, structural analysis, MEP systems, fire life safety, and municipal permitting under one collaborative Grade A umbrella.
            </p>
          </div>

          {/* 4 Technical Capability Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20">
            {technicalPillars.map((item, idx) => (
              <div 
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#B08D57]/60 transition-all duration-300 flex flex-col justify-start min-h-[320px] sm:min-h-[340px] overflow-hidden group"
              >
                {/* Background Image behind text */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-2xl z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`absolute ${item.imgPosition} opacity-40 sm:opacity-50 blur-[1px] group-hover:opacity-65 group-hover:blur-none group-hover:scale-105 transition-all duration-500`} 
                  />
                </div>

                {/* Card Content (z-10 on top of background image) */}
                <div className="relative z-10 flex-1 flex flex-col justify-start">
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-start text-[#B08D57] mb-3 sm:mb-4">
                    {item.icon}
                  </div>

                  {/* Stat / Header */}
                  <div className="text-2xl sm:text-[28px] font-extrabold text-[#B08D57] tracking-tight leading-none mb-1.5">
                    {item.stat}
                  </div>

                  {/* Subtitle */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#151515] leading-snug">
                    {item.title}
                  </h3>

                  {/* Small Gold Divider Line */}
                  <div className="w-7 h-[2px] bg-[#B08D57] my-3 rounded-full" />

                  {/* Description text sitting over background graphic */}
                  <p className="text-[11.5px] sm:text-xs text-slate-700 font-medium sm:font-normal leading-relaxed max-w-[92%] sm:max-w-none">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section Heading for Core Disciplines */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pt-10 border-t border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-2">
                OUR ENGINEERING DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]">
                Specialized Technical Capabilities
              </h2>
            </div>
            <p className="text-sm sm:text-base text-black/60 max-w-md font-normal">
              From initial architectural concept to post-construction Building Completion Certificates (BCC), DEC delivers unmatched technical rigor.
            </p>
          </div>

          {/* 6 Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringDisciplines.map((item) => (
              <div 
                key={item.id}
                id={item.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl target:ring-2 target:ring-[#B08D57] target:border-[#B08D57] target:shadow-2xl transition-all duration-300 flex flex-col justify-between group scroll-mt-32"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#B08D57]/10 flex items-center justify-center mb-6 group-hover:bg-[#B08D57]/20 transition-colors">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#151515] mb-4 group-hover:text-[#B08D57] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-black/70 leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {item.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-black/80 font-medium">
                        <FiCheckCircle className="text-[#B08D57] mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">DEC Integrated Delivery</span>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08D57] hover:text-[#151515] uppercase tracking-wider transition-colors"
                  >
                    Consult Engineers <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CTA & PROJECT INQUIRY BANNER                              */}
      {/* ============================================================ */}
      <section className="bg-[#151515] py-20 px-6 sm:px-10 lg:px-14 xl:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-3">
            NEED GRADE A ENGINEERING EXPERTISE?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F0E7] tracking-tight mb-6">
            Partner With Our Multidisciplinary Engineering Leads
          </h2>
          <p className="text-base sm:text-lg text-[#F5F0E7]/70 font-light mb-10 max-w-2xl mx-auto">
            Discuss your commercial, retail, residential, or industrial development requirements in Qatar, Egypt, or Saudi Arabia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#B08D57] hover:bg-[#8F6F3E] text-[#151515] font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-[#B08D57]/20"
            >
              Request Engineering Consultation
            </Link>
            <Link 
              to="/projects"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold text-sm uppercase tracking-wider transition-all"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Expertise
