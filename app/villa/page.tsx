import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { features, galleryImages, heroPhotos } from "@/lib/site";

export const metadata = {
  title: "הווילה",
  description: "הכירו את וילת בית הגדי: חדרים, קרוואנים, בריכה, חצר ומטבח כפול.",
};

export default function VillaPage() {
  return (
    <>
      <Hero
        eyebrow="הווילה"
        title="וילה עם מקום לנשום, להתכנס ולהרגיש בבית"
        subtitle="9 חדרים, 4 קרוואנים מרוהטים, חצר גדולה, בריכה מחוממת ומקורה, מטבח כפול ופינת אוכל רחבה למשפחות שרוצות שקט ונוחות."
        image={heroPhotos.villa}
        imageAlt="חצר הווילה במושב בית הגדי"
        secondaryHref="/gallery"
        secondaryLabel="צפייה בגלריה"
      />
      <section className="py-14 md:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-md shadow-soft">
            <Image
              src="/images/villa-kitchen.svg"
              alt="מטבח כפול גדול בווילה"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-wood">נוח להתארגן, לבשל ולשבת יחד</p>
            <h2 className="mt-2 text-3xl font-black text-olive-dark md:text-4xl">
              הווילה בנויה לאירוח משפחתי אמיתי
            </h2>
            <p className="mt-4 text-base leading-8 text-olive-dark/72">
              יש מקום ללינה, לבישול, לארוחות ולמנוחה בלי לחץ. החלוקה בין החדרים
              והקרוואנים מאפשרת למשפחות להיות יחד ועדיין לשמור על פרטיות.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["עד 40 אורחים", "9 חדרים", "4 קרוואנים"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-olive/10 bg-cream p-4 text-center text-sm font-black text-olive-dark"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream py-14 md:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold text-wood">מה יש במקום</p>
              <h2 className="mt-2 text-3xl font-black text-olive-dark md:text-4xl">
                כל מה שצריך כדי שהאירוח יהיה פשוט
              </h2>
              <p className="mt-4 text-base leading-8 text-olive-dark/70">
                המטרה היא לא להרשים במילים גדולות, אלא לתת למשפחה מרחב מסודר,
                נעים ונוח לשהייה אמיתית.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {galleryImages.slice(0, 3).map((image) => (
            <div
              key={image.src}
              className="relative min-h-[340px] overflow-hidden rounded-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>
      <CTASection title="רוצים לוודא שהווילה מתאימה להרכב שלכם?" />
    </>
  );
}
