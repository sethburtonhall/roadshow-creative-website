import {
  Lock,
  Calculator,
  MapPin,
  ChartArea,
  type Icon as IconType,
  Code,
  Mails,
} from "@lucide/astro";

export interface ShortStack {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  icon: typeof IconType;
}

// Short Stacks = small, self-contained dev projects — side builds, experiments,
// personal tools, small client sites. Not employer work (that lives in the
// main Projects section or your resume). Add yours here as you ship them.
export const shortStacks: ShortStack[] = [
  {
    name: "Password Generator",
    description:
      "A simple password generator that allows you to generate strong customizable passwords",
    tags: ["Astro", "Shadcn", "Tailwind CSS"],
    href: "https://password-generator-aiman-hd.netlify.app/",
    icon: Lock,
  },
  {
    name: "TipTop",
    description:
      "A responsive tip calculator app that helps users calculate the correct tip and total cost of the bill per person",
    tags: ["Next.js", "React", "Shadcn", "Tailwind CSS"],
    href: "https://tip-top-app.netlify.app/",
    icon: Calculator,
  },
  {
    name: "50 States",
    description: "Select the US states that you have visited",
    tags: ["Svelte", "TypeScript", "Shadcn", "Tailwind CSS", "Amcharts"],
    href: "https://50-states.netlify.app/",
    icon: MapPin,
  },
  {
    name: "Data Viz",
    description: "A data visualization dashboard prototype",
    tags: [
      "Alpine.js",
      "Astro",
      "React",
      "TypeScript",
      "Shadcn",
      "Tailwind CSS",
    ],
    href: "https://data-viz-dashboard.netlify.app/",
    icon: ChartArea,
  },
  {
    name: "Get Hub",
    description: "Search and view users via the Github API",
    tags: [
      "Astro",
      "Github API",
      "HTMX",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    href: "https://gethub.netlify.app/",
    icon: Code,
  },
  {
    name: "Newsletter Signup",
    description:
      "Newsletter signup form with error handling, focus management, screenreader accessibility and css animation",
    tags: ["ConvertKit API", "Netlify", "Remix", "Tailwind CSS"],
    href: "https://remix-newsletter-signup-form.netlify.app/",
    icon: Mails,
  },
];
