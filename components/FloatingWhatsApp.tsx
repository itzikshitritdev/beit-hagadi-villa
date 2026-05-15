import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 left-5 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#1f8f4d] px-5 text-sm font-black text-white shadow-[0_14px_35px_rgba(31,143,77,0.35)] transition hover:-translate-y-0.5 hover:bg-[#18763f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f8f4d]"
      aria-label="בדיקת זמינות בוואטסאפ"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">בדיקת זמינות</span>
    </a>
  );
}
