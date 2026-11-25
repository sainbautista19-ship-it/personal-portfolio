import { Monogram } from "./Monogram";

export function SamplePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`light-scope relative flex h-full w-full items-end overflow-hidden bg-coal p-4 ${className}`}>
      <Monogram className="absolute -right-[8%] -bottom-[12%] w-[70%] text-white/[0.06]" dot="fill-white/[0.06]" />
      <span className="label relative text-paper/60">{label}</span>
    </div>
  );
}
