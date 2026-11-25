export type SectionBadgeTone = "purple" | "green" | "neutral";

/** Colours for each pill style. Add a new key here to support a new look. */
const TONE_CLASSES: Record<SectionBadgeTone, string> = {
    purple: "border-[#a855f7]/30 bg-[#6b1d9a]/40 text-[#d8a2fa]",
    green: "border-white/10 bg-white/[0.06] text-[#3aa84a]",
    neutral: "border-white/10 bg-white/[0.06] text-white",
};

interface SectionBadgeProps {
    label: string;
    tone?: SectionBadgeTone;
}

/** Small rounded pill that sits above a section title, e.g. "The Journey". */
export default function SectionBadge({ label, tone = "purple" }: SectionBadgeProps) {
    return (
        <span
            className={`inline-flex h-[34px] items-center rounded-full border px-5 text-xs font-semibold ${TONE_CLASSES[tone]}`}
        >
            {label}
        </span>
    );
}