/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#080b14",
        },

        dark: {
          50: "#000000",
          100: "#1E293B",
          200: "#334155",
          300: "#475569",
          400: "#64748B",
          500: "#94A3B8",
          600: "#CBD5E1",
          700: "#E2E8F0",
          800: "#F8FAFC",
          900: "#F9FAFB",
        },

        accent: {
          50: "#F5F3FF",
          500: "#8800C8",
          600: "#2FC1FF",
        },
        lightgreen: "lightgreen",
        "error-red": "#a02020",
        "error-bg": "#ffe0e0",
        "info-blue": "#2020ae",
        "info-bg": "#e0e0ff",
      },
      screens: {
        "max-1200px": { max: "1200px" },
        "max-1045px": { max: "1045px" },
        "max-900px": { max: "900px" },
        "max-630px": { max: "630px" },
        "max-767px": { max: "767px" },
        "max-565px": { max: "565px" },
        "max-480px": { max: "480px" },
        "max-420px": { max: "420px" },
        "max-380px": { max: "380px" },
        "max-360px": { max: "360px" },
        "max-345px": { max: "345px" },
        lg: "1200px",
      },
      transitionProperty: {
        width: "width",
        transform: "transform",
      },
      fontFamily: {
        display: ["PP Mori", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
