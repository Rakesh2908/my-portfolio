import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { links } from "@/content/links";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-float-orb" />
        <div className="absolute top-12 left-1/3 h-56 w-56 rounded-full bg-primary/10 blur-3xl animate-float-orb-secondary" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-14 pb-10 sm:pt-20 sm:pb-14">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>Backend-focused SDE-1</Tag>
          <Tag>Go • APIs • Reliability</Tag>
          <Tag>AI-assisted workflows</Tag>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Building scalable backend systems that are{" "}
          <span className="text-muted-fg">fast, observable, and safe.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-fg sm:text-lg">
          I’m Rakesh Garlapati, a Software Development Engineer (SDE-1) at Angel
          One. I build backend services and workflow systems across high-volume
          flows—shipping features with clear contracts, strong invariants, and
          the observability needed to debug production quickly.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            onClick={() => document.getElementById("experience")?.scrollIntoView()}
          >
            View experience
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.open(`mailto:${links.email}`, "_self")}
          >
            Contact
          </Button>
          <Button
            variant="ghost"
            onClick={() => window.open("https://github.com/Rakesh2908", "_blank")}
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

