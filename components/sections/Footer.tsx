import Link from "next/link";
import { profile } from "@/lib/content";
import { Monogram } from "../Monogram";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="light-scope bg-ink text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
        <div className="flex items-center gap-4">
          <Monogram className="h-5 w-auto text-paper" />
          <p className="label">
            © <CurrentYear /> {profile.name}
          </p>
        </div>
        <Link href="/#top" className="label transition hover:text-tangerine">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
