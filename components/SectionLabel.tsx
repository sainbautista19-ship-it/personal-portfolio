export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="label dark:text-tangerine">
        {index} / {children}
      </span>
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}
