"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Hero collage of real client work and results. Sizes use cqw so it scales with its container.
const reel = {
  src: "/work/video-editing/reel-common-app-timing.mp4",
  poster: "/work/video-editing/reel-common-app-timing.webp",
};

const stats = [
  { value: "12.3K", label: "Instagram audience I create for", href: "/work/college-shortcuts-social", position: "top-[39%] left-[42%] -rotate-2 [--d:2.8s]" },
  { value: "2,939", label: "Podcast downloads", href: "/work/youtube-podcast", position: "-bottom-[1%] left-[40%] rotate-2 [--d:2.95s]" },
];

export function HeroShowcase() {
  const video = useRef<HTMLVideoElement>(null);

  // Autoplay the Reel only on larger screens, and never when the visitor prefers reduced motion or saving data.
  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const wide = matchMedia("(min-width: 1024px)").matches;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (wide && !calm && !saveData) video.current?.play().catch(() => {});
  }, []);

  const piece = "absolute block transition duration-500 hover:z-50 hover:-translate-y-[1.5cqw]";

  return (
    <div>
      <div className="light-scope @container relative mx-auto aspect-[5/4] w-full max-w-xl">
        <Link
          href="/work/ads-and-event-graphics"
          aria-label="Ad banner for College Shortcuts: view the ads and graphics case study"
          className={`${piece} animate-drop top-[4%] left-0 z-10 aspect-[1.91] w-[62%] -rotate-3 shadow-[0_2cqw_4cqw_rgba(0,0,0,0.25)] [--d:2.35s] hover:-rotate-1`}
        >
          <Image src="/work/ads-and-event-graphics/01-ad-banner.webp" alt="" fill sizes="(min-width: 1024px) 360px, 62vw" className="object-cover" priority />
        </Link>

        <Link
          href="/work/ads-and-event-graphics"
          aria-label="Event flyer for College Shortcuts: view the ads and graphics case study"
          className={`${piece} animate-drop bottom-[2%] left-[4%] z-20 aspect-square w-[40%] rotate-3 shadow-[0_2cqw_4cqw_rgba(0,0,0,0.25)] [--d:2.5s] hover:rotate-1`}
        >
          <Image src="/work/ads-and-event-graphics/02-event-flyer.webp" alt="" fill sizes="(min-width: 1024px) 230px, 40vw" className="object-cover" />
        </Link>

        <Link
          href="/work/video-editing"
          aria-label="A Reel edited for College Shortcuts: view the video editing case study"
          className={`${piece} animate-drop top-[4%] right-[3%] z-30 aspect-[9/18] w-[34%] rotate-2 rounded-[4cqw] bg-ink p-[1.1cqw] shadow-[0_2.5cqw_5cqw_rgba(0,0,0,0.3)] [--d:2.65s] hover:rotate-0`}
        >
          <div className="relative h-full overflow-hidden rounded-[3cqw] bg-black">
            <video
              ref={video}
              src={reel.src}
              poster={reel.poster}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <span className="label absolute top-[3cqw] left-[2cqw] flex items-center gap-[1cqw] bg-ink px-[1.6cqw] py-[1cqw] text-[max(2cqw,10px)] text-paper">
              <svg viewBox="0 0 10 10" className="w-[1.8cqw]" aria-hidden="true">
                <path d="M1 0.5v9l8-4.5z" fill="currentColor" />
              </svg>
              Reel I edited
            </span>
          </div>
        </Link>

        {stats.map((s) => (
          <Link
            key={s.value}
            href={s.href}
            className={`${piece} animate-drop z-40 w-[28%] bg-paper p-[2.2cqw] shadow-[0_1.5cqw_3cqw_rgba(0,0,0,0.2)] ${s.position}`}
          >
            <span className="block h-[1.2cqw] w-[1.2cqw] bg-tangerine" />
            <span className="mt-[1.2cqw] block font-wide text-[5cqw] leading-none font-extrabold text-ink">{s.value}</span>
            <span className="label mt-[1.2cqw] block text-[max(1.9cqw,10px)] leading-snug text-muted">{s.label}</span>
          </Link>
        ))}
      </div>
      <p className="label mt-6 text-center text-muted">Real client work / College Shortcuts</p>
    </div>
  );
}
