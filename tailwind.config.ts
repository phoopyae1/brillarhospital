import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0ea5e9", dark: "#0369a1", light: "#e0f2fe" }
      },
      borderRadius: { xl: "16px", "2xl": "20px" },
      boxShadow: { card: "0 1px 2px rgba(0,0,0,.06)" }
    }
  },
  plugins: []
} satisfies Config;