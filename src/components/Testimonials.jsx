import { motion } from 'framer-motion'

function Testimonials() {
  const quotes = [
    'I thought we had an AI strategy; turns out, we only had a wishlist. This tool gave me a roadmap—no fluff, real change.',
    'In 15 minutes, I understood what was really holding us back. Gamechanger.',
  ]

  return (
    <section className="bg-[#0f1733] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">More Testimonials</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {quotes.map((q, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/90">“{q}”</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
