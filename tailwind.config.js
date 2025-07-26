/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "var(--color-border)", /* white-10 */
        input: "var(--color-input)", /* dark-gray */
        ring: "var(--color-ring)", /* electric-blue */
        background: "var(--color-background)", /* deep-black */
        foreground: "var(--color-foreground)", /* white */
        primary: {
          DEFAULT: "var(--color-primary)", /* electric-blue */
          foreground: "var(--color-primary-foreground)", /* deep-black */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* vibrant-green */
          foreground: "var(--color-secondary-foreground)", /* deep-black */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* dark-gray */
          foreground: "var(--color-muted-foreground)", /* light-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* orange */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* dark-gray */
          foreground: "var(--color-popover-foreground)", /* white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* dark-gray */
          foreground: "var(--color-card-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* vibrant-green */
          foreground: "var(--color-success-foreground)", /* deep-black */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber */
          foreground: "var(--color-warning-foreground)", /* deep-black */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red */
          foreground: "var(--color-error-foreground)", /* white */
        },
        'text-primary': "var(--color-text-primary)", /* white */
        'text-secondary': "var(--color-text-secondary)", /* light-gray */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'cta': 'var(--shadow-cta)',
        'card': 'var(--shadow-card)',
      },
      transitionDuration: {
        'default': '250ms',
      },
      transitionTimingFunction: {
        'default': 'ease-out',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px var(--color-primary)" },
          "50%": { boxShadow: "0 0 20px var(--color-primary)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}