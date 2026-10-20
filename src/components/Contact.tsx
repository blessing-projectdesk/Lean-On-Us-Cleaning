import { Phone, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS, NAV_LINKS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      'This enquiry form is a preview and does not yet send messages. Please call us directly at ' +
        BUSINESS.phoneDisplay +
        ' to request a quote.'
    );
  };

  return (
    <section ref={ref} id="contact" className="py-20 sm:py-28 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/7513103/pexels-photo-7513103.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="reveal text-sm font-medium tracking-wide text-accent-light uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="reveal text-3xl sm:text-4xl font-serif font-semibold text-cream mb-5">
              Call for a quote today
            </h2>
            <p className="reveal text-lg text-cream/80 leading-relaxed mb-8">
              The fastest way to reach us is by phone. Tell us about your home
              and what you need — we will be happy to help.
            </p>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="reveal inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-accent text-cream font-semibold text-lg hover:bg-accent-dark transition-colors shadow-lg mb-8"
            >
              <Phone size={24} aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>

            <div className="reveal space-y-4 pt-6 border-t border-cream/15">
              <div>
                <p className="text-sm text-cream/60 mb-1">Business name</p>
                <p className="text-cream font-medium">{BUSINESS.name}</p>
              </div>
              <div>
                <p className="text-sm text-cream/60 mb-1">Service type</p>
                <p className="text-cream font-medium">{BUSINESS.category}</p>
              </div>
              <div>
                <p className="text-sm text-cream/60 mb-1">Service area</p>
                <p className="text-cream font-medium">Southwest Michigan (269 area)</p>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-2xl bg-cream p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-2.5 mb-5 p-3.5 rounded-lg bg-accent-lightest/60 border border-accent-lightest">
                <AlertCircle size={18} className="text-accent-dark flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-muted">
                  <span className="font-semibold text-ink">Preview form:</span>{' '}
                  This enquiry form is for demonstration only and does not send
                  messages. Please call us at{' '}
                  <a href={`tel:${BUSINESS.phone}`} className="text-accent-dark font-medium underline">
                    {BUSINESS.phoneDisplay}
                  </a>{' '}
                  to request a quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Enquiry form (preview)">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-line bg-white text-ink text-[15px] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
                    Your phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-line bg-white text-ink text-[15px] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                    What do you need help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-line bg-white text-ink text-[15px] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-cream font-medium text-[15px] hover:bg-primary-dark transition-colors"
                >
                  Send Enquiry (Preview)
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
