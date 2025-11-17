function FinalCTA({ onCTAClick }) {
  return (
    <section className="bg-[#0f1733] text-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Unlock Hidden AI Potential—In Minutes</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">Start your real-time interview with our AI Audit Agent. One-to-one. No meetings. No bookings. Get instant clarity on what’s costing you time, money, and growth.</p>
        <button onClick={onCTAClick} className="mt-6 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-lg font-semibold shadow-lg">Try it free—get your personalized audit now</button>
        <p className="mt-4 text-sm text-white/70">🔒 Your data is always protected (end-to-end encryption, no sharing, no sales spam).</p>
      </div>
    </section>
  )
}

export default FinalCTA
