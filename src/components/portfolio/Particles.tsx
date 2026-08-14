const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 3 + ((i * 7) % 9),
  duration: 14 + ((i * 5) % 16),
  delay: (i * 1.7) % 18,
  violet: i % 3 === 0,
}));

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="animate-float-particle absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            background: p.violet ? "var(--violet)" : "var(--neon)",
            boxShadow: `0 0 12px ${p.violet ? "var(--violet)" : "var(--neon)"}`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
