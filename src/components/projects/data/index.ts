import type { ProjectDetails } from "../types";
import { ainbondu } from "./ainbondu";

/** Register every project that should get a /work/[slug] page here. */
const PROJECTS: ProjectDetails[] = [ainbondu];

export function getAllProjectSlugs(): string[] {
    return PROJECTS.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): ProjectDetails | undefined {
    return PROJECTS.find((project) => project.slug === slug);
}