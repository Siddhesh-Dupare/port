"use client";

export default function Projects() {
  return (
    <div className="flex flex-col mx-2 min-h-svh py-6">
      <span className="uppercase font-semibold text-4xl">projects</span>
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex w-full justify-between text-3xl font-medium items-center">
          <span className="">AlgoLens</span>
          <span className="">2026</span>
        </div>

        <div style={{
          marginTop: '8px',
          width: 'full',
          height: '400px',
          background: 'repeating-linear-gradient(45deg, #ff00ff 0px 20px, #ff0033 20px 40px, #ff0066 40px 60px, #ff0066)'
        }}>
        </div>

        <span className="text-2xl text-center font-medium">A visualizer</span>

        </div>
    </div>
  );
}
