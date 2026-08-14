import { useEffect, useState } from "react";
import { Sparkles, MessageCircle, Rocket } from "lucide-react";
import { Particles } from "./Particles";

const TAGLINES = [
  "I build websites that think!",
  "Turning datasets into decisions.",
  "Prompt-engineering my way through 12th grade.",
  "Python + AI = my favourite combo.",
  "Shipping smart apps, one prompt at a time.",
];

export function Hero() {
  const [typed, setTyped] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const greeting = "Hello, I'm Ahmad Nawaz";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(greeting.slice(0, i));
      if (i >= greeting.length) clearInterval(id);
    }, 65);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTaglineIndex((i) => (i + 1) % TAGLINES.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <Particles />
      <div className="relative mx-auto w-full max-w-4xl px-5 text-center">
        <span className="glass animate-pulse-glow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-primary">
          <Sparkles className="size-3.5" /> AI-Powered Personal Portfolio
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">
          <span className="text-gradient">{typed}</span>
          <span className="ml-1 inline-block w-[3px] animate-pulse bg-primary align-middle text-transparent">
            |
          </span>
        </h1>

        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          AI Developer &nbsp;|&nbsp; Python Enthusiast &nbsp;|&nbsp; 12th Grade Student
        </p>

        <p
          key={taglineIndex}
          className="animate-fade-up mt-4 font-display text-lg text-secondary-foreground sm:text-xl"
        >
          “{TAGLINES[taglineIndex]}”
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-gradient-brand glow-violet inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Rocket className="size-4" /> View AI Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-success/50 bg-success/10 px-6 py-3 text-sm font-semibold text-success transition-transform hover:scale-105"
          >
            <MessageCircle className="size-4" /> Chat with AI
          </a>
        </div>
      </div>
    </section>
  );
}
