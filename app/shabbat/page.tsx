import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { heroPhotos } from "@/lib/site";

export const metadata = {
  title: "מותאם לשבת",
  description: "אירוח שבת וחגים למשפחות דתיות ומסורתיות עם בית כנסת קרוב ואווירה רגועה.",
};

const shabbatPoints = [
  "בית כנסת קרוב במושב",
  "פינת אוכל גדולה לארוחות שבת",
  "מטבח כפול ומרחב הכנה נוח",
  "חצר גדולה למשחקים ומנוחה",
  "סביבה שקטה שמתאימה למשפחות",
  "אפשרות לתיאום צרכים מיוחדים מראש",
];

export default function ShabbatPage() {
  return (
    <>
      <Hero
        eyebrow="מותאם לשבת וחגים"
        title="שבת משפחתית שמרגישה פשוטה ונעימה"
        subtitle="בית כנסת קרוב, חצר נעימה, מטבח כפול ופינת אוכל רחבה. מקום שמאפשר למשפחה להיות יחד בלי לחץ ובלי רעש."
        image={heroPhotos.shabbat}
        imageAlt="פינת אוכל גדולה לארוחות שבת"
        secondaryHref="/contact"
        secondaryLabel="תיאום שבת"
      />
      <section className="py-14 md:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold text-wood">שקט, סדר ונוחות</p>
            <h2 className="mt-2 text-3xl font-black text-olive-dark md:text-4xl">
              כל מה שחשוב לשבת משפחתית
            </h2>
            <p className="mt-4 text-base leading-8 text-olive-dark/70">
              האירוח מתאים למשפחות שרוצות להיות יחד במקום מרווח, עם גישה נוחה
              לבית הכנסת ועם מקום מסודר לארוחות, מנוחה וזמן משפחתי.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {shabbatPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-md border border-olive/10 bg-white p-4 text-sm font-bold text-olive-dark"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-olive" aria-hidden="true" />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-md shadow-soft">
            <Image
              src="/images/villa-room.svg"
              alt="חדר שינה נעים לשבת משפחתית"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <CTASection
        title="בודקים תאריך לשבת או חג?"
        text="שלחו הודעה עם התאריך, מספר המשפחות ומספר האורחים, ונחזור עם פרטים זמינים."
      />
    </>
  );
}
