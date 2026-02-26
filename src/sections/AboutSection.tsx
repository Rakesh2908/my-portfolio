import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Engineering philosophy"
          description="I default to simple, measurable designs: clear interfaces, strong invariants, and the observability to debug production quickly."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Reveal delayMs={40}>
          <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold">Reliability first</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">
              Defensive API design, predictable failure modes, and guardrails
              like rate limiting, timeouts, and idempotency.
            </p>
          </CardContent>
          </Card>
        </Reveal>
        <Reveal delayMs={90}>
          <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold">Performance with evidence</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">
              Latency budgets, careful DB access patterns, caching where it
              matters, and metrics that validate improvements.
            </p>
          </CardContent>
          </Card>
        </Reveal>
        <Reveal delayMs={140}>
          <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold">Operational clarity</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">
              Logs, traces, dashboards, and runbooks so the on-call story is
              boring—in a good way.
            </p>
          </CardContent>
          </Card>
        </Reveal>
        <Reveal delayMs={190}>
          <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold">AI as a force multiplier</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">
              I use AI to accelerate boilerplate and exploration, while keeping
              ownership of correctness, edge cases, and production readiness.
            </p>
          </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

