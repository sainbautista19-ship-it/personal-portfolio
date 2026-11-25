import { Monogram } from "./Monogram";

// Plays once per full page load (it lives in the root layout, which persists across client navigation).
export function Intro() {
  return (
    <div aria-hidden="true" className="intro light-scope pointer-events-none fixed inset-0 z-[100]">
      <div className="intro-panel absolute inset-0 bg-tangerine [--d:1.9s]" />
      <div className="intro-panel absolute inset-0 flex flex-col items-center justify-center gap-8 bg-ink [--d:1.75s]">
        <Monogram draw className="w-36 text-paper sm:w-44" />
        <p className="label intro-fade text-paper/60">Sain Bautista / Portfolio</p>
      </div>
    </div>
  );
}
