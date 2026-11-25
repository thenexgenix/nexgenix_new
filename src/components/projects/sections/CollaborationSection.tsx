import type { ProjectDetails } from "../types";
import Icon from "../ui/Icons";

interface CollaborationSectionProps {
    collaboration: ProjectDetails["collaboration"];
}

/** "Our Collaborative Journey" - a blue-tinted card with a row of stat tiles. */
export default function CollaborationSection({ collaboration }: CollaborationSectionProps) {
    const { title, description, stats } = collaboration;

    return (
        <section aria-labelledby="collaboration-title" className="pt-[100px]">
            <div className="page-shell">
                <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#141a3d_0%,#1a0b32_100%)] px-6 pb-8 pt-10 text-center sm:px-10">
                    <h2 id="collaboration-title" className="text-3xl font-bold leading-9 text-white">
                        {title}
                    </h2>
                    <p className="mx-auto mt-5 max-w-[520px] text-base leading-6 text-white/65">
                        {description}
                    </p>

                    {/* 2 columns on mobile, 4 on desktop. */}
                    <dl className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {stats.map((stat) => (
                            // <dt> stays first in the DOM for screen readers; flex-col-reverse shows the tile on top.
                            <div key={stat.label} className="flex flex-col-reverse items-center gap-3">
                                <dt className="text-sm text-white/55">{stat.label}</dt>
                                <dd className="flex w-full flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] py-6 text-white">
                                    <Icon name={stat.icon} size={28} strokeWidth={1.5} />
                                    <span className="text-3xl font-bold leading-9">{stat.value}</span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}