type Item = [kw: string, src: string, pos: number, delta: number];

const items: Item[] = [
  ['"best rag framework"', "GPT-5", 3, +2],
  ['"web3 wallet onboarding"', "Google", 4, +1],
  ['"solidity audit cost"', "Perplexity", 1, 0],
  ['"ai seo agency"', "GPT-5", 2, +5],
  ['"smart contract security"', "Google", 7, +3],
  ['"llm citation engineering"', "Claude", 1, +1],
  ['"agent framework comparison"', "Perplexity", 2, +4],
  ['"erc-4337 explained"', "Google", 5, -1],
  ['"defi yield strategies"', "GPT-5", 9, +6],
  ['"rag vs fine-tuning"', "Claude", 1, 0],
  ['"layer 2 rollups guide"', "Google", 6, +2],
  ['"crypto agency seo"', "Perplexity", 3, +1],
];

function renderItem([kw, src, pos, d]: Item, key: string) {
  const dStr = d === 0 ? "—" : d > 0 ? `▲ ${d}` : `▼ ${Math.abs(d)}`;
  const dCls = d === 0 ? "text-signal" : d > 0 ? "text-signal" : "text-rust";
  return (
    <span key={key} className="inline-flex items-center gap-3 font-mono text-[12px] whitespace-nowrap">
      <span className="text-ink">{kw}</span>
      <span className="text-ink-3">
        {src} · #{pos}
      </span>
      <span className={`font-semibold ${dCls}`}>{dStr}</span>
      <span className="w-px h-[14px] bg-bone" />
    </span>
  );
}

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-ink bg-surface-2 overflow-hidden my-24">
      <div className="flex gap-10 py-3 animate-scroll-x whitespace-nowrap w-max">
        {doubled.map((it, i) => renderItem(it, String(i)))}
      </div>
    </div>
  );
}
