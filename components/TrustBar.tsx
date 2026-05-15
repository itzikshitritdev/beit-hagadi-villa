import { trustIndicators } from "@/lib/site";

export function TrustBar() {
  return (
    <section className="border-y border-olive/10 bg-linen/95">
      <div className="container-page grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {trustIndicators.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-start gap-3 border-olive/10 py-5 sm:px-5 sm:[&:not(:last-child)]:border-l"
            >
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-olive">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-black text-olive-dark">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-olive-dark/64">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
