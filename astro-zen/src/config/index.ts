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
      "Software Engineer based in NYC. I specialize in UI design, web and mobile application development and maintenance. Currently accepting new clients. The best way to reach me is via email: desireeathomas@outlook.com",
    email: "desireeathomas@outlook.com",
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
      name: "Philly Water Ice FrontPage", 
      summary: "The front page of a small business site located in Philly.",
      linkPreview: "https://phillyshavedicecream.netlify.app/",
      linkSource: "https://github.com/desithomas/philly-water-ice",
      image: "/philly-water-ice.png",
    },
    {
      name: "Japanese Women's Leadership Institute", 
      summary: "Front page of a site dedicated to empowering Japanese women and their community.",
      linkPreview: "https://japanesewomenleadership.netlify.app/",
      linkSource: "https://github.com/desithomas/jwli-site",
      image: "/jwli-screenshot.png",
    },
    {
      name: "Delancey Bagels", 
      summary: "Front page of a bagel shop on Delancey in NYC.",
      linkPreview: "https://delanceybagels.netlify.app/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/delancey-bagels.png",
    },
  ],
  about: { //edit the contents
    description: `
      Hi, I’m Desiree, a Software Engineer with a knack for crafting seamless digital experiences online. With a background in non-profit work and data science, I bring a unique set of skills to your side. 

      I build robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what is possible. My projects range from innovative responsive web designs along with a focus on performance, security, and scalability. I integrate data analytics upon request. 
    `,
    image: "/desiree-big.jpeg", //edit the contents
  },
};

// #5755ff
