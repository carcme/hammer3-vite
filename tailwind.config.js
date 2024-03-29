const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
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
      transformOrigin: {
        0: "0%",
      },
      backgroundImage: {
        gallows: 'url("assets/gallows.webp")',
        headlights: 'url("assets/misty-car-headlights.webp")',
      },
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
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
        Hind: ["Hind"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        txtBlur: {
          from: { filter: "blur(50px) opacity(0)" },
          to: { filter: "blur(0px) opacity(1)" },
        },
        bgBlur: {
          from: { filter: "blur(50px)", transform: "scale(1.2)" },
          to: { filter: "blur(0px)", transform: "scale(1)" },
        },
        shuffle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(2px)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
        fadeIn: {
          from: { filter: "opacity(0)" },
          to: { filter: "opacity(1)" },
        },
        shimmer: {
          "100%": { left: "125%" },
        },

        flash: {
          from: {
            transform: "before:scale(0)",
          },
          to: {
            transform: "before:scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        txtBlur: "txtBlur 1s 0.5s backwards",
        bgBlur: "bgBlur 1s",
        fadeIn: "fadeIn 2s 0.5s backwards",
        flash: "flash 0.5s ",
        shuffle: "shuffle 0.5s infinite linear",
        wave: "wave 1s ease-in-out infinite ",
        shimmer: "shimmer, 1s infinite linear",
      },
    },
  },
  plugins: [Myclass, require("tailwindcss-animate")],
};
