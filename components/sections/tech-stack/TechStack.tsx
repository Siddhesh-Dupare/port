import { ArrowUpRight, GitBranch } from "lucide-react";

const techGroups = [
  {
    title: "Languages",
    technologies: "C++ / Python / Java / JavaScript",
    className: "lg:col-span-7",
  },
  {
    title: "Core Computer Science",
    technologies:
      "Data Structures & Algorithms / OOP / System Design / SDLC / Competitive Programming",
    className: "lg:col-span-5",
  },
  {
    title: "Operating Systems & Concurrency",
    technologies:
      "Processes & Threads / Thread Synchronization / Mutex / std::lock_guard / IPC / Shared Memory / Multi-process Architecture",
    className: "lg:col-span-8",
  },
  {
    title: "Computer Networks",
    technologies:
      "TCP/IP Fundamentals / HTTP/HTTPS / Client-Server Architecture / WebSockets / Networking Concepts",
    className: "lg:col-span-4",
  },
  {
    title: "Software Engineering & Testing",
    technologies:
      "Debugging & Troubleshooting / Test Case Design / Functional Testing / Selenium WebDriver with Java / CI/CD / Git",
    className: "lg:col-span-6",
  },
  {
    title: "Systems & Development",
    technologies: "CMake / SDL3 / Blend2D / Cross-platform Development",
    className: "lg:col-span-6",
  },
  {
    title: "Backend & Databases",
    technologies: "Node.js / REST APIs / SQL / Firebase",
    className: "lg:col-span-5",
  },
  {
    title: "AI/ML & LLM Integration",
    technologies:
      "Hybrid Classifier Design / Claude/Gemini API Integration / Prompt-driven Pipelines",
    className: "lg:col-span-7",
  },
];

export default function TechStack() {
  return (
    <div className="mx-3 overflow-hidden bg-background px-4 py-16 text-foreground sm:mx-6 sm:px-8 sm:py-20 lg:mx-12 lg:px-12 lg:py-24 xl:mx-20">
      <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            What I work with
          </p>
          <h2 className="mt-2 font-cascadia text-4xl tracking-[-0.06em] sm:text-6xl">
            Tech stack
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-right">
          A collection of languages, tools and engineering practices I use to
          build reliable software.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-12 lg:gap-5">
        {techGroups.map((group) => (
          <article
            key={group.title}
            className={`rounded-[1.5rem] border border-foreground/30 p-5 sm:p-6 ${group.className}`}
          >
            <h3 className="text-xl sm:text-2xl">{group.title}</h3>
            <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
              {group.technologies}
            </p>
          </article>
        ))}

        <p className="self-center px-2 py-4 text-sm italic leading-relaxed text-muted-foreground sm:px-4 lg:col-span-5 lg:row-start-5">
          Some of my favorite technologies, topics, and tools that I work
          with.
        </p>

        <a
          href="https://github.com/Siddhesh-Dupare"
          target="_blank"
          rel="noreferrer"
          className="group flex min-h-28 items-center justify-between rounded-[1.5rem] border border-foreground/30 p-5 transition-colors hover:bg-foreground hover:text-background sm:p-6 lg:col-span-3 lg:col-start-10 lg:row-start-5"
        >
          <span className="flex items-center gap-3 text-lg">
            <GitBranch className="size-6" />
            GitHub
          </span>
          <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
