import { useCallback } from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Stories from './components/Stories'
import Differentiators from './components/Differentiators'
import Comparison from './components/Comparison'
import Opportunity from './components/Opportunity'
import Risk from './components/Risk'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  const handleStartAudit = useCallback(() => {
    // For now, navigate to the test page or trigger a modal in future
    window.location.href = '/test'
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#0b1020] text-white">
      <Hero onCTAClick={handleStartAudit} />
      <Problem />
      <HowItWorks onCTAClick={handleStartAudit} />
      <Stories />
      <Differentiators />
      <Comparison />
      <Opportunity />
      <Risk onCTAClick={handleStartAudit} />
      <Testimonials />
      <FAQ />
      <FinalCTA onCTAClick={handleStartAudit} />
    </div>
  )
}

export default App
