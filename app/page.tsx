
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Footer from "@/components/sections/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-svh">
      <section className="font-semibold">
        <Hero />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Footer />
      </section>

    </div>
  );
}
