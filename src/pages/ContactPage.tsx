import { CheckCircle, Icon, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import { useState } from "react";

// ── Types ──────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  size: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ── Reusable input component ───────────────────────────────
interface InputProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-ink">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

const inputClass = `
  w-full bg-paper border border-border rounded-xl px-4 py-3 text-sm text-ink
  focus:outline-none focus:border-accent transition-colors placeholder:text-muted/60
`;

const CONTACT_INFO = [
  { icon: Mail, text: "hello@flowdesk.io" },
  { icon: MessageCircle, text: "Live chat Mon–Fri, 9am–6pm ET" },
  { icon: MapPin, text: "San Francisco, CA · Remote-first" },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    size: "1–10 employees",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update a single field
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target; // Update the corresponding field in the form state
    setForm((prev) => ({ ...prev, [name]: value })); // Clear the error for this field when the user starts typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  // Validate before submitting
  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Handle submit
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return; // Don't submit if validation fails
  }
  return (
    <section className="py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeader
            label="Get in touch"
            title="Let's talk"
            subtitle="Whether you're ready to start a trial or just have questions, our team responds within 2 business hours."
          />

          {/* Contact items */}
          <div className="mt-10 flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cream border border-border flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <span className="text-muted text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Response time badge */}
          <div className="mt-10 p-5 bg-cream border border-border rounded-2xl">
            <p className="font-semibold text-sm mb-1">
              ⚡ Fast response guaranteed
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Our average first response time is 47 minutes. Enterprise
              customers get a dedicated Slack channel for direct access.
            </p>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="bg-white border border-border rounded-2xl p-8">
          {/* Success state */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">Message sent!</p>
                <p className="text-muted text-sm">
                  We'll get back to you within 2 business hours.
                </p>
              </div>
              <button
                // onClick={handleReset}
                className="text-accent text-sm font-semibold hover:underline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form></form>
          )}
        </div>
      </div>
    </section>
  );
}
