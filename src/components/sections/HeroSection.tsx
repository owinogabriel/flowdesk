import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Button from "../ui/Button";

export default function HeroSection() {
  const left = useScrollAnimation({ threshold: 0.1 });
  const right = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="min-h-[calc(100vh-72px)] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 lg:px-16 py-20 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      {/* Left — attach ref and visibility class */}
      <div
        ref={left.ref}
        className={`flex flex-col items-start animate-fade-up ${left.isVisible ? "is-visible" : ""}`}
      >
        <div className="inline-flex items-center gap-2 bg-cream border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Now with GPT-4o integration
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-6">
          Support that <em className="text-accent not-italic">thinks</em> for
          itself
        </h1>
        <p className="text-muted text-lg max-w-md mb-8 leading-relaxed">
          FlowDesk handles your customer conversations with AI — resolving
          tickets, drafting replies, and reducing wait times by up to 80%.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <Button to="/pricing" variant="primary">
            Start free trial
          </Button>
          <Button to="/about" variant="ghost">
            See how it works →
          </Button>
        </div>
      </div>

      {/* Right — slight delay so it follows the left column */}
      <div
        ref={right.ref}
        className={`bg-white border hidden lg:block  border-border rounded-2xl p-6 shadow-[0_20px_60px_rgba(13,13,15,0.1)] animate-fade-up-delay-1 ${right.isVisible ? "is-visible" : ""}`}
      >
        <div className="flex items-center gap-3 pb-4 border-b border-border mb-5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-orange-300 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            FD
          </div>
          <div>
            <p className="font-semibold text-sm">FlowDesk AI</p>
            <p className="text-[11px] text-muted">Replying now…</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 ml-auto" />
        </div>
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-cream text-ink text-sm px-4 py-2.5 rounded-xl rounded-br-sm leading-relaxed">
              Hi, I can't access my account — it says password incorrect?
            </div>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[11px] font-semibold text-accent mb-1 ml-1">
              FlowDesk AI
            </p>
            <div className="max-w-[80%] bg-ink text-paper text-sm px-4 py-2.5 rounded-xl rounded-bl-sm leading-relaxed">
              Hi Sarah! I can see your account right here. Let me send a secure
              reset link to your email ending in …gmail.com. Done! Check your
              inbox — arrives in under a minute. 🎉
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-cream text-ink text-sm px-4 py-2.5 rounded-xl rounded-br-sm">
              Wow, that was fast. Thank you!
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 pt-4 border-t border-border text-[11px] text-muted">
          <span>⚡ Resolved in 18 seconds</span>
          <span className="ml-auto">CSAT: ★★★★★</span>
        </div>
      </div>
    </section>
  );
}
