import Image from "next/image";
import { profile } from "@/lib/content";
import { publicAsset } from "@/lib/assets";
import { SamplePlaceholder } from "../SamplePlaceholder";
import { SectionLabel } from "../SectionLabel";

export function About() {
  const photo = publicAsset(profile.photo);

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="01">About</SectionLabel>
        <div className="mt-14 grid items-start gap-14 md:grid-cols-[2fr_3fr]">
          <div className="relative mr-3 mb-3 max-w-sm md:max-w-none">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-tangerine" />
            {/* Editorial portrait: B&W, cropped to head and torso, on a soft studio backdrop. */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(ellipse_at_50%_30%,#fafaf8_0%,#e2e2df_60%,#cfcfcb_100%)]">
              {photo ? (
                <Image
                  src={photo}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="origin-top scale-[1.3] object-cover object-top mix-blend-multiply contrast-[1.1] grayscale"
                />
              ) : (
                <SamplePlaceholder label="Photo goes here" />
              )}
              <div className="light-scope absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-ink px-5 py-4 text-paper">
                <div>
                  <p className="font-wide text-sm font-extrabold uppercase">{profile.name}</p>
                  <p className="label mt-1 text-paper/60">Creative / Operations / VA</p>
                </div>
                <span className="mb-1 h-2.5 w-2.5 shrink-0 bg-tangerine" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-wide text-3xl leading-tight font-extrabold sm:text-5xl">The person behind the work.</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-coal">
              {profile.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="mt-12 border-b border-rule">
              {profile.facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[9rem_1fr] border-t border-rule py-4">
                  <dt className="label pt-0.5 text-muted">{f.label}</dt>
                  <dd className="font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
