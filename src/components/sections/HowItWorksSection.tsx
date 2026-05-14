import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { STEPS } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";

const DELAY_CLASSES = [
  "animate-fade-up",
  "animate-fade-up-delay-1",
  "animate-fade-up-delay-2",
];

export default function HowItWorksSection() {
  const header = useScrollAnimation();
  const steps = useScrollAnimation();

  return (
    <section className="bg-paper py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div
          ref={header.ref}
          className={`animate-fade-up ${header.isVisible ? "is-visible" : ""}`}
        >
          <SectionHeader
            label="How it works"
            title="Up and running in minutes"
            subtitle="No engineering required. Connect your channels and let FlowDesk handle the rest."
          />
        </div>

        <div
          ref={steps.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 relative"
        >
          <div className="hidden md:block absolute top-[26px] left-[22%] right-[22%] h-px border-t-2 border-dashed border-border" />
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center ${DELAY_CLASSES[index]} ${steps.isVisible ? "is-visible" : ""}`}
            >
              <div className="relative z-10 w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-xl italic mb-6 shadow-[0_0_0_6px_theme(colors.paper)]">
                {step.number}
              </div>
              <h3 className="font-semibold text-base mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
