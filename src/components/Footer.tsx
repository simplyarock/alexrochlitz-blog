import Link from "next/link";

import { siteConfig } from "../lib/site-config";

const socialIconClass =
  "h-5 w-5 fill-current transition hover:text-black/70";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              className={socialIconClass}
              aria-hidden="true"
            >
              <path d="M4.98 3.5C3.33 3.5 2 4.85 2 6.5S3.33 9.5 4.98 9.5c1.64 0 2.97-1.35 2.97-3s-1.33-3-2.97-3zM2.4 20.5h5.16V9.98H2.4V20.5zM9.36 9.98h4.95v1.44h.07c.69-1.23 2.38-2.53 4.9-2.53 5.24 0 6.2 3.45 6.2 7.93v3.68h-5.16v-3.26c0-1.83-.03-4.18-2.55-4.18-2.56 0-2.95 1.99-2.95 4.05v3.39H9.36V9.98z" />
            </svg>
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              className={socialIconClass}
              aria-hidden="true"
            >
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm5.2-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
            </svg>
          </a>
        </div>
        <Link
          href="https://www.youtube.com/watch?v=sxgCC4H1dl8"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-black/70 transition hover:text-black"
        >
          Powered by Pizza
        </Link>
      </div>
    </footer>
  );
}
