
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiCheckCircle,
  FiArrowRight 
} from 'react-icons/fi'
import { FaAward, FaScaleBalanced } from 'react-icons/fa6'

function TermsAndConditions() {
  const sections = [
    { id: 'introduction', title: '1. Corporate Identification & Standing' },
    { id: 'scope', title: '2. Scope of Engineering Consultancy Services' },
    { id: 'ip-bim', title: '3. Intellectual Property, Drawings & BIM Data' },
    { id: 'regulatory', title: '4. Regulatory Permitting & Statutory Authorities' },
    { id: 'client-obligations', title: '5. Client Obligations & Site Access' },
    { id: 'fees', title: '6. Commercial Terms, Fees & Invoicing' },
    { id: 'liability', title: '7. Limitation of Liability & Professional Indemnity' },
    { id: 'governing-law', title: '8. Governing Law & Dispute Resolution' },
    { id: 'contact', title: '9. Official Legal & Corporate Inquiries' }
  ]

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] antialiased font-sans">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (100VH IMMERSIVE CONTRACTUAL & LEGAL HUB)   */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Controlled Opacity for Text Clarity */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/images/terms_hero.jpg" 
            alt="DEC Engineering Studio & Governance Headquarters" 
            className="w-full h-full object-cover object-center scale-100 opacity-40 transition-transform duration-1000 ease-out"
          />
          {/* Contrast Overlay for Crystal Clear Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-[#151515] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 text-center text-[#F5F0E7]">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-6">
            <FaScaleBalanced className="text-sm shrink-0" />
            <span>Legal Governance & Compliance · Qatar & GCC</span>
          </div>

          {/* Headings */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#B08D57] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Desentral Engineering Consultancy (DEC) · Professional Engagement Framework
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E7] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            Contractual standards, intellectual property governance, BIM protocol guidelines, and regulatory compliance frameworks for all engineering consultancy engagements in the State of Qatar and the GCC.
          </p>

          {/* Metadata Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              🏛️ <strong>Governing Entity:</strong> Desentral Engineering Consultancy W.L.L.
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              ⚖️ <strong>Legal Framework:</strong> State of Qatar Laws & FIDIC Standards
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white/95">
              📅 <strong>Effective Edition:</strong> October 2026
            </span>
          </div>

          {/* Action Link */}
          <div className="mt-10">
            <a 
              href="#legal-clauses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B08D57] hover:bg-[#C7A673] text-[#151515] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-black/40 hover:scale-105"
            >
              Review Terms & Clauses <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MAIN CONTENT WITH SIDEBAR NAVIGATION                     */}
      {/* ============================================================ */}
      <section id="legal-clauses" className="py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515]">
        <div className="w-full mx-auto max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Sticky Table of Contents */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#B08D57] block">
                  Table of Contents
                </span>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#B08D57] hover:bg-slate-100 transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>

                <div className="pt-4 border-t border-slate-200">
                  <div className="p-4 rounded-xl bg-[#151515] text-white space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#B08D57]">
                      <FaAward /> Grade A MMUP / UPDA
                    </div>
                    <p className="text-[11px] text-[#F5F0E7]/70 leading-relaxed">
                      All consultancy services adhere strictly to Qatar Building Regulations and FIDIC Client/Consultant agreements.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Detailed Legal Terms */}
            <main className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
              
              {/* 1. Introduction */}
              <section id="introduction" className="space-y-4 pt-2">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">1.</span> Corporate Identification & Standing
                </h2>
                <p>
                  These Terms & Conditions (&quot;Terms&quot;) govern the professional consultancy engagements, preliminary proposals, digital platforms, and engineering services rendered by <strong>Desentral Engineering Consultancy</strong> (referred to herein as &quot;DEC&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;the Consultant&quot;), a Grade A multidisciplinary engineering firm organized and registered under the laws of the State of Qatar, operating with corporate headquarters at <strong>Office 704, Manarat Lusail Tower, Qatar</strong>.
                </p>
                <p>
                  By engaging DEC, executing an engineering consultancy agreement, issuing a letter of intent (LOI), or accepting a fee proposal, the Client acknowledges and agrees to be contractually bound by these Terms, in conjunction with any specific Conditions of Contract agreed upon in writing.
                </p>
              </section>

              {/* 2. Scope */}
              <section id="scope" className="space-y-4">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">2.</span> Scope of Engineering Consultancy Services
                </h2>
                <p>
                  DEC provides comprehensive Grade A architectural, structural, civil, mechanical, electrical, plumbing (MEP), fire & life safety (FLS), sustainability (GSAS), and building information modeling (BIM) consultancy services.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                  <li>The precise scope of deliverables, milestones, and project stages shall be defined in the project-specific Proposal or Contract Agreement.</li>
                  <li>Any work, analysis, redesign, or authority liaison requested by the Client outside the contractually agreed scope shall constitute a Variation and be subject to supplementary remuneration and timeline adjustments.</li>
                  <li>All services are delivered in accordance with standard industry practices, applicable international standards, and the Qatar Construction Specifications (QCS).</li>
                </ul>
              </section>

              {/* 3. IP & BIM */}
              <section id="ip-bim" className="space-y-4">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">3.</span> Intellectual Property, Drawings & BIM Data
                </h2>
                <p>
                  DEC retains full statutory and equitable copyright, intellectual property rights, and proprietary ownership over all conceptual sketches, architectural designs, structural computations, MEP calculations, specifications, Revit BIM models, Navisworks federated models, and construction documentation created by DEC.
                </p>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-[#B08D57]/30 text-xs sm:text-sm text-slate-800">
                  <strong>License of Use:</strong> Upon full settlement of all invoiced professional fees, the Client is granted a non-exclusive, non-transferable license to utilize the project drawings and BIM data solely for the construction, occupancy, and maintenance of the specific project site for which they were created. They may not be reproduced, altered, or transferred for any other development without DEC&apos;s prior written consent.
                </div>
              </section>

              {/* 4. Regulatory Permitting */}
              <section id="regulatory" className="space-y-4">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">4.</span> Regulatory Permitting & Statutory Authorities
                </h2>
                <p>
                  DEC acts as the authorized engineering consultant for submitting documentation to relevant statutory bodies in the State of Qatar, including but not limited to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-500" /> Ministry of Municipality (MMUP / UPDA)
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-500" /> Qatar Civil Defense (QCDD)
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-500" /> Kahramaa (Water & Electricity)
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-500" /> Ashghal (Public Works Authority)
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  While DEC commits its utmost professional diligence and technical expertise to secure statutory approvals (including Building Permits DC1/DC2 and Building Completion Certificates - BCC), statutory issuance timelines, policy amendments, or ministerial inspections remain under the sovereign purview of the relevant governmental authorities.
                </p>
              </section>

              {/* 5. Client Obligations */}
              <section id="client-obligations" className="space-y-4">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">5.</span> Client Obligations & Site Access
                </h2>
                <p>
                  To enable seamless project delivery, the Client agrees to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                  <li>Provide accurate, timely site boundary plans (Krooki), ownership deeds, geotechnical soil investigation reports, topographical surveys, and base lease guidelines.</li>
                  <li>Grant authorized DEC supervisory engineers unimpeded and safe access to the project site during standard inspection cycles.</li>
                  <li>Provide written milestone approvals and review feedback within agreed review windows to prevent downstream permitting and construction delays.</li>
                </ul>
              </section>

              {/* 6. Fees */}
              <section id="fees" className="space-y-4">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">6.</span> Commercial Terms, Fees & Invoicing
                </h2>
                <p>
                  Professional consultancy fees shall be invoiced against verified milestones or monthly progress stages as outlined in the executed contract. All invoices are payable within thirty (30) calendar days of presentation unless otherwise stipulated in writing.
                </p>
                <p className="text-xs text-slate-500">
                  Statutory authority application fees, municipal stamp duties, or utility connection fees charged by Qatar authorities are the responsibility of the Client and are excluded from DEC professional service fees unless explicitly itemized.
                </p>
              </section>

              {/* 7. Liability */}
              <section id="liability" className="space-y-4">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">7.</span> Limitation of Liability & Professional Indemnity
                </h2>
                <p>
                  DEC maintains comprehensive Professional Indemnity (PI) Insurance in accordance with Grade A MMUP engineering requirements in Qatar.
                </p>
                <p>
                  To the maximum extent permitted by applicable Qatari law, DEC&apos;s total aggregate liability arising out of or in connection with any professional engagement, whether in contract, tort, or otherwise, shall be strictly capped at the total professional fees actually received by DEC for the specific project stage in dispute, or the insured limit under our Professional Indemnity policy.
                </p>
              </section>

              {/* 8. Governing Law */}
              <section id="governing-law" className="space-y-4">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">8.</span> Governing Law & Dispute Resolution
                </h2>
                <p>
                  These Terms, along with any contractual agreements executed with DEC, shall be interpreted, governed, and construed in accordance with the substantive laws of the <strong>State of Qatar</strong>.
                </p>
                <p>
                  Any dispute, claim, or controversy arising out of or relating to these Terms or project execution that cannot be resolved amicably through senior executive negotiations within thirty (30) days shall be referred to the exclusive jurisdiction of the competent civil commercial courts in Doha, Qatar, or as agreed under Qatar International Court and Dispute Resolution Centre (QICDRC) procedures.
                </p>
              </section>

              {/* 9. Contact */}
              <section id="contact" className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-[#151515] border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="text-[#B08D57]">9.</span> Official Legal & Corporate Inquiries
                </h2>
                <p>
                  For formal inquiries regarding our terms, institutional agreements, or compliance documentation, please contact:
                </p>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
                  <div className="font-bold text-[#151515]">
                    Desentral Engineering Consultancy W.L.L. (DEC)
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <FiMapPin className="text-[#B08D57] shrink-0" />
                    <span>Office 704, Manarat Lusail Tower, Qatar</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <FiMail className="text-[#B08D57] shrink-0" />
                    <a href="mailto:info@desentralqatar.com" className="hover:text-[#B08D57] underline">
                      info@desentralqatar.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <FiPhone className="text-[#B08D57] shrink-0" />
                    <a href="tel:+97431601117" className="hover:text-[#B08D57]">
                      +974 3160 1117
                    </a>
                  </div>
                </div>
              </section>

              {/* Bottom Action */}
              <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/"
                  className="px-6 py-3 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Return to Home
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B08D57] hover:text-[#C7A673] transition-colors"
                >
                  Contact Legal & Commercial Team <FiArrowRight />
                </Link>
              </div>

            </main>

          </div>

        </div>
      </section>

    </div>
  )
}

export default TermsAndConditions
