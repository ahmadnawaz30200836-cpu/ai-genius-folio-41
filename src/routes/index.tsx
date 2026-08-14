import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { DatasetGallery } from "@/components/portfolio/DatasetGallery";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppButton } from "@/components/portfolio/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Nawaz — AI Developer Portfolio" },
      {
        name: "description",
        content:
          "AI-powered portfolio of Ahmad Nawaz: AI projects, Hugging Face dataset gallery, Python experiments and contact.",
      },
      { property: "og:title", content: "Ahmad Nawaz — AI Developer Portfolio" },
      {
        property: "og:description",
        content:
          "AI projects, dataset gallery and Python experiments by Ahmad Nawaz, 12th grade AI developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="size-14 animate-spin rounded-full border-2 border-border border-t-primary" />
      <p className="mt-5 font-display text-sm tracking-widest text-primary">LOADING AI…</p>
    </div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(id);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <DatasetGallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
