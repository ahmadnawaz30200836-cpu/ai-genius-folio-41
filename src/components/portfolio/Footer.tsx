import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const FACTS = [
  "GPT-style models read text as tokens, not words — 'strawberry' is often 3 tokens.",
  "Hugging Face hosts over 200,000 public datasets you can load in one line of Python.",
  "The word 'neural network' dates back to 1943, long before modern GPUs existed.",
  "Fine-tuning a small model on good data often beats a huge model on messy data.",
  "Prompt engineering is really just very polite, very precise programming.",
  "Attention — the mechanism behind transformers — was introduced in 2017.",
];

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "AI Projects", href: "#projects" },
  { label: "Dataset Gallery", href: "#datasets" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % FACTS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span aria-hidden className="text-2xl">
              🧠
            </span>
            <span className="text-gradient">AI Portfolio</span>
          </div>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
            <span key={i} className="animate-fade-up">
              {FACTS[i]}
            </span>
          </p>
        </div>

        <nav className="md:justify-self-end">
          <h3 className="text-xs uppercase tracking-widest text-primary">Quick links</h3>
          <ul className="mt-4 space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Built with ❤️ using AI | © 2025 Ahmad Nawaz
      </p>
    </footer>
  );
}
