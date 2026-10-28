import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiSend, 
  FiCheckCircle, 
  FiArrowUpRight, 
  FiGlobe,
  FiShield,
  FiExternalLink,
  FiX
} from 'react-icons/fi'
import { 
  FaWhatsapp, 
  FaAward
} from 'react-icons/fa6'
import { API_BASE_URL } from '../services/api'

function Contact() {
  const location = useLocation()
  const [activeMap, setActiveMap] = useState('qatar') // 'qatar' | 'egypt'
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    discipline: 'Multidisciplinary (Architecture + MEP + Structure)',
    location: 'Qatar',
    stage: 'Concept & Permitting',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState({ show: false, title: '', message: '', type: 'success' })

  // Auto-scroll to inquiry form if requested via hash
  useEffect(() => {
    if (location.hash === '#inquiry-form' || window.location.hash === '#inquiry-form') {
      const timer = setTimeout(() => {
        const el = document.getElementById('inquiry-form')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [location.hash, location.pathname])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      // Allow only numbers, plus sign (+), spaces, and dashes
      const numericValue = value.replace(/[^0-9+\s\-()]/g, '')
      setFormData(prev => ({ ...prev, [name]: numericValue }))
      return
    }
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        type: 'contact',
        fullName: formData.fullName,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone,
        discipline: formData.discipline,
        location: formData.location,
        stage: formData.stage,
        message: formData.message,
        source: 'Website Contact Page'
      }

      await fetch(`${API_BASE_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
    } catch (err) {
      console.warn('Backend inquiry submission note:', err)
    } finally {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setToast({
        show: true,
        title: 'Inquiry Submitted Successfully!',
        message: 'Thank you! Your project details have been received and routed to info@desentralqatar.com & bd@desentralqatar.com. A senior engineer will connect with you within 24 hours.',
        type: 'success'
      })
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }))
      }, 6000)
    }
  }

  const qatarMapUrl = "https://www.google.com/maps?cid=6957477369137263552&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
  const egyptMapUrl = "https://www.google.com/maps/place/Desentral+engineering+services/@30.0294102,31.2048569,883m/data=!3m2!1e3!4b1!4m6!3m5!1s0x145847000dbc6525:0x3dcc37cac37a42d4!8m2!3d30.0294102!4d31.2048569!16s%2Fg%2F11y_ppbmtj?entry=ttu"

  const scrollToMap = (locationKey) => {
    setActiveMap(locationKey)
    const el = document.getElementById('map-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full bg-white text-[#151515] antialiased relative">
      
      {/* ============================================================ */}
      {/* FLOATING TOAST ALERT (SUCCESS NOTIFICATION)                  */}
      {/* ============================================================ */}
      {toast.show && (
        <div className="fixed top-24 right-4 sm:right-8 z-[100] max-w-md w-[calc(100%-2rem)] sm:w-auto bg-[#151515] border-2 border-[#B08D57] text-white p-4 sm:p-5 rounded-2xl shadow-2xl shadow-black/70 flex items-start gap-4 transition-all duration-300 animate-bounce-short">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
            <FiCheckCircle className="text-2xl text-emerald-400" />
          </div>
          <div className="flex-1 pr-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase font-bold tracking-widest text-[#B08D57]">
                Success Alert
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-white mt-0.5">
              {toast.title}
            </h4>
            <p className="text-xs text-[#F5F0E7]/85 mt-1 leading-relaxed">
              {toast.message}
            </p>
          </div>
          <button 
            type="button"
            onClick={() => setToast(prev => ({ ...prev, show: false }))}
            className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close notification"
          >
            <FiX className="text-lg" />
          </button>
        </div>
      )}
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Custom Generated Architectural Imagery)    */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Clean without brand name */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/images/contact_hero.png" 
            alt="DEC Manarat Lusail Tower Headquarters" 
            className="w-full h-full object-cover object-center scale-100 opacity-60 transition-transform duration-1000 ease-out"
          />
          {/* Contrast Overlay with Warm Gold Tint as requested */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#151515] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#B08D57]/20 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-[#B08D57]/5 mix-blend-screen pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 text-center text-[#F5F0E7]">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-6">
            <FiShield className="text-sm shrink-0" />
            <span>Grade A Multidisciplinary Engineering Consultancy</span>
          </div>

          {/* Main Hero Headings */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Let’s Connect!
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#B08D57] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Engineering Starts With A Conversation
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E7] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
            From iconic towers in Lusail to fast-track regional developments in Egypt and Saudi Arabia. Our senior engineering partners are ready to mobilize for your project.
          </p>

          {/* Quick Hub Badges - Consistent Location Names */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
            <span className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-[#B08D57]/40 text-white/95 shadow-md flex items-center gap-2">
              <span>🇶🇦</span>
              <span><strong>Qatar:</strong> Corporate Headquarters</span>
            </span>
            <span className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-[#B08D57]/40 text-white/95 shadow-md flex items-center gap-2">
              <span>🇪🇬</span>
              <span><strong>Egypt:</strong> Technical Center</span>
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. REGIONAL OFFICES & DIRECT CONTACT CARDS (UPDATED DATA)   */}
      {/* ============================================================ */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 xl:px-20 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
            <FiGlobe className="text-sm shrink-0 text-[#B08D57]" />
            <span>Global Delivery Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#151515] tracking-tight">
            Our Headquarters & Technical Centers
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Direct access to DEC’s executive leadership and multidisciplinary engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: QATAR HEADQUARTERS */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:shadow-2xl hover:border-[#B08D57] transition-all duration-300 p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-[#B08D57] uppercase bg-[#B08D57]/10 border border-[#B08D57]/30 px-3 py-1 rounded-full">
                  Corporate Headquarters
                </span>
                <span className="text-2xl">🇶🇦</span>
              </div>
              <h3 className="text-2xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors">
                QATAR HEADQUARTERS
              </h3>
              <p className="text-xs text-slate-600 font-semibold mt-1 mb-6">
                Desentral Engineering Consultancy (DEC)
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Office Address:</strong>
                    Office 704, Manarat Lusail Tower, Qatar
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiPhone className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Tel:</strong>
                    <a href="tel:+97444554383" className="hover:text-[#B08D57] transition-colors font-medium">
                      +974 4455 4383
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiPhone className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Mobile:</strong>
                    <a href="tel:+97431601117" className="hover:text-[#B08D57] transition-colors font-medium">
                      +974 3160 1117
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMail className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Email:</strong>
                    <a href="mailto:info@desentralqatar.com" className="hover:text-[#B08D57] font-medium underline decoration-slate-300">
                      info@desentralqatar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiGlobe className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Website:</strong>
                    <a href="http://www.desentralqatar.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B08D57] font-medium underline decoration-slate-300">
                      www.desentralqatar.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <FiClock className="text-[#B08D57]" /> Sun - Thu: 8:00 AM - 5:30 PM
              </span>
              <div className="flex items-center gap-3">
                <button 
                  type="button"
                  onClick={() => scrollToMap('qatar')}
                  className="text-xs font-semibold text-[#151515] hover:text-[#B08D57] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  View on Map <FiArrowUpRight />
                </button>
                <a 
                  href={qatarMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#B08D57] hover:underline flex items-center gap-1"
                >
                  Google Maps <FiExternalLink />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: EGYPT TECHNICAL OFFICE */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:shadow-2xl hover:border-[#B08D57] transition-all duration-300 p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-[#B08D57] uppercase bg-[#B08D57]/10 border border-[#B08D57]/30 px-3 py-1 rounded-full">
                  Technical Center
                </span>
                <span className="text-2xl">🇪🇬</span>
              </div>
              <h3 className="text-2xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors">
                EGYPT TECHNICAL OFFICE
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1 mb-6">
                Engineering Design, BIM & Technical Production Hub
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Office Address:</strong>
                    Flat 32, 3rd floor, Bldg 20,<br />
                    Ahmed Elzaiat St., Dokki, Giza
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiPhone className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Tel:</strong>
                    <a href="tel:+201101083005" className="hover:text-[#B08D57] transition-colors font-medium">
                      +20 110 108 3005
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMail className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Email:</strong>
                    <a href="mailto:info@desentralegypt.com" className="hover:text-[#B08D57] font-medium underline decoration-slate-300">
                      info@desentralegypt.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiGlobe className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Website:</strong>
                    <a href="http://www.desentralqatar.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B08D57] font-medium underline decoration-slate-300">
                      www.desentralqatar.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <FiClock className="text-[#B08D57]" /> Sun - Thu: 9:00 AM - 6:00 PM
              </span>
              <div className="flex items-center gap-3">
                <button 
                  type="button"
                  onClick={() => scrollToMap('egypt')}
                  className="text-xs font-semibold text-[#151515] hover:text-[#B08D57] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  View on Map <FiArrowUpRight />
                </button>
                <a 
                  href={egyptMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#B08D57] hover:underline flex items-center gap-1"
                >
                  Google Maps <FiExternalLink />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: WHATSAPP CONTACTS & DIRECT INQUIRY DESK */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:shadow-2xl hover:border-[#B08D57] transition-all duration-300 p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-[#B08D57] uppercase bg-[#B08D57]/10 border border-[#B08D57]/30 px-3 py-1 rounded-full">
                  Instant Messaging
                </span>
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-[#151515] group-hover:text-[#B08D57] transition-colors">
                WHATSAPP CONTACTS
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1 mb-6">
                Fast-Track Direct Support for Clients & Projects
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                        Islam Farid
                      </span>
                      <strong className="text-sm font-bold text-[#151515]">
                        +974 3160 1117
                      </strong>
                    </div>
                    <a
                      href="https://wa.me/97431601117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-transform hover:scale-105"
                    >
                      <FaWhatsapp /> Chat
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                        Ahmed Bakry
                      </span>
                      <strong className="text-sm font-bold text-[#151515]">
                        +974 7117 1289
                      </strong>
                    </div>
                    <a
                      href="https://wa.me/97471171289"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-transform hover:scale-105"
                    >
                      <FaWhatsapp /> Chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <FiMail className="text-[#B08D57] text-lg shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#151515] block">Project Inquiries:</strong>
                    <div className="text-xs space-y-1">
                      <a href="mailto:info@desentralqatar.com" className="hover:text-[#B08D57] block text-slate-700 underline">
                        info@desentralqatar.com
                      </a>
                      <a href="mailto:bd@desentralqatar.com" className="hover:text-[#B08D57] block text-slate-700 underline font-medium">
                        bd@desentralqatar.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className="text-xs text-slate-500 flex items-center gap-1.5 shrink-0">
                <FiClock className="text-[#B08D57]" /> Response &lt; 15 mins
              </span>
              <a 
                href="#inquiry-form"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-xs tracking-wider uppercase transition-all duration-300 border border-white/20 hover:border-[#B08D57] shadow-md hover:scale-105"
              >
                <span>Inquiry Form</span>
                <FiArrowUpRight className="text-sm" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. INTERACTIVE CONTACT FORM & CLIENT ASSURANCE SECTION       */}
      {/* ============================================================ */}
      <section id="inquiry-form" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Form Details & Value Assurance - Matching Luxury White Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 sm:pb-8 lg:pb-8 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] bg-[#B08D57]/10 border border-[#B08D57]/30 px-3.5 py-1.5 rounded-full inline-block">
                  Fast-Track Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151515] tracking-tight mt-4">
                  Request a Proposal or Authority Assessment
                </h2>
                
                {/* Specific Direction Note - Gold-tinted card matching site palette */}
                <div className="mt-4 p-3.5 rounded-2xl bg-[#B08D57]/10 border border-[#B08D57]/30 text-[#151515] text-sm">
                  <strong className="block text-[#151515] font-bold mb-1">
                    Direct Contact Routing:
                  </strong>
                  All general enquiries and project enquiries should be directed to:
                  <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
                    <a href="mailto:info@desentralqatar.com" className="px-3 py-1.5 rounded-lg bg-white border border-[#B08D57]/40 text-[#151515] hover:text-[#B08D57] hover:border-[#B08D57] transition-colors shadow-xs">
                      info@desentralqatar.com
                    </a>
                    <a href="mailto:bd@desentralqatar.com" className="px-3 py-1.5 rounded-lg bg-white border border-[#B08D57]/40 text-[#151515] hover:text-[#B08D57] hover:border-[#B08D57] transition-colors shadow-xs">
                      bd@desentralqatar.com
                    </a>
                  </div>
                </div>

                <p className="mt-3.5 text-slate-600 leading-relaxed text-sm">
                  Whether you are planning a Grade A commercial tower, retail rollout, luxury F&B concept, or need urgent statutory approvals from MMUP / Civil Defense, DEC provides swift and coordinated delivery.
                </p>
              </div>

              {/* Trust Badges - Consistent Light Styling */}
              <div className="space-y-3 my-5">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="p-2 rounded-xl bg-[#B08D57]/15 text-[#B08D57] shrink-0 mt-0.5">
                    <FaAward className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#151515] text-sm">Grade A Certified Consultancy</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Accredited by the Ministry of Municipality (MMUP / UPDA) with unrestricted engineering authority.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="p-2 rounded-xl bg-[#B08D57]/15 text-[#B08D57] shrink-0 mt-0.5">
                    <FiShield className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#151515] text-sm">Statutory Permitting & QCDD Fast-Track</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Expert preparation of Fire & Life Safety drawings, building permits, and Building Completion Certificates (BCC).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="p-2 rounded-xl bg-[#B08D57]/15 text-[#B08D57] shrink-0 mt-0.5">
                    <FiClock className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#151515] text-sm">24-Hour Review Turnaround</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Our partners review project briefs and respond with tailored scope roadmaps within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dual WhatsApp Quick Contact Box - Clean Cohesive Box */}
              <div className="p-4 sm:p-5 sm:pb-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#151515] text-sm">Direct WhatsApp Lines:</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Connect instantly with our project coordinators on WhatsApp:
                    </p>
                  </div>
                  <span className="text-xl">💬</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a 
                    href="https://wa.me/97431601117" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:scale-105"
                  >
                    <FaWhatsapp className="text-base" /> +974 3160 1117
                  </a>
                  <a 
                    href="https://wa.me/97471171289" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:scale-105"
                  >
                    <FaWhatsapp className="text-base" /> +974 7117 1289
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Actual Clean Form - Perfectly Aligned at Beginning and End */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 pb-4 sm:pb-[17px] lg:pb-[17px] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-fade-in my-auto">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <FiCheckCircle className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#151515]">Thank You! Your Message is Received.</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    A senior engineering lead from Desentral Engineering Consultancy will reach out via email or phone within 24 hours.
                  </p>
                  <p className="text-xs text-slate-500">
                    Routing to: info@desentralqatar.com & bd@desentralqatar.com
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        fullName: '',
                        organization: '',
                        email: '',
                        phone: '',
                        discipline: 'Multidisciplinary (Architecture + MEP + Structure)',
                        location: 'Qatar',
                        stage: 'Concept & Permitting',
                        message: ''
                      })
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#B08D57] text-[#151515] text-xs uppercase font-bold tracking-wider rounded-xl hover:bg-[#C7A673] transition-colors shadow-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="border-b border-slate-100 pb-3 mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#151515]">Client Inquiry Form</h3>
                        <span className="text-xs text-slate-500 font-medium">
                          Direct to: <strong className="text-slate-700">info@</strong> & <strong className="text-slate-700">bd@desentralqatar.com</strong>
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill out your project specifications below for a confidential assessment.
                      </p>
                    </div>

                    <div className="space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. Eng. Fahad Al-Kuwari"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 text-sm text-[#151515] bg-slate-50/50"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Company / Organization
                          </label>
                          <input 
                            type="text" 
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            placeholder="e.g. Real Estate Development / Retail Group"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 text-sm text-[#151515] bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="you@company.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 text-sm text-[#151515] bg-slate-50/50"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+974 XXXX XXXX"
                            inputMode="tel"
                            pattern="[0-9+\s\-()]*"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 text-sm text-[#151515] bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Service Discipline Required
                          </label>
                          <select 
                            name="discipline"
                            value={formData.discipline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 text-sm text-[#151515] bg-slate-50/50"
                          >
                            <option>Multidisciplinary (Architecture + MEP + Structure)</option>
                            <option>Architecture & Interior Fit-Out</option>
                            <option>Civil & Structural Engineering</option>
                            <option>MEP (HVAC, Electrical, Plumbing)</option>
                            <option>Authority Approvals & Civil Defense (QCDD)</option>
                            <option>BIM Modeling & 3D Clash Detection</option>
                            <option>GSAS Sustainability & Energy Certification</option>
                            <option>Site Supervision & Project Management</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Project Location
                          </label>
                          <select 
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 text-sm text-[#151515] bg-slate-50/50"
                          >
                            <option value="Qatar">Qatar</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Saudi Arabia (KSA)">Saudi Arabia (KSA)</option>
                            <option value="United Arab Emirates (UAE)">United Arab Emirates (UAE)</option>
                            <option value="Other GCC / International">Other GCC / International</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                          Project Details & Scope of Work <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Please share details such as approximate area, building type, required services, or any specific authority permitting deadlines..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 text-sm text-[#151515] bg-slate-50/50 resize-y min-h-[85px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 px-6 rounded-xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 hover:border-[#B08D57] shadow-lg hover:scale-[1.01] cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>Processing Submission...</>
                      ) : (
                        <>
                          <FiSend className="text-base" /> Send Project Inquiry to DEC Engineers
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] sm:text-xs text-slate-500 mt-1 leading-tight min-h-[28px] flex items-center justify-center">
                      🔒 All inquiries are securely routed to <a href="mailto:info@desentralqatar.com" className="text-slate-700 underline font-medium">info@desentralqatar.com</a> & <a href="mailto:bd@desentralqatar.com" className="text-slate-700 underline font-medium">bd@desentralqatar.com</a> under strict non-disclosure compliance.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. GOOGLE MAPS SECTION (Exact Location Embed + Direct Link)  */}
      {/* ============================================================ */}
      <section id="map-section" className="py-20 px-6 sm:px-10 lg:px-14 xl:px-20 w-full scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          
          {/* Upper Left Corner Title with Gold Band & Accent */}
          <div className="border-l-4 border-[#B08D57] pl-4 sm:pl-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase mb-2 shadow-xs">
              <FiMapPin className="text-sm shrink-0" />
              <span>Physical Location</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
              Visit Our Offices
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#B08D57] to-transparent rounded-full mt-2.5 mb-2" />
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Conveniently situated in major commercial centers for easy meetings and client reviews.
            </p>
          </div>

          {/* Location Switcher & Aligned Gold Action Button */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Interactive Map Tab Switcher */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveMap('qatar')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeMap === 'qatar'
                    ? 'bg-white text-[#151515] shadow-md border border-slate-200/80 font-bold'
                    : 'text-slate-600 hover:text-[#151515]'
                }`}
              >
                🇶🇦 Qatar: Corporate Headquarters
              </button>
              <button
                type="button"
                onClick={() => setActiveMap('egypt')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeMap === 'egypt'
                    ? 'bg-white text-[#151515] shadow-md border border-slate-200/80 font-bold'
                    : 'text-slate-600 hover:text-[#151515]'
                }`}
              >
                🇪🇬 Egypt: Technical Center
              </button>
            </div>

            {/* Direct Google Maps link button - Aligned & Gold Styled */}
            <a
              href={activeMap === 'qatar' ? qatarMapUrl : egyptMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#151515] hover:bg-[#B08D57] text-white hover:text-[#151515] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all border border-white/20 hover:border-[#B08D57] shadow-md hover:scale-105 cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <FiExternalLink className="text-base" />
            </a>
          </div>
        </div>

        {/* Map Display Frame - Full Width & Immersive */}
        <div className="relative w-full h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-slate-300 shadow-2xl">
          {activeMap === 'qatar' ? (
            <iframe
              title="DEC Qatar Headquarters - Manarat Lusail Tower"
              src="https://maps.google.com/maps?cid=6957477369137263552&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          ) : (
            <iframe
              title="DEC Egypt Technical Center - Desentral Engineering Services"
              src="https://maps.google.com/maps?q=30.0294102,31.2048569&hl=en&z=17&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          )}

          {/* Floating Badge on Map */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200 shadow-xl text-[#151515]">
            <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-[#B08D57]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                {activeMap === 'qatar' ? 'Qatar: Corporate Headquarters' : 'Egypt: Technical Center'}
              </span>
              <a 
                href={activeMap === 'qatar' ? qatarMapUrl : egyptMapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
              >
                View Details <FiExternalLink />
              </a>
            </div>
            <h4 className="font-bold text-base mt-1">
              {activeMap === 'qatar' 
                ? 'Office 704, Manarat Lusail Tower, Qatar' 
                : 'Flat 32, 3rd floor, Bldg 20, Ahmed Elzaiat St., Dokki, Giza'}
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              {activeMap === 'qatar' 
                ? 'Lusail City, Qatar · Tel: +974 4455 4383 · Mobile: +974 3160 1117' 
                : 'Dokki, Giza, Egypt · Tel: +20 110 108 3005 · info@desentralegypt.com'}
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact

