import { experience, tools } from "@/lib/content";
import { SectionLabel } from "../SectionLabel";
import { ToolLogo } from "../ToolLogo";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="05">Experience & tools</SectionLabel>
        <div className="mt-14 grid gap-16 md:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="font-wide text-3xl leading-tight font-extrabold">What I&apos;ve been doing</h2>
            <ol className="mt-8 border-b border-rule">
              {experience.map((item, i) => (
                <li key={item} className="grid grid-cols-[3rem_1fr] border-t border-rule py-4">
                  <span className="label pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-coal">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-wide text-3xl leading-tight font-extrabold">What I work with</h2>
            <ul className="mt-8 grid grid-cols-2 gap-px border border-rule bg-rule">
              {tools.map((t) => (
                <li key={t} className="flex items-center gap-3 bg-paper px-4 py-5 font-semibold transition hover:bg-tangerine hover:text-onyx">
                  <ToolLogo name={t} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
