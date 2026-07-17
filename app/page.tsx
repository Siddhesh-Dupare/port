
import Header from "@/components/sections/header/Header";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Header />
      <section className="flex h-full justify-center items-center">
        <Hero />
      </section>

      <section className="min-h-screen">
        <p>Hello</p>
      </section>
    </div>
  );
}
