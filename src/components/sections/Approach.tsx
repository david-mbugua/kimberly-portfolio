"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Find the spark",
    body: "We dig (and dig) until we discover what actually makes you special. We spend real time on this.",
  },
  {
    num: "02",
    title: "Make it obvious",
    body: "If someone can't grasp your value in seconds, we failed. We make sure that doesn't happen.",
  },
  {
    num: "03",
    title: "Make it stick",
    body: "Clear but bland is still boring. We make you memorable.",
  },
];

export function Approach() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="approach"
      ref={ref}
      className="px-6 py-32 md:px-16 md:py-40 lg:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase leading-none md:mb-24"
      >
        Our Approach
      </motion.h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2 + i * 0.15,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col gap-4 md:border-l md:border-white/10 md:px-8 md:first:border-l-0 md:first:pl-0"
          >
            <span className="font-heading text-4xl text-accent md:text-5xl">
              {step.num}
            </span>
            <h3 className="font-heading text-xl uppercase tracking-wide md:text-2xl">
              {step.title}
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-text/50 md:text-base">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
