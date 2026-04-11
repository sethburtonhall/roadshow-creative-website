export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "tech-lead",
    number: "01",
    title: "Technical Leadership",
    description:
      "Embedded technical lead for agencies and early-stage teams. You bring the client relationship and the creative direction — I own the architecture, the code standards, and the technical delivery.",
    tags: ["Strategy", "Architecture", "Code Review", "Team Guidance"],
  },
  {
    id: "full-stack",
    number: "02",
    title: "Full-Stack Development",
    description:
      "End-to-end product engineering. Architecture, implementation, and deployment of web applications that are built to last — fast, secure, and scalable.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
  },
  {
    id: "agentic-engineering",
    number: "03",
    title: "Agentic Engineering",
    description:
      "End-to-end agentic system design and implementation, backed by 15+ years of full-stack experience. Utilizing AI-powered workflows that think, plan, and execute.",
    tags: ["AI", "Automation", "Workflow", "Intelligence"],
  },
  {
    id: "frontend-ui",
    number: "04",
    title: "Frontend & UI Engineering",
    description:
      "Pixel-precise interfaces with modern design systems. Composable, accessible components that perform beautifully and delight users at every interaction.",
    tags: ["React", "Tailwind CSS", "shadcn/ui", "Motion"],
  },
  {
    id: "saas-build",
    number: "05",
    title: "SaaS Development",
    description:
      "Zero-to-one product builds. From concept through launch — auth, billing, onboarding, and the full product stack, shipped with speed and precision.",
    tags: ["SaaS", "Clerk", "APIs", "Email", "Supabase"],
  },
];
