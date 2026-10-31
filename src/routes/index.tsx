import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/data/portfolio";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { ProjectsPreview } from "@/components/site/ProjectsPreview";
import { HowIWork } from "@/components/site/HowIWork";
import { ContactCTA } from "@/components/site/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: absoluteUrl("/") }],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPreview />
      <HowIWork />
      <ContactCTA />
    </>
  );
}
