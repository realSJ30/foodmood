import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leading?: ReactNode;
  trailing?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-700 text-cream-50 hover:bg-forest-600 shadow-[0_10px_30px_-12px_rgba(19,41,26,0.55)]",
  ghost:
    "bg-white text-forest-700 hover:bg-cream-50 border border-transparent shadow-sm",
  outline:
    "bg-transparent text-forest-700 border border-forest-700/20 hover:border-forest-700/60",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

function Button({
  variant = "primary",
  size = "md",
  leading,
  trailing,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/40 disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {leading}
      {children}
      {trailing}
    </button>
  );
}

export default Button;
