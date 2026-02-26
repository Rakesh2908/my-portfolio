import { ThemeProvider } from "@/app/ThemeProvider";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { HighlightsSection } from "@/sections/HighlightsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { WritingSection } from "@/sections/WritingSection";

export function App() {
  return (
    <ThemeProvider>
      <div id="top" className="min-h-dvh bg-bg text-fg">
        <SkipToContent />
        <SiteHeader />

        <main id="content">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <HighlightsSection />
          <SkillsSection />
          <WritingSection />
          <ContactSection />
        </main>

        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}

