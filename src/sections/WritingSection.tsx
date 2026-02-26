import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function WritingSection() {
  return (
    <Section id="writing" className="bg-muted/20">
      <Reveal>
        <SectionHeading
          eyebrow="Writing"
          title="Notes on backend engineering"
          description="A place for short write-ups on reliability, API design, and performance. (Coming soon.)"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal delayMs={50}>
          <Card>
          <CardContent className="pt-6">
            <p className="text-sm font-semibold">Post template</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">
              “How I think about API contracts and backward compatibility”
            </p>
            <div className="mt-4">
              <Button variant="secondary" size="sm" disabled>
                Read
              </Button>
            </div>
          </CardContent>
          </Card>
        </Reveal>
        <Reveal delayMs={110}>
          <Card>
          <CardContent className="pt-6">
            <p className="text-sm font-semibold">Post template</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">
              “Caching without footguns: TTLs, invalidation, and observability”
            </p>
            <div className="mt-4">
              <Button variant="secondary" size="sm" disabled>
                Read
              </Button>
            </div>
          </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

