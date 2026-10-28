import React, { useState, useEffect, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  FiCalendar, 
  FiUser, 
  FiEye, 
  FiChevronDown, 
  FiChevronUp, 
  FiShare2, 
  FiCopy, 
  FiCheck, 
  FiPhone, 
  FiSend, 
  FiArrowUpRight, 
  FiArrowLeft,
  FiShield, 
  FiSearch,
  FiLayers
} from 'react-icons/fi'
import { 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaXTwitter, 
  FaTelegram 
} from 'react-icons/fa6'
import { fetchBlogPosts, fetchBlogPostBySlug, submitInquiry, getImageUrl } from '../services/api'

// Helper to resolve dynamic upload images vs static public images
const resolveImageUrl = (img) => {
  if (!img) return '/projects-gallery/01.jpg'
  return getImageUrl(img)
}

// Helper to format date cleanly
const formatArticleDate = (dateStr, createdAt) => {
  if (dateStr && typeof dateStr === 'string' && dateStr.trim()) return dateStr
  if (createdAt) {
    try {
      return new Date(createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })
    } catch {
      return 'Recent'
    }
  }
  return 'Recent'
}

export default function Blog() {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Live posts loaded dynamically from Backend MongoDB
  const [posts, setPosts] = useState([])
  const [loadingPosts, setLoadingPosts] = useState(true)

  // Fetch live articles from Backend
  useEffect(() => {
    let isMounted = true
    const loadLiveArticles = async () => {
      try {
        const liveArticles = await fetchBlogPosts({ limit: 100 })
        if (isMounted) {
          setPosts(Array.isArray(liveArticles) ? liveArticles : [])
        }
      } catch (err) {
        console.warn('API loadLiveArticles note:', err)
      } finally {
        if (isMounted) setLoadingPosts(false)
      }
    }

    loadLiveArticles()

    return () => {
      isMounted = false
    }
  }, [])

  // Single post loaded live from Backend when slug is present
  const [singlePost, setSinglePost] = useState(null)
  const [loadingSinglePost, setLoadingSinglePost] = useState(Boolean(slug))

  useEffect(() => {
    if (!slug) {
      setSinglePost(null)
      setLoadingSinglePost(false)
      return
    }

    let isMounted = true
    setLoadingSinglePost(true)

    const loadSinglePost = async () => {
      try {
        const data = await fetchBlogPostBySlug(slug)
        if (isMounted && data) {
          setSinglePost(data)
        }
      } catch (err) {
        console.warn(`API loadSinglePost (${slug}) note:`, err)
      } finally {
        if (isMounted) setLoadingSinglePost(false)
      }
    }

    loadSinglePost()

    return () => {
      isMounted = false
    }
  }, [slug])

  // If a slug is provided, we are in "Full Article Details View"
  const isDetailView = Boolean(slug)
  const currentPost = isDetailView
    ? singlePost || posts.find((p) => p.slug === slug)
    : null

  // Hub / List View States
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Detail View States
  const [copiedToast, setCopiedToast] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0) // Default first FAQ open
  const [activeTocId, setActiveTocId] = useState('')

  // Quick Inquiry Form State
  const [inquiryName, setInquiryName] = useState('')
  const [inquiryPhone, setInquiryPhone] = useState('')
  const [inquiryText, setInquiryText] = useState('')
  const [inquirySuccess, setInquirySuccess] = useState(false)

  // Scroll to top on route change or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsExpanded(false)
    setOpenFaqIndex(0)
  }, [slug])

  // Track scroll position for Table of Contents active highlight in Detail View
  useEffect(() => {
    if (!isDetailView || !currentPost) return

    const handleScroll = () => {
      const sections = currentPost.tableOfContents || []
      const scrollY = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.offsetTop <= scrollY) {
          setActiveTocId(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDetailView, currentPost])

  // Scroll to section smoothly
  const handleScrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveTocId(id)
    }
  }

  // Handle Copy Link
  const handleCopyLink = () => {
    const fullUrl = window.location.href
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedToast(true)
      setTimeout(() => setCopiedToast(false), 3000)
    })
  }

  // Handle Quick Inquiry Submit
  const handleInquirySubmit = async (e) => {
    e.preventDefault()
    if (!inquiryName.trim() || !inquiryPhone.trim()) return

    try {
      await submitInquiry({
        type: 'consultation',
        fullName: inquiryName.trim(),
        email: `${inquiryName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'client'}@inquiry.dec`,
        phone: inquiryPhone.trim(),
        discipline: 'Blog Quick Consultation',
        subject: currentPost ? `Inquiry via Article: ${currentPost.title}` : 'Engineering Quick Inquiry',
        message: inquiryText.trim() || 'Client requested quick consultation from DEC Engineering blog.',
        source: 'Blog Consultation Sidebar',
      })
    } catch (err) {
      console.warn('Backend inquiry note:', err)
    }

    setInquirySuccess(true)
    setTimeout(() => {
      setInquiryName('')
      setInquiryPhone('')
      setInquiryText('')
      setInquirySuccess(false)
    }, 4000)
  }

  // Filtered posts for the Hub / Grid view (Categories computed dynamically from live database posts)
  const categories = useMemo(() => {
    const rawCategories = posts.map((p) => p.category).filter(Boolean)
    const unique = Array.from(new Set(rawCategories))
    return ['All', ...unique]
  }, [posts])
  
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        (post.title && post.title.toLowerCase().includes(q)) ||
        (post.leadExcerpt && post.leadExcerpt.toLowerCase().includes(q)) ||
        (Array.isArray(post.tags) && post.tags.some((t) => t.toLowerCase().includes(q)))
      return matchesCategory && matchesSearch
    })
  }, [posts, selectedCategory, searchQuery])

  // =========================================================================
  // VIEW 1: FULL BLOG ARTICLE DETAILS VIEW (When URL is /blog/:slug)
  // =========================================================================
  if (isDetailView && loadingSinglePost && !currentPost) {
    return (
      <div className="w-full min-h-[70vh] bg-[#151515] text-[#F5F0E7] flex items-center justify-center py-24">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#B08D57] border-t-transparent animate-spin mx-auto" />
          <p className="text-xs uppercase tracking-widest text-[#B08D57] font-bold">
            Loading Engineering Dossier...
          </p>
        </div>
      </div>
    )
  }

  if (isDetailView && !currentPost) {
    return (
      <div className="w-full min-h-[70vh] bg-[#151515] text-[#F5F0E7] flex items-center justify-center py-24 px-6">
        <div className="text-center space-y-4 max-w-md mx-auto">
          <FiShield className="w-12 h-12 text-[#B08D57] mx-auto opacity-60" />
          <h2 className="text-2xl font-bold text-white">Article Not Found</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            The requested engineering article could not be located or may have been updated.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#B08D57] text-[#151515] font-bold text-xs uppercase tracking-wider hover:bg-[#c59f65] transition-all"
          >
            <FiArrowLeft /> Back to Knowledge Hub
          </Link>
        </div>
      </div>
    )
  }

  if (isDetailView && currentPost) {
    const recentPosts = posts.filter((p) => (p._id || p.id) !== (currentPost._id || currentPost.id)).slice(0, 4)

    return (
      <div className="w-full bg-[#151515] text-[#F5F0E7] antialiased font-sans selection:bg-[#B08D57] selection:text-[#151515]">
        
        {/* Breadcrumb Bar */}
        <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 pt-6 mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#B08D57] hover:text-[#d4af72] transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* 1. Article Hero Section */}
        <section className="relative w-full min-h-[380px] lg:min-h-[440px] flex items-center justify-center overflow-hidden bg-[#111111] border-b border-[#B08D57]/20 mt-4">
          <div className="absolute inset-0 z-0 w-full h-full">
            <img 
              src={resolveImageUrl(currentPost.featuredImage)} 
              alt={currentPost.title} 
              className="w-full h-full object-cover object-center opacity-30 scale-100 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#151515]/70 to-[#151515] pointer-events-none" />
          </div>

          <div className="relative z-10 w-full max-w-5xl px-6 sm:px-10 lg:px-14 py-16 text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-xs mb-5">
              <FiShield className="text-xs shrink-0" />
              <span>{currentPost.category}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md">
              {currentPost.title}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-[#F5F0E7]/75 font-medium tracking-wide">
              Official Blog & Insights · Desentral Engineering Consultancy (DEC)
            </p>
          </div>
        </section>

        {/* 2. Article Body & Sidebar Grid */}
        <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 py-10 sm:py-14 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
            
            {/* Left 8 Cols: Main Article */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {currentPost.title}
                </h2>
              </div>

              {/* Lead Excerpt Box with Left Accent Line */}
              <div className="border-l-4 border-[#B08D57] bg-[#1a1a1a]/90 backdrop-blur-xs p-5 sm:p-6 rounded-r-2xl shadow-sm">
                <p className="text-sm sm:text-base text-[#F5F0E7]/90 leading-relaxed font-normal">
                  {currentPost.leadExcerpt}
                </p>
              </div>

              {/* Author & Meta Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1e1e1e]/90 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#F5F0E7]/80">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/40 text-[#B08D57] flex items-center justify-center font-bold text-xs shrink-0">
                      DEC
                    </span>
                    <span className="font-semibold text-white">
                      By {currentPost.author?.name || 'DEC Engineering Team'}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#B08D57]/15 text-[#d4af72] border border-[#B08D57]/30">
                    {currentPost.author?.role || 'Technical Consultant'}
                  </span>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <FiCalendar className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>Published: {formatArticleDate(currentPost.publishedDate, currentPost.createdAt)}</span>
                  </div>

                  <div className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <FiEye className="w-3 h-3" />
                    <span>{currentPost.viewsCount} Views</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
                  <span className="text-xs text-slate-400 font-medium">Share:</span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition-all text-xs"
                    title="Share on Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(currentPost.title + ' ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-all text-xs"
                    title="Share on WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-white flex items-center justify-center transition-all text-xs"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPost.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-slate-700/40 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all text-xs"
                    title="Share on X"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>

              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-md group">
                <img 
                  src={resolveImageUrl(currentPost.featuredImage)} 
                  alt={currentPost.title} 
                  className="w-full h-[260px] sm:h-[380px] lg:h-[440px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                />
                <div className="p-3 bg-[#181818] border-t border-white/5 text-center text-xs text-[#F5F0E7]/60">
                  Dec Engineering Technical Dossier · Grade A Consultative Review
                </div>
              </div>

              {/* Rich Blog Content (rendered from Rich WYSIWYG Editor) */}
              {currentPost.content && (
                <div 
                  className="blog-content space-y-4 text-sm sm:text-base leading-relaxed text-[#F5F0E7]/85 [&>h1]:text-2xl [&>h1]:font-extrabold [&>h1]:text-white [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:pt-3 [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:pb-2 [&>h3]:text-lg sm:[&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-[#d4af72] [&>p]:leading-relaxed [&>p]:text-[#F5F0E7]/80 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-1.5 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-1.5 [&>blockquote]:border-l-4 [&>blockquote]:border-[#B08D57] [&>blockquote]:bg-[#1a1a1a] [&>blockquote]:p-4 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-[#F5F0E7]/90 [&>pre]:bg-[#111] [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-white/10 [&>pre]:text-emerald-400 [&>pre]:overflow-x-auto [&>img]:rounded-xl [&>img]:max-w-full [&>img]:my-4 [&>img]:border [&>img]:border-white/10 [&>a]:text-[#B08D57] [&>a]:underline hover:[&>a]:text-[#d4af72]"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />
              )}

              {/* Article Content Sections (if structured sections provided) */}
              {currentPost.contentSections && currentPost.contentSections.length > 0 && (
                <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#F5F0E7]/85">
                  {currentPost.contentSections
                    .slice(0, isExpanded ? currentPost.contentSections.length : 2)
                    .map((sec) => (
                      <section 
                        key={sec.id} 
                        id={sec.id} 
                        className="scroll-mt-32 space-y-4 pt-2"
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                          <span className="w-1.5 h-6 rounded-full bg-[#B08D57] shrink-0" />
                          <span>{sec.title}</span>
                        </h3>

                        {sec.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-[#F5F0E7]/80 leading-relaxed font-normal">
                            {p}
                          </p>
                        ))}

                        {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                          <ul className="space-y-2.5 my-3 pl-2">
                            {sec.bulletPoints.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F0E7]/90">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] mt-2 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </section>
                    ))}
                </div>
              )}

              {/* View More / View Less Toggle */}
              {currentPost.contentSections && currentPost.contentSections.length > 2 && (
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#B08D57]/60 hover:border-[#B08D57] bg-[#1a1a1a] hover:bg-[#222222] text-[#B08D57] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <span>{isExpanded ? 'View Less' : 'View More'}</span>
                    {isExpanded ? (
                      <FiChevronUp className="w-4 h-4" />
                    ) : (
                      <FiChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}

              {/* Bottom Social Share Bar */}
              <div className="p-5 rounded-2xl bg-[#1c1c1c] border border-white/10 space-y-3.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                  <FiShare2 className="text-[#B08D57]" />
                  <span>Share Article:</span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <FaFacebookF />
                    <span>Facebook</span>
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(currentPost.title + ' ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <FaLinkedinIn />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPost.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs border border-white/15"
                  >
                    <FaXTwitter />
                    <span>Twitter</span>
                  </a>

                  <a
                    href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(currentPost.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <FaTelegram />
                    <span>Telegram</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5F0E7] font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer border border-white/10"
                  >
                    {copiedToast ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                    <span>{copiedToast ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>

                {copiedToast && (
                  <p className="text-xs text-emerald-400 font-semibold animate-in fade-in">
                    ✓ Article link copied to clipboard!
                  </p>
                )}
              </div>

              {/* Frequently Asked Questions */}
              {currentPost.faqs && currentPost.faqs.length > 0 && (
                <div className="pt-4 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Frequently Asked Questions
                    </h3>
                    <div className="w-16 h-1 rounded-full bg-[#B08D57]" />
                  </div>

                  <div className="space-y-3 pt-2">
                    {currentPost.faqs.map((faq, fIdx) => (
                      <div 
                        key={fIdx}
                        className="rounded-2xl border border-white/10 bg-[#1c1c1c] overflow-hidden transition-all duration-200"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-[#B08D57] transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-[#B08D57] font-bold">Q {fIdx + 1}.</span>
                            <span>{faq.q}</span>
                          </span>
                          {openFaqIndex === fIdx ? (
                            <FiChevronUp className="w-4 h-4 text-[#B08D57] shrink-0" />
                          ) : (
                            <FiChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </button>

                        {openFaqIndex === fIdx && (
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#F5F0E7]/80 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 Cols: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Card 1: Table of Contents */}
              {currentPost.tableOfContents && currentPost.tableOfContents.length > 0 && (
                <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white tracking-tight">
                      Table of Contents
                    </h4>
                    <div className="w-12 h-0.5 bg-[#B08D57]" />
                  </div>

                  <ul className="space-y-2.5 max-h-[280px] overflow-y-auto custom-scrollbar pr-1 text-xs sm:text-sm">
                    {currentPost.tableOfContents.map((item) => {
                      const isActive = activeTocId === item.id
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => handleScrollToSection(item.id)}
                            className={`w-full text-left transition-colors flex items-start gap-2 cursor-pointer ${
                              isActive
                                ? 'text-[#B08D57] font-bold'
                                : 'text-[#F5F0E7]/75 hover:text-white'
                            }`}
                          >
                            <span className={`text-[10px] mt-1 shrink-0 ${isActive ? 'text-[#B08D57]' : 'text-slate-500'}`}>
                              •
                            </span>
                            <span className="leading-snug">{item.title}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              {/* Card 2: Quick Inquiry Form */}
              <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-sm space-y-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Quick Inquiry
                  </h4>
                  <div className="w-12 h-0.5 bg-[#B08D57]" />
                </div>

                {inquirySuccess ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold space-y-1 text-center animate-in fade-in">
                    <p>✓ Thank you for reaching out!</p>
                    <p className="text-[11px] text-emerald-300">
                      A DEC Grade A engineer will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-[#F5F0E7]/80">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#B08D57]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-[#F5F0E7]/80">
                        Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="+974 XXXX XXXX or +20 XXX"
                        className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#B08D57]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-[#F5F0E7]/80">
                        Requirement / Service
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryText}
                        onChange={(e) => setInquiryText(e.target.value)}
                        placeholder="Tell us what you're looking for..."
                        className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#B08D57] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-[#B08D57] hover:bg-[#c49f65] text-[#151515] font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-[#B08D57]/20 transition-all cursor-pointer active:scale-98"
                    >
                      <FiSend className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Card 3: Recent Posts */}
              <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-sm space-y-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Recent Posts
                  </h4>
                  <div className="w-12 h-0.5 bg-[#B08D57]" />
                </div>

                <div className="space-y-3.5">
                  {recentPosts.map((post) => (
                    <div
                      key={post._id || post.id}
                      onClick={() => {
                        navigate(`/blog/${post.slug}`)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className="flex items-center gap-3 group cursor-pointer p-1.5 -mx-1.5 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-800 shrink-0 border border-white/10">
                        <img 
                          src={resolveImageUrl(post.featuredImage)} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <h5 className="text-xs font-bold text-white group-hover:text-[#B08D57] transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h5>
                        <div className="flex items-center gap-1.5 text-[11px] text-[#F5F0E7]/60">
                          <FiCalendar className="w-3 h-3 text-[#B08D57]" />
                          <span>{formatArticleDate(post.publishedDate, post.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 4: Need Consultation CTA Card */}
              <div className="rounded-2xl border border-[#B08D57]/30 bg-gradient-to-br from-[#0c1424] via-[#101b30] to-[#151f33] p-6 shadow-lg text-white space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B08D57]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-1.5 relative z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#B08D57]/20 text-[#d4af72] border border-[#B08D57]/30">
                    Grade A Engineering
                  </span>
                  <h4 className="text-lg font-extrabold text-white tracking-tight pt-1">
                    Need Engineering Advice?
                  </h4>
                  <p className="text-xs text-[#F5F0E7]/70 leading-relaxed">
                    Start your landmark architectural, structural, or MEP project with DEC’s licensed consultants.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs relative z-10">
                  <div className="text-[10px] font-bold tracking-wider uppercase text-[#B08D57]">
                    Call Us Directly:
                  </div>
                  <div className="space-y-1 text-slate-300 font-mono text-xs">
                    <a href="tel:+97444554383" className="block hover:text-white transition-colors flex items-center gap-2">
                      <FiPhone className="text-[#B08D57] w-3 h-3" /> +974 4455 4383 (Qatar HQ)
                    </a>
                    <a href="tel:+97431601117" className="block hover:text-white transition-colors flex items-center gap-2">
                      <FiPhone className="text-[#B08D57] w-3 h-3" /> +974 3160 1117 (Mobile/WA)
                    </a>
                    <a href="tel:+201101083005" className="block hover:text-white transition-colors flex items-center gap-2">
                      <FiPhone className="text-[#B08D57] w-3 h-3" /> +20 110 108 3005 (Egypt Hub)
                    </a>
                  </div>
                </div>

                <div className="space-y-2 relative z-10 pt-1">
                  <a
                    href="tel:+97444554383"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <FiPhone /> Call Now
                  </a>

                  <a
                    href="https://wa.me/97431601117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#B08D57] hover:bg-[#c49f65] text-[#151515] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <FaWhatsapp className="text-sm" /> WhatsApp Direct
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    )
  }

  // =========================================================================
  // VIEW 2: BLOG HUB & CARDS GRID (When URL is /blog - Matching User Screenshots)
  // =========================================================================
  return (
    <div className="w-full bg-[#151515] text-[#F5F0E7] antialiased font-sans selection:bg-[#B08D57] selection:text-[#151515]">
      
      {/* 1. HERO SECTION (Matching User Screenshot 2) */}
      <section className="relative w-full min-h-[340px] sm:min-h-[400px] flex items-center justify-center overflow-hidden bg-[#111111] border-b border-[#B08D57]/20">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/image copy 3.png" 
            alt="DEC Engineering Blog & Insights" 
            className="w-full h-full object-cover object-center opacity-30 scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#151515]/75 to-[#151515] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 sm:px-10 lg:px-14 py-16 text-center mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/40 text-[#B08D57] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-xs">
            <FiShield className="text-xs shrink-0" />
            <span>KNOWLEDGE HUB & ENGINEERING INTELLIGENCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Official Blog & Insights
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#F5F0E7]/80 font-normal max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest engineering trends, statutory insights, and multidisciplinary innovations from DEC Consultancy.
          </p>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 pt-10 pb-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#B08D57] text-[#151515] shadow-md shadow-[#B08D57]/20'
                    : 'bg-[#1e1e1e] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 bg-[#1e1e1e] border border-white/15 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#B08D57]"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="pt-4 text-xs text-slate-400 flex items-center justify-between">
          <span>
            {loadingPosts && posts.length === 0
              ? 'Loading engineering articles...'
              : <>Showing <strong>{filteredPosts.length}</strong> engineering articles</>}
          </span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-[#B08D57] hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>
      </div>

      {/* 3. 3-COLUMN BLOG CARDS GRID (Matching User Screenshot 1) */}
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 pb-20 mx-auto">
        {loadingPosts && posts.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#B08D57] border-t-transparent animate-spin mx-auto" />
            <p className="text-xs uppercase tracking-widest text-[#B08D57] font-bold">
              Loading Engineering Intelligence...
            </p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-20 text-center text-slate-400 text-sm">
            {searchQuery || selectedCategory !== 'All'
              ? 'No articles match your search criteria. Try a different query.'
              : 'No engineering articles published yet.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post._id || post.id}
                className="bg-[#1e1e1e] rounded-2xl border border-white/10 overflow-hidden shadow-md hover:border-[#B08D57]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => {
                  navigate(`/blog/${post.slug}`)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                {/* 1. Top Card Image */}
                <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={resolveImageUrl(post.featuredImage)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#151515]/85 text-[#B08D57] border border-[#B08D57]/40 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                {/* 2. Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Meta Row: Date & Author (Screenshot 1 Format) */}
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5 text-[#B08D57]">
                        <FiCalendar className="w-3.5 h-3.5" />
                        <span>{formatArticleDate(post.publishedDate, post.createdAt)}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-slate-400">
                        <FiUser className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[130px]">{post.author?.name || 'DEC Team'}</span>
                      </div>
                    </div>

                    {/* Card Title (Screenshot 1 Format) */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#B08D57] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Card Excerpt / Description (Screenshot 1 Format) */}
                    <p className="text-xs sm:text-sm text-[#F5F0E7]/70 leading-relaxed line-clamp-3 font-normal">
                      {post.leadExcerpt}
                    </p>
                  </div>

                  {/* 3. Centered "READ MORE" Button (Screenshot 1 Format) */}
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/blog/${post.slug}`)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className="px-6 py-2.5 rounded-lg bg-[#B08D57] hover:bg-[#c59f65] text-[#151515] font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#B08D57]/20 group-hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}
