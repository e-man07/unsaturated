export default function Manifesto() {
  return (
    <section className="max-w-[1320px] mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-start">
      <div className="md:sticky md:top-[100px]">
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 font-medium mb-5">
          § 02 — Position
        </div>
        <h2 className="font-serif text-[36px] leading-[1.1] tracking-[-0.015em] font-normal">
          The market is saturated.
          <br />
          <span className="font-serif italic">We are not.</span>
        </h2>
        <p className="text-[15px] leading-[1.6] text-ink-2 mt-5">
          A note on the name. The first page of Google is a brawl; the first answer of an LLM is a vacuum. We
          work the second one.
        </p>
      </div>
      <div>
        <p className="font-serif text-[26px] md:text-[36px] leading-[1.25] tracking-[-0.012em] mb-8 text-ink-2">
          Most agencies sell <span className="text-ink">deliverables</span>. We sell a{" "}
          <span className="text-signal italic">defensible position</span> inside the models your customers
          already trust.
        </p>
        <p className="font-serif text-[26px] md:text-[36px] leading-[1.25] tracking-[-0.012em] mb-8 text-ink-2">
          Web3 founders spend <span className="text-ink">$40k a month</span> on growth that won&apos;t index by Q4.
          AI teams write docs that GPT can read but won&apos;t <span className="text-signal italic">cite</span>.
          Both fixable. Neither obvious.
        </p>
        <p className="font-serif text-[26px] md:text-[36px] leading-[1.25] tracking-[-0.012em] mb-8 text-ink-2">
          We publish what we learn — every{" "}
          <span className="text-ink">audit, every loss, every successful internal-linking schema</span> — and
          we stake our retainer on the scoreboard staying green.
        </p>
      </div>
    </section>
  );
}
