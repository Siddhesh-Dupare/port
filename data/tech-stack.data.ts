
export type TechGroup = {
  title: string;
  technologies: string;
  className: string;
}

export const techGroups: TechGroup[] = [
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
