"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* Replace src: null with your image path, e.g. "/assets/works/work-1.png" */
const works: { title: string; src: string | null }[] = [
    { title: "Work 1", src: null },
    { title: "Work 2", src: null },
    { title: "Work 3", src: null },
    { title: "Work 4", src: null },
    { title: "Work 5", src: null },
];

const AUTOPLAY_MS = 4000;

export default function WorksCarousel() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const n = works.length;
    const half = Math.floor(n / 2);

    // Slides move right to left: every tick the next slide becomes the center.
    useEffect(() => {
        if (paused) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = setTimeout(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
        return () => clearTimeout(id);
    }, [active, paused, n]);

    return (
        <div
            className="works-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {works.map((work, i) => {
                const offset = ((((i - active + half) % n) + n) % n) - half;
                const isSide = Math.abs(offset) === 1;

                return (
                    <div
                        key={work.title}
                        className="work-slide"
                        data-offset={offset}
                        role={isSide ? "button" : undefined}
                        tabIndex={isSide ? 0 : -1}
                        aria-label={isSide ? `Show ${work.title}` : undefined}
                        aria-hidden={Math.abs(offset) > 1 ? true : undefined}
                        onClick={isSide ? () => setActive(i) : undefined}
                        onKeyDown={
                            isSide
                                ? (e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setActive(i);
                                    }
                                }
                                : undefined
                        }
                    >
                        {work.src ? (
                            <Image src={work.src} alt={work.title} fill sizes="600px" className="work-slide__img" unoptimized />
                        ) : (
                            <div className="work-slide__placeholder">
                                <strong>Photo {i + 1}</strong>
                                <span>Replace with your image</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}