"use client";

import { useRef, useState } from "react";

const steps = [
  "crawling…",
  "parsing schema…",
  "querying GPT-5…",
  "querying Perplexity…",
  "scoring…",
  "idle ✓ done",
];

const techGrades = ["A", "A-", "B+", "B", "C+"];

export default function AuditWidget() {
  const [url, setUrl] = useState("ledger.xyz");
  const [status, setStatus] = useState("idle");
  const [llm, setLlm] = useState<number | string>(62);
  const [google, setGoogle] = useState<number | string>(31);
  const [tech, setTech] = useState<string>("B+");
  const [gap, setGap] = useState<number | string>(14);
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function run() {
    if (!url.trim()) return;
    if (ivRef.current) clearInterval(ivRef.current);
    setStatus("crawling…");
    let step = 0;
    ivRef.current = setInterval(() => {
      step++;
      setStatus(steps[step] || steps[steps.length - 1]);
      setLlm(Math.floor(40 + Math.random() * 50));
      setGoogle(Math.floor(10 + Math.random() * 60));
      setTech(techGrades[Math.floor(Math.random() * techGrades.length)]);
      setGap(Math.floor(6 + Math.random() * 20));
      if (step >= steps.length - 1 && ivRef.current) {
        clearInterval(ivRef.current);
        ivRef.current = null;
      }
    }, 550);
  }

  return (
    <div className="bg-surface border border-bone rounded-sm p-5 flex flex-col gap-3">
      <div className="font-mono text-[12px] text-ink-3 tracking-[0.02em] flex justify-between">
        <span>{"// LIVE AUDIT — paste a URL"}</span>
        <span>{status}</span>
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 font-mono text-[13px] px-3.5 py-3 bg-surface border border-bone text-ink rounded-xs outline-none focus:border-ink transition-colors w-full"
          placeholder="yourdomain.xyz"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") run();
          }}
        />
        <button
          onClick={run}
          className="inline-flex items-center gap-2 bg-ink text-bg border border-ink font-mono text-[12px] tracking-[0.08em] uppercase font-medium hover:bg-signal hover:border-signal transition-colors"
          style={{ padding: "12px 18px" }}
        >
          Audit ↵
        </button>
      </div>
      <div className="pt-3 border-t border-bone-2 grid grid-cols-2 md:grid-cols-4 gap-3">
        <Cell value={llm} label="LLM visibility" />
        <Cell value={google} label="Google rank" />
        <Cell value={tech} label="Technical" />
        <Cell value={gap} label="Quick wins" />
      </div>
    </div>
  );
}

function Cell({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-serif text-[26px] leading-none tabular-nums">{value}</span>
      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-3">{label}</span>
    </div>
  );
}
