import type { ProjectDetails } from "../types";
import ChainConnector from "../ui/ChainConnector";
import SectionHeading from "../ui/SectionHeading";

interface JourneySectionProps {
    journey: ProjectDetails["journey"];
}

/**
 * "The Story Behind ..." - a vertical timeline of cards joined by hanging chains.
 * Layout, top to bottom:
 *   1. heading
 *   2. a bar with two diagonal chains (desktop only, purely decorative)
 *   3. milestone cards, each followed by a short pair of chains to the next card
 */
export default function JourneySection({ journey }: JourneySectionProps) {
    const { badge, title, highlight, subtitle, milestones } = journey;

    return (
        <section aria-labelledby="journey-title" className="pt-[150px]">
            <div className="page-shell">
                <SectionHeading
                    id="journey-title"
                    badge={{ label: badge, tone: "purple" }}
                    title={title}
                    highlight={highlight}
                    subtitle={subtitle}
                />

                {/* Hanging bar + diagonal chains. Hidden below `lg` where there is no room. */}
                <div aria-hidden="true" className="relative mx-auto mt-6 hidden h-[134px] lg:block">
                    <span className="absolute left-1/2 top-0 h-[3px] w-[430px] -translate-x-1/2 rounded-full bg-white/90" />
                    {/* Each chain starts at an end of the bar and is rotated outward (63° from vertical). */}
                    <ChainConnector
                        links={12}
                        className="absolute left-[calc(50%-215px)] top-0 origin-top -translate-x-1/2 rotate-[63deg]"
                    />
                    <ChainConnector
                        links={12}
                        className="absolute left-[calc(50%+215px)] top-0 origin-top -translate-x-1/2 -rotate-[63deg]"
                    />
                </div>

                <ol className="mt-8 lg:mt-0">
                    {milestones.map((milestone, index) => {
                        const isLast = index === milestones.length - 1;

                        return (
                            <li key={milestone.title}>
                                <article className="rounded-3xl border border-white/30 bg-[#22102f] p-6 sm:px-8 sm:py-7">
                                    <header className="flex flex-wrap items-center gap-3">
                                        <h3 className="text-xl font-semibold leading-7 text-white">
                                            {milestone.title}
                                        </h3>
                                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-0.5 text-xs text-white/60">
                                            {milestone.year}
                                        </span>
                                    </header>

                                    <p className="mt-3 max-w-[700px] text-sm leading-6 text-white/70">
                                        {milestone.description}
                                    </p>

                                    {/* Chips. Index is part of the key because texts may repeat. */}
                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {milestone.highlights.map((highlight, i) => (
                                            <li
                                                key={`${highlight}-${i}`}
                                                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/70"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="size-1 shrink-0 rounded-full bg-[#d946ef]"
                                                />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </article>

                                {/* Chains between this card and the next one (24 = 96px tall, 4 links). */}
                                {!isLast && (
                                    <div aria-hidden="true" className="relative h-24">
                                        <ChainConnector links={4} className="absolute left-6 top-0 sm:left-12" />
                                        <ChainConnector links={4} className="absolute right-6 top-0 sm:right-12" />
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}