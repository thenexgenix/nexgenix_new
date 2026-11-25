import { anekBangla } from "../fonts";
import type { ProjectDetails } from "../types";
import ImageSlot from "../ui/ImageSlot";

interface HeroSectionProps {
    hero: ProjectDetails["hero"];
}

/**
 * Badge, Bengali project name, English subtitle, description and the hero mockup.
 * The top padding clears the floating site header (see layout.tsx).
 */
export default function HeroSection({ hero }: HeroSectionProps) {
    return (
        <section
            aria-labelledby="project-title"
            className="pt-[150px] md:pt-[200px] xl:pt-[250px]"
        >
            <div className="mx-auto flex max-w-[780px] flex-col items-center px-6 text-center">
                <span className="inline-flex h-[43px] items-center rounded-full border border-[#3aa84a]/25 bg-[#2e7d32]/15 px-5 text-sm font-semibold text-[#3aa84a]">
                    {hero.badge}
                </span>

                <h1 id="project-title" className="mt-3.5 flex flex-col items-center">
                    {/* Bengali wordmark - green gradient clipped to the glyphs */}
                    <span
                        lang="bn"
                        className={`${anekBangla.className} block bg-[linear-gradient(180deg,#52bb62_0%,#2f9540_55%,#1f6f2e_100%)] bg-clip-text pb-2 text-5xl font-extrabold leading-[1.3] text-transparent sm:text-[64px]`}
                    >
                        {hero.title}
                    </span>
                    <span className="mt-5 text-3xl font-semibold leading-[1.2] text-white sm:text-4xl">
                        {hero.subtitle}
                    </span>
                </h1>

                <p className="mt-4 text-base leading-7 text-white/60 sm:text-[18.6px] sm:leading-[33px]">
                    {hero.description}
                </p>
            </div>

            {/* Hero mockup: 1280px wide in the design (wider than the 1248px content shell) */}
            <div className="mx-auto mt-[68px] w-full max-w-[1328px] px-6">
                <ImageSlot
                    src={hero.image.src}
                    alt={hero.image.alt}
                    width={1280}
                    height={831}
                    label="Hero image"
                    fit="cover"
                    priority
                    className="w-full rounded-[36px]"
                />
            </div>
        </section>
    );
}