import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/content/experience";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Production engineering, not classroom projects."
          description="Ownership across backend services and workflow systems—designed for correctness, performance, and long-term operability."
        />
      </Reveal>

      <div className="mt-10 grid gap-4">
        {experience.map((item, idx) => (
          <Reveal key={`${item.company}-${item.title}-${item.start}`} delayMs={idx * 60}>
            <Card>
            <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold">
                  {item.title}{" "}
                  <span className="text-muted-fg font-normal">@</span>{" "}
                  {item.companyUrl ? (
                    <a
                      className="underline decoration-border underline-offset-4 hover:decoration-muted-fg"
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted-fg">
                  {item.location}
                </p>
              </div>
              <p className="text-sm text-muted-fg">
                {item.start} — {item.end}
              </p>
            </CardHeader>

            <CardContent>
              <ul className="grid gap-2 text-sm text-muted-fg">
                {item.highlights.map((h) => (
                  <li key={h} className="leading-relaxed">
                    <span className="text-fg">•</span> {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

