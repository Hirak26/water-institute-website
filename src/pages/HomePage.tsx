import { HeroSection } from "../components/HeroSection";
import { MissionSection } from "../components/MissionSection";
import { ResearchAreaSection } from "../components/ResearchAreaSection";
import { CurrentProjectsSection } from "../components/CurrentProjectsSection";
import { AboutSection } from "../components/AboutSection";
import { MeetTheTeamSection } from "../components/MeetTheTeamSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { ResearchEducationalProgramSection } from "../components/ResearchEducationalProgramSection";
import { PartnersSection } from "../components/PartnersSection";
import { ContactSection } from "../components/ContactSection";
import { NewsletterSection } from "../components/NewsletterSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ResearchAreaSection />
      <CurrentProjectsSection />
      <AboutSection />
      <MeetTheTeamSection />
      <PublicationsSection />
      <ResearchEducationalProgramSection />
      <PartnersSection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}