import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems } from "@/content/nav";
import { links } from "@/content/links";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Primary" className="flex items-center gap-2">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={onNavigate}
          className="rounded-md px-3 py-2 text-sm text-muted-fg transition hover:bg-muted/60 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement | null>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/70 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Rakesh Garlapati
          </a>
          <span className="hidden sm:inline text-xs text-muted-fg">
            Backend-focused SDE-1
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="hidden sm:inline-flex"
            onClick={() => window.open(`mailto:${links.email}`, "_self")}
          >
            Email
          </Button>
          <ThemeToggle />

          <details ref={mobileMenuRef} className="relative lg:hidden">
            <summary className="list-none rounded-md border border-border bg-muted px-3 py-2 text-sm text-fg transition hover:bg-muted/80 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-[min(320px,calc(100vw-2rem))] rounded-lg border border-border bg-card p-2 shadow-soft">
              <NavLinks onNavigate={closeMobileMenu} />
              <div className="mt-2 border-t border-border pt-2">
                <a
                  href={`mailto:${links.email}`}
                  className="block rounded-md px-3 py-2 text-sm text-muted-fg hover:bg-muted/60 hover:text-fg"
                >
                  {links.email}
                </a>
              </div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}

