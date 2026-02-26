import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 scroll-mt-20", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

