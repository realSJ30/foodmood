import { HTMLAttributes, ReactNode } from "react";

interface PillProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  leading?: ReactNode;
}

function Pill({ children, leading, className = "", ...rest }: PillProps) {
  return (
    <div
      {...rest}
      className={`inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-sm font-semibold text-forest-700 shadow-[0_8px_24px_-12px_rgba(19,41,26,0.25)] ring-1 ring-black/[0.04] ${className}`}
    >
      {leading}
      {children}
    </div>
  );
}

export default Pill;
