/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        border: 'var(--color-border)', /* saddle-brown-20 */
        input: 'var(--color-input)', /* saddle-brown-20 */
        ring: 'var(--color-ring)', /* green-800 */
        background: 'var(--color-background)', /* off-white */
        foreground: 'var(--color-foreground)', /* gray-900 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* green-800 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* saddle-brown */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* firebrick */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* warm-gray-50 */
          foreground: 'var(--color-muted-foreground)', /* gray-600 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* chocolate */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* gray-900 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* warm-gray-50 */
          foreground: 'var(--color-card-foreground)', /* gray-900 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* forest-green */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* dark-orange */
          foreground: 'var(--color-warning-foreground)', /* gray-900 */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* firebrick */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        heritage: 'var(--color-heritage)', /* saddle-brown */
        civic: 'var(--color-civic)', /* blue-700 */
        conversion: 'var(--color-conversion)', /* emerald-500 */
        trust: 'var(--color-trust)', /* gray-50 */
        cta: 'var(--color-cta)', /* red-500 */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        headline: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        cta: ['Nunito Sans', 'sans-serif'],
        accent: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(45, 90, 39, 0.1)',
        'card': '0 4px 16px rgba(139, 69, 19, 0.1)',
        'elevated': '0 8px 32px rgba(139, 69, 19, 0.15)',
        'hover': '0 16px 48px rgba(139, 69, 19, 0.25)',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}