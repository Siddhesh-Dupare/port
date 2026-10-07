"use client";

import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { useState } from "react";
import { projects, Project } from "@/data/projects.data";


function ProjectImage({ project }: { project: Project }) {
  return (
    <div
      className={`relative flex min-h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.imageClassName} sm:min-h-64 lg:min-h-0 lg:w-[38%]`}
    >
      <div className="absolute size-36 rounded-full border-[18px] border-white/60 bg-white/20 shadow-[0_0_70px_rgba(255,255,255,0.5)] backdrop-blur-sm sm:size-44" />
      <span className="relative max-w-32 text-center text-xs font-medium uppercase tracking-[0.14em] text-slate-900/70">
        {project.imageLabel}
      </span>
    </div>
  );
}

function NavigationButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      aria-label={`${direction === "left" ? "Previous" : "Next"} project`}
      className="relative z-10 flex size-12 shrink-0 touch-manipulation items-center justify-center rounded-full border border-foreground/60 bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-foreground hover:text-background"
      onClick={onClick}
    >
      <Icon className="size-5" />
    </button>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
      <div>
        <h2 className="max-w-lg font-mono text-xl font-semibold leading-tight sm:text-2xl">
          {project.title}
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full border border-foreground bg-background px-8 py-3 text-sm italic transition-colors hover:bg-foreground hover:text-background"
        >
          Read more
        </button>
        <button
          type="button"
          aria-label={`Read ${project.title}`}
          className="flex size-12 items-center justify-center rounded-full border border-foreground bg-background transition-colors hover:bg-foreground hover:text-background"
        >
          <MoveRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousProject = () => {
    setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setActiveIndex((index) => (index + 1) % projects.length);
  };

  const activeProject = projects[activeIndex];
  const previousIndex = (activeIndex - 1 + projects.length) % projects.length;
  const nextIndex = (activeIndex + 1) % projects.length;

  return (
    <div className="mx-3 overflow-hidden bg-background px-4 py-6 text-foreground sm:mx-6 sm:px-8 sm:py-20 lg:mx-12 lg:px-12 lg:py-24 xl:mx-20">
      <div>
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <h2 className="mt-2 font-cascadia text-4xl tracking-[-0.06em] sm:text-6xl">
              Research Project
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground sm:block">
            A few examples of things I enjoy building.
          </p>
        </div>

        <div className="relative lg:h-[22rem]">
          <div className="hidden lg:block">
            <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-6">
              <div className="pointer-events-none flex h-64 w-80 shrink-0 scale-90 overflow-hidden rounded-[2rem] border border-foreground/20 opacity-30 blur-[1px]">
                <ProjectImage project={projects[previousIndex]} />
                <ProjectContent project={projects[previousIndex]} />
              </div>

              <article className="z-10 flex h-72 w-[min(40rem,55vw)] shrink-0 overflow-hidden rounded-[2rem] border border-foreground/20 bg-muted/50 shadow-xl">
                <ProjectImage project={activeProject} />
                <ProjectContent project={activeProject} />
              </article>

              <div className="pointer-events-none flex h-64 w-80 shrink-0 scale-90 overflow-hidden rounded-[2rem] border border-foreground/20 opacity-30 blur-[1px]">
                <ProjectImage project={projects[nextIndex]} />
                <ProjectContent project={projects[nextIndex]} />
              </div>
            </div>

            <div className="absolute inset-y-0 left-1/2 z-20 flex w-full -translate-x-1/2 items-center justify-between px-4">
              <NavigationButton direction="left" onClick={previousProject} />
              <NavigationButton direction="right" onClick={nextProject} />
            </div>
          </div>

          <div className="lg:hidden">
            <article className="overflow-hidden rounded-[1.5rem] border border-foreground/20 bg-muted/50 shadow-lg">
              <ProjectImage project={activeProject} />
              <ProjectContent project={activeProject} />
            </article>
            <div className="mt-5 flex justify-end gap-3">
              <NavigationButton direction="left" onClick={previousProject} />
              <NavigationButton direction="right" onClick={nextProject} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
