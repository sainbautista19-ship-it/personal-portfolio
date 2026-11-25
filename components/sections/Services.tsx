import { rateTiers, services } from "@/lib/content";
import { Monogram } from "../Monogram";
import { SectionLabel } from "../SectionLabel";

export function Services() {
  return (
    <section id="services" className="light-scope relative overflow-hidden bg-ink py-24 text-paper">
      <Monogram className="pointer-events-none absolute -top-10 -right-24 w-[44rem] max-w-none text-white/[0.035]" dot="fill-white/[0.035]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="02">Services</SectionLabel>
        <h2 className="mt-14 max-w-3xl font-wide text-3xl leading-tight font-extrabold sm:text-5xl">
          Three things I do well, so you don&apos;t have to.
        </h2>
        <div className="mt-16 grid border-t border-rule md:grid-cols-3 md:divide-x md:divide-rule">
          {services.map((s, i) => (
            <article key={s.title} className="border-b border-rule py-10 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="font-wide text-5xl font-extrabold text-paper">0{i + 1}</span>
              <h3 className="mt-8 text-xl leading-snug font-bold">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-paper/70">{s.description}</p>
              <ul className="mt-8">
                {s.skills.map((skill) => (
                  <li key={skill} className="label border-t border-rule py-3 text-paper/80">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-rule pt-12 lg:grid-cols-[1fr_3fr] lg:items-start">
          <div>
            <p className="label text-paper/60">Rates</p>
            <p className="mt-3 font-wide text-3xl font-extrabold">
              From <span className="text-tangerine">$10/hr</span>
            </p>
            <p className="mt-3 text-sm text-paper/70">Hourly or fixed project pricing.</p>
          </div>
          <ul className="grid gap-px bg-rule sm:grid-cols-3">
            {rateTiers.map((t) => (
              <li key={t.name} className="bg-ink p-6">
                <p className="font-wide text-2xl font-extrabold text-tangerine">{t.rate}</p>
                <p className="mt-3 font-bold">{t.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
