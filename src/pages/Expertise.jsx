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
  FiFeather, 
  FiArrowRight 
} from 'react-icons/fi'

function Expertise() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '')
      const timer = setTimeout(() => {
        const el = document.getElementById(elementId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 400)
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
      desc: 'The highest statutory licensing level in Qatar, empowering DEC to engineer projects of unlimited scale and height.'
    },
    {
      stat: '100%',
      title: 'QCD Fire Safety Compliance',
      desc: 'Deep familiarity with NFPA 101/5000 and Qatar Civil Defense mandates ensuring prompt, first-pass safety approvals.'
    },
    {
      stat: 'GSAS',
      title: 'Sustainability Credentials',
      desc: 'Green building certified practitioners integrating energy-efficient and water-conservation strategies.'
    },
    {
      stat: 'BIM L2',
      title: 'Digital Delivery Protocol',
      desc: 'Eliminating on-site construction clashes before breaking ground through coordinated 3D engineering models.'
    }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION - PURE ARCHITECTURAL ENGINEERING IMAGE       */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#151515]">
        <img 
          src="/images/expertise_hero.jpg" 
          alt="DEC Multidisciplinary Engineering Design Studio" 
          className="w-full h-full object-cover object-center scale-100"
        />
      </section>

      {/* ============================================================ */}
      {/* 2. OVERVIEW & MULTIDISCIPLINARY RIGOR                        */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24">
            {technicalPillars.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#B08D57] mb-2 tracking-tight">
                  {item.stat}
                </div>
                <h3 className="text-lg font-bold text-[#151515] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed font-light">
                  {item.desc}
                </p>
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
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group scroll-mt-32"
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
