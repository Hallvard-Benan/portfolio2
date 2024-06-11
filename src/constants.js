const react = {
  name: "ReactJS",
  icon: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "react logo",
  },
};
const tailwind = {
  name: "Tailwind",
  icon: { url: "/icons/devicon_tailwindcss.png", alt: "tailwind logo" },
};
const shadCn = {
  name: "ShadCn UI",
  icon: { url: "/icons/simple-icons_shadcnui.png", alt: "shadCn logo" },
};
const typeScript = {
  name: "Typescript",
  icon: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "Typescript Logo",
  },
};
const nextJs = {
  name: "Next",
  icon: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "nextjs Logo",
  },
};
const airtable = {
  name: "Airtable",
  icon: {
    url: "/icons/airtable-icon.svg",
    alt: "airtable Logo",
  },
};
const html = {
  name: "HTML",
  icon: {
    url: "/icons/html-icon.svg",
    alt: "html Logo",
  },
};
const css = {
  name: "Next",
  icon: {
    url: "/icons/css-icon.svg",
    alt: "css Logo",
  },
};

const js = {
  name: "JS",
  icon: {
    url: "/icons/javascript-icon.svg",
    alt: "javascript Logo",
  },
};

export const projects = [
  {
    id: 1,
    title: "Holiday Helper",
    testUser: { email: "testeruser@stud.noroff.no", password: "testeruser" },
    description: [
      "A booking website where users can book and publish venues.",
      "This project was my final exam at Noroff.",
    ],
    image: "/images/Holiday helper desktop.png",
    deploy: "https://holidayhelper.netlify.app/",
    github: "https://github.com/Hallvard-Benan/Holidaze",
    stack: [react, tailwind, shadCn],
  },
  {
    id: 2,
    title: "Price club",
    description: [
      "A frontend for an online store",
      "Built in collaboration with a fellow student at Noroff.",
    ],
    image: "/images/price-club-desktop.png",
    deploy: "https://online-shop-six-roan.vercel.app/",
    github: "https://github.com/PetterMartin/online-shop",
    stack: [nextJs, tailwind, typeScript],
  },
  {
    id: 3,
    title: "Auction House",
    testUser: { email: "testeruser@stud.noroff.no", password: "testeruser" },
    description: [
      "An auction website, built with React and Tailwind",
      "Features register and login functionality, search, sort filters and pagination, as well as creating listings, and making bids on other listings.",
    ],
    image: "/images/Auctionhouse-desktop-.webp",
    deploy: "https://the-auctionhouse.netlify.app/",
    github: "https://github.com/Hallvard-Benan/auction-house",
    stack: [react, tailwind, shadCn],
  },
  {
    id: 4,
    title: "Beyond Pace",
    description: [
      "A running blog that was designed and built for my second semester exam at Noroff.",
      "The blog posts are all written by Chat GPT, and the content is hosted on Airtable, and the site is built with vanilla HTML, CSS and Javascript",
    ],
    image: "/images/beyond-pace-desktop.webp",
    deploy: "https://beyondpace.netlify.app/",
    github:
      "https://github.com/Noroff-FED-Campus-Assignments/fed1-exam-Hallvard-Benan",
    stack: [html, js, css],
    cms: airtable,
  },
];
