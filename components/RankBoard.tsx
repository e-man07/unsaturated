"use client";

import { useEffect, useState } from "react";

type Row = { kw: string; src: string; pos: number; delta: number };

const initialRows: Row[] = [
  { kw: '"best rag framework 2026"', src: "GPT-5", pos: 1, delta: +2 },
  { kw: '"web3 onboarding ux"', src: "Google", pos: 3, delta: +4 },
  { kw: '"ai agent observability"', src: "Perplexity", pos: 2, delta: +1 },
  { kw: '"solidity audit checklist"', src: "Claude", pos: 1, delta: 0 },
  { kw: '"erc-4337 vs erc-7702"', src: "Google", pos: 5, delta: +3 },
  { kw: '"llm seo strategy"', src: "GPT-5", pos: 4, delta: +6 },
  { kw: '"crypto growth marketing"', src: "Perplexity", pos: 7, delta: -1 },
];

export default function RankBoard() {
  const [rows, setRows] = useState<Row[]>(initialRows);

  useEffect(() => {
    const id = setInterval(() => {
      setRows((prev) => {
        const next = prev.map((r) => ({ ...r }));
        const i = Math.floor(Math.random() * next.length);
        const shift = Math.random() < 0.5 ? -1 : 1;
        next[i].pos = Math.max(1, Math.min(20, next[i].pos + shift));
        next[i].delta += -shift;
        next[i].delta = Math.max(-3, Math.min(9, next[i].delta));
        return next;
      });
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-[1320px] mx-auto px-8 py-12">
      <div className="flex justify-between items-center mb-8 gap-6 flex-wrap">
        <div className="flex gap-6 items-center flex-wrap">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 font-medium">
            § 01 — Live board
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[11px] border border-signal rounded-full bg-signal-tint text-signal-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            Updated 4s ago
          </span>
        </div>
        <span className="font-mono text-[12px] text-ink-3 tracking-[0.02em]">
          Anonymized client rankings, refreshed in real time
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
        <div className="bg-surface border border-bone p-6 rounded-sm">
          <div className="grid grid-cols-[1fr_60px_60px_90px] md:grid-cols-[1fr_100px_80px_110px] gap-4 pb-3 border-b border-ink font-mono text-[10px] tracking-[0.12em] uppercase text-ink-3">
            <span>Query</span>
            <span>Source</span>
            <span className="text-right">Position</span>
            <span className="text-right">7-day Δ</span>
          </div>
          {rows.map((r, idx) => {
            const top = r.pos <= 3;
            const dStr = r.delta === 0 ? "—" : r.delta > 0 ? `+${r.delta}` : String(r.delta);
            const arrowCls =
              r.delta === 0
                ? ""
                : r.delta > 0
                ? "border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-signal"
                : "border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-rust";
            const dColor = r.delta > 0 ? "text-signal" : r.delta < 0 ? "text-rust" : "";
            return (
              <div
                key={idx}
                className={`grid grid-cols-[1fr_60px_60px_90px] md:grid-cols-[1fr_100px_80px_110px] gap-4 py-3 items-center font-mono text-[11px] md:text-[12px] ${
                  idx < rows.length - 1 ? "border-b border-bone-3" : ""
                }`}
              >
                <span className="text-ink">{r.kw}</span>
                <span className="text-ink-3">{r.src}</span>
                <span
                  className={`font-serif text-[22px] tabular-nums text-right ${
                    top ? "text-signal" : "text-ink"
                  }`}
                >
                  #{r.pos}
                </span>
                <span className="flex items-center gap-1 justify-end">
                  {r.delta !== 0 && (
                    <span className={`inline-block w-0 h-0 ${arrowCls}`} aria-hidden />
                  )}
                  <span className={`font-semibold ${dColor}`}>{dStr}</span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="bg-surface-2 border border-bone-2 p-8 rounded-sm flex flex-col gap-5">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 font-medium">
            What the board does
          </span>
          <p className="text-[17px] leading-[1.5] text-ink-2">
            Every client gets a public scoreboard. If their numbers go down, so does our retainer. We&apos;ve never
            had to discount.
          </p>
          <div className="grid grid-cols-2 gap-5 mt-auto">
            <div>
              <div className="font-serif tabular-nums" style={{ fontSize: 56, lineHeight: 0.9, letterSpacing: "-0.03em" }}>
                +412<span style={{ fontSize: 32 }}>%</span>
              </div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 mt-2">
                Avg. LLM mentions, 6 mo.
              </div>
            </div>
            <div>
              <div className="font-serif tabular-nums" style={{ fontSize: 56, lineHeight: 0.9, letterSpacing: "-0.03em" }}>
                17
              </div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 mt-2">
                Niche-1 keywords held
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
