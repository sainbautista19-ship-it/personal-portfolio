import { existsSync } from "node:fs";
import path from "node:path";

// Returns the path only if the file exists in /public, so missing samples fall back to placeholders.
export function publicAsset(src?: string) {
  if (!src) return undefined;
  return existsSync(path.join(process.cwd(), "public", src)) ? src : undefined;
}
