import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "../lib/site-config";

export default function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="AlexRochlitz.com home">
            <Image
              src="/images/new-rock.png"
              alt="Cartoon rock with a halo logo"
              width={56}
              height={56}
              className="h-12 w-12"
              priority
            />
          </Link>
          <div className="flex flex-col">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              {siteConfig.name}
            </Link>
            <span className="hidden text-sm text-black/70 sm:block">
              &quot;{siteConfig.tagline}&quot;
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-black/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
