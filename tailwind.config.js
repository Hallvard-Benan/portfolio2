/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-1": "var(--clr-bg-l1)",
        "light-2": "var(--clr-bg-l2)",
        "txt-light-1": "var(--clr-txt-l1)",
        "txt-dark-1": "var(--clr-txt-d1)",
        "txt-dark-2": "var(--clr-txt-d2)",
        "accent-500": "var(--clr-accent-500)",
        "accent-700": "var(--clr-accent-700)",
        "accent-900": "var(--clr-accent-900)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #020735 4.69%, #051a44 98.3%, rgba(10,31,74,0) 100%)",
        "clr-bg-gradient": "linear-gradient(var(--clr-bg-gradient))",
      },
      fontSize: {
        hero: "var(--fs-heading-hero-small)",
        "hero-lg": "var(--fs-heading-hero-large)",
        "heading-card": "var(--fs-heading-card)",
        "heading-section": "var(--fs-heading-section)",
        cta: "var(--fs-cta)",
        nav: "var(--fs-nav)",
        "bottom-nav": "var(--fs-bottom-nav)",
        paragraph: "var(--fs-paragraph)",
        "contact-icons": "var(--fs-contact-icons)",
        "contact-email": "var(--fs-contact-email)",
      },
      fontFamily: {
        primary: "var(--ff-primary)",
        accent: "var(--ff-accent)",
      },
      spacing: {
        "padding-mockups": "var(--padding-mockups)",
        "gap-hero-content": "var(--gap-hero-content)",
      },
      scale: {
        mockups: "var(--transform-mockups)",
      },
      fontWeight: {
        "fw-cta": "var(--fw-cta)",
        "fw-hero-s": "var(--fw-hero-s)",
        "fw-hero-l": "var(--fw-hero-l)",
        "fw-contact-link": "var(--fw-contact-link)",
      },
    },
  },
  plugins: [],
};
