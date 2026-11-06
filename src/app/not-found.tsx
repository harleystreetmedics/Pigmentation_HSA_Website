import { Button, Section } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl py-16 text-center">
        <p className="eyebrow text-gold">404</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Page not found</h1>
        <p className="mt-5 text-lg text-stone">Sorry, we couldn&rsquo;t find that page. It may have moved.</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/">Go to home page</Button>
          <Button href="/conditions/" variant="outline">
            Hair loss conditions
          </Button>
        </div>
      </div>
    </Section>
  );
}
