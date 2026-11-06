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
        The information on this website about hair loss and its treatment is for general education. It is not medical advice and should not
        replace a consultation with a qualified medical practitioner or your GP.
      </p>
      <h2>Consultation required</h2>
      <p>
        Every patient must have a consultation before treatment. Your practitioner will review your medical history, assess your scalp and
        suitability, and explain the benefits, risks, alternatives and likely costs, so you can make an informed decision. We may advise
        that treatment is not right for you, or that you should see your GP or a specialist first. {RX_SENTENCE}
      </p>
      <h2>When to seek medical advice</h2>
      <p>
        Sudden, patchy or rapidly worsening hair loss, hair loss with a red, scaly, painful or scarred scalp, or hair loss with other
        symptoms (such as tiredness or weight change) should be assessed by a doctor. If you feel unwell, contact your GP or NHS 111. In an
        emergency, call 999.
      </p>
      <h2>Results vary</h2>
      <p>
        Results differ from person to person and depend on the cause of your hair loss and other individual factors. Hair grows slowly and
        any change can take months to judge. We do not guarantee any particular outcome. Before-and-after photos, where shown, illustrate
        individual results only and are published with the patient&rsquo;s written consent.
      </p>
      <h2>Risks</h2>
      <p>
        All treatments carry some risk. Side effects can include tenderness, redness, bruising and, rarely, infection. Your practitioner
        will discuss the risks relevant to you before you decide.
      </p>
      <h2>Age</h2>
      <p>Our treatments are only available to adults aged 18 and over.</p>
    </LegalPage>
  );
}
