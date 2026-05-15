import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { contactMethods, heroPhotos, site, whatsappHref } from "@/lib/site";

export const metadata = {
  title: "צור קשר",
  description: "בדיקת זמינות ויצירת קשר עם וילת בית הגדי.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-14 md:py-20">
        <div className="absolute inset-y-0 left-0 hidden w-[42%] lg:block">
          <Image
            src={heroPhotos.contact}
            alt="אווירת אירוח משפחתית רגועה"
            fill
            className="object-cover"
            sizes="42vw"
          />
          <div className="absolute inset-0 bg-olive-dark/20" />
        </div>
        <div className="container-page relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold text-wood">צור קשר</p>
            <h1 className="mt-2 text-4xl font-black leading-tight text-olive-dark md:text-5xl">
              בודקים תאריך לחופשה משפחתית?
            </h1>
            <p className="mt-4 text-base leading-8 text-olive-dark/70">
              הדרך המהירה ביותר היא לשלוח הודעה בוואטסאפ עם תאריך, מספר אורחים
              וסוג האירוח המבוקש.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-olive px-5 py-3 text-sm font-bold text-white transition hover:bg-olive-dark"
            >
              בדיקת זמינות בוואטסאפ
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="py-12">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <article
                key={method.title}
                className="rounded-md border border-olive/10 bg-white p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cream text-olive">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-lg font-black text-olive-dark">
                  {method.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-olive-dark/70">
                  {method.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="container-page">
          <div className="rounded-md bg-cream p-6 md:p-8">
            <h2 className="text-2xl font-black text-olive-dark">מיקום</h2>
            <p className="mt-3 text-base leading-8 text-olive-dark/72">
              {site.location}. המיקום המדויק יישלח לאחר תיאום ההזמנה.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
