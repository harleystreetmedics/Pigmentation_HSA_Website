// JSON-LD builders. Mirrors the Endolift site's schema setup.
import type { Condition } from "./conditions";
import type { Faq } from "./faqs";
import { absUrl } from "./seo";
import { BRAND, CLINIC_LIST, type Clinic } from "./site";
import type { Treatment } from "./treatments";

const ORG_ID = `${BRAND.mainSite}/#organization`;

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND.name,
  url: BRAND.mainSite,
  logo: BRAND.logo,
  email: BRAND.email,
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absUrl("/#website"),
  url: absUrl("/"),
  name: BRAND.siteName,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-GB",
});

export const clinicSchema = (c: Clinic) => {
  const a = c.addresses[0];
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "MedicalBusiness"],
    "@id": absUrl(`/${c.id}/#clinic`),
    name: c.name,
    url: absUrl(`/${c.id}/`),
    telephone: c.phone.e164,
    email: BRAND.email,
    image: BRAND.logo,
    parentOrganization: { "@id": ORG_ID },
    medicalSpecialty: "Dermatology",
    address: {
      "@type": "PostalAddress",
      streetAddress: [a.line1, a.line2].filter(Boolean).join(", "),
      addressLocality: a.locality,
      postalCode: a.postcode,
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: c.geo.lat, longitude: c.geo.lng },
    hasMap: c.mapsUrl,
    availableService: { "@id": absUrl("/treatments/#services") },
  };
};

export const clinicsSchema = () => CLINIC_LIST.map(clinicSchema);

export const treatmentSchema = (t: Treatment) => ({
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": absUrl(`/treatments/${t.slug}/#therapy`),
  name: t.name,
  description: t.summary,
  url: absUrl(`/treatments/${t.slug}/`),
  relevantSpecialty: "Dermatology",
  provider: CLINIC_LIST.map((c) => ({ "@id": absUrl(`/${c.id}/#clinic`) })),
});

export const treatmentsListSchema = (ts: Treatment[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": absUrl("/treatments/#services"),
  itemListElement: ts.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: absUrl(`/treatments/${t.slug}/`), name: t.name })),
});

export const conditionSchema = (c: Condition, treatments: Treatment[]) => ({
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "@id": absUrl(`/conditions/${c.slug}/#condition`),
  name: c.name,
  description: c.summary,
  url: absUrl(`/conditions/${c.slug}/`),
  signOrSymptom: c.symptoms.map((s) => ({ "@type": "MedicalSignOrSymptom", name: s })),
  possibleTreatment: treatments.map((t) => ({ "@type": "MedicalTherapy", name: t.name, url: absUrl(`/treatments/${t.slug}/`) })),
});

export const consultationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": absUrl("/diagnosis/#procedure"),
  name: "Hair loss consultation and scalp assessment",
  procedureType: "https://schema.org/NoninvasiveProcedure",
  bodyLocation: "Scalp",
  url: absUrl("/diagnosis/"),
});

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export type Crumb = { name: string; path: string };

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absUrl(c.path),
  })),
});
