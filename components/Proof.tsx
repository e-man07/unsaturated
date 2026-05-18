type Stat = { num: string; unit: string; label: string };

const stats: Stat[] = [
  { num: "3.4", unit: "×", label: "Median organic traffic lift, year 1" },
  { num: "81", unit: "%", label: "Clients cited in GPT-5 answer" },
  { num: "$2.1", unit: "M", label: "Pipeline sourced for one Web3 client" },
  { num: "14", unit: "mo", label: "Average client retention" },
];

export default function Proof() {
  return (
    <section className="max-w-[1320px] mx-auto px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 font-medium mb-5">
            § 04 — Proof
          </div>
          <h2 className="font-serif text-[36px] leading-[1.1] tracking-[-0.015em] font-normal">
            Numbers we&apos;ll
            <br />
            defend in writing.
          </h2>
          <p className="text-[15px] leading-[1.6] text-ink-2 mt-5 max-w-[36ch]">
            Every metric on this page maps to a live client account. We&apos;ll show you the dashboard on the
            intake call.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 border border-bone bg-bone"
          style={{ gap: "1px" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-bg p-8">
              <div className="font-serif text-[88px] leading-[0.9] tracking-[-0.03em] tabular-nums">
                {s.num}
                <span className="text-[40px]">{s.unit}</span>
              </div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
