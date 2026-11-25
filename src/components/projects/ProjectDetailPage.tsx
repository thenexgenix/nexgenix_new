import { HomeFooter } from "@/components/home/HomeSections";
import DesignSystemSection from "./sections/DesignSystemSection";
import HeroSection from "./sections/HeroSection";
import ImpactSection from "./sections/ImpactSection";
import OverviewSection from "./sections/OverviewSection";
import PlatformsSection from "./sections/PlatformsSection";
import ProcessSection from "./sections/ProcessSection";
import ResponsiveSection from "./sections/ResponsiveSection";
import TakeawaysSection from "./sections/TakeawaysSection";
import TestimonialSection from "./sections/TestimonialSection";
import type { ProjectDetails } from "./types";
import CollaborationSection from "./sections/CollaborationSection";
import ContactSection from "./sections/ContactSection";
import JourneySection from "./sections/JourneySection";
import TeamSection from "./sections/TeamSection";
import { NEXGENIX_CONTACT } from "./data/company";

interface ProjectDetailPageProps {
    project: ProjectDetails;
}

/**
 * Composes the project details page from its sections, top to bottom.
 * The site header comes from the root layout; the footer is the shared HomeFooter.
 * Each section owns its own vertical spacing (measured from the 1440px design).
 */
export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
    return (
        <main className="bg-[#19032a] text-white">
            <HeroSection hero={project.hero} />
            <OverviewSection
                meta={project.meta}
                challenge={project.challenge}
                solution={project.solution}
            />
            <ResponsiveSection responsive={project.responsive} />
            <DesignSystemSection designSystem={project.designSystem} />
            <PlatformsSection
                title={project.platforms.title}
                subtitle={project.platforms.subtitle}
                items={project.platforms.items}
            />
            <ProcessSection
                title={project.process.title}
                subtitle={project.process.subtitle}
                steps={project.process.steps}
            />
            <JourneySection journey={project.journey} />
            <TeamSection team={project.team} />
            <CollaborationSection collaboration={project.collaboration} />
            <ImpactSection
                title={project.impact.title}
                subtitle={project.impact.subtitle}
                stats={project.impact.stats}
            />
            <TestimonialSection testimonial={project.testimonial} />
            <TakeawaysSection
                title={project.takeaways.title}
                subtitle={project.takeaways.subtitle}
                items={project.takeaways.items}
            />
            {/* NEW: company-wide contact form, sits right above the footer */}
            <ContactSection contact={NEXGENIX_CONTACT} />
            <HomeFooter />
        </main>
    );
}
