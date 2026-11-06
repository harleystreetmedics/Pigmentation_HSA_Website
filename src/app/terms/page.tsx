import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { BRAND, CONSULTATIONS } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms of use for the Harley Street Aesthetics hair loss website.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" path="/terms/">
      <h2>About this website</h2>
      <p>
        This website provides general information about hair loss and the treatments offered by Harley Street Aesthetics. It does not form
        a contract for treatment. Treatment is only provided after a consultation with a qualified practitioner and your informed consent.
      </p>
      <h2>Prices</h2>
      <p>Any prices shown are a guide and are confirmed at consultation. We may change prices.</p>
      <h2>Bookings and cancellations</h2>
      <p>
        You can choose a free online consultation or an in-clinic consultation (£195, redeemable against treatment). {CONSULTATIONS.deposit} If you book a treatment remotely (online, by phone or by message), you have a
        14-day right to cancel, which we&rsquo;ll confirm in writing, and you won&rsquo;t pay for treatment if your practitioner finds
        it unsuitable for you.
      </p>
      <h2>Content</h2>
      <p>
        We take care to keep information accurate, but it is general in nature and not a substitute for medical advice. All content and
        branding belong to Harley Street Aesthetics. Third-party trademarks belong to their owners.
      </p>
      <h2>Complaints</h2>
      <p>
        If you are unhappy with any aspect of our service, please contact <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>. We will look
        into it and reply to you.
      </p>
      <h2>Law</h2>
      <p>These terms are governed by the laws of England and Wales, or Scotland for treatment received at our Glasgow clinic.</p>
    </LegalPage>
  );
}
