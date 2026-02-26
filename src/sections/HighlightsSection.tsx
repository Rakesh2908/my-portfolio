import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { highlights } from "@/content/highlights";
import { Reveal } from "@/components/ui/Reveal";

export function HighlightsSection() {
  return (
    <Section id="highlights" className="bg-muted/20">
      <Reveal>
        <SectionHeading
          eyebrow="System design"
          title="Engineering highlights"
          description="A snapshot of the patterns I reach for when building backend systems that need to scale and stay debuggable."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, idx) => (
          <Reveal key={h.title} delayMs={idx * 45}>
            <Card>
            <CardContent className="pt-6">
              <h3 className="text-sm font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                {h.description}
              </p>
            </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

