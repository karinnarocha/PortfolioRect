// All editable content lives here so you never touch JSX to update copy/numbers.

export const HERO_STACK = [
  "React", "Next.js", "TypeScript", "Python", "Django", "PostgreSQL", "OpenAI API", "Shopify",
];


// Top metric strip — [number, label]
export const METRICS = [
  ["+12%", "Conversion rate — Shopify UX redesign"],
  ["10+", "Client products shipped"],
  ["AI", "Automations deployed"],
];

export const PROJECTS = [
  {
    tag: "E-COMMERCE · SHOPIFY",
    title: "Lulu & Remi",
    meta: "Full store build & growth — dev + marketing.",
    left: "Shopify · Liquid · JS",
    right: "+XX% sales →",
    img: "/Lulunremimainpage.png",
    href: "/work/lulu-remi",
  },
  {
    tag: "ARCHITECTURE · PORTFOLIO",
    title: "Hellen Architect",
    meta: "Modern portfolio built to showcase architectural work through strong visuals and minimal copy.",
    left: "React · UI/UX",
    right: "Live site →",
    img: "/HellenMainPage.png",
    href: "/work/hellen",
  },
  {
    tag: "WEB · MARKETING",
    title: "Albert Coaching",
    meta: "Coaching site & campaign management.",
    left: "Web · SEO · Social",
    right: "Case study →",
    img: "/Albertmainpage.png",
    href: "/work/albert",
  },
  {
    tag: "WEB · FITNESS",
    title: "Danielly's Fitness",
    meta: "Brand site for a fitness business.",
    left: "Web Development",
    right: "Case study →",
    img: "/Daniellymainpage.png",
    href: "/work/danielly",
  },
];

export const MARKETING_LIST = [
  ["SEO Architecture", "Metadata, page speed, and content hierarchy that lifts rankings"],
  ["Performance", "Code splitting & lazy loading — cut one client's load time 25%"],
  ["Next.js SSR", "Server-rendered React so client apps still rank in search"],
];

// Marketing stat tiles — [big, small, useLimeColor]
export const MARKETING_STATS = [
  ["25%", "FASTER PAGE LOADS", true],
  ["Next.js", "SSR / SSG FOR SEO", false],
  ["20%", "FASTER DB QUERIES", false],
  ["10+", "CLIENT SITES SHIPPED", true],
];

export const NAV_LINKS = ["work", "ai", "marketing", "contact"];

export const SOCIALS = [
  ["LinkedIn", "https://www.linkedin.com/in/karinnarocha/"],
  ["GitHub", "https://github.com/karinnarocha"],
  ["X", "https://x.com/_nurvix"],
];


export const AI = {
  heading: "I built a real-time translator for my Twitch chat.",
  copy:
    "My stream has a mix of English and Portuguese-speaking viewers, so I built a " +
    "live speech-to-text tool that transcribes what I say, auto-detects the language, " +
    "and instantly translates EN ↔ PT to an on-screen overlay — so everyone follows " +
    "along in real time, no matter which language they speak.",
};

export const AI_STACK = ["Python", "RealtimeSTT", "Speech-to-Text", "Auto Translation"];



/*
  CASE STUDY DATA
  To add a project: copy one block, change the values.
  The key in quotes (like "lulu-remi") becomes the URL: /work/lulu-remi
  Leave shots: [] if you only have the main image.
*/
export const CASE_STUDIES = {

  "lulu-remi": {
    tag: "E-Commerce · Shopify",
    title: "Lulu & Remi",
    lede: "A children's brand of interactive coloring–sticker books. I designed and built a clean, modern site that's easy for parents to shop.",
    liveUrl: "https://www.lulunremi.com",
    role: "Design + Dev",
    year: "2024",
    type: "E-commerce",
    stack: "Shopify",
    mainImage: "/Lulunremimainpage.png",
    shots: [
      "/lulunremileftside.png",
      "/lulunremirightside.png",
    ],
    overview: "I handled UI/UX design through front-end development, building a fully responsive site that highlights the books, showcases the characters, and delivers a smooth shopping experience. The result reflects the brand's heart: creativity, fun, and learning.",
    tools: ["Shopify", "React.js", "CSS", "Vercel", "Git"],
  },

  "albert": {
    tag: "Web · Marketing",
    title: "Albert Coaching",
    lede: "A coaching brand site paired with campaign management, built to turn visitors into booked clients.",
    liveUrl: "https://github.com/karinnarocha/Albert-coaching",
    role: "Design + Dev",
    year: "2024",
    type: "Web + Marketing",
    stack: "Web",
    mainImage: "/Albertmainpage.png",
    shots: [
      "/albertcoachingsidescreen.png",
      "/Albertprogrampage.png",
    ],
    overview: "Write what the project was, what you did, and the result.",
    tools: ["Web", "React.js", "CSS", "Vercel", "Git"],
  },

  "danielly": {
    tag: "Web · Fitness",
    title: "Danielly's Fitness",
    lede: "A brand site for a fitness business.",
    liveUrl: "https://daniellysfitness.com/",
    role: "Design + Dev",
    year: "2024",
    type: "Web",
    stack: "Web",
    mainImage: "/Daniellymainpage.png",
    shots: [
      "/daniellysideleft.png",
      "/daniellysidescreen.png",
    ],
    overview: "Write what the project was, what you did, and the result.",
    tools: ["Wordpress", "Woocomerce", "Elementor"],
  },

  "hellen": {
    tag: "Architecture · Portfolio",
    title: "Hellen Rocha",
    lede: "A modern architectural portfolio designed to showcase projects with strong visual storytelling and minimal distractions.",
    liveUrl: "https://yourhellenwebsite.com",
    role: "UI/UX + Frontend Development",
    year: "2024",
    type: "Portfolio Website",
    stack: "Web",
    mainImage: "/HellenMainPage.png",
    shots: [
      "/hellensideleft.png",
      "/hellensideright.png",
    ],
    overview:
      "I was responsible for the UI/UX design and front-end development of this clean and modern architecture portfolio. The goal was to create a visually driven experience where Hellen’s projects could speak for themselves, with minimal text and strong imagery. The final result reflects elegance, professionalism, and simplicity — matching her architectural identity.",
    tools: ["Next.js", "CSS", "Figma", "Git", "Vercel"],
  },

};

// Finds the right project for the URL — don't change this.
export function getCaseStudy(slug) {
  return CASE_STUDIES[slug] || Object.values(CASE_STUDIES)[0];
}