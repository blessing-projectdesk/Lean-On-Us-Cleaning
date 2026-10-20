import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#home"
            className="flex items-center gap-2.5 font-serif text-lg sm:text-xl font-semibold text-primary hover:text-primary-light transition-colors"
            aria-label={`${BUSINESS.name} — Home`}
          >
            <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary text-cream">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            <span className="leading-tight">Lean On Us<br className="sm:hidden" /> <span className="text-accent">Cleaning</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-cream text-sm font-medium hover:bg-primary-dark transition-colors shadow-sm"
            >
              <Phone size={16} aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-primary hover:bg-primary-lightest transition-colors"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100 border-t border-line' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-5 py-4 space-y-1 bg-cream" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium text-ink hover:bg-primary-lightest hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS.phone}`}
            onClick={closeMenu}
            className="flex items-center gap-2 px-4 py-3 mt-2 rounded-lg bg-primary text-cream font-medium"
          >
            <Phone size={18} aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
