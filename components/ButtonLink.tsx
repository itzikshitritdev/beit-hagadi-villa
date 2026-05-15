import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

type ButtonLinkProps = {
  href?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  showIcon?: boolean;
};

const variants = {
  primary:
    "bg-olive text-white hover:bg-olive-dark focus-visible:outline-olive-dark",
  secondary:
    "border border-olive/25 bg-white text-olive-dark hover:border-olive hover:bg-cream",
  light:
    "bg-white text-olive-dark hover:bg-cream focus-visible:outline-white",
  ghost:
    "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/18 focus-visible:outline-white",
};

export function ButtonLink({
  href = whatsappHref,
  children = "בדיקת זמינות בוואטסאפ",
  variant = "primary",
  className = "",
  showIcon = true,
}: ButtonLinkProps) {
  const external = href.startsWith("http");

  const content = (
    <>
      {showIcon ? <MessageCircle className="h-5 w-5" aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  );

  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
