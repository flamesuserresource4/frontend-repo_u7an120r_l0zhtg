import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FAQ() {
  const items = [
    {
      q: 'How does the audit work?',
      a: 'Real-time chat with an AI agent; instant report when finished.',
    },
    {
      q: 'Is my data secure?',
      a: 'Transcripts are end-to-end encrypted; only you have access.',
    },
    {
      q: 'Do I need to involve my team?',
      a: 'No, you get personal clarity first—it’s your strategy.',
    },
    {
      q: 'What does it cost?',
      a: 'Your first audit is free, with no obligation.',
    },
    {
      q: 'How accurate is it?',
      a: 'Our AI agent uses proven frameworks and best practices—always tailored to your answers.',
    },
    {
      q: 'What happens next?',
      a: 'Your actionable report unlocks your ROI roadmap. You choose if/when to act.',
    },
  ]

  const [open, setOpen] = useState(null)

  return (
    <section className="bg-[#0b1020] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <button key={i} className="w-full text-left px-5 py-4 flex items-start justify-between gap-4" onClick={() => setOpen(isOpen ? null : i)}>
                <div>
                  <p className="font-semibold">{it.q}</p>
                  {isOpen && <p className="mt-1 text-white/80">{it.a}</p>}
                </div>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
