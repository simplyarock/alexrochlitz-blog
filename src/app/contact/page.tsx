import type { Metadata } from "next";

import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alex Rochlitz.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <div className="flex flex-col gap-2 text-lg text-black/90">
        <a
          href={`mailto:${siteConfig.email}`}
          className="w-fit rounded-full border border-black/10 bg-white/70 px-4 py-2 font-semibold transition hover:bg-white"
        >
          {siteConfig.email}
        </a>
        <div className="flex flex-wrap gap-4 text-base">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
