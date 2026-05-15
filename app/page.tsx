import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  CheckCircle2,
  Church,
  Leaf,
  MapPin,
  MessageCircle,
  Quote,
  ShieldCheck,
  Trees,
  Waves,
} from "lucide-react";
import { galleryImages, heroPhotos, site, whatsappHref } from "@/lib/site";

const trustItems = [
  {
    title: "עד 40 אורחים",
    text: "מקום למשפחה מורחבת, ילדים, סבים וסבתות.",
    icon: BedDouble,
  },
  {
    title: "בריכה מחוממת ומקורה",
    text: "ערבים רגועים ליד המים גם כשמזג האוויר משתנה.",
    icon: Waves,
  },
  {
    title: "מותאם לשבת",
    text: "אווירה שקטה, נוחה ומכבדת למשפחות דתיות ומסורתיות.",
    icon: ShieldCheck,
  },
  {
    title: "בית כנסת קרוב",
    text: "נוחות אמיתית לשבתות, חגים ואירוח משפחתי.",
    icon: Church,
  },
  {
    title: "חוות סוסים בסביבה",
    text: "אפשרות לחוויית משק ורכיבה בתיאום מראש.",
    icon: Leaf,
  },
  {
    title: "חצר גדולה ושקט",
    text: "דשא, עצים ומרחב לילדים בלי תחושת צפיפות.",
    icon: Trees,
  },
];

const familyReviews = [
  {
    name: "משפחת אוחיון, אשקלון",
    text: "הגענו לשבת עם כל המשפחה והרגשנו שיש מקום לכולם. הילדים היו בחצר שעות, המבוגרים ישבו בנחת, והכל הרגיש רגוע ומסודר.",
  },
  {
    name: "משפחת בן דוד, ירושלים",
    text: "חיפשנו מקום לשבת משפחתית בלי רעש ובלי אווירת מסיבות. הבית כנסת הקרוב, המטבח והחצר עשו לנו את כל ההבדל.",
  },
  {
    name: "הילה, חופשת אמצע שבוע",
    text: "שלושה ימים באמצע שבוע נתנו לנו בדיוק את השקט שרצינו. בריכה, קפה בבוקר בחצר, וילדים שלא רצו לחזור הביתה.",
  },
];

const whatsappButtonClass =
  "inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#1f8f4d] px-7 py-4 text-base font-black text-white shadow-[0_18px_42px_rgba(31,143,77,0.34)] transition duration-300 hover:-translate-y-1 hover:bg-[#187640] hover:shadow-[0_24px_55px_rgba(31,143,77,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f8f4d]";

export default function HomePage() {
  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-5 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#1f8f4d] px-5 text-sm font-black text-white shadow-[0_16px_38px_rgba(31,143,77,0.38)] transition duration-300 hover:-translate-y-1 hover:bg-[#187640] sm:min-h-16 sm:px-6"
        aria-label="בדיקת זמינות בוואטסאפ"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="hidden sm:inline">בדיקת זמינות</span>
      </a>

      <section className="relative min-h-[760px] overflow-hidden bg-olive-dark text-white sm:min-h-[calc(100svh-64px)]">
        <style>{`
          @keyframes homeHeroDrift {
            from { transform: scale(1.08) translate3d(0, 0, 0); }
            to { transform: scale(1.15) translate3d(-1.2%, 0.8%, 0); }
          }

          @media (prefers-reduced-motion: no-preference) {
            .home-hero-image {
              animation: homeHeroDrift 22s ease-out infinite alternate;
            }
          }
        `}</style>
        <Image
          src={heroPhotos.home}
          alt="חופשה משפחתית רגועה באחוזה במושב"
          fill
          priority
          className="home-hero-image scale-[1.08] object-cover brightness-[0.9] contrast-[1.06] saturate-[1.16] sepia-[0.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#b68145]/18 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(247,241,230,0.16),transparent_34%),linear-gradient(90deg,rgba(22,29,18,0.98),rgba(38,49,31,0.86)_32%,rgba(38,49,31,0.42)_62%,rgba(38,49,31,0.14)),linear-gradient(0deg,rgba(22,29,18,0.78),rgba(38,49,31,0.08)_58%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-linen via-linen/55 to-transparent" />

        <div className="container-page relative z-10 flex min-h-[760px] items-end py-6 sm:min-h-[calc(100svh-64px)] sm:py-9 md:py-10">
          <div className="max-w-4xl rounded-[28px] border border-white/14 bg-olive-dark/24 p-5 pb-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-[10px] sm:p-7 md:mb-8 md:p-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm font-bold text-cream shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              מושב בית הגדי, ליד נתיבות
            </div>
            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.02] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.28)] sm:text-6xl lg:text-7xl xl:text-8xl">
              וילה גדולה למשפחות, שבתות וחופשות באמצע השבוע
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-white/88 sm:text-2xl sm:leading-10">
              עד 40 מקומות לינה, בית כנסת קרוב, חצר גדולה, בריכה מחוממת
              ואווירה שקטה של מושב בדרום. מקום שבו הילדים רצים בחוץ והמבוגרים
              סוף סוף יושבים רגע בנחת.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`${whatsappButtonClass} min-h-16 rounded-[22px] px-8 text-lg shadow-[0_22px_58px_rgba(31,143,77,0.48)] sm:px-9`}
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
                בדיקת זמינות בוואטסאפ
              </a>
              <Link
                href="/gallery"
                className="inline-flex min-h-16 items-center justify-center rounded-[22px] border border-white/30 bg-white/14 px-8 py-4 text-lg font-black text-white shadow-[0_20px_54px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/24 sm:px-9"
              >
                לראות את האווירה
              </Link>
            </div>

            <div className="mt-9 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {["משפחות גדולות", "שבתות וחגים", "חצר ובריכה", "לא וילת מסיבות"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/14 bg-white/10 px-4 py-3 text-sm font-bold text-white/88 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-md"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-8 z-10">
        <div className="container-page rounded-[28px] border border-white/70 bg-white/78 p-3 shadow-[0_28px_80px_rgba(49,64,35,0.16)] backdrop-blur-xl">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-2xl p-4 transition duration-300 hover:bg-cream/80 hover:shadow-[0_18px_40px_rgba(49,64,35,0.1)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-olive text-white shadow-[0_12px_24px_rgba(89,107,58,0.22)] transition duration-300 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 text-base font-black text-olive-dark">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-olive-dark/66">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cream blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] shadow-[0_26px_70px_rgba(49,64,35,0.18)]">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 28vw, 50vw"
                />
              </div>
              <div className="grid gap-4 pt-10">
                {[galleryImages[1], galleryImages[4]].map((image) => (
                  <div
                    key={image.src}
                    className="relative min-h-[190px] overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(49,64,35,0.14)]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                      sizes="(min-width: 1024px) 24vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-sm font-black text-wood">חופשה שמרגישה ישראלית, משפחתית ונעימה</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-olive-dark md:text-6xl">
              בבוקר קפה בחצר, בצהריים בריכה, בערב כולם סביב השולחן
            </h2>
            <p className="mt-6 text-lg leading-9 text-olive-dark/72">
              אחוזת אלפא נועדה למשפחות שרוצות להיות יחד בלי עומס. ילדים שרצים
              בדשא, ארוחות ארוכות, שבת רגועה, ואוויר של מושב שמוריד קצב מהרגע
              שנכנסים בשער.
            </p>
            <div className="mt-8 grid gap-3 text-base font-bold text-olive-dark/78 sm:grid-cols-2">
              {[
                "9 חדרים ו-4 קרוואנים מרוהטים",
                "מטבח כפול ופינת אוכל רחבה",
                "חצר גדולה עם דשא ועצים",
                "חוויית משק וסוסים בתיאום",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-olive" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-black text-wood">אורחים מספרים</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-olive-dark md:text-6xl">
              משפחות מגיעות בשביל מקום. הן חוזרות בגלל התחושה.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {familyReviews.map((review, index) => (
              <figure
                key={review.name}
                className={`rounded-[28px] border border-white/70 bg-white/78 p-7 shadow-[0_24px_60px_rgba(49,64,35,0.1)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(49,64,35,0.16)] ${
                  index === 1 ? "md:mt-8" : ""
                }`}
              >
                <Quote className="h-8 w-8 text-wood" aria-hidden="true" />
                <blockquote className="mt-6 text-lg leading-9 text-olive-dark/78">
                  {review.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-olive/10 pt-5 text-sm font-black text-olive-dark">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black text-wood">רגעים מהמקום</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-olive-dark md:text-6xl">
                גלריה שמכניסה לאווירה
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-olive/18 bg-white px-5 text-sm font-black text-olive-dark shadow-[0_14px_34px_rgba(49,64,35,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-cream"
            >
              לכל התמונות
            </Link>
          </div>

          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[190px]">
            {galleryImages.slice(0, 6).map((image, index) => (
              <figure
                key={image.src}
                className={`group relative overflow-hidden rounded-[28px] shadow-[0_24px_65px_rgba(49,64,35,0.14)] ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2"
                    : index === 3
                      ? "md:col-span-2"
                      : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/72 via-olive-dark/8 to-transparent opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-lg font-black text-white">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-olive-dark py-20 text-white md:py-28">
        <Image
          src={galleryImages[1].src}
          alt="ערב רגוע ליד הבריכה"
          fill
          className="object-cover opacity-28"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive-dark/72 backdrop-blur-[1px]" />
        <div className="container-page relative z-10 max-w-4xl text-center">
          <p className="text-sm font-black text-cream">הצעד הבא פשוט</p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
            רוצים לבדוק אם התאריך שלכם פנוי?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-white/78">
            שלחו הודעה בוואטסאפ עם תאריך, מספר אורחים וסוג האירוח. נחזור עם
            פרטים ברורים כדי שתדעו אם המקום מתאים למשפחה שלכם.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`${whatsappButtonClass} mt-9`}
          >
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
            בדיקת זמינות בוואטסאפ
          </a>
          <p className="mt-5 text-sm text-white/58">{site.location}</p>
        </div>
      </section>
    </>
  );
}
