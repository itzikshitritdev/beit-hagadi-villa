import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  secondaryHref = "/contact",
  secondaryLabel = "פרטים נוספים",
}: HeroProps) {
  return (
    <section className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-olive-dark text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,49,31,0.9),rgba(38,49,31,0.54)_42%,rgba(38,49,31,0.18)),linear-gradient(0deg,rgba(38,49,31,0.46),rgba(38,49,31,0.1)_40%)]" />
      <div className="container-page relative z-10 flex min-h-[calc(100svh-64px)] items-end py-10 md:py-16">
        <div className="max-w-3xl pb-8 md:pb-12">
          {eyebrow ? (
            <p className="mb-4 text-sm font-bold text-cream">{eyebrow}</p>
          ) : null}
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-white/84 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink variant="light" />
            <ButtonLink
              href={secondaryHref}
              variant="ghost"
              showIcon={false}
            >
              {secondaryLabel}
            </ButtonLink>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/20 pt-5 text-sm text-white/78">
            <span>עד 40 אורחים</span>
            <span>שבתות וחגים</span>
            <span>מושב ליד נתיבות</span>
          </div>
        </div>
      </div>
    </section>
  );
}
