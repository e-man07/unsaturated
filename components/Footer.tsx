import Link from "next/link";

type Col = { title: string; body?: React.ReactNode; links?: { href: string; label: string }[] };

const cols: Col[] = [
  {
    title: "Unsaturated Labs",
    body: (
      <>
        <p className="text-[15px] leading-[1.6] text-ink-2 max-w-[32ch] mb-4">
          A research-led SEO &amp; engineering studio for teams in AI and Web3.
        </p>
        <p className="font-mono text-[12px] text-ink-3 tracking-[0.02em]">hello@unsaturated.lab</p>
      </>
    ),
  },
  {
    title: "Desks",
    links: [
      { href: "/services-seo", label: "SEO & LLM" },
      { href: "/services-ai", label: "AI engineering" },
      { href: "/services-web3", label: "Web3 development" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Intake" },
    ],
  },
  {
    title: "Library",
    links: [
      { href: "/blog", label: "Field notes" },
      { href: "/blog-post", label: "Latest issue" },
      { href: "/design-system", label: "Design system" },
    ],
  },
  {
    title: "Operations",
    links: [
      { href: "#", label: "Status & uptime" },
      { href: "#", label: "Anti-portfolio" },
      { href: "#", label: "RSS · Atom" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone-2 pt-24 pb-12 mt-32">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 mb-20">
          {cols.map((c) => (
            <div key={c.title}>
              <h5 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 mb-4 font-medium">
                {c.title}
              </h5>
              {c.body}
              {c.links && (
                <ul className="list-none">
                  {c.links.map((l) => (
                    <li key={l.href + l.label} className="mb-2">
                      <Link href={l.href} className="text-[14px] text-ink-2 hover:text-ink transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div
          className="font-serif leading-[0.85] tracking-[-0.025em] text-ink mt-8"
          style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
        >
          unsaturated.
        </div>
        <div className="flex flex-wrap justify-between items-end gap-4 pt-6 border-t border-bone-3 mt-8">
          <span className="font-mono text-[12px] text-ink-3 tracking-[0.02em]">
            © 2026 Unsaturated Labs Ltd. · Reg. England 14882210
          </span>
          <span className="font-mono text-[12px] text-ink-3 tracking-[0.02em]">
            Latency: 38ms · Build #2c4b1a · All systems green
          </span>
        </div>
      </div>
    </footer>
  );
}
