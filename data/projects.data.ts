export type Project = {
  title: string;
  description: string;
  imageLabel: string;
  imageClassName: string;
};

export const projects: Project[] = [
  {
    title: "The simplest example is Kafka + Golang",
    description:
      "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
    imageLabel: "Project image placeholder",
    imageClassName: "from-sky-300 via-fuchsia-300 to-slate-900",
  },
  {
    title: "A practical guide to modern interfaces",
    description:
      "A small design system built to keep product experiences consistent, flexible and easy to maintain.",
    imageLabel: "Project image placeholder",
    imageClassName: "from-amber-200 via-orange-300 to-rose-500",
  },
  {
    title: "Building products that feel effortless",
    description:
      "An exploration of thoughtful motion, accessible components and a fast developer workflow.",
    imageLabel: "Project image placeholder",
    imageClassName: "from-emerald-200 via-cyan-300 to-blue-600",
  },
];
