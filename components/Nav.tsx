import Link from "next/link";

const navLinks: { href: string; label: string }[] = [
  { href: "/services-seo", label: "SEO" },
  { href: "/services-ai", label: "AI" },
  { href: "/services-web3", label: "Web3" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Field Notes" },
  { href: "/design-system", label: "System" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md backdrop-saturate-150 border-b border-bone-2">
      <div className="max-w-[1320px] mx-auto px-8 flex items-center justify-between h-[60px]">
        <Link href="/" className="flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.02em]">
          <span
            className="w-[18px] h-[18px] border border-ink rounded-full block"
            style={{
              background:
                "radial-gradient(circle at 32% 35%, var(--ink) 0 4px, transparent 4.5px), var(--bg)",
            }}
          />
          <span className="font-semibold tracking-[0.04em] uppercase">Unsaturated</span>
          <span className="text-ink-3 font-normal">Labs / EST 2024</span>
        </Link>

        <nav className="hidden md:flex gap-6 font-mono text-[12px] text-ink-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1.5 py-1 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-ink text-bg font-mono text-[11px] tracking-[0.06em] uppercase border border-ink hover:bg-signal-2 hover:border-signal-2 transition-colors"
        >
          Book intake →
        </Link>
      </div>
    </header>
  );
}
