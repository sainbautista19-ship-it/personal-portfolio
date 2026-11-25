import Link from "next/link";
import { projectWork } from "@/lib/content";
import { HoursEstimator } from "../HoursEstimator";
import { SectionLabel } from "../SectionLabel";

export function HandOff() {
  return (
    <section id="hand-off" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="04">Hand it off</SectionLabel>
        <div className="mt-14 grid gap-6 md:grid-cols-[3fr_2fr] md:items-end">
          <h2 className="font-wide text-3xl leading-tight font-extrabold sm:text-5xl">What&apos;s eating your week?</h2>
          <p className="text-lg leading-relaxed text-coal">
            Tick what you&apos;d hand off to see the hours and a rough monthly cost, or skip the hours and{" "}
            <a href="#project-based" className="font-semibold text-ink underline decoration-tangerine decoration-2 underline-offset-4">
              hire me by the project
            </a>
            . Estimates are typical for small businesses, not a quote.
          </p>
        </div>
        <HoursEstimator />

        <div id="project-based" className="mt-16 grid gap-10 border border-rule p-8 sm:p-10 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <p className="label flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-tangerine" />
              Hourly or project-based
            </p>
            <h3 className="mt-5 font-wide text-2xl leading-tight font-extrabold sm:text-3xl">{projectWork.heading}</h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-coal">{projectWork.text}</p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2">
              {projectWork.examples.map((e) => (
                <li key={e} className="label border border-rule px-3 py-2">
                  {e}
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="label mt-8 inline-block bg-ink px-6 py-4 text-paper transition hover:bg-tangerine hover:text-onyx"
            >
              Get a project quote →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
