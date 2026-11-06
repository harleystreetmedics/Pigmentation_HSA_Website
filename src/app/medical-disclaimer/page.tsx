import { LegalPage } from "@/components/LegalPage";
import { RX_SENTENCE } from "@/lib/conditions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Medical Disclaimer",
  description: "Important information about the hair loss content on this website, consultations, results and risks.",
  path: "/medical-disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Medical disclaimer" path="/medical-disclaimer/">
      <h2>General information only</h2>
      <p>
        The information on this website about pigmentation and its treatment is for general education. It is not medical advice and should not
        replace a consultation with a qualified medical practitioner or your GP.
      </p>
      <h2>Consultation required</h2>
      <p>
        Every patient must have a consultation before treatment. Your practitioner will review your medical history, assess your skin, your skin type and
        your suitability, and explain the benefits, risks, alternatives and likely costs, so you can make an informed decision. We may advise
        that treatment is not right for you, or that you should see your GP or a specialist first. {RX_SENTENCE}
      </p>
      <h2>When to seek medical advice</h2>
      <p>
        Any new, changing, irregular, raised, bleeding or itchy dark spot or mole must be checked by a doctor before any cosmetic treatment.
        Cosmetic pigmentation treatment is only for flat pigmentation that a clinician has assessed as suitable. We check for this at
        consultation, and we will advise you to see your GP or a dermatologist where needed. White patches, or pigmentation that may be
        linked to a medicine or a health condition, should also be assessed medically.
      </p>
      <h2>Results vary</h2>
      <p>
        Results differ from person to person and depend on your type of pigmentation, your skin and other individual factors. Some types,
        such as melasma, are long-term and can return. Changes are gradual. We do not guarantee any particular outcome. Before-and-after photos, where shown, illustrate
        individual results only and are published with the patient&rsquo;s written consent.
      </p>
      <h2>Risks</h2>
      <p>
        All treatments carry some risk. Side effects can include redness, peeling, temporary darker or lighter patches of skin and, rarely, infection, burns or scarring. Some treatments carry a higher risk of pigment changes in darker skin. Your practitioner
        will discuss the risks relevant to you before you decide.
      </p>
      <h2>Age</h2>
      <p>Our treatments are only available to adults aged 18 and over.</p>
    </LegalPage>
  );
}
