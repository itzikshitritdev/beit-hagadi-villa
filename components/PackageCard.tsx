import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

type PackageCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export function PackageCard({ title, text, icon: Icon }: PackageCardProps) {
  return (
    <article className="flex h-full flex-col rounded-md border border-olive/10 bg-white p-6 shadow-[0_8px_24px_rgba(49,64,35,0.06)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cream text-olive">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-black text-olive-dark">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-olive-dark/70">{text}</p>
      <ButtonLink className="mt-6 w-full" variant="secondary">
        בדיקת התאמה וזמינות
      </ButtonLink>
    </article>
  );
}
