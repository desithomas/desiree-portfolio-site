import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Desiree Thomas — Mobile & Web Developer",
  author: "Desiree Thomas",
  description:
    "Software Engineer based in NYC. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg", //go back and change this
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/desithomSWE" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/desithom/" },
    { text: "Github", href: "https://github.com/desithomas" },
    { text: "Bluesky", href: "https://bsky.app/profile/desithom.bsky.social" },
    { text: "Youtube", href: "#" }, //create a YouTube account
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Desiree Thomas",
    specialty: "Mobile & Web Developer",
    summary:
      "Software Engineer based in NYC. I specialize in UI design, web and mobile application development and maintenance.",
    email: "dthomas.dt@outlook.com",
  },
  experience: [
    {
      company: "Resilient Coders",
      position: "Software Engineer",
      startDate: "Aug 2026",
      endDate: "Current",
      summary: [
        "x",
        "x",
        "x",
      ],
    },
    {
      company: "SEEK Program @ CUNY Brooklyn College",
      position: "Program Analyst",
      startDate: "Sep 2023",
      endDate: "Aug 2026",
      summary: [
        "x",
        "x",
      ],
    },
    {
      company: "Animal Care Center of NYC",
      position: "Surrender Prevention Coordinator",
      startDate: "x",
      endDate: "x",
      summary:
        "x",
    },
  ],
  projects: [
    {
      name: "Project 1 title", //edit the contents
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Project 2 title", //edit the contents
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "Project 3 title", //edit the contents
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: { //edit the contents
    description: `
      Hi, I’m Desiree, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in web development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      I have honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/desiree-big.jpeg", //edit the contents
  },
};

// #5755ff
