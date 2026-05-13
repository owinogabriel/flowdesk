import type {
  NavItem,
  Feature,
  Testimonial,
  PricingPlan,
  Stat,
} from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const FEATURES: Feature[] = [
  {
    icon: "🤖",
    title: "AI Auto-Replies",
    description:
      "Instantly resolve common questions using your knowledge base. Train once, answer forever.",
  },
  {
    icon: "🎫",
    title: "Smart Ticket Routing",
    description:
      "Categorize and assign tickets to the right agent based on topic, urgency, and customer tier.",
  },
  {
    icon: "📊",
    title: "Live Analytics",
    description:
      "Track response time, resolution rate, and CSAT scores in real time.",
  },
  {
    icon: "🔗",
    title: "Integrations",
    description:
      "Connect Slack, Shopify, Stripe, and 50+ apps with one-click setup.",
  },
  {
    icon: "🌐",
    title: "Multichannel Inbox",
    description:
      "Manage email, live chat, WhatsApp, and social DMs from one unified interface.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "SOC 2 Type II, GDPR compliant, SSO support, and end-to-end encryption.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "FlowDesk cut our response time from 4 hours to under 3 minutes. Customers are genuinely shocked.",
    name: "Marcus Kim",
    role: "Head of Support, Nomad Store",
    initials: "MK",
    color: "#e85d2f",
  },
  {
    quote:
      "Three months in, 68% of tickets are fully resolved automatically. Our team focuses on what matters.",
    name: "Aisha Lowe",
    role: "COO, Stackly SaaS",
    initials: "AL",
    color: "#2f7ee8",
  },
  {
    quote:
      "We were live in an afternoon. The analytics dashboard is addictive — I check it every morning.",
    name: "João Pires",
    role: "Founder, ClearRoute",
    initials: "JP",
    color: "#7c3aed",
  },
  {
    quote:
      "Integrating with Shopify took 5 minutes. Order questions are handled 24/7 without us.",
    name: "Nina Torres",
    role: "Ecommerce Manager, VelvetBox",
    initials: "NT",
    color: "#059669",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/ month · billed annually",
    features: [
      "Up to 500 tickets/mo",
      "2 team members",
      "Email & live chat",
      "AI auto-replies",
      "Basic analytics",
      "5 integrations",
    ],
    cta: "Start free trial",
  },
  {
    name: "Growth",
    price: "$79",
    period: "/ month · billed annually",
    features: [
      "Up to 5,000 tickets/mo",
      "10 team members",
      "All channels incl. WhatsApp",
      "Advanced AI + custom training",
      "Full analytics suite",
      "Unlimited integrations",
    ],
    featured: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "$249",
    period: "/ month · billed annually",
    features: [
      "Unlimited tickets",
      "Unlimited team members",
      "All channels + custom API",
      "Dedicated AI fine-tuning",
      "SLA guarantees & SSO",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
  },
];

export const STATS: Stat[] = [
  { value: "3K+", label: "Happy businesses" },
  { value: "12M", label: "Tickets resolved" },
  { value: "80%", label: "Avg resolution rate" },
  { value: "4.9★", label: "Average CSAT" },
];
