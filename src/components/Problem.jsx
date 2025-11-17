import { motion } from 'framer-motion'

function Problem() {
  return (
    <section className="relative w-full bg-[#0b1020] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold">
          You've Been Sold the AI Dream. Now Discover the Real ROI.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-white/80 max-w-3xl">
          Forget chasing shiny tools or moonshot projects. Countless companies pour millions into AI, only to see zero business impact. Why? Because they skip the most important step: understanding their real bottlenecks.
        </motion.p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            'Private discovery session, focused on your reality—not generic assumptions.',
            'Uncovers hidden costs, operational bottlenecks, and untapped opportunities.',
            'Delivers instant clarity, without a sales pitch.',
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
