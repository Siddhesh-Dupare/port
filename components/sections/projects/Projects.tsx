
import { Card } from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="mx-2 flex flex-col flex-1 my-24">
      <div className="absolute top-0 left-2">
        <h1 className="uppercase font-semibold text-4xl sm:text-8xl">projects</h1>
      </div>
      <div className="flex flex-col flex-1 px-2">
        <div className="flex justify-between items-center text-2xl font-semibold">
          <h1>AlgoLens</h1>
          <p>2026</p>
        </div>
        <div style={{
          flex: 1,
          background: 'repeating-linear-gradient(45deg, #ff6a00 0px 20px, #ffdd00 20px 40px, #00c9ff 40px 60px, #00c9ff)'
        }}>
        </div>
        <div className="text-center mt-4 text-2xl font-semibold">
          A visualizer
        </div>
      </div>
    </div>
  );
}
