import { useState } from "react";
import { Wand2 } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { Reveal } from "./Reveal";

const SKILLS = ["Python", "AI", "Web Development", "Data Analysis", "Prompt Engineering"];

const AI_DESCRIPTIONS = [
  "Ahmad blends Python fluency with a designer's eye — he prototypes models in a notebook, then ships them as glassy, fast web apps the same week.",
  "A self-taught AI builder who treats prompts like code: versioned, tested and refactored until the model behaves exactly as intended.",
  "Comfortable moving from a raw Hugging Face dataset to a deployed, responsive interface — data cleaning, analysis and UI all in one pass.",
];

export function About() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const regenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % AI_DESCRIPTIONS.length);
      setLoading(false);
    }, 700);
  };

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          About <span className="text-gradient">Me</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-[280px_1fr]">
        <Reveal className="justify-self-center">
          <div className="glass glow-neon rounded-3xl p-3">
            <img
              src={avatar}
              alt="AI-generated avatar of Ahmad Nawaz"
              width={768}
              height={768}
              loading="lazy"
              className="size-56 rounded-2xl object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm a 12th grade student passionate about AI. I build web apps using AI tools like
            Lovable, Python, and Hugging Face datasets.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="glass rounded-full px-4 py-1.5 text-xs font-medium text-primary"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="glass mt-7 rounded-2xl p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-widest text-primary">
                AI-generated skills summary
              </span>
              <button
                onClick={regenerate}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Wand2 className="size-3.5" /> Regenerate
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {loading ? "AI is writing…" : AI_DESCRIPTIONS[index]}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
