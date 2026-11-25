import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";
import { getAllProjectSlugs, getProjectBySlug } from "@/components/projects/data";

/** In Next 15+ route params are asynchronous, so they are typed as a Promise. */
type ProjectRouteProps = {
    params: Promise<{ slug: string }>;
};

/** Pre-renders one page per project registered in `data/index.ts`. */
export function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectRouteProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) return {};

    return {
        title: project.seo.title,
        description: project.seo.description,
    };
}

export default function ProjectRoute({ params }: ProjectRouteProps) {
    return (
        <Suspense fallback={<ProjectRouteFallback />}>
            <ProjectRouteContent params={params} />
        </Suspense>
    );
}

async function ProjectRouteContent({ params }: ProjectRouteProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) notFound();

    return <ProjectDetailPage project={project} />;
}

function ProjectRouteFallback() {
    return (
        <main
            aria-busy="true"
            className="flex min-h-screen items-center justify-center bg-[#19032a] text-white"
        >
            <p role="status" className="text-sm text-white/70">
                Loading project...
            </p>
        </main>
    );
}