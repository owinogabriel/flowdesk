import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function CtaBanner() {
  return (
    <section className="bg-ink py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          center
          light
          label="Get started today"
          title="Ready to transform your support?"
          subtitle="Join 3,000+ businesses delivering faster, smarter customer service with FlowDesk."
        />

        <div className="mt-8">
          <Button to="/pricing" variant="primary">
            View plans & pricing →
          </Button>
        </div>
      </div>
    </section>
  );
}
