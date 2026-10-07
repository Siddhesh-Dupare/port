"use client";

import Hero from "@/components/sections/hero/Hero";
import Intro from "@/components/sections/intro/Intro";
import TechStack from "@/components/sections/tech-stack/TechStack";
import Experience from "@/components/sections/experience/Experience";

export default function Home() {

  return (
    <div className="min-h-dvh">
      <section className="min-h-svh">
        <Hero />
      </section>
      <section className="min-h-svh">
        <Intro />
      </section>
      <section className="min-h-svg">
        <TechStack />
      </section>
      <section className="min-h-svg">
        <Experience />
      </section>
    </div>
  );
}
