import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { navItems, site, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-olive/10 bg-olive-dark text-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h2 className="text-xl font-black">{site.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/78">
            וילה גדולה למשפחות, שבתות וחופשות רגועות במושב בית הגדי ליד נתיבות.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/78">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {site.location}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">עמודים</h3>
          <div className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/76 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold">בדיקת זמינות</h3>
          <p className="mt-3 text-sm leading-7 text-white/78">
            שלחו הודעה עם תאריך, מספר אורחים וסוג האירוח המבוקש.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-bold text-olive-dark transition hover:bg-cream"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            וואטסאפ
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="container-page text-xs text-white/58">
          © {new Date().getFullYear()} {site.name}. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
