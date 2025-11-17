function Comparison() {
  const rows = [
    ['Response', 'Weeks to schedule', 'Instant access'],
    ['Cost', '$5,000-$50,000+', 'First audit free'],
    ['Coverage', 'Requires team/meetings', 'Just you, private'],
    ['Output', 'PDF, slides, jargon', 'Interactive, action-focused'],
    ['Friction', 'Sales calls, negotiation', 'Zero friction, zero pressure'],
    ['Results', 'Unclear ROI, slow', 'Clear roadmap in minutes'],
  ]

  return (
    <section className="bg-[#0b1020] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Comparison</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
          <div className="grid grid-cols-3 bg-white/5 text-sm sm:text-base">
            <div className="px-4 py-3 font-semibold">Traditional Consulting</div>
            <div className="px-4 py-3 font-semibold">&nbsp;</div>
            <div className="px-4 py-3 font-semibold">AI Audit Agent</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-3 border-t border-white/10">
              <div className="px-4 py-3 bg-white/5 text-white/80">{r[0]}</div>
              <div className="px-4 py-3">{r[1]}</div>
              <div className="px-4 py-3">{r[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comparison
