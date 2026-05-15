import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { galleryImages } from "@/lib/site";

export const metadata = {
  title: "גלריה",
  description: "גלריית תמונות ראשונית של וילת בית הגדי, החצר, הבריכה, המטבח וחוויית המשק.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-cream py-14 md:py-20">
        <div className="container-page">
          <p className="text-sm font-bold text-wood">גלריה</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-olive-dark md:text-5xl">
            הצצה לאווירה שמחכה לכם
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-olive-dark/70">
            התמונות כרגע משמשות כצילום אווירה להמחשה. כשהצילומים האמיתיים יהיו
            מוכנים, אפשר להחליף אותם בקלות באותם שדות בגלריה.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-md border border-olive/10 bg-white shadow-[0_8px_24px_rgba(49,64,35,0.06)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="p-4 text-sm font-black text-olive-dark">
                {image.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTASection title="רוצים לקבל תמונות נוספות ולבדוק זמינות?" />
    </>
  );
}
