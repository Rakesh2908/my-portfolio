import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with a systems lens"
          description="A few projects where I leaned into backend architecture, reliability, and measurable outcomes."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal key={p.name} delayMs={idx * 70}>
            <Card className="h-full">
            <CardHeader>
              <h3 className="text-base font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-fg">{p.tagline}</p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-fg">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                  {p.problem}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-fg">
                  Approach
                </p>
                <ul className="mt-2 grid gap-2 text-sm text-muted-fg">
                  {p.approach.map((a) => (
                    <li key={a} className="leading-relaxed">
                      <span className="text-fg">•</span> {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-fg">
                  Impact
                </p>
                <ul className="mt-2 grid gap-2 text-sm text-muted-fg">
                  {p.impact.map((i) => (
                    <li key={i} className="leading-relaxed">
                      <span className="text-fg">•</span> {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              {p.links.length ? (
                <div className="flex flex-wrap gap-3 pt-1">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-sm font-medium text-muted-fg hover:text-fg"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              ) : null}
            </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

