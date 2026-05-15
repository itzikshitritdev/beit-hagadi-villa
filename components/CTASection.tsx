import { ButtonLink } from "@/components/ButtonLink";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "כבר מדמיינים את המשפחה בחצר?",
  text = "שלחו לנו תאריך, מספר אורחים וסוג האירוח. נחזור עם זמינות, פרטים ומה חשוב להכין כדי שהחופשה תהיה רגועה מההתחלה.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-olive-dark py-16 text-white">
      <div className="absolute inset-0 opacity-24 image-wash" />
      <div className="container-page relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
          <p className="mt-3 text-base leading-8 text-white/78">{text}</p>
        </div>
        <ButtonLink variant="light" className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
