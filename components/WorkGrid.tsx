"use client";

import { useState } from "react";
import { categories, type Category } from "@/lib/content";
import { CaseStudyCard, type CaseStudyWithCover } from "./CaseStudyCard";

export function WorkGrid({ studies }: { studies: CaseStudyWithCover[] }) {
  const [active, setActive] = useState<Category | "all">("all");
  const visible = active === "all" ? studies : studies.filter((s) => s.category === active);
  const tabs = [["all", "All work"], ...Object.entries(categories)] as [Category | "all", string][];

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter work by category">
        {tabs.map(([key, label]) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={`label border px-4 py-2.5 transition ${
              active === key ? "border-ink bg-ink text-paper" : "border-line bg-paper hover:border-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((study) => (
          <CaseStudyCard key={study.slug} study={study} index={studies.indexOf(study) + 1} />
        ))}
      </div>
    </>
  );
}
