import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: "white" | "lime" | "peach";
}

const toneMap: Record<NonNullable<CardProps["tone"]>, string> = {
  white: "bg-white",
  lime: "bg-lime-soft",
  peach: "bg-peach-soft",
};

function Card({ children, tone = "white", className = "", ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`rounded-2xl ${toneMap[tone]} shadow-[0_18px_45px_-22px_rgba(19,41,26,0.22)] ring-1 ring-black/[0.03] ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
