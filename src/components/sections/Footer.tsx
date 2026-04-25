"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";

// Social Icons (lucide-react dropped brand icons)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-3v5.5a4 4 0 0 1-4 4z" />
    </svg>
  );
}

const socials = [
  {
    icon: InstagramIcon,
    href: "https://instagram.com/",
    label: "Instagram",
  },
  {
    icon: TikTokIcon,
    href: "https://tiktok.com/",
    label: "TikTok",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/",
    label: "LinkedIn",
  },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-6 pb-8 pt-32 md:px-16 md:pt-48 lg:px-24"
    >
      {/* Gradient accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{ background: "radial-gradient(circle, #B026FF 0%, transparent 70%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <h2 className="mb-16 font-heading text-[clamp(2.5rem,10vw,10rem)] uppercase leading-[0.85] md:mb-24">
          Let&apos;s Work
          <br />
          Together
        </h2>

        <div className="flex flex-col gap-12 border-t border-white/10 pt-12 md:flex-row md:items-end md:justify-between">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:kimberlychege21@gmail.com"
              className="group flex items-center gap-3 text-lg transition-colors duration-300 hover:text-accent md:text-xl"
            >
              <Mail className="h-5 w-5 text-accent" />
              kimberlychege21@gmail.com
            </a>
            <a
              href="tel:+254759124635"
              className="group flex items-center gap-3 text-lg transition-colors duration-300 hover:text-accent md:text-xl"
            >
              <Phone className="h-5 w-5 text-accent" />
              +254 759 124 635
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-text/30 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Kimberly Chege</span>
          <span>Designed with 💜</span>
        </div>
      </motion.div>
    </footer>
  );
}
