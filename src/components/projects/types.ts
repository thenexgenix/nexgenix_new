import type { IconName } from "./ui/Icons";
import type { BadgeTone } from "./ui/IconBadge";

/**
 * An image that is supplied separately from the code.
 * Keep `src` as `null` (or point it at a missing file) to render a labelled placeholder.
 */
export interface ProjectImage {
    /** Path inside /public, e.g. "/projects/ainbondu/hero.png". */
    src: string | null;
    alt: string;
}

export type StatTone = "green" | "blue" | "pink";
export type PlatformVariant = "mobile" | "desktop" | "tablet";

export interface SectionIntro {
    title: string;
    subtitle: string;
}

export interface MetaItem {
    emoji: string;
    label: string;
    value: string;
}

export interface NarrativeCard {
    emoji: string;
    title: string;
    /** Rendered as separate paragraphs with no extra gap, as in the design. */
    paragraphs: string[];
}

export interface ColorSwatch {
    hex: string;
    name: string;
}

export interface PlatformShowcase {
    variant: PlatformVariant;
    icon: IconName;
    title: string;
    description: string;
    bullets: string[];
    image: ProjectImage;
}

export interface ProcessStep {
    icon: IconName;
    title: string;
    description: string;
    tasks: string[];
}

export interface ImpactStat {
    value: string;
    label: string;
    tone: StatTone;
}

export interface Takeaway {
    icon: IconName;
    title: string;
    description: string;
}

/** One card in the "Story Behind" timeline. */
export interface JourneyMilestone {
    title: string;
    /** Shown in the small pill next to the title, e.g. "2022". */
    year: string;
    description: string;
    /** Short chips shown under the description. */
    highlights: string[];
}

/** One person card in the "Meet The Team" section. */
export interface TeamMember {
    name: string;
    role: string;
    description: string;
    /** Icon in the round badge under the photo. */
    icon: IconName;
    /** Badge colour. */
    tone: BadgeTone;
    image: ProjectImage;
}

/** One tile in the "Our Collaborative Journey" card. */
export interface CollaborationStat {
    icon: IconName;
    value: string;
    label: string;
}

export interface JourneyContent extends SectionIntro {
    badge: string;
    highlight: string;
    milestones: JourneyMilestone[];
}

export interface TeamContent extends SectionIntro {
    badge: string;
    highlight: string;
    members: TeamMember[];
}

export interface CollaborationContent {
    title: string;
    description: string;
    stats: CollaborationStat[];
}

/** Company-wide contact block. Shared by every project page. */
export interface ContactContent {
    badge: string;
    title: string;
    subtitle: string;
    intro: { title: string; description: string };
    details: { icon: IconName; label: string; value: string }[];
    services: string[];
    /** Options of the "Project Type" dropdown. */
    projectTypes: string[];
}

/** Everything the project details page needs to render one project. */
export interface ProjectDetails {
    slug: string;
    seo: { title: string; description: string };
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        description: string;
        image: ProjectImage;
    };
    meta: MetaItem[];
    challenge: NarrativeCard;
    solution: NarrativeCard;
    responsive: SectionIntro & { image: ProjectImage };
    designSystem: SectionIntro & {
        colors: ColorSwatch[];
        typography: { sample: string; family: string; description: string };
        features: string[];
    };
    platforms: SectionIntro & { items: PlatformShowcase[] };
    process: SectionIntro & { steps: ProcessStep[] };
    journey: JourneyContent;
    team: TeamContent;
    collaboration: CollaborationContent;
    impact: SectionIntro & { stats: ImpactStat[] };
    testimonial: {
        quote: string;
        /** Number of filled stars (0-5). */
        rating: number;
        author: string;
        role: string;
        /** Single letter shown in the avatar circle. */
        initial: string;
    };
    takeaways: SectionIntro & { items: Takeaway[] };
}
