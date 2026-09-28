
import { MoveRight } from "lucide-react";
import Projects from "@/components/sections/projects/Projects";

export default function Intro() {
  return (
    <>
      <section className="mx-3 overflow-hidden bg-background px-4 text-foreground sm:mx-6 sm:px-8 lg:mx-12 lg:px-12 xl:mx-20">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-cascadia text-[clamp(3.25rem,11vw,9rem)] leading-[0.85] tracking-[-0.07em]">
            Full-stack
          </h1>
          <div className="flex shrink-0 items-center gap-2 pt-1 sm:gap-3 sm:pt-2">
            <button className="min-w-24 rounded-full border border-foreground px-4 py-2 text-sm italic sm:min-w-36 sm:px-8 sm:py-3 sm:text-base lg:min-w-72">
              Projects
            </button>
            <button
              aria-label="Projects"
              className="rounded-full border border-foreground p-2 sm:p-3"
            >
              <MoveRight className="size-4 sm:size-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          <h1 className="order-1 text-right font-cascadia text-[clamp(3.25rem,11vw,9rem)] leading-[0.85] tracking-[-0.07em] lg:col-start-2 lg:row-start-1">
            Developer
          </h1>
        </div>
      </section>
      <Projects />
    </>
  );
}
