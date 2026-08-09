
import Header from "@/components/sections/header/Header";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <div className="relative h-dvh">
      <section className="h-full pt-20 font-semibold">
        <Header />
        <Hero />
      </section>

      <section className="h-full">
        <Projects />
      </section>

    </div>
  );
}
