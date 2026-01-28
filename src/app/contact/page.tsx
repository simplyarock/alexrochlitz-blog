import type { Metadata } from "next";
import Link from "next/link";

import ContactForm from "../../components/ContactForm";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alex Rochlitz.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <ContactForm />
      <div className="flex flex-wrap gap-4 text-base">
        <Link
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 hover:underline"
        >
          LinkedIn
        </Link>
        <Link
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 hover:underline"
        >
          Instagram
        </Link>
      </div>
    </div>
  );
}
