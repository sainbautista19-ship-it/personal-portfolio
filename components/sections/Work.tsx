import { caseStudies } from "@/lib/content";
import { publicAsset } from "@/lib/assets";
import { SectionLabel } from "../SectionLabel";
import { WorkGrid } from "../WorkGrid";

export function Work() {
  const studies = caseStudies.map((s) => ({
    ...s,
    cover: publicAsset(s.images[0]?.src ?? s.videos?.[0]?.poster),
    previewVideo: publicAsset(s.videos?.[0]?.src),
  }));

  return (
    <section id="work" className="bg-fog py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="03">Work</SectionLabel>
        <div className="mt-14 mb-12 grid gap-6 md:grid-cols-[3fr_2fr] md:items-end">
          <h2 className="font-wide text-3xl leading-tight font-extrabold sm:text-5xl">Real projects, and what I did on each.</h2>
          <p className="text-lg leading-relaxed text-coal">
            Every project is a short case study: the work itself, my part in it, and the tools I used.
          </p>
        </div>
        <WorkGrid studies={studies} />
      </div>
    </section>
  );
}
