import { ARIAL_FONT_CLASS } from "../fonts";
import type { ImpactStat, StatTone } from "../types";

interface ImpactSectionProps {
    title: string;
    subtitle: string;
    stats: ImpactStat[];
}

/** Gradient fill for each statistic (applied as clipped text). */
const TONE_CLASSES: Record<StatTone, string> = {
    green: "bg-[linear-gradient(90deg,#2c8a3c,#38a84a)]",
    blue: "bg-[linear-gradient(90deg,#1b78e2,#0ea5e9)]",
    pink: "bg-[linear-gradient(90deg,#c026d3,#ec4899)]",
};

/** "Project Impact" - a dark-to-purple gradient card with three headline numbers. */
export default function ImpactSection({ title, subtitle, stats }: ImpactSectionProps) {
    return (
        <section aria-labelledby="impact-title" className="pt-[121px]">
            <div className="page-shell">
                <div
                    className={`${ARIAL_FONT_CLASS} rounded-[38px] border border-white/20 bg-[linear-gradient(180deg,#1b1824_0%,#2a1244_55%,#3b1163_100%)] px-6 pb-[67px] pt-[60px] text-center lg:px-0`}
                >
                    <h2 id="impact-title" className="text-4xl font-bold leading-[1.2] text-white lg:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-3 text-lg leading-7 text-white/60 sm:text-xl">{subtitle}</p>

                    {/*
            The design places the three columns 80px from the card's left edge and 27px
            from the right, so the columns are intentionally not perfectly centred.
          */}
                    <dl className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-0 lg:pl-[80px] lg:pr-[27px]">
                        {stats.map((stat) => (
                            // dt comes first in the DOM for screen readers; flex-col-reverse shows the number on top.
                            <div key={stat.label} className="flex flex-col-reverse items-center">
                                <dt className="mt-5 text-lg leading-7 text-white">{stat.label}</dt>
                                <dd
                                    className={`bg-clip-text text-6xl font-bold leading-none text-transparent lg:text-[72px] ${TONE_CLASSES[stat.tone]}`}
                                >
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}