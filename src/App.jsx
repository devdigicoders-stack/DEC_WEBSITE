import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PageLoader from './components/PageLoader.jsx'

// Import 10 Core Pages + Dynamic SectorDetail
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OurTeam from './pages/OurTeam.jsx'
import Expertise from './pages/Expertise.jsx'
import Projects from './pages/Projects.jsx'
import Presence from './pages/Presence.jsx'
import WhyDEC from './pages/WhyDEC.jsx'
import Insights from './pages/Insights.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import SectorDetail from './pages/SectorDetail.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'

function AppLayout() {
  const location = useLocation()
  const [prevPath, setPrevPath] = useState(location.pathname)
  const [pageLoading, setPageLoading] = useState(false)
  const isFullHero = location.pathname === '/' || location.pathname === '/contact' || location.pathname === '/about' || location.pathname === '/team' || location.pathname === '/our-team' || location.pathname === '/careers' || location.pathname === '/expertise' || location.pathname === '/projects' || location.pathname === '/why-dec' || location.pathname === '/presence' || location.pathname === '/insights' || location.pathname === '/privacy-policy' || location.pathname === '/privacy' || location.pathname === '/terms-and-conditions' || location.pathname === '/terms' || location.pathname.startsWith('/sector/')

  // Synchronously activate loader on route change BEFORE DOM renders the new page
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname)
    setPageLoading(true)
  }

  // Trigger Logo Loader on Route Change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    const timer = setTimeout(() => {
      setPageLoading(false)
    }, 1100)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#151515] text-[#F5F0E7] flex flex-col font-sans selection:bg-[#B08D57] selection:text-[#151515] relative overflow-x-hidden">
      {/* Route Transition Logo Loader */}
      <PageLoader isLoading={pageLoading} />

      <Navbar />
      <main className={`flex-1 ${isFullHero ? 'pt-0' : 'pt-24 sm:pt-28'} ${pageLoading ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-300 ease-out'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/presence" element={<Presence />} />
          <Route path="/why-dec" element={<WhyDEC />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/sector/:slug" element={<SectorDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
