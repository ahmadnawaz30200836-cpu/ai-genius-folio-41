import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

const PROJECTS = [
  {
    title: "Sentiment Analyzer",
    description: "AI detects mood from text",
    tech: ["Python", "Hugging Face", "Lovable"],
    badge: "AI Powered",
    demo: "https://lovable.dev/projects/1a390847-7949-41f2-af7e-767250fb5665",
    github: "https://github.com/ahmadnawaz",
  },
  {
    title: "Dataset Explorer",
    description: "Browse and analyze AI datasets",
    tech: ["Python", "Hugging Face", "Lovable"],
    badge: "Data Science",
    demo: "https://lovable.dev/projects/b9d0822f-87cd-4b32-9f9e-6482dda22f47",
    github: "https://github.com/ahmadnawaz",
  },
  {
    title: "AI Quiz Generator",
    description: "AI creates custom quizzes on any topic",
    tech: ["Python", "Lovable", "AI APIs"],
    badge: "Generative AI",
    demo: "https://lovable.dev/projects/fe8f6c2e-ad43-4fed-ae46-45031682df73",
    github: "https://github.com/ahmadnawaz",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          AI <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Things I built while learning how machines think.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <TiltCard className="flex h-full flex-col p-6">
              <span className="bg-gradient-brand self-start rounded-full px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                {p.badge}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 pt-2">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <ExternalLink className="size-3.5" /> Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="size-3.5" /> GitHub
                </a>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
