"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Social Media Management",
    description: "Turning ghost towns into bustling, engaged communities.",
    bg: "bg-card-light",
    text: "text-bg",
    accent: "text-accent",
  },
  {
    title: "Content Creation",
    description: "Visuals that make them stop the doom-scroll.",
    bg: "bg-accent-green",
    text: "text-bg",
    accent: "text-bg/60",
  },
  {
    title: "Executive Branding",
    description: "Positioning CEOs and founders as thought leaders.",
    bg: "bg-card-dark",
    text: "text-text",
    accent: "text-accent",
  },
  {
    title: "Digital Outreach",
    description: "Turning your vision into a brand people understand and remember.",
    bg: "bg-accent-pink",
    text: "text-text",
    accent: "text-text/60",
  },
];

function ServiceCard({
  service,
  index,
  total,
}: {
  service: (typeof services)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.9 + (total - index) * 0.01]
  );

  return (
    <div
      ref={cardRef}
      className="sticky h-screen"
      style={{ top: `calc(${index * 30}px)` }}
    >
      <motion.div
        style={{ scale }}
        className={`${service.bg} ${service.text} flex h-[85vh] flex-col justify-between rounded-3xl p-8 shadow-2xl md:p-16`}
      >
        <div className="flex items-start justify-between">
          <span
            className={`${service.accent} font-heading text-6xl md:text-8xl`}
          >
            0{index + 1}
          </span>
          <span className="rounded-full border border-current/20 px-4 py-1.5 text-xs uppercase tracking-[0.2em] opacity-50">
            Service
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-[clamp(2rem,5vw,5rem)] uppercase leading-[0.9]">
            {service.title}
          </h3>
          <p className="max-w-lg text-lg opacity-60 md:text-xl">
            {service.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={sectionRef} className="px-6 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="py-20 md:py-32"
      >
        <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase leading-none">
          What I Do
        </h2>
        <p className="mt-4 max-w-md text-text/50">
          Every brand has something special. I help you find it, shape it, and
          share it with the world.
        </p>
      </motion.div>

      <div className="relative pb-[20vh]">
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={i}
            total={services.length}
          />
        ))}
      </div>
    </section>
  );
}
