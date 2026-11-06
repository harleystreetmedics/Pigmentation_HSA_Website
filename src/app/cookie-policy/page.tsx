import { CookieSettingsButton } from "@/components/CookieConsent";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "The cookies and local storage used on the Harley Street Aesthetics hair loss website, and how to change your choices.",
  path: "/cookie-policy/",
});

export default function CookiePage() {
  return (
    <LegalPage title="Cookie policy" path="/cookie-policy/">
      <h2>Your choices</h2>
      <p>
        We only use non-essential cookies if you agree. You can change your mind at any time:{" "}
        <CookieSettingsButton className="text-gold underline underline-offset-2" />.
      </p>
      <h2>Essential storage</h2>
      <ul>
        <li>
          <strong>hsa-cookie-consent</strong> (local storage): remembers your cookie choices. Kept until you clear your browser storage.
        </li>
        <li>
          <strong>hsa-location</strong> (local storage): remembers whether you chose our London or Glasgow clinic.
        </li>
      </ul>
      <h2>Analytics (only with consent)</h2>
      <ul>
        <li>
          <strong>Google Analytics / Google Tag Manager</strong> (_ga, _ga_*): helps us understand which pages are useful. Expires after up
          to 2 years.
        </li>
      </ul>
      <h2>Marketing (only with consent)</h2>
      <ul>
        <li>
          <strong>Meta Pixel</strong> (_fbp): measures the effectiveness of our Facebook and Instagram adverts. Expires after up to 3 months.
        </li>
      </ul>
      <h2>Embedded content</h2>
      <p>
        Our clinic pages include an embedded Google Map, and our contact options link to our online booking calendar and WhatsApp. These
        services may set their own cookies when you use them, under their own privacy policies.
      </p>
      <p>You can also block or delete cookies in your browser settings.</p>
    </LegalPage>
  );
}
