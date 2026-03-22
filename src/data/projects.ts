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
  status: "live" | "in-progress" | "concept";
  imageSrc?: string;
}

export const projects: Project[] = [
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
    featured: true,
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
    year: "2025",
    status: "live",
  },
];
