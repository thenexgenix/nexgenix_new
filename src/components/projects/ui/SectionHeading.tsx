import { anekBangla } from "../fonts";
import SectionBadge, { type SectionBadgeTone } from "./SectionBadge";

interface SectionHeadingProps {
    title: string;
    /** Omit on sections that only show a title and an image. */
    subtitle?: string;
    /** Id referenced by the parent section's aria-labelledby. */
    id?: string;
    /** Optional pill shown above the title. */
    badge?: { label: string; tone?: SectionBadgeTone };
    /**
     * Optional word appended to the title in the project's Bengali font,
     * e.g. title "The Story Behind" + highlight "আইনবন্ধু".
     * NOTE: uses the Anek Bangla font. If another project needs a different
     * font, make the font a prop or move it into the project data.
     */
    highlight?: string;
    /** Tailwind classes for the highlighted word (colour / gradient). */
    highlightClassName?: string;
}

/** Centered section title (48px bold) with a muted subtitle underneath. */
export default function SectionHeading({
    title,
    subtitle,
    id,
    badge,
    highlight,
    highlightClassName = "",
}: SectionHeadingProps) {
    return (
        <header className="text-center">
            {badge && <SectionBadge label={badge.label} tone={badge.tone} />}

            <h2
                id={id}
                className={`text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-5xl ${badge ? "mt-4" : ""}`}
            >
                {title}
                {highlight && (
                    <>
                        {" "}
                        <span lang="bn" className={`${anekBangla.className} ${highlightClassName}`}>
                            {highlight}
                        </span>
                    </>
                )}
            </h2>
            {subtitle && (
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-[18.6px]">
                    {subtitle}
                </p>
            )}
        </header>
    );
}