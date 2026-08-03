import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light backgrounds — white / minty-white, econet-style
        cream: {
          DEFAULT: "#FFFFFF",
          light: "#FFFFFF",
          soft: "#F1F8F4",
        },
        // Kept only for the client's own logo mark / tiny brand touches
        forest: {
          DEFAULT: "#1F4A34",
          dark: "#123023",
          deep: "#0B1F16",
          light: "#2E6B49",
        },
        // Brand accent green — CTAs, highlights, counters
        brand: {
          DEFAULT: "#41C575",
          light: "#7EE3A4",
          dark: "#2C9A5C",
        },
        // Deep green — dark sections, header bar, footer (echoes the
        // reference template's near-black-green tone)
        ink: {
          DEFAULT: "#0F2A1C",
          soft: "#0A1F14",
          light: "#1C3E2A",
        },
        muted: "#5C6E64",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        label: ["var(--font-heading)", "sans-serif"],
      },
      borderRadius: {
        blob: "58% 42% 61% 39% / 51% 44% 56% 49%",
        pill: "200px",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.12) translate(-1%,-1%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(14px) rotate(-4deg)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        spinSlow: "spinSlow 24s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
