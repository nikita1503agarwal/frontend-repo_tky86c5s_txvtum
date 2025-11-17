import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ContextStrip, Problem, HowItWorks, Features, UseCases, Pricing, WorkflowCTA, FAQ, Footer } from './components/Sections'
import { ArrowUpRight } from 'lucide-react'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.length > 1) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    links.forEach((l) => l.addEventListener('click', onClick))
    return () => links.forEach((l) => l.removeEventListener('click', onClick))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar />
      <Hero />
      <ContextStrip />
      <Problem />
      <HowItWorks />
      <Features />
      <UseCases />
      <Pricing />
      <WorkflowCTA />
      <FAQ />
      <Footer />

      {/* Sticky CTA on small screens */}
      <a
        href="#early-access"
        className="fixed bottom-4 right-4 md:hidden inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-emerald-600 text-white hover:bg-emerald-700"
      >
        Request Early Access <ArrowUpRight className="h-4 w-4" />
      </a>

      {/* Anchors for CTAs */}
      <div id="resources" />
      <div id="early-access" />
    </div>
  )
}

export default App
