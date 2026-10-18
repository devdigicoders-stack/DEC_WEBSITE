import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiBriefcase, 
  FiMapPin, 
  FiArrowRight, 
  FiAward, 
  FiUsers, 
  FiTrendingUp, 
  FiShield 
} from 'react-icons/fi'

function Careers() {
  const openPositions = [
    {
      id: '1',
      title: 'Senior Mechanical Engineer (HVAC & MEP)',
      department: 'Mechanical Engineering',
      location: 'Lusail Headquarters, Qatar',
      type: 'Full-Time',
      experience: '7+ Years',
      description: 'Lead commercial HVAC design, hydraulic calculations, chilled water tie-ins, and coordination for luxury commercial, retail and hospitality developments.',
      skills: ['AutoCAD & Revit MEP', 'HAP Load Calculations', 'Kahramaa & QCD Compliance', 'Site Testing & Commissioning']
    },
    {
      id: '2',
      title: 'Senior Civil & Structural Engineer',
      department: 'Civil & Structural Engineering',
      location: 'Lusail Headquarters, Qatar',
      type: 'Full-Time',
      experience: '6+ Years',
      description: 'Perform reinforced concrete (RC) analysis, structural steel modeling, foundation design, and municipality authority submissions for landmark towers and villas.',
      skills: ['ETABS / SAFE / SAP2000', 'PEB Industrial Structures', 'Qatar National Construction Standards (QCS)', 'Structural Peer Review']
    },
    {
      id: '3',
      title: 'Senior Architect & Fire Life Safety (FLS) Specialist',
      department: 'Architectural Engineering',
      location: 'Doha, Qatar',
      type: 'Full-Time',
      experience: '5+ Years',
      description: 'Develop code-compliant architectural layouts, egress analysis, fire compartmentation, and direct Civil Defense (QCD) permit packages.',
      skills: ['NFPA 101 & 5000 Codes', 'Civil Defense (QCD) Procedures', 'Architectural R&M Space Planning', 'Revit Architecture']
    },
    {
      id: '4',
      title: 'BIM Coordinator & Digital Delivery Lead',
      department: 'BIM & Technology',
      location: 'Lusail HQ / Cairo Technical Office',
      type: 'Full-Time',
      experience: '4+ Years',
      description: 'Oversee federated 3D multi-disciplinary models, automated clash detection matrix, and digital drawing production across Qatar and Egypt.',
      skills: ['Autodesk Revit & Navisworks Manage', 'BIM Level 2 Protocols', 'Clash Resolution Management', 'Point Cloud / Reality Capture']
    },
    {
      id: '5',
      title: 'Senior Electrical Engineer (Power & Systems)',
      department: 'Electrical Engineering',
      location: 'Egypt Technical Office (Giza) & Qatar',
      type: 'Full-Time',
      experience: '5+ Years',
      description: 'Design electrical distribution, substation layouts, low current / ELV infrastructure, and Kahramaa compliance documents.',
      skills: ['Dialux Lighting Design', 'Short Circuit & Voltage Drop Calculations', 'Kahramaa Substation Regulations', 'ELV & Life Safety Systems']
    },
    {
      id: '6',
      title: 'Permits & Authority Approvals Coordinator',
      department: 'Regulatory Services',
      location: 'Lusail Headquarters, Qatar',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'Manage building permit submissions, maintenance permits, and Building Completion Certificates (BCC) across Qatari Municipalities.',
      skills: ['Ministry of Municipality (MME) Portal', 'Building Permits & BCC Workflows', 'Bilingual (Arabic / English)', 'Stakeholder Liaison']
    }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION - PURE CLEAR ARCHITECTURAL IMAGE             */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#151515]">
        <img 
          src="/images/careers_hero.jpg" 
          alt="DEC Engineering Studio Lusail Qatar" 
          className="w-full h-full object-cover object-center scale-100"
        />
      </section>

      {/* ============================================================ */}
      {/* 2. WHY BUILD YOUR CAREER AT DEC                              */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              LIFE AT DESENTRAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515] leading-tight">
              Why Engineers & Architects Thrive at DEC
            </h2>
            <p className="mt-4 text-base sm:text-lg text-black/70 font-light">
              We empower our professionals with cutting-edge BIM technology, Grade A statutory projects, and collaborative leadership across three regional markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#B08D57] group-hover:text-white transition-colors">
                <FiAward />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3">
                High-Impact Landmark Work
              </h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Work directly on high-profile projects for Amazon, Boeing, BlackRock, luxury fashion houses, and major infrastructure in Lusail and Msheireb.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#B08D57] group-hover:text-white transition-colors">
                <FiTrendingUp />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3">
                MMUP & GSAS Accreditation
              </h3>
              <p className="text-sm text-black/70 leading-relaxed">
                We support our engineers with continuous statutory certification, GSAS sustainability credentials, and fast-track professional development.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#B08D57] group-hover:text-white transition-colors">
                <FiUsers />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3">
                One Centralized Team
              </h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Experience the DESENTRAL model: architects, MEP engineers, structural analysts, and FLS specialists collaborating in a unified multidisciplinary workflow.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#B08D57] group-hover:text-white transition-colors">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3">
                Regional Mobility & Scale
              </h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Collaborate seamlessly across our Qatar headquarters in Manarat Lusail Tower, Egypt Technical Office in Dokki, and regional projects in Saudi Arabia.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CURRENT OPEN OPPORTUNITIES                                */}
      {/* ============================================================ */}
      <section id="open-roles" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-slate-50 text-[#151515] border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-2">
                Join Our Roster
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]">
                Current Career Opportunities
              </h2>
            </div>
            <p className="text-sm sm:text-base text-black/60 max-w-md font-normal">
              Explore open positions across our architectural, engineering, BIM, and regulatory practices in Doha and Cairo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((pos) => (
              <div 
                key={pos.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#B08D57] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#B08D57]/15 text-[#8F6F3E]">
                      {pos.department}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                      {pos.type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {pos.experience}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-2xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors mb-2">
                    {pos.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 font-medium">
                    <FiMapPin className="text-[#B08D57]" />
                    <span>{pos.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-black/70 leading-relaxed mb-6">
                    {pos.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {pos.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Apply Button */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Direct Hiring Team</span>
                  <a
                    href={`mailto:careers@desentralqatar.com?subject=Application%20for%20${encodeURIComponent(pos.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Apply via Email <FiArrowRight />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

export default Careers
