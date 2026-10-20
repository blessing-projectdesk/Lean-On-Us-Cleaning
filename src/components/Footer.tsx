import { Phone, Sparkles } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-cream/90">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-cream/10">
                <Sparkles size={18} aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold text-cream">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              A local house cleaning service serving Southwest Michigan.
              Call us to reclaim your time and enjoy a clean, comfortable home.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream uppercase tracking-wide mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream uppercase tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  <Phone size={16} aria-hidden="true" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="text-sm text-cream/70">
                {BUSINESS.category}
              </li>
              <li className="text-sm text-cream/70">
                Southwest Michigan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/50">
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/50">
            {BUSINESS.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
