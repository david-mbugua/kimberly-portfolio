"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20 md:px-16 lg:px-24"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-float-orb absolute left-1/2 top-1/2 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, #B026FF 0%, transparent 70%)",
          }}
        />
        <div
          className="animate-float-orb-2 absolute left-[30%] top-[40%] h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, #FF1493 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-[1400px] flex-col">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 text-sm uppercase tracking-[0.3em] text-muted md:text-base"
        >
          Portfolio ©{currentYear}
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 max-w-2xl font-body text-xl font-light leading-relaxed text-text/80 md:text-2xl"
        >
          Hi, I&apos;m Kimberly Chege.
        </motion.h2>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="font-heading text-[clamp(3rem,12vw,12rem)] uppercase leading-[0.85] tracking-tight">
            I Make You
          </h1>
          <span className="text-outline inline-block font-heading text-[clamp(3rem,12vw,12rem)] uppercase leading-[0.85] tracking-tight">
            Un-Boring.
          </span>
        </motion.div>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12 max-w-xl font-body text-base leading-relaxed text-text/60 md:text-lg"
        >
          A Social Media Marketer turning static brands into living, breathing
          communities. I don&apos;t just post content; I build experiences that
          leave an impression.
        </motion.p>

        <motion.a
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          href="#manifesto"
          className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-text transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
        >
          Scroll to Discover
          <svg
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L11 1M11 1H3M11 1V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
