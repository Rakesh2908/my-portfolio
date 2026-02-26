import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { links } from "@/content/links";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something reliable."
          description="If you’re hiring for backend / platform roles or want to collaborate on systems-heavy work, I’d love to talk."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal delayMs={60}>
          <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold">Email</h3>
            <p className="mt-2 text-sm text-muted-fg">{links.email}</p>
            <div className="mt-4">
              <Button
                onClick={() => window.open(`mailto:${links.email}`, "_self")}
              >
                Send email
              </Button>
            </div>
          </CardContent>
          </Card>
        </Reveal>

        <Reveal delayMs={120}>
          <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold">Links</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {links.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-fg transition hover:bg-muted/80"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

