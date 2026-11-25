"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageSlotProps {
    /** Path inside /public. `null` always shows the placeholder. */
    src: string | null;
    alt: string;
    /** Design size in px. Used for the aspect ratio and the placeholder label. */
    width: number;
    height: number;
    /** Short name shown in the placeholder, e.g. "Hero image". */
    label: string;
    /** Tailwind classes for outer size / radius, e.g. "w-full max-w-[409px] rounded-3xl". */
    className?: string;
    /** "cover" fills the box (screenshots); "contain" never crops (device mockups). */
    fit?: "cover" | "contain";
    priority?: boolean;
    sizes?: string;
}

/**
 * Reserves the exact space an image will occupy so the layout matches the design
 * before the asset exists. Shows a dashed placeholder if `src` is null or fails to load.
 */
export default function ImageSlot({
    src,
    alt,
    width,
    height,
    label,
    className = "",
    fit = "contain",
    priority = false,
    sizes = "(min-width: 1280px) 1280px, 100vw",
}: ImageSlotProps) {
    const [failed, setFailed] = useState(false);

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{ aspectRatio: `${width} / ${height}` }}
        >
            {src && !failed ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    priority={priority}
                    onError={() => setFailed(true)}
                    className={fit === "cover" ? "object-cover" : "object-contain"}
                />
            ) : (
                <div
                    role="img"
                    aria-label={`${label} placeholder`}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-[inherit] border border-dashed border-white/25 bg-white/[0.04] px-4 text-center"
                >
                    <span className="text-sm font-semibold text-white/70">{label}</span>
                    <span className="text-xs text-white/45">
                        {width} × {height}px
                    </span>
                </div>
            )}
        </div>
    );
}