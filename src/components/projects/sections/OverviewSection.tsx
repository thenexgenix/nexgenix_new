import { ARIAL_FONT_CLASS } from "../fonts";
import type { MetaItem, NarrativeCard } from "../types";

interface OverviewSectionProps {
    meta: MetaItem[];
    challenge: NarrativeCard;
    solution: NarrativeCard;
}

/** Thin horizontal rule that fades out at both ends. */
function FadingDivider({ className = "" }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={`h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] ${className}`}
        />
    );
}

interface NarrativePanelProps {
    card: NarrativeCard;
    /** Adds the blue ambient glow used on the "Solution" card. */
    glow?: boolean;
}

/** "The Challenge" / "The Solution" card. Typeset in Arial to match the design. */
function NarrativePanel({ card, glow = false }: NarrativePanelProps) {
    return (
        <article
            className={`${ARIAL_FONT_CLASS} relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] px-6 py-8 lg:px-12 lg:pb-4 lg:pt-12`}
        >
            {glow && (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(59,130,246,0.22),transparent_60%)]"
                />
            )}

            <div className="relative">
                <span aria-hidden="true" className="block text-5xl leading-[48px]">
                    {card.emoji}
                </span>
                <h3 className="mt-8 text-3xl font-bold leading-9 text-white">{card.title}</h3>
                <div className="mt-6 text-base leading-[26px] text-white/65">
                    {card.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </article>
    );
}

/**
 * Project facts (client, duration, category, role) followed by the
 * Challenge / Solution pair. Ambient colour glows sit behind the cards.
 */
export default function OverviewSection({ meta, challenge, solution }: OverviewSectionProps) {
    return (
        // `isolate` keeps the negatively-stacked glows above the page background.
        <section aria-label="Project overview" className="relative isolate pt-[78px]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] overflow-hidden"
            >
                <div className="absolute left-[52%] top-[10px] h-[420px] w-[560px] rounded-full bg-[#c200e8]/20 blur-[120px]" />
                <div className="absolute right-[6%] top-[200px] h-[460px] w-[460px] rounded-full bg-[#2563eb]/25 blur-[130px]" />
            </div>

            <div className="page-shell">
                {/* Some designs skip the fact cards; hide the dividers with them. */}
                {meta.length > 0 && (
                    <>
                        <FadingDivider />

                        {/* Fact cards */}
                        <dl className="mt-[43px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                            {meta.map((item) => (
                                <div
                                    key={item.label}
                                    className="min-h-[164px] rounded-[18px] border border-white/10 bg-white/[0.04] px-6 pt-5"
                                >
                                    <span aria-hidden="true" className="block text-[40px] leading-[48px]">
                                        {item.emoji}
                                    </span>
                                    <dt className="mt-[18px] text-[13px] leading-5 text-white/50">
                                        {item.label}
                                    </dt>
                                    <dd className="mt-[15px] text-lg font-semibold leading-7 text-white">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <FadingDivider className="mt-7" />
                    </>
                )}

                {/* Challenge / Solution */}
                <div className={meta.length > 0 ? "mt-[37px] grid gap-8 lg:grid-cols-2" : "grid gap-8 lg:grid-cols-2"}>
                    <NarrativePanel card={challenge} />
                    <NarrativePanel card={solution} glow />
                </div>
            </div>
        </section>
    );
}