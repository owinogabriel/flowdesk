import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Construction, ArrowLeft, Mail } from "lucide-react";

const COMING_FEATURES = [
  {
    icon: "🎫",
    title: "Ticket Management",
    description: "View, assign, and resolve all customer tickets in one place.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Real-time CSAT scores, response times, and team performance.",
  },
  {
    icon: "🤖",
    title: "AI Training",
    description: "Upload docs and FAQs to train your custom AI model.",
  },
  {
    icon: "🔗",
    title: "Integrations",
    description: "Connect Slack, Shopify, Stripe and 50+ tools.",
  },
  {
    icon: "👥",
    title: "Team Management",
    description: "Invite agents, set roles, and manage permissions.",
  },
  {
    icon: "🌐",
    title: "Multichannel Inbox",
    description: "Email, live chat, WhatsApp and social in one inbox.",
  },
];

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-paper">
      {/* Top bar */}
      <div className="border-b border-border bg-white px-6 lg:px-16 h-[72px] flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl text-ink">
          Flow<span className="text-accent">Desk</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* User pill */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
              {user?.avatar}
            </div>
            <span className="text-sm font-medium hidden sm:block">
              {user?.name}
            </span>
          </div>

          <button
            onClick={logout}
            className="text-sm text-muted hover:text-ink transition-colors font-medium"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        {/* Back to site */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-12 group"
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Back to marketing site
        </Link>

        {/* Hero card */}
        <div className="bg-white border border-border rounded-2xl p-8 md:p-12 text-center mb-10">
          {/* Icon */}
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Construction size={30} className="text-accent" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            In active development
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-ink tracking-tight mb-4">
            Dashboard coming <em className="text-accent not-italic">soon</em>
          </h1>

          <p className="text-muted text-lg max-w-lg mx-auto leading-relaxed mb-8">
            Hey {user?.name?.split(" ")[0]} 👋 — your account is all set. We're
            putting the finishing touches on the dashboard. You'll be the first
            to know when it's ready.
          </p>

          {/* Notify form */}
          <div className="flex items-center gap-3 max-w-sm mx-auto">
            <div className="relative flex-1">
              <Mail
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="email"
                defaultValue={user?.email}
                placeholder="your@email.com"
                className="w-full bg-paper border border-border rounded-full pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,93,47,0.35)] transition-all whitespace-nowrap">
              Notify me
            </button>
          </div>
        </div>

        {/* Coming features grid */}
        <div>
          <p className="text-[11px] uppercase tracking-widest font-semibold text-muted mb-6 text-center">
            What's being built
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMING_FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-border rounded-xl p-5 flex gap-4 items-start"
              >
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <p className="font-semibold text-sm mb-1">{f.title}</p>
                  <p className="text-muted text-xs leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted mt-12">
          Logged in as{" "}
          <span className="font-medium text-ink">{user?.email}</span>
          {" · "}
          <button onClick={logout} className="text-accent hover:underline">
            Sign out
          </button>
        </p>
      </div>
    </div>
  );
}
