import { Home, Sparkles, Calendar } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

interface ServiceCategory {
  icon: typeof Home;
  title: string;
  description: string;
  examples: string[];
  needsConfirmation: boolean;
}

const CATEGORIES: ServiceCategory[] = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description:
      'Routine cleaning for your home so you can come back to a tidy, comfortable space.',
    examples: ['Living areas', 'Kitchens', 'Bathrooms', 'Bedrooms'],
    needsConfirmation: false,
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description:
      'A more thorough, top-to-bottom clean for move-ins, move-outs, or seasonal refreshes.',
    examples: ['Appliances & fixtures', 'Baseboards & trim', 'Tile & grout', 'Hard-to-reach spots'],
    needsConfirmation: true,
  },
  {
    icon: Calendar,
    title: 'Recurring Visits',
    description:
      'Set a schedule that works for you — weekly, biweekly, or monthly — and keep your home consistently clean.',
    examples: ['Weekly', 'Biweekly', 'Monthly', 'Custom schedule'],
    needsConfirmation: true,
  },
];

const SERVICES_IMG = 'https://images.pexels.com/photos/5591903/pexels-photo-5591903.jpeg?auto=compress&cs=tinysrgb&w=1000';

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="services" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="reveal text-sm font-medium tracking-wide text-accent uppercase mb-3">
            What We Can Help With
          </p>
          <h2 className="reveal text-3xl sm:text-4xl font-serif font-semibold text-primary mb-4">
            Cleaning services tailored to your home
          </h2>
          <p className="reveal text-lg text-muted leading-relaxed">
            Every home is different, so we start with a conversation. Call us to
            discuss what you need and we'll work out the right approach together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <article
                key={cat.title}
                className="reveal flex flex-col rounded-2xl bg-white border border-line p-7 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-lightest text-primary mb-5">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink mb-2">
                  {cat.title}
                </h3>
                <p className="text-muted text-[15px] leading-relaxed mb-4">
                  {cat.description}
                </p>
                <ul className="space-y-1.5 text-[15px] text-ink/70 mb-4">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                      {ex}
                    </li>
                  ))}
                </ul>
                {cat.needsConfirmation && (
                  <p className="mt-auto text-xs text-muted italic pt-3 border-t border-line">
                    Proposed category — pending owner confirmation
                  </p>
                )}
              </article>
            );
          })}
        </div>

        <div className="reveal grid sm:grid-cols-[1fr_auto] gap-6 items-center rounded-2xl overflow-hidden bg-primary-lightest">
          <div className="p-7 sm:p-10">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
              Not sure where to start?
            </h3>
            <p className="text-muted text-[15px] leading-relaxed mb-5 max-w-md">
              Give us a call and tell us about your home. We'll listen to what
              you need and suggest the best way forward — no pressure, no
              obligation.
            </p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-cream font-medium text-[15px] hover:bg-primary-dark transition-colors"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          <div className="h-48 sm:h-full sm:w-72 flex-shrink-0 overflow-hidden">
            <img
              src={SERVICES_IMG}
              alt="A person wearing gloves wiping down a kitchen counter"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
