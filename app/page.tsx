"use client";

import Hero from "@/components/sections/hero/Hero";
import Intro from "@/components/sections/intro/Intro";

export default function Home() {

  return (
    <div className="min-h-dvh">
      <section className="min-h-svh">
        <Hero />
      </section>
      <section className="min-h-svh">
        <Intro />
      </section>
    </div>
  );
}
