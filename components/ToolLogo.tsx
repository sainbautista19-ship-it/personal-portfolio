import Image from "next/image";
import { publicAsset } from "@/lib/assets";

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Black or dark-gray logos that would disappear on a dark background; they're inverted to white in dark mode.
const darkLogos = new Set(["chatgpt", "wix", "capcut", "wordpress"]);

// Logos live in /public/tools/<slug>.svg (e.g. "Close CRM" -> close-crm.svg); each file notes its source.
export function ToolLogo({ name }: { name: string }) {
  const s = slug(name);
  const file = publicAsset(`/tools/${s}.svg`);

  if (!file) return <span className="w-7 shrink-0 text-center font-wide text-lg font-extrabold">{name[0]}</span>;

  return (
    <Image
      src={file}
      alt=""
      width={28}
      height={28}
      unoptimized
      className={`h-7 w-7 shrink-0 object-contain ${darkLogos.has(s) ? "dark:invert" : ""}`}
    />
  );
}
