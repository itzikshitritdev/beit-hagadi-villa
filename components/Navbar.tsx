import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { navItems, site, whatsappHref } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-olive/10 bg-linen/95 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0 text-lg font-black text-olive-dark">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-olive-dark/80 transition hover:bg-cream hover:text-olive-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-10 items-center gap-2 rounded-md bg-olive px-4 text-sm font-bold text-white transition hover:bg-olive-dark sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            בדיקת זמינות
          </a>
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-olive/20 bg-white text-olive-dark">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">פתיחת תפריט</span>
            </summary>
            <div className="absolute left-0 top-12 w-64 rounded-md border border-olive/10 bg-white p-2 shadow-soft">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-sm font-semibold text-olive-dark hover:bg-cream"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-olive px-4 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                בדיקת זמינות בוואטסאפ
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
