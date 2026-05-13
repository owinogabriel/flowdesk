import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", path: "/" },
    { label: "Pricing", path: "/pricing" },
    { label: "Integrations", path: "/" },
    { label: "Changelog", path: "/" },
  ],
  Company: [
    { label: "About", path: "/about" },
    { label: "Blog", path: "/" },
    { label: "Careers", path: "/" },
    { label: "Contact", path: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", path: "/" },
    { label: "Terms of Service", path: "/" },
    { label: "Security", path: "/" },
    { label: "GDPR", path: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="md:col-span-1">
          <Link
            to="/"
            className="font-serif text-2xl text-paper hover:opacity-75 transition-opacity"
          >
            Flow<span className="text-accent">Desk</span>
          </Link>
          <p className="text-paper/50 text-sm mt-3 leading-relaxed max-w-xs">
            AI-powered customer support for modern businesses. Resolve faster,
            scale effortlessly.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-paper/40 mb-4">
              {heading}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-paper/70 hover:text-paper text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 text-center py-4 text-paper/30 text-xs">
        <div className="border-t border-white/5 text-center py-4 text-paper/30 text-xs">
          © {new Date().getFullYear()} FlowDesk Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
