import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icons";

export type BadgeTone = "pink" | "blue" | "green";

/** Gradient + glow per tone, taken from the design's icon squares. */
const TONE_CLASSES: Record<BadgeTone, string> = {
    pink: "bg-[linear-gradient(135deg,#b72be4_0%,#e5208f_100%)] shadow-[0_8px_24px_rgba(217,38,160,0.45)]",
    blue: "bg-[linear-gradient(135deg,#2aa3f2_0%,#1b6fe0_100%)] shadow-[0_8px_24px_rgba(30,144,255,0.4)]",
    green: "bg-[linear-gradient(135deg,#22b8a0_0%,#119a74_100%)] shadow-[0_8px_24px_rgba(17,154,116,0.4)]",
};

interface IconBadgeProps {
    name: IconName;
    tone?: BadgeTone;
    /** Size + corner radius, e.g. "size-12 rounded-xl". */
    className?: string;
    iconSize?: number;
    /** Optional overlay such as the numbered step badge. */
    children?: ReactNode;
}

/** Rounded gradient square holding a white icon. */
export default function IconBadge({
    name,
    tone = "pink",
    className = "",
    iconSize = 24,
    children,
}: IconBadgeProps) {
    return (
        <span
            className={`relative inline-flex shrink-0 items-center justify-center text-white ${TONE_CLASSES[tone]} ${className}`}
        >
            <Icon name={name} size={iconSize} />
            {children}
        </span>
    );
}