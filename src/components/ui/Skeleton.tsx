import { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

const roundedMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

function Skeleton({ rounded = "xl", className = "", ...rest }: SkeletonProps) {
  return (
    <div
      {...rest}
      className={`skeleton-shimmer ${roundedMap[rounded]} ${className}`}
      aria-hidden="true"
    />
  );
}

export default Skeleton;
