import { useState, type FormEvent } from "react";
import { Github, Linkedin, Twitter, Youtube, Send, Bot, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const SOCIALS = [
  { icon: MessageCircle, label: "WhatsApp +92 315 5706565", href: "https://wa.me/923155706565" },
  { icon: Github, label: "GitHub", href: "https://github.com/ahmadnawaz" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ahmadnawaz" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/ahmadnawaz" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@ahmadnawaz" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          Get in <span className="text-gradient">Touch</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-primary">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-primary">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none focus:border-primary"
                placeholder="Tell me about your idea…"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-brand glow-violet inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Send className="size-4" /> Send Message
            </button>

            {sent && (
              <div className="animate-fade-up flex items-start gap-3 rounded-xl border border-success/40 bg-success/10 p-4 text-sm text-success">
                <Bot className="mt-0.5 size-4 shrink-0" />
                <span>
                  Thanks{name ? `, ${name}` : ""}! AI will respond within 24 hours!
                </span>
              </div>
            )}
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass h-full rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">Find me online</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Auto-reply is powered by AI — a human follow-up always comes after.
            </p>
            <div className="mt-6 grid gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-4" /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
