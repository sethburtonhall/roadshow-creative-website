export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href?: string;
  caseStudyHref?: string;
  featured?: boolean;
  year: string;
  status: "live" | "in-progress" | "concept" | "coming soon";
  imageSrc?: string;
}

export const projects: Project[] = [
  {
    slug: "premise",
    title: "Premise",
    tagline: "Brief in. Scope out.",
    description:
      "An AI-powered technical scoping tool for design agencies. Paste a client brief and get a proposal-ready scope document in seconds — stack recommendation, phase breakdown, cost estimates, risks, and next steps.",
    tags: [
      "Next.js",
      "TypeScript",
      "Neon",
      "Clerk",
      "Anthropic",
      "Vercel",
      "shadcn/ui",
    ],
    href: "https://usepremise.app",
    featured: true,
    year: "2026",
    status: "live",
  },
  {
    slug: "village",
    title: "Village",
    tagline: "Group sign-ups made simple",
    description:
      "A SaaS platform that simplifies event organization and group sign-ups for communities, teams, and cohorts. Built with a modern, intuitive UX as a fresh alternative to overcomplicated solutions.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "Clerk",
      "Vercel",
      "Loops",
      "shadcn/ui",
    ],
    href: "https://www.usevillage.app",
    caseStudyHref: "/work/village",
    // featured: true,
    year: "2026",
    status: "live",
  },
  {
    slug: "village-venues",
    title: "Village Venues",
    tagline: "Connect spaces with communities",
    description:
      "Transform your venue into a hub for local events. Connect with organizers, fill your calendar, and become a cornerstone of community life.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Neon",
      "Clerk",
      "Vercel",
      "Loops",
      "shadcn/ui",
    ],
    href: "https://www.usevillage.app/venues",
    caseStudyHref: "/work/village",
    // featured: true,
    year: "2026",
    status: "live",
  },
  {
    slug: "village-live",
    title: "Village Live",
    tagline: "Real-time event management",
    description:
      "A companion app to Village that brings events to life in real-time. Features live timeline control, attendee check-in sync, crowd reactions, Q&A management, and instant broadcasts — all designed to run seamless in-person and hybrid events.",
    tags: [
      "RedwoodSDK",
      "TypeScript",
      "React",
      "Cloudflare Workers",
      "Clerk",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    href: "https://usevillage.app/live",
    // featured: true,
    year: "2026",
    status: "live",
  },
  {
    slug: "aiman-hd",
    title: "Aiman H.D.",
    tagline: "The Hybrid Developer",
    description:
      "Personal portfolio for a developer at the frontier of human-AI collaboration. A minimalist Astro site with an enigmatic editorial aesthetic — where code meets concept, and the line between human ingenuity and machine intelligence deliberately blurs.",
    tags: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vite",
      "Netlify",
    ],
    href: "https://aiman-hd.netlify.app/",
    // featured: true,
    year: "2025",
    status: "live",
  },
];
