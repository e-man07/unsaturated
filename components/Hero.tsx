"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AuditWidget from "./AuditWidget";

type Phrase = [string, string, string];

const phrases: Phrase[] = [
  ["We rank AI & Web3 teams in the answers ", "people actually ask", "."],
  ["The next ten years of SEO will be ", "written into the model", ", not the page."],
  ["You can outwork your competitors, or you can ", "outweight", " them."],
  ["Most agencies sell deliverables. We sell ", "a defensible position", "."],
];

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
function jitter(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function Hero() {
  const [parts, setParts] = useState<{ a: string; b: string; c: string }>({ a: "", b: "", c: "" });
  const [kwCount, setKwCount] = useState(1284);

  useEffect(() => {
    let cancelled = false;

    async function typeOne(p: Phrase) {
      const [a, b, c] = p;
      // Type segment a
      for (let i = 0; i <= a.length; i++) {
        if (cancelled) return;
        setParts({ a: a.slice(0, i), b: "", c: "" });
        await sleep(jitter(28, 52));
      }
      // Type segment b (italic + signal color)
      for (let i = 0; i <= b.length; i++) {
        if (cancelled) return;
        setParts({ a, b: b.slice(0, i), c: "" });
        await sleep(jitter(28, 52));
      }
      // Type segment c
      for (let i = 0; i <= c.length; i++) {
        if (cancelled) return;
        setParts({ a, b, c: c.slice(0, i) });
        await sleep(jitter(28, 52));
      }
      await sleep(2400);
    }

    (async () => {
      let pi = 0;
      while (!cancelled) {
        await typeOne(phrases[pi]);
        pi = (pi + 1) % phrases.length;
        if (cancelled) return;
        setParts({ a: "", b: "", c: "" });
        await sleep(300);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setKwCount(1284 + Math.floor(Math.random() * 8));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-[1320px] mx-auto px-8 pt-24 pb-20 relative">
      <div className="flex justify-between items-center mb-12 gap-6 flex-wrap">
        <div className="flex gap-6 items-center flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[11px] border border-signal rounded-full bg-signal-tint text-signal-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            Tracking <span className="tabular-nums">{kwCount.toLocaleString()}</span> keywords live
          </span>
          <span className="font-mono text-[12px] text-ink-3 tracking-[0.02em]">
            No. 027 / Issue: Q2&nbsp;2026
          </span>
        </div>
        <span className="font-mono text-[12px] text-ink-3 tracking-[0.02em]">
          Cambridge · Lisbon · Remote
        </span>
      </div>

      <h1
        className="font-serif font-normal max-w-[17ch]"
        style={{
          fontSize: "clamp(60px, 9.2vw, 148px)",
          lineHeight: "0.92",
          letterSpacing: "-0.028em",
        }}
      >
        <span>
          {parts.a}
          {parts.b && (
            <span className="italic text-signal" style={{ fontStyle: "italic" }}>
              {parts.b}
            </span>
          )}
          {parts.c}
        </span>
        <span className="caret" />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-end">
        <div className="max-w-[56ch]">
          <p className="text-[19px] leading-[1.5] text-ink-2 tracking-[-0.005em]">
            Unsaturated Labs is a research-led agency for teams shipping AI and on-chain products. We rank you
            where buyers <span className="font-serif italic">actually</span> look now — in classic search, in
            ChatGPT, in Perplexity, in the model itself.
          </p>
          <div className="flex gap-3 mt-5 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ink text-bg border border-ink font-mono text-[12px] tracking-[0.08em] uppercase font-medium hover:bg-signal hover:border-signal transition-colors"
              style={{ padding: "12px 18px" }}
            >
              Get a ranking audit →
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-ink text-ink font-mono text-[12px] tracking-[0.08em] uppercase font-medium hover:bg-ink hover:text-bg transition-colors"
              style={{ padding: "12px 18px" }}
            >
              See the proof
            </Link>
          </div>
        </div>

        <AuditWidget />
      </div>
    </section>
  );
}
