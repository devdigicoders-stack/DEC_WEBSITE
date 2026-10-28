import React, { useState } from 'react'
import { 
  FiEye, 
  FiShield, 
  FiCheckCircle, 
  FiAward, 
  FiLayers, 
  FiX
} from 'react-icons/fi'
import { FaStamp } from 'react-icons/fa6'
import { certificatesData } from '../data/certificatesData.js'

function Insights() {
  const [activeModalDoc, setActiveModalDoc] = useState(null)

  // Company Profile Document Object
  const companyProfileDoc = {
    id: 'company-profile-2026',
    title: 'DEC Official Company Profile & Prequalification 2026',
    code: 'Dossier Ref. DEC-PQ-2026-V1',
    standard: 'Comprehensive Engineering Prequalification',
    category: 'Corporate Prequalification Dossier',
    authority: 'Desentral Engineering Consultancy Board of Directors',
    description: 'The official 2026 prequalification profile covering DEC governance, Grade A MMUP licensure, 50+ in-house licensed engineers, 300+ delivered landmark engagements, BIM Level 2 execution workflows, and regional delivery hubs across Qatar, Egypt, and Saudi Arabia.',
    file: '/DEC_Company_Profile_2026 copy.pdf',
    image: '/images/dec_integrated_engineering.jpg',
    badge: 'OFFICIAL 2026 RELEASE',
    accentColor: '#B08D57',
    isPdfOnly: true
  }

  const handleOpenCert = (cert) => {
    setActiveModalDoc(cert)
  }

  const handleOpenProfile = () => {
    setActiveModalDoc(companyProfileDoc)
  }

  const prequalificationPoints = [
    {
      title: 'MMUP / UPDA Grade A Classification',
      authority: 'Ministry of Municipality (Qatar)',
      desc: 'Top-tier statutory engineering standing authorizing unrestricted building heights, unlimited developmental footprints, and complete multidisciplinary practice.',
      icon: FiShield,
      stat: 'Grade A Standing'
    },
    {
      title: 'QCDD Fire & Life Safety Category A',
      authority: 'General Directorate of Civil Defense',
      desc: 'Fully certified life safety engineering, smoke management simulation, emergency egress calculations, and fast-track Building Completion Certificates (BCC).',
      icon: FiAward,
      stat: '100% First-Pass Approvals'
    },
    {
      title: 'Kahramaa & Ashghal Certified Delivery',
      authority: 'Statutory Utilities Authorities',
      desc: 'Substation engineering, medium/low voltage distribution networks, sanitary/drainage designs, and road infrastructure coordination adhering to Qatar Construction Specifications (QCS).',
      icon: FiLayers,
      stat: 'Utility Registered'
    },
    {
      title: 'Tawteen & QatarEnergy Unified ICV',
      authority: 'National In-Country Value Program',
      desc: 'Officially certified contributor to Qatar domestic economic value creation, localized procurement, and regional engineering human capital enablement.',
      icon: FiCheckCircle,
      stat: 'ICV Certified Scorecard'
    }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] antialiased font-sans selection:bg-[#B08D57] selection:text-[#151515]">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (MAINTAINS EXISTING HERO STYLING & IMAGE)    */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Clean Opacity with Gradient Overlay */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/image copy 3.png" 
            alt="DEC Corporate Credentials, Prequalification and Engineering Accreditations" 
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
            <span>CORPORATE CREDENTIALS · STATUTORY LICENSES & PREQUALIFICATION</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Corporate Credentials & Prequalification
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#B08D57] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            MMUP Grade A Licensed · ISO Certified · GSAS Accredited · Tawteen ICV Approved
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E7] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Official statutory engineering standing, international ISO management systems, corporate prequalification dossiers, and verified accreditations authenticated for institutional inspection across Qatar, Egypt, and Saudi Arabia.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🏛️ <strong>MMUP / UPDA:</strong> Grade A Multidisciplinary License
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🏅 <strong>ISO Standards:</strong> 9001, 14001 & 45001 Certified
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🌱 <strong>Sustainability & Local Value:</strong> GSAS & Tawteen ICV
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FEATURED DOCUMENT: DEC 2026 COMPANY PROFILE & PREQUALIFICATION */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#111111] border-b border-[#B08D57]/20 relative overflow-hidden">
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
              <FiAward className="text-sm shrink-0" />
              <span>OFFICIAL PREQUALIFICATION DOSSIER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              DEC Comprehensive Company Profile 2026
            </h2>

            <p className="text-base sm:text-lg text-[#F5F0E7]/80 leading-relaxed font-light max-w-4xl">
              An authoritative presentation of Desentral Engineering Consultancy’s multidisciplinary organizational framework, statutory Grade A credentials, 50+ licensed in-house engineering team, and 300+ delivered landmark engagements across Qatar, Egypt, and Saudi Arabia.
            </p>

            {/* Key Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <FiCheckCircle className="text-[#B08D57] shrink-0 text-base" />
                <span>Grade A Statutory Practice (Unlimited Height)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <FiCheckCircle className="text-[#B08D57] shrink-0 text-base" />
                <span>Full Architectural, Structural & MEP Integration</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <FiCheckCircle className="text-[#B08D57] shrink-0 text-base" />
                <span>BIM Level 2 (LOD 200 - 500) Coordination Protocols</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <FiCheckCircle className="text-[#B08D57] shrink-0 text-base" />
                <span>Verified Project Portfolio (84 Registered Landmarks)</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleOpenProfile}
                className="px-8 py-4 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border border-white/20 hover:border-[#B08D57] shadow-xl hover:scale-105 flex items-center gap-2.5 cursor-pointer"
              >
                <FiEye className="text-base" />
                <span>View Company Profile (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. STATUTORY PREQUALIFICATION & AUTHORITY STANDING MATRIX   */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#151515] border-b border-[#B08D57]/20 relative">
        <div className="w-full mx-auto">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
              <FiCheckCircle className="text-sm shrink-0" />
              <span>STATUTORY AUTHORIZATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Prequalification Standing with Government & Institutional Bodies
            </h2>
            <p className="text-sm sm:text-base text-[#F5F0E7]/70">
              DEC maintains the highest tiers of engineering licensure in the State of Qatar, authorized to engineer unrestricted high-rises, mission-critical infrastructure, and industrial developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prequalificationPoints.map((item) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.title}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B08D57]/60 hover:bg-[#B08D57]/[0.05] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#151515] border border-[#B08D57]/30 text-[#B08D57] flex items-center justify-center text-xl mb-4 shadow-md">
                      <Icon />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] block mb-1">
                      {item.authority}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F5F0E7]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#B08D57]">
                    <span>{item.stat}</span>
                    <FiCheckCircle className="text-emerald-400" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ALL OFFICIAL ACCREDITATIONS & CERTIFICATES (VIEW ONLY)     */}
      {/* ============================================================ */}
      <section id="certificates-directory" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#0E0E0E] relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-[#B08D57]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
              <FaStamp className="text-sm shrink-0" />
              <span>OFFICIAL ACCREDITATIONS DIRECTORY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Verified Institutional Certificates & Accreditations
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E7]/75 font-light leading-relaxed max-w-3xl mx-auto">
              All credentials are authentic, audited, and strictly compliant with Qatar Ministry regulations and international UKAS/ISO bodies. Click any certificate to inspect the authenticated document.
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All documents authenticated for online institutional inspection</span>
            </div>
          </div>

          {/* 6 Certificate Cards Grid (Matching Client's Specification & Screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="group bg-[#181818] border border-white/10 rounded-2xl overflow-hidden hover:border-[#B08D57]/60 hover:shadow-2xl hover:shadow-black/80 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Framed Certificate Document Preview */}
                <div
                  onClick={() => handleOpenCert(cert)}
                  className="relative m-4 sm:m-5 rounded-xl overflow-hidden bg-[#0c0c0c] cursor-pointer aspect-[1/1.32] flex items-center justify-center p-3 sm:p-4 transition-transform duration-300 group-hover:scale-[1.01]"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-contain rounded-lg drop-shadow-md"
                    loading="lazy"
                  />

                  {/* Badge Overlay */}
                  <span 
                    className="absolute top-3.5 right-3.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-2xl z-10"
                    style={{ 
                      backgroundColor: cert.accentColor || '#B08D57', 
                      color: cert.id === 'mmup-grade-a' || cert.id === 'iso-45001' ? '#121212' : '#FFFFFF' 
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Card Details Below Image */}
                <div className="px-5 sm:px-6 pb-5 pt-1 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] block mb-1">
                      {cert.category}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#B08D57] transition-colors leading-snug mb-1">
                      {cert.title}
                    </h3>

                    <div className="text-xs font-mono text-[#F5F0E7]/60">
                      {cert.code}
                    </div>

                    <p className="text-xs text-[#F5F0E7]/70 mt-2 line-clamp-2">
                      {cert.description}
                    </p>
                  </div>

                  {/* Action Button: ONLY VIEW CERTIFICATE (STRICTLY NO DOWNLOAD) */}
                  <div className="pt-3 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => handleOpenCert(cert)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-[#B08D57] shadow-md cursor-pointer"
                    >
                      <FiEye className="text-sm" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PROTECTED VIEW-ONLY DOCUMENT MODAL (NO DOWNLOAD)          */}
      {/* ============================================================ */}
      {activeModalDoc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="bg-[#1C1C1C] border border-[#B08D57]/40 w-full max-w-5xl h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-scaleUp">
            
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-[#151515] border-b border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-[#B08D57]/20 text-[#B08D57] flex items-center justify-center shrink-0">
                  <FaStamp className="text-base" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    {activeModalDoc.title}
                  </h4>
                  <p className="text-[11px] text-white/60 truncate">
                    {activeModalDoc.authority} • {activeModalDoc.code}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalDoc(null)}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-rose-500 hover:text-white text-white/70 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close Viewer"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Modal Body: High-Res Image View or Embedded View-Only PDF */}
            <div className="flex-1 bg-[#0f0f0f] p-4 sm:p-6 overflow-auto flex items-center justify-center relative select-none">
              {activeModalDoc.image && !activeModalDoc.isPdfOnly ? (
                <div className="max-w-4xl w-full h-full flex items-center justify-center">
                  <img 
                    src={activeModalDoc.image} 
                    alt={activeModalDoc.title}
                    className="max-h-full max-w-full object-contain rounded-xl shadow-2xl drop-shadow-2xl border border-white/10"
                  />
                </div>
              ) : (
                <object
                  data={`${encodeURI(activeModalDoc.file)}#toolbar=0&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full rounded-xl bg-white shadow-inner"
                >
                  <iframe 
                    src={`${encodeURI(activeModalDoc.file)}#toolbar=0&navpanes=0`} 
                    title={activeModalDoc.title}
                    className="w-full h-full border-0 rounded-xl bg-white shadow-inner"
                  />
                </object>
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="px-5 py-2.5 bg-[#151515] border-t border-white/10 text-center text-[11px] text-white/50 flex items-center justify-between">
              <span>Desentral Engineering Consultancy · Grade A Licensed</span>
              <span className="text-[#B08D57]">Strictly for Institutional Verification • No Unauthorized Copying</span>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Insights
