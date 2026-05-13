interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  center,
  light,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-[11px] uppercase tracking-widest font-semibold text-accent mb-3">
        {label}
      </p>
      <h2
        className={`font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-4 ${light ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-xl ${center ? "mx-auto" : ""} ${light ? "text-paper/60" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
