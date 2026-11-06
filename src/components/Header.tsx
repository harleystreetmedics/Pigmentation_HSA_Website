import Link from "next/link";
import { BRAND } from "@/lib/site";
import { HeaderPhone, LocationSwitcher } from "./location";
import { MobileMenu, NavLinks } from "./MobileMenu";
import { Wordmark } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-white backdrop-blur supports-[backdrop-filter]:bg-ink/85">
      <div className="hidden border-b border-white/10 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs text-white/75">
          <a href={BRAND.mainSite} className="hover:text-gold">
            ← Harley Street Aesthetics main site
          </a>
          <div className="flex items-center gap-6">
            <a href={BRAND.allTreatments} className="hover:text-gold">
              All treatments
            </a>
            <a href={`mailto:${BRAND.email}`} className="hover:text-gold">
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <a href={BRAND.mainSite} className="shrink-0">
          <Wordmark />
        </a>
        <nav aria-label="Main" className="hidden min-[1400px]:block">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-3">
          <LocationSwitcher className="max-md:hidden" />
          <HeaderPhone />
          <Link
            href="/book/"
            className="gold-gradient inline-flex min-h-11 items-center justify-center px-5 text-xs font-semibold tracking-[0.2em] whitespace-nowrap text-on-gold uppercase shadow-gold hover:brightness-110 max-sm:hidden"
          >
            Book consultation
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
