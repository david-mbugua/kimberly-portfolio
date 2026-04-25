"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CirclePlay, ExternalLink, Film, ImageIcon } from "lucide-react";

const featuredProjects = [
  {
    title: "Summit Overview",
    category: "Event Storytelling",
    platform: "Google Drive",
    description:
      "A concise event recap built to make the summit feel active, clear, and worth remembering.",
    href: "https://drive.google.com/file/d/1mEPgRtZTE60_SfNv-38PKPg-gkbc9AO3/view",
    image:
      "https://drive.google.com/thumbnail?id=1mEPgRtZTE60_SfNv-38PKPg-gkbc9AO3&sz=w1600",
    stats: ["Summit recap", "Video overview"],
  },
  {
    title: "The Mwesigwas Christmas Reel",
    category: "Lifestyle Reel",
    platform: "Google Drive",
    description:
      "Warm seasonal storytelling with the kind of family-first pacing that feels made for social.",
    href: "https://drive.google.com/file/d/1EdHBRGFTQdufIo6GZAu2Vk2-Wc_6MlJk/view",
    image:
      "https://drive.google.com/thumbnail?id=1EdHBRGFTQdufIo6GZAu2Vk2-Wc_6MlJk&sz=w1600",
    stats: ["Christmas reel", "Social-first edit"],
  },
  {
    title: "Forever Fragrance Ke",
    category: "Product Reel",
    platform: "Instagram",
    description:
      "A fragrance reel shaped around visual texture, desire, and fast product storytelling.",
    href: "https://www.instagram.com/reels/DROj9fFDH_Y/",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80",
    stats: ["Product content", "Instagram reel"],
  },
];

const archiveLinks = [
  {
    label: "Forever Fragrance TikTok 01",
    href: "https://vm.tiktok.com/ZMAFg29q6/",
  },
  {
    label: "Forever Fragrance TikTok 02",
    href: "https://vm.tiktok.com/ZMAcjTkww/",
  },
  {
    label: "Kimmy's Treats TikTok 01",
    href: "https://vm.tiktok.com/ZMAcjA2jm/",
  },
  {
    label: "Kimmy's Treats TikTok 02",
    href: "https://vm.tiktok.com/ZMAcjMVoe/",
  },
  {
    label: "Biolinx Africa LinkedIn",
    href: "https://www.linkedin.com/posts/robertkaranja_cancerresearch-innovation-activity-7353054478188634112-ljZm",
  },
  {
    label: "AIESEC Proposal",
    href: "https://www.canva.com/design/DAGQFmtr6ZE/u5hiYOyFEPHUTgK_fNnxag/edit",
  },
];

export function WorkCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={sectionRef} className="py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 px-6 md:mb-16 md:px-16 lg:px-24"
      >
        <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] uppercase leading-none">
          Proof in Motion
        </h2>
        <p className="mt-4 max-w-2xl text-text/50">
          Reels, recaps, product moments, and brand content Kimberly has shaped
          across social platforms.
        </p>
      </motion.div>

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 md:gap-8 md:px-16 lg:px-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2 + i * 0.1,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative h-[72vh] min-h-[560px] w-[82vw] flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-card-dark md:w-[46vw] lg:w-[34vw]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 82vw, (max-width: 1024px) 46vw, 34vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-text backdrop-blur-sm">
                  {project.platform}
                </span>
                <CirclePlay className="h-11 w-11 text-white/80 transition-colors duration-300 group-hover:text-accent" />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-text/70 backdrop-blur-sm"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <div>
                  <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent">
                    <Film className="h-4 w-4" />
                    {project.category}
                  </p>
                  <h3 className="mb-3 font-heading text-3xl uppercase leading-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-text/65">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-text backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent/15 hover:text-accent"
                >
                  Watch Work
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.2 + featuredProjects.length * 0.1,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex h-[72vh] min-h-[640px] w-[82vw] flex-shrink-0 snap-center flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:min-h-[560px] md:w-[46vw] md:p-8 lg:w-[34vw]"
        >
          <div className="flex items-start justify-between gap-6">
            <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-text/50">
              Work Trail
            </span>
            <ImageIcon className="h-10 w-10 text-accent" />
          </div>

          <div>
            <h3 className="mb-4 font-heading text-3xl uppercase leading-none md:text-5xl">
              More Across Platforms
            </h3>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-text/55 md:mb-8">
              A growing set of TikTok, Instagram, LinkedIn, and proposal work
              that can keep expanding as Kimberly sends more links.
            </p>

            <div className="flex flex-col gap-2 md:gap-3">
              {archiveLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between gap-4 border-b border-white/10 py-2 text-xs text-text/70 transition-colors duration-300 hover:text-accent md:py-3 md:text-sm"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
