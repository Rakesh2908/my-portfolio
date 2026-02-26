import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/content/skills";
import { getSkillIconUrlByLabel } from "@/content/skillIcons";
import { useTheme } from "@/app/ThemeProvider";
import { Reveal } from "@/components/ui/Reveal";

export function SkillsSection() {
  const { theme } = useTheme();

  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Backend-first toolkit"
          description="A pragmatic stack for building, shipping, and operating production systems."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, idx) => (
          <Reveal key={g.title} delayMs={idx * 45}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold">{g.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((i) => {
                    const iconSrc = getSkillIconUrlByLabel(i, theme);
                    return (
                      <Tag key={i} className="inline-flex items-center gap-1.5">
                        {iconSrc ? (
                          <img
                            src={iconSrc}
                            alt=""
                            className="h-4 w-4 shrink-0"
                            width={16}
                            height={16}
                            loading="lazy"
                          />
                        ) : null}
                        <span>{i}</span>
                      </Tag>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

