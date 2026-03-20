export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "full-stack",
    number: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end product engineering. Architecture, implementation, and deployment of web applications that are built to last — fast, secure, and scalable.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
  },
  {
    id: "frontend-ui",
    number: "02",
    title: "Frontend & UI Engineering",
    description:
      "Pixel-precise interfaces with modern design systems. Composable, accessible components that perform beautifully and delight users at every interaction.",
    tags: ["React", "Tailwind CSS", "shadcn/ui", "Motion"],
  },
  {
    id: "saas-build",
    number: "03",
    title: "SaaS Development",
    description:
      "Zero-to-one product builds. From concept through launch — auth, billing, onboarding, and the full product stack, shipped with speed and precision.",
    tags: ["SaaS", "Clerk", "APIs", "Email", "Supabase"],
  },
  {
    id: "tech-lead",
    number: "04",
    title: "Technical Leadership",
    description:
      "Fractional tech lead or CTO for creative agencies and early-stage teams. Architecture decisions, code standards, hiring guidance, and cross-functional communication.",
    tags: ["Strategy", "Architecture", "Code Review", "Team Guidance"],
  },
];
