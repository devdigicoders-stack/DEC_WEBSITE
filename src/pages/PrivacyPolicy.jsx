import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiShield, 
  FiLock, 
  FiFileText, 
  FiCheckCircle, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowRight,
  FiAlertCircle
} from 'react-icons/fi'

function PrivacyPolicy() {
  const lastUpdated = 'October 2026'

  const policySections = [
    {
      id: 'introduction',
      title: '1. Introduction & Statutory Scope',
      icon: <FiShield className="text-[#B08D57] text-xl" />,
      content: `Desentral Engineering Consultancy (referred to as "DEC", "we", "our", or "us"), a Grade A multidisciplinary engineering firm incorporated in the State of Qatar (Lusail City), is dedicated to protecting the privacy, confidentiality, and integrity of personal and proprietary corporate data. This Privacy Policy outlines how we collect, store, process, and safeguard information gathered through our website (desentralqatar.com), client engagements, engineering portals, and authority submission workflows in strict compliance with Qatar National Data Protection Law No. 13 of 2016 (PDPPL) and applicable GCC privacy frameworks.`
    },
    {
      id: 'data-collection',
      title: '2. Information We Collect',
      icon: <FiFileText className="text-[#B08D57] text-xl" />,
      content: `In the course of delivering architectural design, structural calculations, MEP engineering, and statutory authority permitting, DEC may collect the following categories of data:`,
      points: [
        'Corporate Contact Information: Names, business email addresses, direct phone numbers, job titles, and company affiliations.',
        'Project Specifications & RFPs: Architectural schematics, property title deeds, Baladiya plot pin numbers, CAD/BIM drawings, and technical tender documents.',
        'Career Submissions: Curricula Vitae (CVs), MMUP/UPDA engineering accreditation numbers, portfolio materials, and educational credentials.',
        'Digital Usage Data: Anonymized IP addresses, browser configurations, and telemetry data utilized strictly to optimize site performance and security.'
      ]
    },
    {
      id: 'usage-purposes',
      title: '3. Legal Basis & How We Use Your Information',
      icon: <FiLock className="text-[#B08D57] text-xl" />,
      content: `All information collected is processed lawfully, transparently, and solely for specified corporate and regulatory engineering purposes:`,
      points: [
        'Statutory Permitting: Processing building permits, maintenance clearances, and Building Completion Certificates (BCC) with the Ministry of Municipality (MME).',
        'Civil Defense Submissions: Submitting life safety packages, smoke control schematics, and egress calculations to Qatar Civil Defense (QCD).',
        'Utility Approvals: Coordinating electrical substations and water infrastructure with Kahramaa and Ashghal.',
        'Contractual Performance: Executing engineering design agreements, project supervision contracts, and commercial deliverables.',
        'Recruitment: Evaluating engineering qualifications for certified vacancies within our Lusail and Cairo technical offices.'
      ]
    },
    {
      id: 'statutory-disclosure',
      title: '4. Disclosures to Regulated Authorities',
      icon: <FiAlertCircle className="text-[#B08D57] text-xl" />,
      content: `DEC does not sell, rent, or lease client data or proprietary designs to commercial third parties. Data is disclosed strictly to authorized statutory entities as required by law:`,
      points: [
        'State of Qatar Ministries: Ministry of Municipality (MME), Ministry of Interior, and General Directorate of Civil Defense (QCD).',
        'Utility Providers: Qatar General Electricity & Water Corporation (Kahramaa) and Public Works Authority (Ashghal).',
        'Authorized Subcontractors: Independent geotechnical laboratories, acoustic testing specialists, and certified peer reviewers under strict non-disclosure agreements (NDAs).'
      ]
    },
    {
      id: 'security-retention',
      title: '5. Information Security & Data Retention',
      icon: <FiCheckCircle className="text-[#B08D57] text-xl" />,
      content: `DEC deploys industry-standard encryption, role-based access controls, and secure ISO-aligned cloud infrastructure to protect BIM models, municipal submissions, and client records. Project records and statutory correspondence are retained in accordance with the Qatar Commercial Law, Civil Code, and professional decennial liability statutory retention periods (minimum 10 years for structural and engineering documentation).`
    },
    {
      id: 'rights',
      title: '6. Your Legal Privacy Rights',
      icon: <FiShield className="text-[#B08D57] text-xl" />,
      content: `Under Qatar Law No. 13 of 2016, individuals have specific rights regarding their personal data, including the right to request access, correction of inaccurate records, restriction of processing, or erasure where data is no longer necessary for statutory or contractual compliance. Requests may be directed to our designated compliance officer at privacy@desentralqatar.com.`
    }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased min-h-screen">
      
      {/* ============================================================ */}
      {/* 1. HEADER BANNER                                             */}
      {/* ============================================================ */}
      {/* 1. HERO SECTION - PURE CLEAR ARCHITECTURAL IMAGE             */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#151515]">
        <img 
          src="/images/privacy_hero.jpg" 
          alt="DEC Corporate Governance and Data Protection" 
          className="w-full h-full object-cover object-center scale-100"
        />
      </section>

      {/* ============================================================ */}
      {/* 2. STATUTORY HEADER BANNER                                   */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-[#111111] to-[#181818] py-20 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/40 text-[#B08D57] text-xs font-semibold uppercase tracking-wider mb-4">
            <FiShield /> Statutory Compliance · Qatar PDPPL Law No. 13 of 2016
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy & Data Governance
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E7]/70 font-light max-w-3xl leading-relaxed">
            How Desentral Engineering Consultancy (DEC) safeguards your proprietary project specifications, intellectual property, and personal records across our regional practices.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
            <span>Effective Date: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span>Corporate Jurisdiction: <strong>Lusail Marina, Qatar</strong></span>
            <span>•</span>
            <span>Entity: <strong>Grade A Consultancy</strong></span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. POLICY CONTENT SECTIONS                                  */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {policySections.map((sec) => (
            <div 
              key={sec.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57]/60 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#B08D57]/10 flex items-center justify-center">
                  {sec.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#151515]">
                  {sec.title}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light mb-4">
                {sec.content}
              </p>

              {sec.points && (
                <ul className="space-y-2.5 pt-2">
                  {sec.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                      <FiCheckCircle className="text-[#B08D57] mt-0.5 shrink-0 text-sm" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact Compliance Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#151515] text-[#F5F0E7] border border-[#B08D57]/30 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              7. Data Protection Officer & Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F0E7]/70 font-light mb-6">
              If you have questions regarding this Privacy Policy, your proprietary project data, or wish to exercise your statutory rights under Qatar PDPPL, contact our legal team:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">Corporate HQ</span>
                <strong className="text-white">Office 704, Manarat Lusail Tower, Qatar</strong>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">Privacy Officer Email</span>
                <a href="mailto:info@desentralqatar.com" className="text-[#B08D57] hover:underline font-bold">
                  info@desentralqatar.com
                </a>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">Legal Department</span>
                <span className="text-white">+974 4455 4383</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">Desentral Engineering Consultancy · Commercial Registration (CR) Active</span>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B08D57] text-[#151515] font-bold text-xs uppercase tracking-wider hover:bg-[#C7A673] transition-all"
              >
                Contact Legal Team <FiArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default PrivacyPolicy
