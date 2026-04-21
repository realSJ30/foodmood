import { ReactNode } from "react";
import Card from "../ui/Card";

interface FloatingCardProps {
  tone?: "white" | "lime" | "peach";
  className?: string;
  children: ReactNode;
  floatDelay?: number;
}

function FloatingCard({
  tone = "white",
  className = "",
  children,
  floatDelay = 0,
}: FloatingCardProps) {
  return (
    <Card
      tone={tone}
      className={`animate-floaty ${className}`}
      style={{ animationDelay: `${floatDelay}s` }}
    >
      {children}
    </Card>
  );
}

export default FloatingCard;
