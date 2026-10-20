import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiGlobe, 
  FiCheckCircle, 
  FiArrowRight, 
  FiLayers, 
  FiCompass, 
  FiUsers, 
  FiShield 
} from 'react-icons/fi'

function Presence() {
  const [activeCluster, setActiveCluster] = useState('Lusail')

  const regionalHubs = [
    {
      id: 'qatar',
      country: 'Qatar (Corporate Headquarters)',
      badge: 'Grade A Executive HQ',
      flag: '🇶🇦',
      city: 'Lusail City, Qatar',
      address: 'Office 704, Manarat Lusail Tower, Qatar',
      phone: '+974 4455 4383 / +974 3160 1117',
      email: 'info@desentralqatar.com',
      scope: 'Executive Leadership, Multi-Discipline Engineering, Authority Submissions (MMUP Grade A, QCD, Kahramaa), Site Quality Supervision',
      stats: ['Grade A Licensed', '30+ Key Locations', 'Primary Client Interface']
    },
    {
      id: 'egypt',
      country: 'Egypt (Engineering & BIM Hub)',
      badge: 'Technical Production Center',
      flag: '🇪🇬',
      city: 'Dokki, Giza',
      address: 'Flat 32, 3rd floor, Bldg 20, Ahmed Elzaiat St., Dokki, Giza',
      phone: '+20 110 108 3005',
      email: 'info@desentralegypt.com',
      scope: 'Advanced Structural RC/Steel Calculations, High-Density MEP Thermal Modeling, BIM Level 2 Digital Modeling & Federated Clash Matrix',
      stats: ['50+ Engineers & Architects', 'BIM Level 2 Coordination', '24/7 Delivery Synergy']
    },
    {
      id: 'ksa',
      country: 'Saudi Arabia (Regional Expansion)',
      badge: 'Vision 2030 Consulting',
      flag: '🇸🇦',
      city: 'Riyadh & Eastern Province',
      address: 'Strategic Project Delivery & Regional Consulting Partner',
      phone: '+974 4000 0000',
      email: 'ksa@desentralqatar.com',
      scope: 'Commercial Workplaces, Retail Rollouts, Hospitality Advisory, and GCC Cross-Border Engineering Compliance',
      stats: ['Regional Project Scale', 'Fast-Track Fitout', 'GCC Standards (SBC)']
    }
  ]

  const qatarClusters = {
    Lusail: {
      title: 'Lusail Marina & Entertainment District',
      description: 'The futuristic heart of Qatar where DEC maintains its corporate headquarters. We have engineered flagship corporate towers, retail flagships, and luxury island developments across the city.',
      landmarks: [
        { name: 'Manarat Lusail Tower', type: 'DEC Corporate Headquarters & Commercial Suites' },
        { name: 'Snoonu Corporate HQ', type: 'Technology & Corporate Workspace' },
        { name: 'BlackRock Financial Office', type: 'Global Financial Services Workplace' },
        { name: 'Place Vendôme Mall Boutiques', type: 'Luxury High-Fashion & Retail Fitouts' },
        { name: 'Al Maha Island Dining Destinations', type: 'High-Capacity Hospitality & Restaurant MEP' },
        { name: 'Waldorf Astoria Lusail Suites', type: 'Ultra-Luxury Hospitality Engineering' }
      ]
    },
    Msheireb: {
      title: 'Msheireb Downtown Doha',
      description: 'The world’s leading sustainable downtown regeneration district. DEC delivers GSAS and LEED compliant engineering for international corporate offices and design showrooms.',
      landmarks: [
        { name: 'Amazon Ads Corporate Office', type: 'Acoustic & Sustainable Workplace MEP' },
        { name: 'Armani Casa Flagship Showroom', type: 'Luxury Home Furnishing & Architectural Lighting' },
        { name: 'Sovereign Wealth Executive Offices', type: 'C-Suite Secure Workplaces' },
        { name: 'Heritage Zone Boutique Retail', type: 'Preservation-Compliant Building Services' }
      ]
    },
    WestBay: {
      title: 'West Bay & Al Dafna Financial District',
      description: 'Doha’s iconic skyscraper skyline and diplomatic precinct. DEC provides high-rise structural reviews, fire life safety retrofits, and multinational tenant improvements.',
      landmarks: [
        { name: 'Boeing Regional Aerospace Office', type: 'High-Security Life Safety & QCD Approvals' },
        { name: 'International Embassy Fitouts', type: 'Specialized MEP & Redundant Power' },
        { name: 'Al Dafna Commercial Towers', type: 'Full Floor Office Remodeling (ARCH R&M)' },
        { name: 'West Bay Lagoon Waterfront Mansions', type: 'Dedicated Substations & Smart Infrastructure' }
      ]
    },
    ThePearl: {
      title: 'The Pearl Qatar & Porto Arabia',
      description: 'Qatar’s premier luxury island development. DEC executes luxury residential modifications, waterfront dining establishments, and high-end boutique retail.',
      landmarks: [
        { name: 'Porto Arabia Penthouse Duplexes', type: 'Structural Slab Openings & Luxury Fitout' },
        { name: 'Medina Centrale Retail Units', type: 'Baladiya Building Permits & Chilled Water Tie-Ins' },
        { name: 'Qanat Quartier Canal Boutiques', type: 'Ventilation & Public Health Engineering' },
        { name: 'Viva Bahriya Beachfront Residences', type: 'Architectural Renovation & Life Safety' }
      ]
    },
    MallsAndRetail: {
      title: 'Premier Malls & Commercial Centers',
      description: 'Unmatched footprint across Qatar’s most prestigious retail centers, coordinating seamlessly with landlords and mall management for fast approvals.',
      landmarks: [
        { name: 'Doha Festival City (DFC)', type: 'DIOR, NARS, L’Occitane, Xiaomi Tech Hub' },
        { name: 'Place Vendôme Mall', type: 'Hibobi Flagship & Luxury Boutiques' },
        { name: 'Mall of Qatar', type: 'TFK Perfumery & High-Footfall Retail' },
        { name: 'WestWalk Commercial Avenue', type: 'Signor Sassi Fine Dining & Commercial Suites' },
        { name: 'Al Hazm Mall', type: 'Artisan Culinary Concepts & Classical Interiors' }
      ]
    },
    Industrial: {
      title: 'Logistics, Free Zones & Infrastructure',
      description: 'Mission-critical industrial engineering covering logistics distribution centers, cold-storage pharmaceuticals, and light manufacturing plants.',
      landmarks: [
        { name: 'Barwa Logistics Distribution Park', type: 'PEB Steel Structures & ESFR Fire Suppression' },
        { name: 'Ras Bufontas Free Zone Hub', type: 'Cold-Chain Pharmaceutical Storage & GMP' },
        { name: 'Mesaieed Industrial Infrastructure', type: 'Heavy Industrial Equipment Foundations' },
        { name: 'Doha Industrial Area Workshops', type: 'Civil Defense Upgrades & Building Completion' }
      ]
    }
  }

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION - PURE CLEAR REGIONAL VISUAL                 */}
      {/* ============================================================ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#151515]">
        <img 
          src="/images/presence_hero.jpg" 
          alt="DEC Regional Presence Qatar Egypt KSA" 
          className="w-full h-full object-cover object-center scale-100"
        />
      </section>

      {/* ============================================================ */}
      {/* 2. REGIONAL FOOTPRINT METRICS BAR                            */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-16 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#B08D57] tracking-tight">30+</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">Qatar Key Locations</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#151515] tracking-tight">Grade A</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">MMUP / UPDA Qatar HQ</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#B08D57] tracking-tight">50+</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">Cross-Border Engineers</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#151515] tracking-tight">3 Hubs</div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">Qatar · Egypt · KSA</div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. THREE STRATEGIC REGIONAL HUBS                             */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-slate-50 text-[#151515] border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              CROSS-BORDER CAPABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]">
              Strategic Regional Hubs
            </h2>
            <p className="mt-4 text-base sm:text-lg text-black/70 font-light">
              DEC bridges on-ground statutory authority representation in Doha with deep technical production horsepower in Cairo and regional project delivery in KSA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regionalHubs.map((hub) => (
              <div 
                key={hub.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 hover:border-[#B08D57] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Flag & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-3xl">{hub.flag}</span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#B08D57]/15 text-[#8F6F3E]">
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors mb-2">
                    {hub.country}
                  </h3>
                  <div className="text-sm font-semibold text-[#B08D57] mb-6">
                    {hub.city}
                  </div>

                  {/* Address & Contacts */}
                  <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <FiMapPin className="text-[#B08D57] mt-0.5 shrink-0 text-sm" />
                      <span className="leading-relaxed">{hub.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FiPhone className="text-[#B08D57] shrink-0 text-sm" />
                      <span>{hub.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FiMail className="text-[#B08D57] shrink-0 text-sm" />
                      <span>{hub.email}</span>
                    </div>
                  </div>

                  {/* Core Scope */}
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-light mb-6">
                    {hub.scope}
                  </p>

                </div>

                {/* Key Metrics */}
                <div className="pt-6 border-t border-slate-100 space-y-2">
                  {hub.stats.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <FiCheckCircle className="text-emerald-600 text-sm shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. INTERACTIVE QATAR FOOTPRINT CLUSTERS                      */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-slate-200">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-2">
                NATIONWIDE QATAR PENETRATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]">
                30+ Key Locations Across Qatar
              </h2>
            </div>
            <p className="text-sm sm:text-base text-black/60 max-w-md font-normal">
              Select a cluster to explore DEC’s delivered landmark engineering engagements in Qatar’s primary commercial, retail, and hospitality corridors.
            </p>
          </div>

          {/* Cluster Switcher Buttons */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-slate-200">
            {Object.keys(qatarClusters).map((key) => {
              const labels = {
                Lusail: 'Lusail City & Marina',
                Msheireb: 'Msheireb Downtown',
                WestBay: 'West Bay & Al Dafna',
                ThePearl: 'The Pearl Qatar',
                MallsAndRetail: 'Major Malls & Venues',
                Industrial: 'Logistics & Free Zones'
              }
              return (
                <button
                  key={key}
                  onClick={() => setActiveCluster(key)}
                  className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeCluster === key
                      ? 'bg-[#151515] text-[#F5F0E7] shadow-lg scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {labels[key]}
                </button>
              )
            })}
          </div>

          {/* Active Cluster Details */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-[#B08D57] uppercase tracking-widest block mb-1">
                CLUSTER OVERVIEW
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151515] mb-3">
                {qatarClusters[activeCluster].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                {qatarClusters[activeCluster].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qatarClusters[activeCluster].landmarks.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#B08D57] hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B08D57]/10 flex items-center justify-center text-[#B08D57] mb-4 group-hover:bg-[#B08D57] group-hover:text-white transition-colors">
                    <FiCheckCircle className="text-lg" />
                  </div>
                  <h4 className="text-lg font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. THE DUAL-HUB ADVANTAGE (WHY IT WORKS)                     */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white text-[#151515] border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              THE DUAL-HUB PRODUCTION ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]">
              Seamless Integration Across Borders
            </h2>
            <p className="mt-4 text-base sm:text-lg text-black/70 font-light">
              How the DESENTRAL model gives developers, contractors, and asset owners unparalleled speed, technical accuracy, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3">
                Local Authority Mastery
              </h3>
              <p className="text-sm text-black/70 leading-relaxed font-light">
                Our Lusail office manages direct interfaces with Qatar Civil Defense (QCD), Municipalities (MME), Kahramaa, and Ashghal to guarantee first-pass permits.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6">
                <FiLayers />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3">
                High-Horsepower Engineering
              </h3>
              <p className="text-sm text-black/70 leading-relaxed font-light">
                Our Cairo technical center provides deep computational structural design, comprehensive MEP calculations, and continuous BIM Level 2 clash detection.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#B08D57] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/10 text-[#B08D57] flex items-center justify-center text-2xl mb-6">
                <FiUsers />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-3">
                One Accountable Team
              </h3>
              <p className="text-sm text-black/70 leading-relaxed font-light">
                No disjointed subcontractors or misaligned engineering models. Clients have one single point of contact with full executive accountability.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CALL TO ACTION BANNER                                     */}
      {/* ============================================================ */}
      <section className="bg-[#151515] py-20 px-6 sm:px-10 lg:px-14 xl:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block mb-3">
            COLLABORATE ACROSS THE REGION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F0E7] tracking-tight mb-6">
            Connect With Our Lusail HQ or Regional Technical Offices
          </h2>
          <p className="text-base sm:text-lg text-[#F5F0E7]/70 font-light mb-10 max-w-2xl mx-auto">
            Schedule an in-person meeting at Manarat Lusail Tower or consult our cross-border engineering specialists for your next landmark development.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#B08D57] hover:bg-[#8F6F3E] text-[#151515] font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-[#B08D57]/20"
            >
              Contact Our Lusail Headquarters
            </Link>
            <Link 
              to="/projects"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold text-sm uppercase tracking-wider transition-all"
            >
              View Delivered Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Presence
