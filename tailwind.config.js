/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#F7F5F0",
          card: "#FFFFFF",
          subtle: "#EFECE6",
          dark: "#171A19",
          darkCard: "#212524",
        },
        charcoal: {
          DEFAULT: "#171717",
          muted: "#5F6368",
          light: "#8C9196",
        },
        teal: {
          accent: "#176B67",
          hover: "#125451",
          subtle: "#EBF5F4",
          border: "#B2DCD9",
        },
        gold: {
          accent: "#D6A85F",
          subtle: "#FDF8F0",
          border: "#F3E3C8",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(23, 23, 23, 0.04)',
        'card': '0 4px 20px rgba(23, 23, 23, 0.06)',
        'editorial': '0 20px 40px -15px rgba(23, 23, 23, 0.08)',
        'dark-card': '0 4px 20px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
