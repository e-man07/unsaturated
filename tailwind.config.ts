import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F4F1EC",
        "bg-2": "#EFEBE2",
        surface: "#FBF9F4",
        "surface-2": "#ECE7DC",
        ink: "#1A1A1A",
        "ink-2": "#3A352D",
        "ink-3": "#6B6457",
        "ink-4": "#9A9183",
        bone: "#C8C2B5",
        "bone-2": "#DCD6C8",
        "bone-3": "#E8E3D6",
        signal: "#1F8A5B",
        "signal-2": "#176C46",
        "signal-tint": "#DEEAE0",
        "signal-glow": "rgba(31,138,91,0.12)",
        amber: "#B96A1F",
        rust: "#A8401E",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Times New Roman", "serif"],
        sans: [
          "var(--font-geist-sans)",
          "-apple-system",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
      },
      keyframes: {
        "scroll-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        blink: {
          to: { visibility: "hidden" },
        },
      },
      animation: {
        "scroll-x": "scroll-x 60s linear infinite",
        pulse: "pulse 1.6s ease-in-out infinite",
        blink: "blink 1s steps(2, start) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
