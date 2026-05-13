import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-72px)] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 lg:px-16 py-20 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow — decorative circle behind the right column */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      {/* ── LEFT: Copy ── */}
      <div className="flex flex-col items-start">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-cream border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Now with GPT-4o integration
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-6">
          Support that <em className="text-accent not-italic">thinks</em> for
          itself
        </h1>

        {/* Subheadline */}
        <p className="text-muted text-lg max-w-md mb-8 leading-relaxed">
          FlowDesk handles your customer conversations with AI — resolving
          tickets, drafting replies, and reducing wait times by up to 80%.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 flex-wrap">
          <Button to="/pricing" variant="primary">
            Start free trial
          </Button>
          <Button to="/about" variant="ghost">
            See how it works →
          </Button>
        </div>
      </div>

      {/* ── RIGHT: Chat mockup ── */}
      <div className="bg-white border border-border rounded-2xl p-6 shadow-[0_20px_60px_rgba(13,13,15,0.1)]">
        {/* Chat header */}
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

        {/* Messages */}
        <div className="space-y-3">
          {/* User message — aligned right */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-cream text-ink text-sm px-4 py-2.5 rounded-xl rounded-br-sm leading-relaxed">
              Hi, I can't access my account — it says password incorrect?
            </div>
          </div>

          {/* AI message — aligned left */}
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

          {/* User reply */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-cream text-ink text-sm px-4 py-2.5 rounded-xl rounded-br-sm">
              Wow, that was fast. Thank you!
            </div>
          </div>
        </div>

        {/* Footer stat */}
        <div className="flex items-center mt-5 pt-4 border-t border-border text-[11px] text-muted">
          <span>⚡ Resolved in 18 seconds</span>
          <span className="ml-auto">CSAT: ★★★★★</span>
        </div>
      </div>
    </section>
  );
}
