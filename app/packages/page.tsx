import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PackageCard } from "@/components/PackageCard";
import { heroPhotos, packages } from "@/lib/site";

export const metadata = {
  title: "חבילות וחוויות",
  description: "חבילות אירוח למשפחות, שבתות, חופשות אמצע שבוע, כלות, צוותים וחוויית משק.",
};

export default function PackagesPage() {
  return (
    <>
      <Hero
        eyebrow="חבילות וחוויות"
        title="כל סיבה להגיע מקבלת כאן מקום רגוע"
        subtitle="שבת משפחתית, חופשת אמצע שבוע, התארגנות כלה, מפגש צוות קטן או חוויית משק עם ילדים. הכל באווירה משפחתית ולא רועשת."
        image={heroPhotos.packages}
        imageAlt="חוויית משק וסוסים ליד הווילה"
        secondaryHref="/contact"
        secondaryLabel="קבלת פרטים"
      />
      <section className="py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-olive-dark md:text-4xl">
              אפשרויות אירוח
            </h2>
            <p className="mt-4 text-base leading-8 text-olive-dark/70">
              כל אירוח נבנה לפי תאריך, מספר אורחים והצרכים של המשפחה או הקבוצה.
              נשמח לעזור לכם להבין מה מתאים.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <PackageCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="ספרו לנו מה סוג האירוח, ונבדוק התאמה וזמינות" />
    </>
  );
}
