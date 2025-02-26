import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8BAC3E",       // Primary green
        lightPrimary: "#F0FEEB",  // Light green for background or highlights
        secondary: "#40A2B1",     // Secondary blue-green
        lightSecondary: "#E6F3F5",// Lighter blue-green, soft background
        accent: "#405EB6",        // Accent blue for links or buttons
        lightAccent: "#EAEEFA",   // Light blue for background highlights
        danger: "#B23F74",        // Redish pink for error or warnings
        lightDanger: "#F9EEF3",   // Light red-pink for softer error background
        success: "#A4B441",       // Success green
        lightSuccess: "#F3F7D9",  // Light greenish-yellow for success highlights
        
        background: "var(--background)", // Custom background
        foreground: "var(--foreground)", // Custom foreground
      },
    },
  },
  plugins: [],
} satisfies Config;
