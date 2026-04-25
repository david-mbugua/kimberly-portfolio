import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Manifesto } from "@/components/sections/Manifesto";
import { Approach } from "@/components/sections/Approach";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WorkCarousel } from "@/components/sections/WorkCarousel";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Approach />
        <WhatWeDo />
        <WorkCarousel />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
