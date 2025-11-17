import { motion } from 'framer-motion'

function Differentiators() {
  const items = [
    {
      title: 'Live, One-to-One',
      desc: 'The agent interviews YOU in real time; results are personal, actionable, and confidential.',
    },
    { title: 'Effortless', desc: 'No booking, no setup, no complex forms.' },
    { title: 'Data Privacy', desc: 'All transcripts and results are securely stored and encrypted.' },
    { title: 'Instant Report', desc: 'Your roadmap, your numbers—shown immediately after.' },
    { title: 'AI-Powered Clarity', desc: 'No consultant bias. Unbiased, actionable diagnosis.' },
  ]

  return (
    <section className="bg-[#0f1733] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">What Makes This Audit Different?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }} className="rounded-xl p-5 bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators
