import { motion } from 'framer-motion'
import { Gauge, TrendingUp, Users, Smile } from 'lucide-react'

function Stories() {
  const items = [
    {
      quote:
        'Before, our best people wasted hours doing manual research. With the AI Audit Agent, those bottlenecks were exposed in 10 minutes. We cut the time spent by 90% and unlocked six figures in annual profit.',
      author: 'Head of Sales, B2B SaaS',
      icon: Gauge,
    },
    {
      quote:
        "As a founder, I didn’t realize the hidden cost of daily operations. This wasn’t another spreadsheet; it was a live conversation that spotlighted exactly what was draining morale and money. One quick-win, and we became profitable within months.",
      author: 'CEO, Boutique Law Firm',
      icon: Users,
    },
    {
      quote:
        'I got the truth about our business in minutes. Not theory, not hype—concrete ROI. We stopped guessing and started scaling.',
      author: 'Managing Partner, Retail Group',
      icon: TrendingUp,
    },
  ]

  const icons = [
    { label: 'Time saved', Icon: Gauge },
    { label: 'ROI', Icon: TrendingUp },
    { label: 'Team motivation', Icon: Users },
    { label: 'Stress reduction', Icon: Smile },
  ]

  return (
    <section className="bg-[#0b1020] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Transformation Stories</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <item.icon className="h-7 w-7 text-fuchsia-400" />
              <p className="mt-3 text-white/90">“{item.quote}”</p>
              <footer className="mt-2 text-sm text-white/70">– {item.author}</footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {icons.map(({ label, Icon }, i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
              <Icon className="h-4 w-4 text-fuchsia-400" /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stories
