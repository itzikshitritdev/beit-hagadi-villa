import { ButtonLink } from "@/components/ButtonLink";

export function ContactForm() {
  return (
    <form className="rounded-md border border-olive/10 bg-white p-5 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-olive-dark">
          שם מלא
          <input
            className="min-h-12 rounded-md border border-olive/20 px-3 text-base font-normal outline-none transition focus:border-olive"
            type="text"
            name="name"
            placeholder="השם שלכם"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-olive-dark">
          טלפון
          <input
            className="min-h-12 rounded-md border border-olive/20 px-3 text-base font-normal outline-none transition focus:border-olive"
            type="tel"
            name="phone"
            placeholder="050-0000000"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-olive-dark">
          תאריך רצוי
          <input
            className="min-h-12 rounded-md border border-olive/20 px-3 text-base font-normal outline-none transition focus:border-olive"
            type="text"
            name="date"
            placeholder="לדוגמה: שבת הקרובה / 12.8"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-olive-dark">
          מספר אורחים
          <input
            className="min-h-12 rounded-md border border-olive/20 px-3 text-base font-normal outline-none transition focus:border-olive"
            type="number"
            name="guests"
            placeholder="עד 40"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-olive-dark">
        מה חשוב לכם באירוח?
        <textarea
          className="min-h-32 rounded-md border border-olive/20 px-3 py-3 text-base font-normal outline-none transition focus:border-olive"
          name="message"
          placeholder="שבת משפחתית, חופשת אמצע שבוע, התארגנות כלה, חוויית משק..."
        />
      </label>
      <div className="mt-5">
        <ButtonLink className="w-full sm:w-auto">שליחת הודעה בוואטסאפ</ButtonLink>
      </div>
      <p className="mt-3 text-xs leading-6 text-olive-dark/58">
        הטופס משמש לאיסוף פרטים ראשוני. לשליחה מהירה ומענה זמין מומלץ לפנות בוואטסאפ.
      </p>
    </form>
  );
}
