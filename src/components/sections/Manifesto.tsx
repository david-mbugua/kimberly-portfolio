"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const lines = [
  { text: "Boring is expensive.", opacity: 1 },
  { text: "Pitches don't land.", opacity: 0.75 },
  { text: "Websites don't convert.", opacity: 0.55 },
  { text: "Buyers don't care.", opacity: 0.4 },
  { text: "Opportunities pass.", opacity: 0.25 },
];

function ManifestoLine({
  line,
  index,
  progress,
}: {
  line: (typeof lines)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.22 + index * 0.09;
  const peak = start + 0.12;
  const end = Math.min(0.92, peak + 0.3);

  const opacity = useTransform(
    progress,
    [start, peak, end],
    [0.08, line.opacity, Math.max(0.16, line.opacity * 0.45)]
  );
  const x = useTransform(progress, [start, peak], [-56, 0]);
  const filter = useTransform(
    progress,
    [start, peak],
    ["blur(10px)", "blur(0px)"]
  );

  return (
    <motion.p
      style={{ opacity, x, filter }}
      className="font-heading text-[clamp(1.5rem,4.5vw,4rem)] uppercase leading-[1.1] tracking-tight"
    >
      {line.text}
    </motion.p>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0, 0.18], [36, 0]);
  const bodyOpacity = useTransform(scrollYProgress, [0.72, 0.9], [0, 1]);
  const bodyY = useTransform(scrollYProgress, [0.72, 0.9], [24, 0]);

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative min-h-[175vh] px-6 md:px-16 lg:px-24"
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-center gap-12 py-24 md:gap-16">
        <motion.h2
          style={{ opacity: headingOpacity, y: headingY }}
          className="font-heading text-[clamp(2rem,6vw,5rem)] uppercase leading-[0.95] text-accent"
        >
          Why can&apos;t I
          <br />
          be boring?
        </motion.h2>

        <div className="flex flex-col gap-1 md:gap-2">
          {lines.map((line, i) => (
            <ManifestoLine
              key={line.text}
              line={line}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <motion.p
          style={{ opacity: bodyOpacity, y: bodyY }}
          className="max-w-2xl text-lg leading-relaxed text-text/70 md:text-xl"
        >
          &ldquo;Boring&rdquo; is when nothing clicks.{" "}
          <span className="text-accent">
            I help you build work that does.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
