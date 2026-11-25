import { profile, socials } from "@/lib/content";
import { SectionLabel } from "../SectionLabel";
import { SocialIcon } from "../SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="light-scope bg-coal py-24 text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="06">Contact</SectionLabel>
        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-wide text-4xl leading-[1.05] font-extrabold sm:text-6xl">
              Got something to <span className="text-tangerine">hand off?</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-paper/75">
              Send me a message on any of these. Tell me what&apos;s taking up your week and I&apos;ll tell you
              honestly whether I can help. {profile.responseTime}
            </p>
          </div>
          <ul className="border-b border-rule self-end">
            {socials.map((s) => {
              // mailto: links open the email app directly; web links open in a new tab.
              const external = s.href.startsWith("http");
              return (
                <li key={s.kind}>
                  <a
                    href={s.href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-4 border-t border-rule px-2 py-5 transition hover:bg-tangerine hover:text-ink"
                  >
                    <SocialIcon kind={s.kind} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-xl font-semibold">{s.label}</span>
                      <span className="label mt-1 block break-all opacity-60">{s.detail}</span>
                    </span>
                    <span className="transition group-hover:translate-x-1">→</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
