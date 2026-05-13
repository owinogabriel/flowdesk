import { type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "outline-light";
  to?: string;
}

export default function Button({
  variant = "primary",
  to,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all cursor-pointer px-6 py-3 text-sm";

  const variants = {
    primary:
      "bg-accent text-white shadow-[0_4px_20px_rgba(232,93,47,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,93,47,0.45)]",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
    ghost: "text-ink hover:gap-3",
    "outline-light": "border-2 border-paper/40 text-paper hover:bg-paper/10",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  // if a "to" prop is passed, render a Link instead of a button
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
