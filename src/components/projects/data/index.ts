import type { ProjectDetails } from "../types";
import { academiaDashboard } from "./academia-dashboard";
import { aiChefMate } from "./ai-chef-mate";
import { ainbondu } from "./ainbondu";
import { aspireInternshipProgram } from "./aspire-internship-program";
import { eLearningMobileApp } from "./e-learning-mobile-app";
import { edunity } from "./edunity";
import { fashionate } from "./fashionate";
import { foody } from "./foody";
import { freshly } from "./freshly";
import { investmate } from "./investmate";
import { itbiInnovationSummit } from "./itbi-innovation-summit";
import { nexBazar } from "./nex-bazar";
import { nexChef } from "./nex-chef";
import { nexHome } from "./nex-home";
import { nexMail } from "./nex-mail";
import { nexTutor } from "./nex-tutor";
import { nexcare } from "./nexcare";
import { planto } from "./planto";
import { propertia } from "./propertia";
import { sonexaAi } from "./sonexa-ai";
import { speakup } from "./speakup";
import { tripnest } from "./tripnest";

/** Register every project that should get a /work/[slug] page here. */
const PROJECTS: ProjectDetails[] = [
    ainbondu,
    academiaDashboard,
    aiChefMate,
    aspireInternshipProgram,
    eLearningMobileApp,
    edunity,
    fashionate,
    foody,
    freshly,
    investmate,
    itbiInnovationSummit,
    nexBazar,
    nexChef,
    nexHome,
    nexMail,
    nexTutor,
    nexcare,
    planto,
    propertia,
    sonexaAi,
    speakup,
    tripnest,
];

export function getAllProjectSlugs(): string[] {
    return PROJECTS.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): ProjectDetails | undefined {
    return PROJECTS.find((project) => project.slug === slug);
}
