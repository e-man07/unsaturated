import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-[1320px] mx-auto px-8 py-24 border-b border-bone-2">
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 font-medium">
        § 05 — Intake
      </span>
      <h2
        className="font-serif leading-[0.96] tracking-[-0.022em] max-w-[18ch] mb-8 mt-5"
        style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
      >
        We take on <span className="font-serif italic">six</span> new accounts per quarter.
        <br />
        Four left for <span className="text-signal">Q3</span>.
      </h2>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4.5 py-3 bg-ink text-bg border border-ink font-mono text-[12px] tracking-[0.08em] uppercase font-medium hover:bg-signal hover:border-signal transition-colors"
          style={{ padding: "12px 18px" }}
        >
          Book a 30-min audit call →
        </Link>
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 border border-ink text-ink font-mono text-[12px] tracking-[0.08em] uppercase font-medium hover:bg-ink hover:text-bg transition-colors"
          style={{ padding: "12px 18px" }}
        >
          See engagement shapes
        </Link>
      </div>
    </section>
  );
}
