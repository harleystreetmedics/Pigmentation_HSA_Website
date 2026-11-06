import { BookingCalendar, ClinicCards, ContactLinks } from "@/components/sections";
import { Disclaimer, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Hair Loss Consultation",
  description:
    "Book a free online hair loss consultation at Harley Street Medical Wellness, serving London and Glasgow. Pick a time in our calendar, or call your nearest clinic.",
  path: "/book/",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title="Let's talk about your hair"
        intro="Pick a time in our calendar for your free online consultation. There's no obligation to go ahead with treatment."
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
        <Disclaimer className="mt-12" />
      </Section>
    </>
  );
}
