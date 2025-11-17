import { motion } from 'framer-motion'
import { Play, MessageSquare, FileChartColumnIncreasing } from 'lucide-react'

function HowItWorks({ onCTAClick }) {
  const steps = [
    {
      icon: Play,
      title: 'Start Your Audit',
      desc: 'Launch instantly, no need to book or schedule. Interview begins immediately.',
    },
    {
      icon: MessageSquare,
      title: 'Talk to Your AI Agent',
      desc: 'Rapid-fire, targeted questions about your workday and pain points. Adaptive follow-ups, focused on YOU—not your whole team.',
    },
    {
      icon: FileChartColumnIncreasing,
      title: 'Get Instant Analysis',
      desc: 'Receive a personalized audit and strategic report. Your transformation starts now—not next week.',
    },
  ]

  return (
    <section className="bg-[#0f1733] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Your 15-Minute AI Audit (Live, Not Scheduled)</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <s.icon className="h-8 w-8 text-fuchsia-400" />
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sticky bottom-4">
          <button onClick={onCTAClick} className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-lg font-semibold shadow-lg">Start Audit Now</button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
