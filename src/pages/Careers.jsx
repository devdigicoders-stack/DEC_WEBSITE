import React, { useState, useRef } from 'react'
import { 
  FiMapPin, 
  FiArrowRight, 
  FiAward, 
  FiUsers, 
  FiTrendingUp, 
  FiShield,
  FiBriefcase,
  FiUploadCloud,
  FiFileText,
  FiFile,
  FiImage,
  FiCheckCircle,
  FiAlertCircle,
  FiX,
  FiSend,
  FiUser,
  FiMail,
  FiPhone,
  FiGlobe,
  FiLoader
} from 'react-icons/fi'

function Careers() {
  const openPositions = [
    {
      id: '1',
      title: 'Senior Mechanical Engineer (HVAC & MEP)',
      department: 'Mechanical Engineering',
      location: 'Qatar: Corporate Headquarters',
      type: 'Full-Time',
      experience: '7+ Years',
      description: 'Lead commercial HVAC design, hydraulic calculations, chilled water tie-ins, and coordination for luxury commercial, retail and hospitality developments.',
      skills: ['AutoCAD & Revit MEP', 'HAP Load Calculations', 'Kahramaa & QCD Compliance', 'Site Testing & Commissioning']
    },
    {
      id: '2',
      title: 'Senior Civil & Structural Engineer',
      department: 'Civil & Structural Engineering',
      location: 'Qatar: Corporate Headquarters',
      type: 'Full-Time',
      experience: '6+ Years',
      description: 'Perform reinforced concrete (RC) analysis, structural steel modeling, foundation design, and municipality authority submissions for landmark towers and villas.',
      skills: ['ETABS / SAFE / SAP2000', 'PEB Industrial Structures', 'Qatar National Construction Standards (QCS)', 'Structural Peer Review']
    },
    {
      id: '3',
      title: 'Senior Architect & Fire Life Safety (FLS) Specialist',
      department: 'Architectural Engineering',
      location: 'Qatar: Corporate Headquarters',
      type: 'Full-Time',
      experience: '5+ Years',
      description: 'Develop code-compliant architectural layouts, egress analysis, fire compartmentation, and direct Civil Defense (QCD) permit packages.',
      skills: ['NFPA 101 & 5000 Codes', 'Civil Defense (QCD) Procedures', 'Architectural R&M Space Planning', 'Revit Architecture']
    },
    {
      id: '4',
      title: 'BIM Coordinator & Digital Delivery Lead',
      department: 'BIM & Technology',
      location: 'Qatar: Corporate Headquarters / Egypt: Technical Center',
      type: 'Full-Time',
      experience: '4+ Years',
      description: 'Oversee federated 3D multi-disciplinary models, automated clash detection matrix, and digital drawing production across Qatar and Egypt.',
      skills: ['Autodesk Revit & Navisworks Manage', 'BIM Level 2 Protocols', 'Clash Resolution Management', 'Point Cloud / Reality Capture']
    },
    {
      id: '5',
      title: 'Senior Electrical Engineer (Power & Systems)',
      department: 'Electrical Engineering',
      location: 'Egypt: Technical Center',
      type: 'Full-Time',
      experience: '5+ Years',
      description: 'Design electrical distribution, substation layouts, low current / ELV infrastructure, and Kahramaa compliance documents.',
      skills: ['Dialux Lighting Design', 'Short Circuit & Voltage Drop Calculations', 'Kahramaa Substation Regulations', 'ELV & Life Safety Systems']
    },
    {
      id: '6',
      title: 'Permits & Authority Approvals Coordinator',
      department: 'Regulatory Services',
      location: 'Qatar: Corporate Headquarters',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'Manage building permit submissions, maintenance permits, and Building Completion Certificates (BCC) across Qatari Municipalities.',
      skills: ['Ministry of Municipality (MME) Portal', 'Building Permits & BCC Workflows', 'Bilingual (Arabic / English)', 'Stakeholder Liaison']
    }
  ]

  // Form State
  const formRef = useRef(null)
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Senior Mechanical Engineer (HVAC & MEP)',
    location: 'Qatar: Corporate Headquarters (Lusail)',
    experience: '6 - 9 Years (Senior)',
    currentRole: '',
    noticePeriod: '30 Days / 1 Month',
    portfolioUrl: '',
    message: ''
  })

  const [selectedFile, setSelectedFile] = useState(null)
  const [fileError, setFileError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' })

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

  // Handle file selection (PDF, images, DOC/DOCX, any format)
  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    setFileError('')
    if (!file) return

    // 15 MB max file size
    const maxSizeBytes = 15 * 1024 * 1024
    if (file.size > maxSizeBytes) {
      setFileError('File size exceeds 15 MB. Please choose a smaller file.')
      setSelectedFile(null)
      return
    }

    setSelectedFile(file)
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setFileError('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSelectRole = (roleTitle) => {
    setFormData(prev => ({ ...prev, position: roleTitle }))
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFileError('')
    setSubmitStatus({ success: null, message: '' })

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields (Name, Email, Phone).'
      })
      return
    }

    if (!selectedFile) {
      setFileError('Please attach your CV / Resume before submitting.')
      return
    }

    setIsSubmitting(true)

    try {
      // Convert file to base64
      const fileBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = (err) => reject(err)
        reader.readAsDataURL(selectedFile)
      })

      const payload = {
        ...formData,
        cv: {
          filename: selectedFile.name,
          contentType: selectedFile.type || 'application/octet-stream',
          base64: fileBase64
        }
      }

      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const result = await res.json()

      if (res.ok && result.success) {
        setSubmitStatus({
          success: true,
          message: `Thank you, ${formData.fullName}! Your application and CV for "${formData.position}" have been securely delivered to DEC Talent Acquisition.`
        })
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: 'Senior Mechanical Engineer (HVAC & MEP)',
          location: 'Qatar: Corporate Headquarters (Lusail)',
          experience: '6 - 9 Years (Senior)',
          currentRole: '',
          noticePeriod: '30 Days / 1 Month',
          portfolioUrl: '',
          message: ''
        })
        setSelectedFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
      } else {
        throw new Error(result.error || 'Server error while sending application.')
      }
    } catch (err) {
      console.error('Submission failed:', err)
      setSubmitStatus({
        success: false,
        message: err.message || 'Failed to submit application. Please check your connection or try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format file size helper
  const formatFileSize = (bytes) => {
    if (!bytes) return '0 B'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Get file icon based on mime/extension
  const getFileIcon = (filename) => {
    const ext = filename?.split('.').pop()?.toLowerCase()
    if (['jpg', 'jpeg', 'png', 'webp', 'svg'].includes(ext)) {
      return <FiImage className="text-xl text-amber-400" />
    }
    if (['pdf'].includes(ext)) {
      return <FiFileText className="text-xl text-red-400" />
    }
    return <FiFile className="text-xl text-[#B08D57]" />
  }

  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] font-sans antialiased relative">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (IMMERSIVE ENGINEERING CAREERS AT DEC)       */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[#151515]">
        {/* Background Image - Clean with Controlled Opacity */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/image copy.png" 
            alt="DEC Engineering Studio Lusail Qatar" 
            className="w-full h-full object-cover object-center scale-100 opacity-60 transition-transform duration-1000 ease-out"
          />
          {/* Contrast Overlay for Crystal Clear Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#151515] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 text-center text-[#F5F0E7]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-5">
            <FiBriefcase className="text-sm shrink-0" />
            <span>Careers at DEC · Join Our Grade A Multidisciplinary Practice</span>
          </div>

          {/* Headings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Build Your Engineering Legacy with DEC
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-xl lg:text-2xl font-semibold text-[#B08D57] tracking-wide max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            50+ In-House Specialists · Regional Impact Across Qatar & Egypt
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#F5F0E7]/80 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal">
            Join an elite engineering team shaping iconic commercial headquarters, luxury retail flagships, and critical regional infrastructure.
          </p>

          {/* Quick CTA to jump to form */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#B08D57] via-[#DFBF82] to-[#B08D57] text-[#111111] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#B08D57]/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Submit Application & CV
            </button>
            <a
              href="#open-roles"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border border-white/20 hover:border-[#B08D57]"
            >
              View Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. WHY BUILD YOUR CAREER AT DEC                              */}
      {/* ============================================================ */}
      <section className="bg-white text-[#151515] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-black/10">
        <div className="max-w-[1720px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
              <FiAward className="text-sm shrink-0" />
              <span>LIFE AT DESENTRAL</span>
            </div>
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
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-3">
              <FiBriefcase className="text-sm shrink-0" />
              <span>JOIN OUR TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515]">
              Current Career Opportunities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/70 font-light">
              Explore open positions across our architectural, engineering, BIM, and regulatory practice in Doha and Cairo. Click any role to apply directly below.
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
                  <span className="text-xs text-slate-400 font-medium">Direct Talent Acquisition</span>
                  <button
                    onClick={() => handleSelectRole(pos.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151515] hover:bg-[#B08D57] hover:text-[#111111] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                  >
                    Apply Now <FiArrowRight />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ONLINE APPLICATION & CV UPLOAD PORTAL FORM                */}
      {/* ============================================================ */}
      <section 
        ref={formRef} 
        id="application-form" 
        className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 bg-[#121212] text-[#F5F0E7] relative overflow-hidden border-t border-[#B08D57]/30"
      >
        {/* Ambient Glow Elements */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mb-4">
              <FiSend className="text-sm shrink-0" />
              <span>OFFICIAL CANDIDATE APPLICATION PORTAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Submit Your Profile & CV to DEC
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#F5F0E7]/70 font-light leading-relaxed">
              Upload your resume and credentials (PDF, Word, or image formats supported). Your submission goes directly to the DEC Talent Acquisition Board in Lusail and Dokki.
            </p>
          </div>

          {/* Submission Status Alerts */}
          {submitStatus.success === true && (
            <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-emerald-950/70 border-2 border-emerald-500/60 text-white backdrop-blur-md shadow-2xl animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-2xl shrink-0 mt-0.5">
                  <FiCheckCircle />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-emerald-300 mb-1">
                    Application Delivered Successfully!
                  </h3>
                  <p className="text-sm text-emerald-100/90 leading-relaxed">
                    {submitStatus.message}
                  </p>
                  <p className="text-xs text-emerald-300/70 mt-3 font-medium">
                    ✓ A confirmation record has been logged. Our engineering recruitment directors will review your dossier and contact shortlisted applicants directly.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus.success === false && (
            <div className="mb-10 p-5 rounded-2xl bg-red-950/60 border border-red-500/50 text-white backdrop-blur-md">
              <div className="flex items-center gap-3">
                <FiAlertCircle className="text-2xl text-red-400 shrink-0" />
                <div className="text-sm text-red-200">
                  <strong>Submission Error:</strong> {submitStatus.message}
                </div>
              </div>
            </div>
          )}

          {/* Main Application Form Container */}
          <form 
            onSubmit={handleSubmit}
            className="bg-[#181818]/95 border border-[#B08D57]/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md space-y-8"
          >
            
            {/* Step 1: Position & Location */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B08D57] mb-4">
                <span className="w-6 h-6 rounded-full bg-[#B08D57]/20 border border-[#B08D57] flex items-center justify-center text-[11px] text-[#B08D57]">1</span>
                <span>Select Position & Preferred Hub</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Position Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                    Target Role / Discipline <span className="text-[#B08D57]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      {openPositions.map(p => (
                        <option key={p.id} value={p.title} className="bg-[#1a1a1a] text-white">
                          {p.title}
                        </option>
                      ))}
                      <option value="General Engineering Application" className="bg-[#1a1a1a] text-white">
                        General Engineering Application (Speculative)
                      </option>
                      <option value="Architectural & Interior Design" className="bg-[#1a1a1a] text-white">
                        Architectural & Interior Design Practice
                      </option>
                      <option value="BIM & Computational Modeling" className="bg-[#1a1a1a] text-white">
                        BIM & Computational Modeling Lead
                      </option>
                      <option value="Internship / Graduate Engineer" className="bg-[#1a1a1a] text-white">
                        Internship / Graduate Engineer Program
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#B08D57]">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Location Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                    Preferred Office Hub <span className="text-[#B08D57]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="Qatar: Corporate Headquarters (Lusail)" className="bg-[#1a1a1a] text-white">
                        Qatar: Corporate Headquarters (Manarat Lusail Tower)
                      </option>
                      <option value="Egypt: Technical Delivery Center (Dokki, Giza)" className="bg-[#1a1a1a] text-white">
                        Egypt: Technical Delivery Center (Dokki, Giza)
                      </option>
                      <option value="Saudi Arabia: Regional Project Delivery (Riyadh)" className="bg-[#1a1a1a] text-white">
                        Saudi Arabia: Regional Project Delivery (Riyadh)
                      </option>
                      <option value="Open to Any GCC / Regional Hub" className="bg-[#1a1a1a] text-white">
                        Open to Any GCC / Regional Hub
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#B08D57]">
                      ▼
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Candidate Basic Details */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B08D57] mb-4">
                <span className="w-6 h-6 rounded-full bg-[#B08D57]/20 border border-[#B08D57] flex items-center justify-center text-[11px] text-[#B08D57]">2</span>
                <span>Personal & Professional Background</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                    Full Legal Name <span className="text-[#B08D57]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Eng. Ahmed Mansour"
                      required
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                    />
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B08D57] text-base" />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                    Email Address <span className="text-[#B08D57]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@domain.com"
                      required
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                    />
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B08D57] text-base" />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                    Phone / WhatsApp Number <span className="text-[#B08D57]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +974 3160 1117"
                      required
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                    />
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B08D57] text-base" />
                  </div>
                </div>

              </div>

              {/* Row 2: Experience, Role, Notice */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                
                {/* Total Experience */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                    Years of Experience <span className="text-[#B08D57]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="0 - 2 Years (Junior / Graduate)">0 - 2 Years (Junior / Graduate)</option>
                      <option value="3 - 5 Years (Mid-Level)">3 - 5 Years (Mid-Level)</option>
                      <option value="6 - 9 Years (Senior)">6 - 9 Years (Senior)</option>
                      <option value="10 - 14 Years (Lead / Principal)">10 - 14 Years (Lead / Principal)</option>
                      <option value="15+ Years (Executive / Director)">15+ Years (Executive / Director)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#B08D57]">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Current Role */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                    Current Role & Company
                  </label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    placeholder="e.g. Lead Structural Eng at ABC"
                    className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                  />
                </div>

                {/* Notice Period */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                    Notice Period / Availability
                  </label>
                  <div className="relative">
                    <select
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="Immediate (Available Now)">Immediate (Available Now)</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days / 1 Month">30 Days / 1 Month</option>
                      <option value="60 Days / 2 Months">60 Days / 2 Months</option>
                      <option value="90 Days / 3 Months">90 Days / 3 Months</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#B08D57]">
                      ▼
                    </div>
                  </div>
                </div>

              </div>

              {/* LinkedIn / Portfolio URL */}
              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                  LinkedIn Profile / Portfolio Link <span className="text-white/40 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    placeholder="e.g. https://www.linkedin.com/in/yourprofile or portfolio site"
                    className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                  />
                  <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B08D57] text-base" />
                </div>
              </div>

            </div>

            {/* Step 3: CV / Resume File Upload (Any format supported) */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B08D57]">
                  <span className="w-6 h-6 rounded-full bg-[#B08D57]/20 border border-[#B08D57] flex items-center justify-center text-[11px] text-[#B08D57]">3</span>
                  <span>Upload Your CV / Resume (PDF, DOCX, Image, Any Format)</span>
                  <span className="text-[#B08D57]">*</span>
                </div>
                <span className="text-xs text-white/40">Max 15 MB</span>
              </div>

              {/* Hidden Native File Input */}
              <input
                ref={fileInputRef}
                type="file"
                id="cv-file-input"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp,.txt"
                className="hidden"
              />

              {/* Upload Dropzone */}
              {!selectedFile ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#B08D57]/40 hover:border-[#B08D57] bg-white/[0.02] hover:bg-[#B08D57]/[0.05] rounded-2xl p-8 sm:p-10 text-center cursor-pointer transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#B08D57]/10 group-hover:bg-[#B08D57] text-[#B08D57] group-hover:text-black mx-auto flex items-center justify-center text-3xl mb-4 transition-all duration-300">
                    <FiUploadCloud />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    Click to browse or drag and drop your CV here
                  </h4>
                  <p className="text-xs text-[#F5F0E7]/60 max-w-md mx-auto">
                    Supported: PDF, DOC, DOCX, JPG, PNG, WEBP, or TXT (up to 15 MB).
                  </p>
                  <span className="inline-block mt-4 px-4 py-2 rounded-xl bg-white/5 group-hover:bg-[#B08D57]/20 border border-white/10 text-xs font-semibold text-[#DFBF82] transition-colors">
                    Browse File from Device
                  </span>
                </div>
              ) : (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#B08D57]/10 border border-[#B08D57]/50 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-black/40 border border-[#B08D57]/40 flex items-center justify-center shrink-0">
                      {getFileIcon(selectedFile.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-bold text-white truncate">
                        {selectedFile.name}
                      </div>
                      <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
                        <FiCheckCircle className="shrink-0" />
                        <span>Ready to attach ({formatFileSize(selectedFile.size)})</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      aria-label="Remove uploaded file"
                      className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                    >
                      <FiX className="text-base" />
                    </button>
                  </div>
                </div>
              )}

              {fileError && (
                <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                  <FiAlertCircle /> {fileError}
                </p>
              )}
            </div>

            {/* Step 4: Cover Letter / Message (Optional) */}
            <div className="pt-6 border-t border-white/10">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E7]/80 mb-2">
                Candidate Note / Cover Letter <span className="text-white/40 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Briefly describe your key engineering accomplishments, CAD/BIM software proficiencies, or specific career goals at DEC..."
                className="w-full bg-[#202020] border border-white/10 focus:border-[#B08D57] rounded-xl p-4 text-sm text-white placeholder-white/30 focus:outline-none transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#F5F0E7]/50 text-center sm:text-left">
                🔒 Your personal information and CV are strictly confidential and transmitted securely to DEC HR.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#B08D57] via-[#DFBF82] to-[#B08D57] hover:brightness-110 active:scale-95 text-[#111111] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#B08D57]/30 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="text-base animate-spin" />
                    <span>Submitting Application & CV...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Job Application</span>
                    <FiSend className="text-base" />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>
      </section>

    </div>
  )
}

export default Careers
