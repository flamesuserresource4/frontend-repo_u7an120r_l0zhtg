import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero({ onCTAClick }) {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0b1020] to-[#0f1733] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/60 via-[#0b1020]/70 to-[#0b1020] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Unlock Your AI Opportunity—In Real Time
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">
            No more guessing. No wasted spend. Meet your personal AI Audit Agent.
            Have a real-time conversation. Get actionable insights and a full strategic
            roadmap—in minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={onCTAClick} className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-lg font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
              Try Your Free AI Audit Now
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              title: 'Instant',
              text: 'Get your audit now. No bookings or waiting.',
            },
            {
              title: 'Confidential',
              text: 'Private interview, just you and your agent.',
            },
            {
              title: 'Actionable',
              text: 'Receive your personalized report within minutes.',
            },
          ].map((b, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-wider text-white/60">{b.title}</p>
              <p className="mt-1 font-medium">{b.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-white/90"
        >
          <p className="text-lg italic">"Within minutes I discovered exactly what was draining profit from our business. The clarity was instant—no meetings, just results."</p>
          <footer className="mt-3 text-sm text-white/70">– Alex T., Retail COO</footer>
        </motion.blockquote>
      </div>
    </section>
  )
}

export default Hero
