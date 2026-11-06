import type { ReactNode } from "react";
import { PageHero, Section } from "./ui";

export const LAST_REVIEWED = "2 November 2026";

export function LegalPage({ title, path, children }: { title: string; path: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={<>Last reviewed: {LAST_REVIEWED}</>} crumbs={[{ name: title, path }]} />
      <Section>
        <div className="prose-legal max-w-3xl">{children}</div>
      </Section>
    </>
  );
}
