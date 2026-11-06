import { EnquiryForm } from "@/components/EnquiryForm";
import { AiAnalysisCard, BookingCalendar, ClinicCards, ContactLinks } from "@/components/sections";
import { Disclaimer, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Pigmentation Consultation",
  description:
    "Book a free online pigmentation consultation with Harley Street Aesthetics, London and Glasgow. Pick a time in our calendar, request a call back, or call your nearest clinic.",
  path: "/book/",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title="Let's talk about your skin"
        intro="Pick a time in our calendar for your free online consultation, or ask us to call you. There's no obligation to go ahead with treatment."
        crumbs={[{ name: "Book a consultation", path: "/book/" }]}
      />
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="sr-only">Booking calendar</h2>
            <BookingCalendar />
          </div>
          <div className="space-y-5 lg:col-span-5">
            <h2 className="font-serif text-2xl">Prefer to talk?</h2>
            <ClinicCards stacked />
            <ContactLinks />
          </div>
        </div>
      </Section>
      <Section labelledBy="callback-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="callback-title"
              eyebrow="Request a call back"
              title="We'll call you"
              intro="Tell us a little about your concern and when suits you, and our team will contact you to arrange your consultation."
            />
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
        <AiAnalysisCard className="mt-12" />
        <Disclaimer className="mt-12" />
      </Section>
    </>
  );
}
