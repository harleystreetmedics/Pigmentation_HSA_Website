import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { Tbc } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Harley Street Aesthetics collects and uses personal information through this hair loss website.",
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" path="/privacy-policy/">
      <h2>Who we are</h2>
      <p>
        This website is operated by Harley Street Aesthetics, a trading name of Harley Street Medics Ltd, 211B Main Street, Bellshill,
        Lanarkshire ML4 1AJ, the data controller for personal data collected through it. ICO registration number: ZB819731.
      </p>
      <p>
        Contact us about privacy at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>Details you give us in the enquiry form or when you contact us: your name, phone number, email, preferred clinic, best time to call, main concern and any message.</li>
        <li>Details you give if you use our online booking calendar.</li>
        <li>Records of your consent choices (cookie preferences, and your agreement to be contacted).</li>
        <li>If you accept analytics or marketing cookies: information about how you use the site (see our <Link href="/cookie-policy/">cookie policy</Link>).</li>
      </ul>
      <p>
        Your &ldquo;main concern&rdquo; can relate to your health. We use it only to arrange the right consultation. Please don&rsquo;t send
        detailed medical information through the website form; your practitioner will collect your medical history securely at consultation.
      </p>
      <p>
        The &ldquo;Which treatment is right for me?&rdquo; questions run entirely in your browser. Your answers are not stored or sent to us.
      </p>
      <h2>How and why we use it</h2>
      <ul>
        <li>To respond to your enquiry and arrange a consultation (lawful basis: steps prior to entering a contract / legitimate interests; for health-related information, your explicit consent).</li>
        <li>To understand and improve our website, only if you accepted analytics cookies (lawful basis: consent).</li>
        <li>To measure our advertising, only if you accepted marketing cookies (lawful basis: consent).</li>
      </ul>
      <h2>Who we share it with</h2>
      <p>
        Our website hosting and form provider (<Tbc>hosting and form provider, e.g. Netlify</Tbc>), our online booking calendar provider, our email
        and customer-management providers and, if you consent, Google and Meta for analytics and advertising measurement. Some of these
        providers may process data outside the UK under appropriate safeguards.
      </p>
      <h2>How long we keep it</h2>
      <p>
        We keep your enquiry details only for as long as we need them to respond to your enquiry and follow it up. If you become a patient,
        your clinical records are kept for the periods required for medical records by independent healthcare providers. You can ask us to
        delete your enquiry details at any time by emailing us.
      </p>
      <h2>Your rights</h2>
      <p>
        You have the right to access, correct, erase, restrict or object to processing of your data, and to data portability. You can
        withdraw consent at any time. To exercise these rights, email <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>. You can also
        complain to the Information Commissioner&rsquo;s Office (<a href="https://ico.org.uk">ico.org.uk</a>).
      </p>
    </LegalPage>
  );
}
