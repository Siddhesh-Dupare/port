
import Header from "@/components/sections/header/Header";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Header />
      <section className="min-h-screen flex justify-center items-center">
        <Hero />
      </section>

      <section className="min-h-screen flex flex-col justify-center">
        <About />
      </section>

      <section className="min-h-screen flex flex-col justify-center">
        <Skills />
      </section>

    </div>
  );
}
