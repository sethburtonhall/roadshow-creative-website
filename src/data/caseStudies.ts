export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  results: string;
  tags: string[];
  year: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "energy-tech-modernization",
    title: "Energy Tech Website Modernization",
    industry: "Energy Tech",
    summary:
      "Modernized a solar energy company's web presence with an agentic engineering approach, replacing legacy infrastructure with cutting-edge AI-powered tooling.",
    problem:
      "Legacy website infrastructure limited scalability, lacked modern UX patterns, and couldn't support dynamic content workflows. The team needed a platform that could evolve as fast as their product innovation.",
    solution:
      "Built a modern Next.js + Contentful stack with agentic engineering at its core. Integrated AI-powered content generation, automated workflows, and a design system that prioritized developer velocity. The result: a platform that ships features in days instead of weeks.",
    results:
      "Enabled rapid iteration on marketing content, reduced deployment friction, and created a scalable foundation for future product integrations. Team can now maintain and extend the platform without bottlenecks.",
    tags: [
      "Next.js",
      "TypeScript",
      "Contentful",
      "Agentic Engineering",
      "AI Integration",
    ],
    year: "2024",
    link: "https://www.maticdigital.com/work/brand-design-and-creative/nextpower-formerly-nextracker",
  },
  {
    slug: "enterprise-platform-modernization",
    title: "Enterprise Platform CMS Migration",
    industry: "Enterprise Benefits & Wellness",
    summary:
      "Led frontend modernization of a benefits platform, migrating from legacy Drupal infrastructure to a modern headless CMS architecture.",
    problem:
      "Aging Drupal-based system created maintenance overhead, slower content updates, and suboptimal user experience. The platform needed to serve millions of users accessing benefits tools while maintaining reliability.",
    solution:
      "Architected a migration to Contentful + Uniform headless CMS with modern React frontend patterns. Optimized component architecture, implemented intelligent caching, and streamlined the content management workflow. Prioritized performance and accessibility throughout.",
    results:
      "Significantly improved page load times, reduced content management overhead, and created a more maintainable codebase. The platform now handles scale efficiently while delivering a noticeably faster user experience across the benefits tools.",
    tags: [
      "React",
      "Next.js",
      "Contentful",
      "Uniform",
      "TypeScript",
      "Performance Optimization",
    ],
    year: "2023",
    link: "https://tools.silversneakers.com/",
  },
];
