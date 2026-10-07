
import { experienceEntries } from "../../../data/experience.data";

export default function Experience() {
  return (
    <div className="mx-3 overflow-hidden bg-background px-4 py-16 text-foreground sm:mx-6 sm:px-8 sm:py-20 lg:mx-12 lg:px-12 lg:py-24 xl:mx-20">
      <div className="flex items-end justify-between gap-6 pb-8">
        <h2 className="font-cascadia text-[clamp(4rem,14vw,9rem)] leading-[0.8] tracking-[-0.08em]">
          Work
        </h2>
        <p className="max-w-xs text-right text-sm leading-relaxed text-muted-foreground sm:text-base">
          Selected projects spanning full-stack development, systems programming, and AI-assisted software.
        </p>
      </div>

      <div className="mt-6">
        <div>
          {experienceEntries.map((entry) => (
            <article
              key={entry.key}
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
          <em className="text-foreground">More projects coming soon.</em>
        </p>
      </div>
    </div>
  );
}
