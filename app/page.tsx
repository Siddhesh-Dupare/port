
import Header from "@/components/sections/header/Header";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="flex h-full justify-center items-center">
        <div className="text-6xl text-center">
          <p>Where logic</p>
          <p>becomes pixels</p>
        </div>
      </div>
    </div>
  );
}
