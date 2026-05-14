import { Section } from "lucide-react";
import Button from "../components/ui/Button";
import type { PricingPlan } from "../types";
import SectionHeader from "../components/ui/SectionHeader";
import { PRICING_PLANS } from "../data/siteData";

export default function PricingPage() {
  return (
    <section className="page-fade py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeader
            center
            label="Pricing"
            title="Simple, honest pricing"
            subtitle="No hidden fees. Cancel any time. Every plan includes a 14-day free trial."
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted text-sm mt-12">
          Need something custom?{" "}
          <a
            href="/contact"
            className="text-accent font-semibold hover:underline"
          >
            Talk to us →
          </a>
        </p>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  period,
  features,
  featured,
  cta,
}: PricingPlan) {
  return (
    <div
      className={`relative rounded-2xl p-8 border flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
        featured
          ? "bg-ink text-paper border-ink"
          : "bg-white text-ink border-border"
      }`}
    >
      {/* Most popular badge */}
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap  ">
          Most Popular
        </div>
      )}

      {/* Plan name */}
      <p
        className={`text-[11px] uppercase tracking-widest font-bold mb-3 ${featured ? "text-paper/50" : "text-muted"}`}
      >
        {name}
      </p>

      {/* Price */}
      <p className="font-serif text-5xl mb-1">{price}</p>
      <p
        className={`text-sm mb-8 ${featured ? "text-paper/50" : "text-muted"}`}
      >
        {period}
      </p>

      {/* Feature list */}
      <ul
        className={`space-y-3 border-t pt-6 mb-8 flex-1 ${
          featured ? "border-white/10" : "border-border"
        }`}
      >
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm">
            <span className="text-accent font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA button */}
      {featured ? (
        <Button
          variant="outline-light"
          className="w-full justify-center"
          to="/contact"
        >
          {cta}
        </Button>
      ) : (
        <Button
          variant="outline"
          className="w-full justify-center"
          to="/contact"
        >
          {cta}
        </Button>
      )}
    </div>
  );
}
