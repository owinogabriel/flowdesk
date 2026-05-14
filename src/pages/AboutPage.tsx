import SectionHeader from "../components/ui/SectionHeader";
import { STATS } from "../data/siteData";
import type { Stat } from "../types";

// ── Team members ───────────────────────────────────────────
const TEAM = [
  {
    name: "Priya Nair",
    role: "CEO & Co-founder",
    initials: "PN",
    color: "#e85d2f",
  },
  {
    name: "Daniel Osei",
    role: "CTO & Co-founder",
    initials: "DO",
    color: "#2f7ee8",
  },
  {
    name: "Sara Lindqvist",
    role: "Head of Design",
    initials: "SL",
    color: "#7c3aed",
  },
  {
    name: "James Tao",
    role: "Head of Engineering",
    initials: "JT",
    color: "#059669",
  },
];

// ── Values ─────────────────────────────────────────────────
const VALUES = [
  {
    icon: "⚡",
    title: "Speed first",
    description:
      "Every second a customer waits is a second they doubt you. We obsess over response time.",
  },
  {
    icon: "🎯",
    title: "Human-centred AI",
    description:
      "Our AI augments your team, it does not replace them. Hard problems deserve a human touch.",
  },
  {
    icon: "🔓",
    title: "Radical transparency",
    description:
      "Flat pricing, honest metrics, and no lock-in contracts. We earn your trust every month.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-fade">

      {/* HERO */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="Our story"
              title="Built by people who hated bad support"
            />

            <p className="text-muted text-lg mt-6 mb-5 leading-relaxed">
              FlowDesk was founded in 2022 when our founder spent weeks watching
              a support team drown in repetitive tickets — and knew there had to
              be a better way.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Today we are team of 38 accross 12 countries, united by the belief
              that great customer support shouldn't require an army of agents.
            </p>
          </div>

          {/* Right: stats grid */}
          <div className="bg-white border border-border rounded-2xl p-6 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-white py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="What we believe"
            title="Our values"
            subtitle="Three principles that guide every decision we make."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="p-6 border border-border rounded-2xl bg-paper hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(13,13,15,0.07)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-base mb-2 ">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-cream py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="The team"
            title="Who's behind FlowDesk"
            subtitle="A small team with a big obsession — making support feel effortless."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center gap-3"
              >
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>

                <div>
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-muted mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ── */}
      <section className="bg-ink text-paper py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-paper/40 mb-4">
            Our mission
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-6">
            Make every customer feel like{" "}
            <em className="text-accent not-italic">your only customer</em>
          </h2>
          <p className="text-paper/55 text-lg leading-relaxed">
            We believe fast, thoughtful support isn't a luxury — it's the
            baseline every business should be able to deliver, regardless of
            team size.
          </p>
        </div>
      </section>
    </div>
  );
}

// Stat card
function StatCard({ value, label }: Stat) {
  return (
    <div className="bg-cream rounded-xl p-6 text-center">
      <p className="font-serif text-4xl text-accent">{value}</p>
      <p className="text-xs text-muted mt-1">{label}</p>
    </div>
  );
}
