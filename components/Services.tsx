import Link from "next/link";

type Desk = {
  num: string;
  title: React.ReactNode;
  desc: string;
  bullets: string[];
  href: string;
};

const desks: Desk[] = [
  {
    num: "DESK / 01",
    title: (
      <>
        SEO &amp; LLM
        <br />
        visibility
      </>
    ),
    desc: "The core moat. We build internal-link graphs that read like Wikipedia and Google reads like canon. Then we make sure the LLMs do too.",
    bullets: [
      "Technical audits & topical maps",
      "LLM citation engineering",
      "Programmatic SEO at scale",
      "Authority & digital PR",
    ],
    href: "/services-seo",
  },
  {
    num: "DESK / 02",
    title: (
      <>
        AI product
        <br />
        engineering
      </>
    ),
    desc: "RAG, agents, evals. We ship AI features that survive contact with real users — and that get indexed by the systems they're built on.",
    bullets: [
      "Retrieval-augmented systems",
      "Agent workflows & tool use",
      "Evals, guardrails, observability",
      "Inference-cost engineering",
    ],
    href: "/services-ai",
  },
  {
    num: "DESK / 03",
    title: (
      <>
        Web3
        <br />
        development
      </>
    ),
    desc: "Solidity, indexers, account abstraction. The infra and the front-end. We hand you a product the search engines and the chain agree exists.",
    bullets: [
      "Smart contracts & audits",
      "Indexer & subgraph infra",
      "Onboarding & AA wallets",
      "Crypto-native growth",
    ],
    href: "/services-web3",
  },
];

export default function Services() {
  return (
    <section className="max-w-[1320px] mx-auto px-8 py-24">
      <div className="flex justify-between items-center flex-wrap gap-6 mb-8">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 font-medium">
          § 03 — Three desks, one shared scoreboard
        </span>
        <span className="font-mono text-[12px] text-ink-3">Engage one, get the brief on all three</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-bone rounded-sm overflow-hidden">
        {desks.map((d, i) => (
          <Link
            key={d.num}
            href={d.href}
            className={`group block p-12 md:px-8 md:py-12 bg-surface hover:bg-bg-2 transition-colors relative ${
              i < desks.length - 1 ? "border-b md:border-b-0 md:border-r border-bone" : ""
            }`}
          >
            <div className="font-mono text-[11px] text-ink-3 tracking-[0.12em]">{d.num}</div>
            <h3 className="font-serif text-[32px] leading-none my-6 mb-4 font-normal tracking-[-0.015em]">
              {d.title}
            </h3>
            <p className="text-[14px] text-ink-2 mb-5 leading-[1.6]">{d.desc}</p>
            <ul className="font-mono text-[11px] text-ink-3 list-none">
              {d.bullets.map((b) => (
                <li key={b} className="py-1.5 border-b border-bone-3">
                  <span className="text-ink-4">— </span>
                  {b}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1.5 mt-6 font-mono text-[11px] tracking-[0.08em] uppercase text-ink svc-link-underline">
              Read the desk brief →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
