import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FEATURES } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";
import type { Feature } from "../../types";

// delay classes so cards cascade in one by one
const DELAY_CLASSES = [
  "animate-fade-up",
  "animate-fade-up-delay-1",
  "animate-fade-up-delay-2",
  "animate-fade-up-delay-3",
  "animate-fade-up-delay-1",
  "animate-fade-up-delay-2",
];

function FeatureCard({
  icon,
  title,
  description,
  delayClass,
  isVisible,
}: Feature & { delayClass: string; isVisible: boolean }) {
  return (
    <div
      className={`group p-6 border border-border rounded-2xl bg-paper hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(13,13,15,0.08)] transition-all duration-300 cursor-default ${delayClass} ${isVisible ? "is-visible" : ""}`}
    >
      <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-accent/10 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const header = useScrollAnimation();
  const grid = useScrollAnimation();

  return (
    <section className="bg-white py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div
          ref={header.ref}
          className={`animate-fade-up ${header.isVisible ? "is-visible" : ""}`}
        >
          <SectionHeader
            label="Features"
            title="Everything your support team needs"
            subtitle="From first contact to resolution, FlowDesk handles the full customer journey automatically."
          />
        </div>

        <div
          ref={grid.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delayClass={DELAY_CLASSES[index]}
              isVisible={grid.isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
