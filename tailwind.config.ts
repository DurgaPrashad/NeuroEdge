import type { Config } from "tailwindcss"
const shadcnConfig = require("./node_modules/ui/tailwind.config.js")

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Primary brand colors
        // primary: {
        //   DEFAULT: '#3B82F6', // Blue
        //   foreground: '#FFFFFF',
        // },
        // // Dark mode background colors
        // background: {
        //   DEFAULT: '#FFFFFF',
        //   dark: '#0F172A', // Dark navy blue
        // },
        // // Card and component backgrounds
        // card: {
        //   DEFAULT: '#FFFFFF',
        //   dark: '#1E293B', // Slightly lighter navy
        // },
        // // Status colors
        status: {
          online: "#10B981", // Green
          warning: "#F59E0B", // Amber
          offline: "#EF4444", // Red
          neutral: "#6B7280", // Gray
        },
        // Chart colors
        chart: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          green: "#10B981",
          red: "#EF4444",
          yellow: "#F59E0B",
          teal: "#14B8A6",
          indigo: "#6366F1",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-dark": "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

