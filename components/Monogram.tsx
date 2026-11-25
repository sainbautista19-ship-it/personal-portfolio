// "sb." mark built from 12px strokes and half-circles, with a square tangerine period.
// `draw` animates the strokes in, for the intro overlay.
export function Monogram({
  className = "",
  dot = "fill-tangerine",
  draw = false,
}: {
  className?: string;
  dot?: string;
  draw?: boolean;
}) {
  const pathLength = draw ? 1 : undefined;

  return (
    <svg viewBox="0 0 114 66" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="12">
        <path d="M46 12H22a12 12 0 0 0 0 24h8a12 12 0 0 1 0 24H4" pathLength={pathLength} className={draw ? "intro-stroke [--d:0.1s]" : undefined} />
        <path
          d="M62 0v66M62 36h16a12 12 0 0 1 0 24H62"
          pathLength={pathLength}
          className={draw ? "intro-stroke [--d:0.3s]" : undefined}
        />
      </g>
      <rect x="100" y="52" width="14" height="14" className={`${dot} ${draw ? "intro-dot" : ""}`} />
    </svg>
  );
}
