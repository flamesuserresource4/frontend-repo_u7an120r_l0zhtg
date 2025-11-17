function Opportunity() {
  const cols = [
    {
      title: 'Quick Wins',
      subtitle: 'Immediate ROI (days/weeks)',
      items: ['Automate follow-up emails, data entry'],
    },
    {
      title: 'Big Swings',
      subtitle: 'Transformative ROI (months)',
      items: ['Automate end-to-end sales process'],
    },
    {
      title: 'Small Improvements',
      subtitle: 'Easy optimizations',
      items: ['AI for meeting notes'],
    },
  ]

  return (
    <section className="bg-[#0f1733] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Opportunity Types</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {cols.map((c, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="text-white/70">{c.subtitle}</p>
              <ul className="mt-3 list-disc list-inside text-white/90">
                {c.items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Opportunity
