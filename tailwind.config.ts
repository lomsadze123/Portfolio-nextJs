import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-radial":
          "radial-gradient(circle at top center, rgba(71, 120, 235, 0.5) 0%, transparent 50%, transparent 100%)",
      },
    },
    keyframes: {
      fadeInUp: {
        "0%": { opacity: "0", transform: "scale(0.8)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
    },
    animation: {
      fadeInUp: "fadeInUp 1s ease-out forwards",
    },
  },
  plugins: [],
};
export default config;
