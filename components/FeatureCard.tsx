import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, text, icon: Icon }: FeatureCardProps) {
  return (
    <article className="rounded-md border border-olive/10 bg-white p-5 shadow-[0_8px_24px_rgba(49,64,35,0.06)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cream text-olive">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-black text-olive-dark">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-olive-dark/70">{text}</p>
    </article>
  );
}
