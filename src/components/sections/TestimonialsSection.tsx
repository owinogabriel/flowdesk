import { TESTIMONIALS } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";
import type { Testimonial } from "../../types";

function TestimonialCard({ quote, name, role, initials, color }: Testimonial) {
  return (
    <div className="bg-white border border-border rounded-2xl p-7 flex flex-col gap-5">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-accent text-sm">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif text-lg leading-relaxed italic text-ink flex-1">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Testimonials" title="Loved by support teams" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
