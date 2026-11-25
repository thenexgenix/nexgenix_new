import { anekBangla } from "../fonts";
import type { ProjectDetails } from "../types";
import SectionHeading from "../ui/SectionHeading";

interface DesignSystemSectionProps {
    designSystem: ProjectDetails["designSystem"];
}

/** Shared look of the three cards. */
const CARD_CLASSES = "rounded-3xl border border-white/10 bg-white/[0.04] p-8";
const CARD_TITLE_CLASSES = "text-xl font-semibold leading-7 text-white";

/** Colour palette, typography and key features of the project. */
export default function DesignSystemSection({ designSystem }: DesignSystemSectionProps) {
    const { colors, typography, features } = designSystem;

    return (
        <section aria-labelledby="design-system-title" className="pt-[207px]">
            <div className="page-shell">
                <SectionHeading
                    id="design-system-title"
                    title={designSystem.title}
                    subtitle={designSystem.subtitle}
                />

                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {/* Colour palette */}
                    <article className={CARD_CLASSES}>
                        <h3 className={CARD_TITLE_CLASSES}>Color Palette</h3>
                        <ul className="mt-6 flex flex-col gap-4">
                            {colors.map((color) => (
                                <li key={color.hex} className="flex items-center gap-4">
                                    {/* Hex comes from data, so it is applied inline rather than as a Tailwind class. */}
                                    <span
                                        aria-hidden="true"
                                        className="size-16 shrink-0 rounded-2xl"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <div>
                                        <p className="font-mono text-[13px] leading-5 text-white/85">{color.hex}</p>
                                        <p className="text-xs leading-4 text-white/45">{color.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </article>

                    {/* Typography */}
                    <article className={CARD_CLASSES}>
                        <h3 className={CARD_TITLE_CLASSES}>Typography</h3>
                        <p
                            lang="bn"
                            className={`${anekBangla.className} mt-6 text-[30px] font-normal leading-10 text-white`}
                        >
                            {typography.sample}
                        </p>
                        <p className="mt-1 text-sm leading-5 text-white/45">{typography.family}</p>
                        <p className="mt-4 text-[13px] leading-[22px] text-white/50">
                            {typography.description}
                        </p>
                    </article>

                    {/* Key features */}
                    <article className={CARD_CLASSES}>
                        <h3 className={CARD_TITLE_CLASSES}>Key Features</h3>
                        <ul className="mt-5">
                            {features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex h-8 items-center gap-3 text-[13px] text-white/65"
                                >
                                    <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#3aa84a]" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}