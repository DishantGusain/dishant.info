import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textprimary: "#FCD34D",
        textsecondary: "#9CA3AF",
        primaryBackground: "#030712",
        secondaryBackground: "#FCD34D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        ProfileAnimate: "ProfileAnimate 3s infinite",
        slideBottom: "slideBottom 1s ease forwards",
        slideTop: "slideTop 1s ease forwards",
        slideRight: "slideRight 2s  ease forwards",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        pulse: {
          "50%": {
            opacity: ".5",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },

        ProfileAnimate: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "linear",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "linear",
          },
        },

        slideBottom: {
          "0%": {
            transform: "translateY(-50px)",
            opacity: "0",
            animationTimingFunction: "ease-in",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
            animationTimingFunction: "ease-in",
          },
        },

        slideTop: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
            animationTimingFunction: "ease-in",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
            animationTimingFunction: "ease-in",
          },
        },

        slideRight: {
          "0%": {
            width: "0%",
            animationTimingFunction: "ease-in",
          },
          "100%": {
            animationTimingFunction: "ease-in",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
