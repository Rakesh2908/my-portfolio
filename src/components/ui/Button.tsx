import React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition btn-hover-scale",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          "disabled:pointer-events-none disabled:opacity-50",
          size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4 text-sm",
          variant === "primary" &&
            "bg-primary text-primary-fg shadow-soft hover:opacity-95",
          variant === "secondary" &&
            "bg-muted text-fg border border-border hover:bg-muted/80",
          variant === "ghost" && "bg-transparent text-fg hover:bg-muted/60",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

