import type { ProjectDetails } from "../types";
import IconBadge from "../ui/IconBadge";
import ImageSlot from "../ui/ImageSlot";
import SectionHeading from "../ui/SectionHeading";

interface TeamSectionProps {
    team: NonNullable<ProjectDetails["team"]>;
}

/** Green gradient clipped to the glyphs, same look as the hero wordmark. */
const HIGHLIGHT_CLASSES =
    "bg-[linear-gradient(180deg,#52bb62_0%,#2f9540_55%,#1f6f2e_100%)] bg-clip-text text-transparent";

/**
 * "Meet The Team" - photo cards. Cards are flex items (not a grid) so that an
 * incomplete last row is centred, e.g. 3 + 1 members, as in the design.
 */
export default function TeamSection({ team }: TeamSectionProps) {
    const { badge, title, highlight, subtitle, members } = team;

    return (
        <section aria-labelledby="team-title" className="pt-[140px]">
            <div className="page-shell">
                <SectionHeading
                    id="team-title"
                    badge={{ label: badge, tone: "green" }}
                    title={title}
                    highlight={highlight}
                    highlightClassName={HIGHLIGHT_CLASSES}
                    subtitle={subtitle}
                />

                <ul className="mx-auto mt-16 flex max-w-[1072px] flex-wrap items-start justify-center gap-7">
                    {/* Card width: 1 column on mobile, 2 on tablet, 3 on desktop (28px gaps). */}
                    {members.map((member) => (
                        <li
                            key={member.name}
                            className="w-full sm:w-[calc((100%-28px)/2)] lg:w-[calc((100%-56px)/3)]"
                        >
                            <article className="rounded-3xl border border-white/30 bg-[#22102f] px-6 pb-7 pt-6 text-center">
                                {/* Photo wrapper is `relative` so the role badge can overlap the bottom edge. */}
                                <div className="relative mx-auto w-full max-w-[272px]">
                                    <ImageSlot
                                        src={member.image.src}
                                        alt={member.image.alt}
                                        width={272}
                                        height={272}
                                        label={`${member.name} photo`}
                                        fit="cover"
                                        sizes="272px"
                                        className="w-full rounded-full border-[6px] border-[#e6d2e0] bg-[#3a0f5c]"
                                    />
                                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                        <IconBadge
                                            name={member.icon}
                                            tone={member.tone}
                                            iconSize={18}
                                            className="size-9 rounded-full border-2 border-[#19032a]"
                                        />
                                    </span>
                                </div>

                                <h3 className="mt-9 text-xl font-semibold leading-7 text-white">{member.name}</h3>
                                <p className="mt-2 text-sm leading-5 text-[#2b8cf0]">{member.role}</p>
                                <p className="mt-3 text-[13px] leading-[22px] text-white/60">
                                    {member.description}
                                </p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}