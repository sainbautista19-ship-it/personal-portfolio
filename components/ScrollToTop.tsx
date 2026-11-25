"use client";

import { useEffect } from "react";

// Next.js keeps the scroll position when the new page is already in view (e.g. "Next project" at the
// bottom of a case study), so case study pages jump to the top when they open.
export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return null;
}
