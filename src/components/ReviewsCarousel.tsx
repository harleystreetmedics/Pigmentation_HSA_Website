"use client";

import { useRef } from "react";
import { REVIEWS } from "@/lib/reviews";
import { Icon } from "./Icon";

/** Scrolling reviews carousel, as on the Endolift site. */
export function ReviewsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * Math.round(track.clientWidth * 0.9), behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-white/75">Real experiences from our clinics in London &amp; Glasgow, as published on our main website.</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold"
            aria-label="Previous reviews"
          >
            <Icon name="chevronRight" className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold"
            aria-label="Next reviews"
          >
            <Icon name="chevronRight" className="h-4 w-4" />
          </button>
        </div>
      </div>
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Patient reviews"
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0"
      >
        {REVIEWS.map((r) => (
          <li key={r.name} className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]">
            <figure className="flex h-full flex-col rounded-xl border border-gold/20 bg-card p-7">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 font-serif text-lg text-gold">
                  {r.name[0]}
                </span>
                <figcaption className="text-sm">
                  <span className="block font-semibold text-white">{r.name}</span>
                  <span className="text-gold">{r.service}</span>
                </figcaption>
              </div>
              <blockquote className="mt-6 flex-1 font-serif text-lg leading-relaxed text-white/90">
                <p>{r.quote}</p>
              </blockquote>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
