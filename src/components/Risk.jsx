function Risk({ onCTAClick }) {
  return (
    <section className="bg-[#0b1020] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">What If You Keep Guessing?</h2>
        <p className="mt-3 text-white/80 max-w-3xl">Lost hours, lost profits, burned-out team. Competitors move while you hesitate. The real risk isn’t using AI—it’s using it blindly.</p>
        <button onClick={onCTAClick} className="mt-6 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-lg font-semibold shadow-lg">Try your real-time audit now. Stop guessing.</button>
      </div>
    </section>
  )
}

export default Risk
