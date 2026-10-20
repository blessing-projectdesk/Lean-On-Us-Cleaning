import { Phone, Users, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const ABOUT_IMG = 'https://images.pexels.com/photos/6224257/pexels-photo-6224257.jpeg?auto=compress&cs=tinysrgb&w=1000';

const VALUES = [
  {
    icon: Users,
    title: 'Local and personal',
    description:
      'We are a small, local business. When you call, you talk directly to the people doing the work — not a call center.',
  },
  {
    icon: Phone,
    title: 'Straightforward communication',
    description:
      'Call us, tell us what you need, and we will give you a clear answer. No complicated forms or long wait times.',
  },
  {
    icon: MapPin,
    title: 'Serving our community',
    description:
      'Based in the 269 area, we are proud to serve our neighbors in Southwest Michigan.',
  },
];

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="reveal text-sm font-medium tracking-wide text-accent uppercase mb-3">
              Why Lean On Us
            </p>
            <h2 className="reveal text-3xl sm:text-4xl font-serif font-semibold text-primary mb-5">
              A dependable local cleaning service
            </h2>
            <p className="reveal text-lg text-muted leading-relaxed mb-8">
              We started Lean On Us Cleaning with a simple goal: to help our
              neighbors keep their homes clean and comfortable without the
              stress. When you call, you reach us directly. We listen to what
              you need and take care of the rest.
            </p>
            <div className="space-y-5">
              {VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="reveal flex gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-lightest text-primary flex-shrink-0">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink mb-1">
                        {val.title}
                      </h3>
                      <p className="text-[15px] text-muted leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal">
            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="A person wiping down a kitchen table in a bright, modern kitchen"
                className="w-full rounded-2xl object-cover shadow-sm aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-cream rounded-xl shadow-lg px-6 py-4 border border-line">
                <p className="text-sm text-muted">Based in</p>
                <p className="text-lg font-serif font-semibold text-primary">Southwest Michigan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
