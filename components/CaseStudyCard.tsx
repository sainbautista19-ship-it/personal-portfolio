"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, type CaseStudy } from "@/lib/content";
import { SamplePlaceholder } from "./SamplePlaceholder";

// cover and previewVideo are resolved on the server (undefined if the file is missing).
export type CaseStudyWithCover = CaseStudy & { cover?: string; previewVideo?: string };

export function CaseStudyCard({ study, index }: { study: CaseStudyWithCover; index: number }) {
  const video = useRef<HTMLVideoElement>(null);

  // Reels preview silently on hover and rewind when the pointer leaves.
  const play = () => video.current?.play().catch(() => {});
  const stop = () => {
    if (!video.current) return;
    video.current.pause();
    video.current.currentTime = 0;
  };

  return (
    <Link
      href={`/work/${study.slug}`}
      onMouseEnter={study.previewVideo ? play : undefined}
      onMouseLeave={study.previewVideo ? stop : undefined}
      className={`group relative flex flex-col bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${
        study.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${study.featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {study.cover ? (
          <Image
            src={study.cover}
            alt={study.title}
            fill
            sizes={study.featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
            className={`object-cover transition duration-500 group-hover:scale-105 ${study.previewVideo ? "object-center" : "object-top"}`}
          />
        ) : (
          <SamplePlaceholder label="Sample coming soon" />
        )}
        {study.previewVideo && (
          <>
            <video
              ref={video}
              src={study.previewVideo}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
            />
            <span className="label light-scope absolute top-3 left-3 flex items-center gap-2 bg-ink px-3 py-1.5 text-paper">
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                <path d="M1 0.5v9l8-4.5z" fill="currentColor" />
              </svg>
              Video
            </span>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="label flex justify-between text-muted">
          <span>{categories[study.category]}</span>
          <span>Case {String(index).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-4 text-xl leading-snug font-bold">{study.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-coal">{study.summary}</p>
        <span className="label mt-auto pt-6">View details →</span>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-tangerine transition duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
