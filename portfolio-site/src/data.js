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
    img: "https://www.karinnarocha.site/static/uploads/Lulunremimainpage.png",
    href: "/work/lulu-remi",
  },
  {
    tag: "PRODUCT · FULL STACK",
    title: "NurVIX",
    meta: "My own brand — built and marketed end to end.",
    left: "React · Django",
    right: "Live site →",
    img: "https://www.karinnarocha.site/static/uploads/Nurvixmainpage.png",
    href: "https://www.nurvix.live",
  },
  {
    tag: "WEB · MARKETING",
    title: "Albert Coaching",
    meta: "Coaching site & campaign management.",
    left: "Web · SEO · Social",
    right: "Case study →",
    img: "https://www.karinnarocha.site/static/uploads/Albertmainpage.png",
    href: "/work/albert",
  },
  {
    tag: "WEB · FITNESS",
    title: "Danielly's Fitness",
    meta: "Brand site for a fitness business.",
    left: "Web Development",
    right: "Case study →",
    img: "https://www.karinnarocha.site/static/uploads/Daniellymainpage.png",
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
    mainImage: "https://www.karinnarocha.site/static/uploads/Lulunremimainpage.png",
    shots: [
      "https://www.karinnarocha.site/static/uploads/lulunremileftside.png",
      "https://www.karinnarocha.site/static/uploads/lulunremirightside.png",
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
    mainImage: "https://www.karinnarocha.site/static/uploads/Albertmainpage.png",
    shots: [],
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
    mainImage: "https://www.karinnarocha.site/static/uploads/Daniellymainpage.png",
    shots: [],
    overview: "Write what the project was, what you did, and the result.",
    tools: ["Wordpress", "Woocomerce", "Elementor"],
  },

};

// Finds the right project for the URL — don't change this.
export function getCaseStudy(slug) {
  return CASE_STUDIES[slug] || Object.values(CASE_STUDIES)[0];
}