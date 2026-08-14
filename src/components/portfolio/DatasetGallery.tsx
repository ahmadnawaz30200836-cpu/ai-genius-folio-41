import { useState } from "react";
import { Database, ExternalLink, Image as ImageIcon, Type } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

type Dataset = {
  name: string;
  size: string;
  type: "Text" | "Image";
  source: "Hugging Face" | "Kaggle";
  details: string;
  rows: string;
};

const DATASETS: Dataset[] = [
  {
    name: "IMDB Movie Reviews",
    size: "84 MB",
    type: "Text",
    source: "Hugging Face",
    rows: "50,000 reviews",
    details:
      "Balanced binary sentiment dataset. I used it to fine-tune the Sentiment Analyzer and to benchmark prompt-only classification against a trained model.",
  },
  {
    name: "CIFAR-10",
    size: "170 MB",
    type: "Image",
    source: "Kaggle",
    rows: "60,000 images",
    details:
      "Ten object classes at 32x32 resolution. Great first dataset for learning convolutional networks and data augmentation.",
  },
  {
    name: "SQuAD v2",
    size: "44 MB",
    type: "Text",
    source: "Hugging Face",
    rows: "150,000 Q&A pairs",
    details:
      "Question answering with unanswerable questions included — the backbone of my AI Quiz Generator's question templates.",
  },
  {
    name: "Fashion-MNIST",
    size: "30 MB",
    type: "Image",
    source: "Hugging Face",
    rows: "70,000 images",
    details:
      "Drop-in replacement for MNIST with clothing categories. I used it to compare training speed across optimizers.",
  },
  {
    name: "Emotion",
    size: "5 MB",
    type: "Text",
    source: "Hugging Face",
    rows: "20,000 tweets",
    details:
      "Six emotion labels over short social posts. Powers the multi-class mode of my mood detection demo.",
  },
  {
    name: "Titanic Survival",
    size: "1 MB",
    type: "Text",
    source: "Kaggle",
    rows: "891 passengers",
    details:
      "The classic tabular starter set — feature engineering practice for pandas and scikit-learn pipelines.",
  },
];

export function DatasetGallery() {
  const [active, setActive] = useState<Dataset | null>(null);

  return (
    <section id="datasets" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          Dataset <span className="text-gradient">Gallery</span>
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Click any card to see how I used the data.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DATASETS.map((d, i) => (
          <Reveal key={d.name} delay={i * 80}>
            <TiltCard className="cursor-pointer p-5" onClick={() => setActive(d)}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold">{d.name}</h3>
                <span className="rounded-md bg-muted/60 p-1.5 text-primary">
                  {d.type === "Text" ? (
                    <Type className="size-4" />
                  ) : (
                    <ImageIcon className="size-4" />
                  )}
                </span>
              </div>
              <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Size</dt>
                  <dd className="text-foreground">{d.size}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Type</dt>
                  <dd className="text-foreground">{d.type}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Source</dt>
                  <dd className="text-primary">{d.source}</dd>
                </div>
              </dl>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://huggingface.co/datasets"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-brand glow-violet inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <Database className="size-4" /> Explore More
          <ExternalLink className="size-3.5" />
        </a>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="glass">
          <DialogHeader>
            <DialogTitle className="font-display">{active?.name}</DialogTitle>
            <DialogDescription>
              {active?.rows} · {active?.size} · {active?.type} · {active?.source}
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm leading-relaxed text-muted-foreground">{active?.details}</p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
