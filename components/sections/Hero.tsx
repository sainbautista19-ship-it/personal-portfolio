import Link from "next/link";
import { profile } from "@/lib/content";
import { HeroShowcase } from "../HeroShowcase";

export function Hero() {
  const [first, second] = profile.headline;

  return (
    <section id="top" className="overflow-hidden bg-fog">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-20 lg:pb-28">
        <div>
          <h1 className="animate-rise font-wide text-4xl leading-[1.05] font-extrabold tracking-tight [--d:2.3s] sm:text-6xl">
            {first}{" "}
            <span className="highlight px-1.5 text-onyx [--d:2.8s]">{second}</span>
          </h1>
          <p className="mt-8 max-w-md animate-rise text-lg leading-relaxed text-coal [--d:2.45s]">
            {profile.name}. {profile.title}, and a creative virtual assistant for small teams and founders.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [--d:2.55s]">
            <Link href="#work" className="label bg-ink px-6 py-4 text-paper transition hover:bg-tangerine hover:text-onyx">
              See the work
            </Link>
            <Link href="#hand-off" className="label border border-ink px-6 py-4 transition hover:bg-paper">
              What could you hand off?
            </Link>
          </div>
        </div>
        <HeroShowcase />
      </div>
    </section>
  );
}
