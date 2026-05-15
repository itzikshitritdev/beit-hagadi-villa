import {
  BedDouble,
  Building2,
  CalendarHeart,
  ChefHat,
  CheckCircle2,
  Church,
  Clock,
  Flower2,
  HeartHandshake,
  Home,
  Leaf,
  MapPin,
  MessageCircle,
  Palmtree,
  Sparkles,
  Utensils,
  Waves,
} from "lucide-react";

export const site = {
  name: "אחוזת אלפא",
  description:
    "וילה גדולה למשפחות, שבתות וחופשות באמצע השבוע במושב בית הגדי ליד נתיבות.",
  phone: "972542492455",
  whatsappText: "שלום, אשמח לבדוק זמינות לאירוח משפחתי באחוזה",
  location: "מושב בית הגדי, ליד נתיבות",
};

export const whatsappHref = `https://wa.me/${site.phone}?text=${encodeURIComponent(
  site.whatsappText,
)}`;

export const navItems = [
  { href: "/", label: "בית" },
  { href: "/villa", label: "הווילה" },
  { href: "/packages", label: "חבילות וחוויות" },
  { href: "/shabbat", label: "מותאם לשבת" },
  { href: "/gallery", label: "גלריה" },
  { href: "/contact", label: "צור קשר" },
];

export const features = [
  {
    title: "עד 40 מקומות לינה",
    text: "מרחב נוח למשפחות גדולות, שבתות משפחתיות וחופשות באמצע השבוע.",
    icon: BedDouble,
  },
  {
    title: "9 חדרים",
    text: "חלוקה נוחה בין הורים, ילדים ואורחים, עם פרטיות ושקט.",
    icon: Home,
  },
  {
    title: "4 קרוואנים מרוהטים",
    text: "פתרון נוסף ללינה נעימה לצד הווילה וליד החצר.",
    icon: Building2,
  },
  {
    title: "בריכה מחוממת ומקורה",
    text: "מתאימה להנאה משפחתית לאורך השנה, בכפוף לתיאום מראש.",
    icon: Waves,
  },
  {
    title: "חצר גדולה",
    text: "דשא, עצים ופינות ישיבה לארוחות, מנוחה ומשחקים לילדים.",
    icon: Palmtree,
  },
  {
    title: "מטבח כפול גדול",
    text: "משטחי עבודה, אחסון ומרחב בישול שמתאימים לאירוח משפחתי.",
    icon: ChefHat,
  },
  {
    title: "פינת אוכל רחבה",
    text: "מקום נוח לשבת יחד סביב שולחן אחד וליהנות מארוחות משותפות.",
    icon: Utensils,
  },
  {
    title: "מותאם לשבת",
    text: "אווירה שקטה, בית כנסת קרוב וסביבה שמתאימה לשבתות וחגים.",
    icon: Church,
  },
  {
    title: "חוויית משק",
    text: "פינת חי, חוות סוסים קרובה ואפשרות לחוויית רכיבה בתיאום.",
    icon: Leaf,
  },
];

export const packages = [
  {
    title: "שבת משפחתית",
    text: "אירוח רגוע למשפחות דתיות ומסורתיות, עם בית כנסת קרוב, חצר גדולה ופינת אוכל רחבה.",
    icon: CalendarHeart,
  },
  {
    title: "חופשת אמצע שבוע",
    text: "כמה ימים של שקט במושב, בריכה, חצר ומרחב שמתאים לילדים ולמבוגרים.",
    icon: Clock,
  },
  {
    title: "התארגנות כלה",
    text: "מקום נעים, מרווח ומואר להתארגנות לפני החתונה עם המשפחה הקרובה.",
    icon: Sparkles,
  },
  {
    title: "ריטריט חברה קטן",
    text: "סביבה רגועה למפגש צוות, חשיבה משותפת ויום יציאה מהשגרה.",
    icon: HeartHandshake,
  },
  {
    title: "חוויית משק וסוסים",
    text: "שילוב של לינה במושב עם פינת חי וחוות סוסים קרובה בתיאום מראש.",
    icon: Flower2,
  },
  {
    title: "אירוח משפחות מורחבות",
    text: "פתרון נוח לכמה משפחות יחד, עם חדרים, קרוואנים ומרחבי שהייה משותפים.",
    icon: MapPin,
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    alt: "חצר גדולה עם דשא ועצים",
    title: "חצר ירוקה לילדים ולארוחות יחד",
  },
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1400&q=80",
    alt: "בריכה מקורה ומחוממת",
    title: "בריכה מחוממת ומקורה",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
    alt: "מטבח כפול גדול",
    title: "מטבח גדול לארוחות משפחתיות",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    alt: "פינת אוכל משפחתית רחבה",
    title: "פינת אוכל רחבה לשבת וחגים",
  },
  {
    src: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=80",
    alt: "חדר שינה נעים",
    title: "חדרים נעימים ושקטים",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "חוויית משק עם סוסים ובעלי חיים",
    title: "מושב, טבע וחוויית משק",
  },
];

export const heroPhotos = {
  home: "/images/0.png",
  villa:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85",
  packages:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=85",
  shabbat:
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2200&q=85",
  contact:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85",
};

export const trustIndicators = [
  {
    title: "אירוח משפחתי בלבד",
    text: "אווירה רגועה, לא וילת מסיבות.",
    icon: CheckCircle2,
  },
  {
    title: "מתאים לשבת וחגים",
    text: "בית כנסת קרוב וסביבה שקטה.",
    icon: Church,
  },
  {
    title: "עד 40 מקומות לינה",
    text: "פתרון נוח למשפחה מורחבת.",
    icon: BedDouble,
  },
  {
    title: "מענה מהיר בוואטסאפ",
    text: "בדיקת זמינות בלי טפסים ארוכים.",
    icon: MessageCircle,
  },
];

export const testimonials = [
  {
    name: "משפחת כהן, אשדוד",
    quote:
      "הגענו לשבת משפחתית גדולה והרגשנו שיש מקום לכולם. הילדים היו בחצר, המבוגרים ישבו בנחת, והאווירה הייתה בדיוק מה שחיפשנו.",
  },
  {
    name: "אפרת, התארגנות כלה",
    quote:
      "הבוקר של החתונה עבר רגוע ומסודר. היה מקום למשפחה הקרובה, לצילומים ולהתארגנות בלי לחץ.",
  },
  {
    name: "משפחת לוי, חופשת אמצע שבוע",
    quote:
      "כמה ימים של שקט במושב עשו לנו טוב. הבריכה, החצר והמרחב נתנו לילדים חופש ולנו זמן לנשום.",
  },
];

export const contactMethods = [
  {
    title: "וואטסאפ",
    text: "הדרך המהירה לבדוק זמינות ולקבל פרטים.",
    icon: MessageCircle,
  },
  {
    title: "מיקום",
    text: "מושב בית הגדי, סמוך לנתיבות.",
    icon: MapPin,
  },
  {
    title: "סגנון אירוח",
    text: "משפחות, שבתות, חגים, חופשות אמצע שבוע והתארגנות כלה.",
    icon: Home,
  },
];
