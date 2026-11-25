import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/sections/Footer";
import { SamplePlaceholder } from "@/components/SamplePlaceholder";
import { caseStudies, categories } from "@/lib/content";
import { publicAsset } from "@/lib/assets";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const study = caseStudies.find((s) => s.slug === slug);
  return study ? { title: study.title, description: study.summary } : {};
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const index = caseStudies.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const images = study.images.flatMap((img) => {
    const src = publicAsset(img.src);
    return src ? [{ ...img, src }] : [];
  });
  const videos = (study.videos ?? []).filter((v) => publicAsset(v.src));

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <header className="bg-fog">
          <div className="mx-auto max-w-5xl px-4 pt-12 pb-16 sm:px-6">
            <Link href="/#work" className="label text-muted transition hover:text-ink">
              ← All work
            </Link>
            <p className="label mt-12 flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-tangerine" />
              Case {String(index + 1).padStart(2, "0")} / {categories[study.category]}
            </p>
            <h1 className="mt-6 font-wide text-4xl leading-[1.05] font-extrabold sm:text-6xl">{study.title}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-coal">{study.summary}</p>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          {study.youtube?.map((yt) => (
            <figure key={yt.id} className="mb-10">
              {/* youtube-nocookie avoids tracking cookies until the visitor presses play. */}
              <div className="relative aspect-video bg-ink shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${yt.id}${yt.start ? `?start=${yt.start}` : ""}`}
                  title={yt.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="label mt-3 text-muted">YouTube / {yt.title}</figcaption>
            </figure>
          ))}

          {videos.length > 0 && (
            <div className="mb-10 flex flex-wrap justify-center gap-8 bg-fog px-4 py-10 sm:gap-12">
              {videos.map((v, i) => (
                <figure key={v.src} className="w-full max-w-[300px]">
                  <div className="light-scope rounded-[28px] bg-ink p-2 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                    <video
                      src={v.src}
                      poster={v.poster}
                      width={v.width}
                      height={v.height}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-[9/16] h-auto w-full rounded-[22px] bg-black object-cover"
                    />
                  </div>
                  <figcaption className="label mt-4 text-center text-muted">
                    Reel {String(i + 1).padStart(2, "0")} / {v.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="grid gap-10">
            {images.length === 0 && videos.length === 0 && !study.youtube?.length && (
              <div className="aspect-[16/10]">
                <SamplePlaceholder label="Add samples to /public/work" />
              </div>
            )}
            {/* Each image keeps its own shape, so tall infographics and wide reports both read well. */}
            {images.map((img, i) => (
              <figure key={img.src}>
                <div className="flex justify-center bg-fog p-3 sm:p-6">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width ?? 1600}
                    height={img.height ?? 1000}
                    sizes="(min-width: 1024px) 960px, 100vw"
                    className="h-auto max-h-[85vh] w-auto max-w-full shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    priority={i === 0}
                  />
                </div>
                <figcaption className="label mt-3 text-muted">
                  {String(i + 1).padStart(2, "0")} / {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[3fr_2fr]">
            <div>
              <h2 className="label text-muted">What I did</h2>
              <ol className="mt-6 border-b border-rule">
                {study.whatIDid.map((item, i) => (
                  <li key={item} className="grid grid-cols-[3rem_1fr] border-t border-rule py-4">
                    <span className="label pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            {study.toolsUsed.length > 0 && (
              <div>
                <h2 className="label text-muted">Tools used</h2>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {study.toolsUsed.map((t) => (
                    <li key={t} className="label border border-ink px-3 py-2">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <Link href={`/work/${next.slug}`} className="light-scope group block bg-tangerine text-ink transition hover:bg-ink hover:text-paper">
          <div className="mx-auto flex max-w-5xl items-end justify-between gap-6 px-4 py-14 sm:px-6">
            <div>
              <p className="label">Next project</p>
              <p className="mt-4 font-wide text-2xl leading-tight font-extrabold sm:text-4xl">{next.title}</p>
            </div>
            <span className="font-wide text-4xl font-extrabold transition group-hover:translate-x-2">→</span>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
}
