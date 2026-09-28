type ExperienceEntry = {
  period: string;
  duration: string;
  organization: string;
  role: string;
  focus: string;
};

const experienceEntries: ExperienceEntry[] = [
  {
    period: "2024 - Present",
    duration: "Placeholder",
    organization: "Personal Projects",
    role: "Full-stack developer",
    focus: "JavaScript & Python",
  },
  {
    period: "2023 - 2024",
    duration: "Placeholder",
    organization: "Project / Organization",
    role: "Software developer",
    focus: "C++ & Systems",
  },
  {
    period: "2022 - 2023",
    duration: "Placeholder",
    organization: "Open-source work",
    role: "Developer",
    focus: "Web & Backend",
  },
  {
    period: "2021 - 2022",
    duration: "Placeholder",
    organization: "Add organization",
    role: "Add your role",
    focus: "Add your technology focus",
  },
];

export default function Experience() {
  return (
    <section className="mx-3 overflow-hidden bg-background px-4 py-16 text-foreground sm:mx-6 sm:px-8 sm:py-20 lg:mx-12 lg:px-12 lg:py-24 xl:mx-20">
      <div className="flex items-end justify-between gap-6 pb-8">
        <h2 className="font-cascadia text-[clamp(4rem,14vw,9rem)] leading-[0.8] tracking-[-0.08em]">
          Work
        </h2>
        <p className="max-w-xs text-right text-sm leading-relaxed text-muted-foreground sm:text-base">
          Placeholder experience entries. Replace these rows with your
          internships, freelance work, open-source contributions, or projects.
        </p>
      </div>

      <div className="mt-6">
        <div>
          {experienceEntries.map((entry) => (
            <article
              key={`${entry.period}-${entry.organization}`}
              className="group grid gap-5 border-y border-foreground/20 px-3 py-6 transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background sm:px-5 lg:grid-cols-[1.15fr_2fr_3fr] lg:items-center lg:gap-8 lg:py-7"
            >
              <div>
                <p className="text-lg font-medium sm:text-xl">{entry.period}</p>
                <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-background/70">
                  {entry.duration}
                </p>
              </div>

              <div>
                <p className="text-lg sm:text-xl">{entry.organization}</p>
              </div>

              <div>
                <p className="font-mono text-base sm:text-lg">
                  {entry.role}{" "}
                  <span className="text-muted-foreground transition-colors group-hover:text-background/70">
                    |
                  </span>{" "}
                  {entry.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-end pt-6">
        <p className="text-right text-sm text-muted-foreground sm:text-base">
          Work experience
          <br />
          <em className="text-foreground">To be added</em>
        </p>
      </div>
    </section>
  );
}
