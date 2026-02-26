import { cn } from "@/lib/cn";

export function Tag({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-fg",
        className,
      )}
      {...props}
    />
  );
}

