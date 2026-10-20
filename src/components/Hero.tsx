import { Phone, ChevronDown } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const HERO_IMG = 'https://images.pexels.com/photos/28586197/pexels-photo-28586197.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="home" className="relative min-h-[100svh] flex items-center pt-20">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="A spacious, sunlit living room with clean surfaces and neatly arranged furniture"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/65 via-primary-dark/35 to-primary-dark/55" />
      </div>

      <div className="relative max-w-content mx-auto px-5 sm:px-8 w-full py-16">
        <div className="max-w-2xl">
          <p className="reveal text-sm font-medium tracking-wide text-cream/90 uppercase mb-4">
            {BUSINESS.category} &middot; Southwest Michigan
          </p>
          <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-cream leading-[1.15] mb-5">
            A clean home,
            <br />
            handled with care.
          </h1>
          <p className="reveal text-lg text-cream/90 mb-8 max-w-lg leading-relaxed">
            Lean On Us Cleaning is a local house cleaning service here to help
            you reclaim your time. Call for a quote and we'll talk through what
            your home needs.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-cream font-medium text-base hover:bg-accent-dark transition-colors shadow-lg"
            >
              <Phone size={20} aria-hidden="true" />
              Call for a Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-cream/40 text-cream font-medium text-base hover:bg-cream/10 transition-colors"
            >
              View Services
            </a>
          </div>
          <p className="reveal mt-6 text-sm text-cream/70">
            {BUSINESS.phoneDisplay} &middot; Free phone consultation
          </p>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors hidden sm:block"
        aria-label="Scroll to services"
      >
        <ChevronDown size={28} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
