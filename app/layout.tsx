import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unsaturated Labs — SEO research lab for AI & Web3",
  description:
    "A research-led agency for teams shipping AI and on-chain products. We rank you where buyers actually look now — in classic search, in ChatGPT, in Perplexity, in the model itself.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${GeistSans.variable} ${mono.variable}`}>
      <body data-screen-label="01 Home" className="font-sans bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
