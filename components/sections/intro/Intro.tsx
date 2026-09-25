
import { MoveRight } from "lucide-react";

export default function Intro() {
  return (
    <div className="mx-3 sm:mx-6 lg:mx-40">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl sm:text-7xl lg:text-[9rem] font-cascadia">Full-stack</h1>
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            className="border border-black rounded-full px-4 py-1 sm:px-6 sm:py-2 lg:px-20 lg:py-3"
          >
            Projects
          </button>
          <div className="border border-black rounded-full p-1 sm:p-2">
            <MoveRight />
          </div>

        </div>
      </div>

      <div className="relative min-h-28">
        <p className="text-base absolute left-0 -bottom-5 sm:-bottom-12 sm:text-lg lg:text-4xl">
          My goal is to write <b>write maintainable, clear</b><br />
          and <b>understandable code</b> to process<br />
          development was enjoyable
        </p>
        <h1 className="absolute top-0 right-0 text-4xl sm:text-7xl lg:text-[9rem] font-cascadia">Developer</h1>
      </div>
    </div>
  );
}
