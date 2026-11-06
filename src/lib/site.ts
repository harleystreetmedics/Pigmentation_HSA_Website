// Brand, clinic and tracking config. Sources are in docs/research.md.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hairloss.harleystreetmedicalwellness.co.uk").replace(/\/$/, "");

/** Indexing stays off until the site is approved for launch (docs/decisions.md #13). */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

// Hair loss is a Harley Street Medical Wellness service (your instruction, 3 Nov 2026; prices on the Wellness pricing page).
export const BRAND = {
  name: "Harley Street Medical Wellness",
  short: "HSW",
  siteName: "Hair Loss Clinic | Harley Street Medical Wellness",
  mainSite: "https://harleystreetmedicalwellness.co.uk",
  allTreatments: "https://harleystreetmedicalwellness.co.uk/london/services/pricing",
  logo: "https://harleystreetmedicalwellness.co.uk/assets/logo.png",
  email: "hello@harleystreetmedicalwellness.co.uk",
  // The clinic's own booking calendar, embedded on /book/ as on the Endolift site.
  bookingUrl: "https://link.harleystreetmedicalwellness.co.uk/widget/bookings/wellness-consultant-1",
  contactUrl: "https://harleystreetmedicalwellness.co.uk/london/contact",
  // The Wellness site lists no WhatsApp number (07700 106236 belongs to Harley Street Aesthetics).
  whatsapp: { display: "", href: "", enabled: false },
} as const;

export type ClinicId = "london" | "glasgow";

export type Clinic = {
  id: ClinicId;
  city: string;
  name: string;
  addresses: { line1: string; line2?: string; locality: string; postcode: string; tbc?: string }[];
  phone: { display: string; href: string; e164: string };
  mapsUrl: string;
  mapEmbed: string;
  hours: string;
  geo: { lat: number; lng: number };
};

export const CLINICS: Record<ClinicId, Clinic> = {
  london: {
    id: "london",
    city: "London",
    name: "Harley Street Medical Wellness London",
        addresses: [{ line1: "2 Grosvenor Gardens", line2: "Belgravia", locality: "London", postcode: "SW1W 0DH" }],
    phone: { display: "020 4628 3137", href: "tel:+442046283137", e164: "+442046283137" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=2+Grosvenor+Gardens+London+SW1W+0DH",
    mapEmbed: "https://www.google.com/maps?q=2%20Grosvenor%20Gardens%2C%20Belgravia%2C%20London%2C%20SW1W%200DH&output=embed",
    hours: "Monday to Friday 9am–6pm, Saturday 10am–4pm",
    geo: { lat: 51.4973, lng: -0.1449 },
  },
  glasgow: {
    id: "glasgow",
    city: "Glasgow",
    name: "Harley Street Medical Wellness Glasgow",
    addresses: [{ line1: "5th Floor, Ingram House", line2: "227 Ingram Street", locality: "Glasgow", postcode: "G1 1DA" }],
    phone: { display: "0141 488 8985", href: "tel:+441414888985", e164: "+441414888985" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ingram+House+227+Ingram+Street+Glasgow+G1+1DA",
    mapEmbed: "https://www.google.com/maps?q=Ingram%20House%2C%20227%20Ingram%20Street%2C%20Glasgow%20G1%201DA&output=embed",
    hours: "Monday to Friday 9am–6pm, Saturday 10am–4pm",
    geo: { lat: 55.8597, lng: -4.2465 },
  },
};

export const CLINIC_LIST = [CLINICS.london, CLINICS.glasgow];

// Medical team as listed on harleystreetmedicalwellness.co.uk/london (3 Nov 2026). Photos are the clinic's own,
// served from its website. Which of them see hair loss patients is not stated (docs/open-questions.md).
export const TEAM = [
  {
    name: "Dr Ahmad",
    role: "Medical Director",
    bio: "Founder and Medical Director of Harley Street Medical Wellness, with extensive experience in aesthetic and regenerative medicine. Dr Ahmad leads the team and our treatment protocols.",
    photo: "https://harleystreetmedicalwellness.co.uk/assets/dr_ahmad_v2.webp",
  },
  {
    name: "Dr Ayda Soltanzadeh",
    role: "Wellness Consultant",
    bio: "Wellness Consultant with several years of experience in personalised care for patient health and vitality.",
    photo: "https://images.strategyguys.agency/harley-street-wellness-main/Dr.%20Ayda%20Soltanzadeh.webp",
  },
  {
    name: "Dr Mazhar Khan",
    role: "Wellness Consultant",
    bio: "Wellness Consultant with 23 years of clinical experience, dedicated to comprehensive, personalised care.",
    photo: "https://images.strategyguys.agency/harley-street-wellness-main/Dr.%20Khan.jpg",
  },
] as const;

/** Consultation options (Wellness pricing page, 3 Nov 2026; free online consultation confirmed by the clinic, 4 Nov 2026). */
export const CONSULTATIONS = {
  included: "All treatments include a comprehensive consultation and post-treatment support from our practitioners.",
  online: { price: "Free", detail: "Online consultation with our clinical team, booked in our calendar. No obligation." },
  inClinic: { price: "£295", detail: "In-clinic consultation with a GMC-registered doctor." },
};

export const TRACKING = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
};

export const NAV = [
  { href: "/conditions/", label: "Conditions" },
  { href: "/treatments/", label: "Treatments" },
  { href: "/diagnosis/", label: "Diagnosis" },
  { href: "/which-treatment/", label: "Treatment finder" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "Clinics & team" },
] as const;
