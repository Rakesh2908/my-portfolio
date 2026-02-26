import { Container } from "@/components/ui/Container";
import { links } from "@/content/links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-fg">
          © {new Date().getFullYear()} Rakesh Garlapati.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {links.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm text-muted-fg transition hover:text-fg"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

