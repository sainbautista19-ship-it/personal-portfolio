"use client";

import { useState } from "react";
import Link from "next/link";
import { Monogram } from "./Monogram";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Monogram className="h-6 w-auto" />
          <span className="font-wide text-sm font-bold uppercase">Sain Bautista</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="label text-muted transition hover:text-ink">
              {l.label}
            </Link>
          ))}
          <ThemeToggle className="-mx-2" />
          <Link href="/#contact" className="label bg-tangerine px-4 py-2.5 text-onyx transition hover:bg-ink hover:text-paper">
            Get in touch
          </Link>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            className="p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-rule px-4 pb-4 md:hidden">
          {[...links, { href: "/#contact", label: "Contact" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="label block border-b border-rule py-4">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
