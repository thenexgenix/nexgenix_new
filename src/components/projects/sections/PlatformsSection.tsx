import type { PlatformShowcase, PlatformVariant } from "../types";
import IconBadge, { type BadgeTone } from "../ui/IconBadge";
import ImageSlot from "../ui/ImageSlot";
import SectionHeading from "../ui/SectionHeading";

interface PlatformsSectionProps {
    title: string;
    subtitle: string;
    items: PlatformShowcase[];
}

interface PlatformLayout {
    /** Direction, horizontal padding and top spacing from the xl breakpoint up. */
    row: string;
    /** Max width (and optional offset) of the text column. */
    text: string;
    /** Max width of the image on small screens (matches the design size). */
    imageMaxWidth: string;
    imageWidth: number;
    imageHeight: number;
    tone: BadgeTone;
    /** Bullet dot colour. */
    dot: string;
}

/**
 * Each row has its own offsets in the design (the rows zig-zag and use different
 * image sizes), so they are described per variant. Below `xl` every row simply
 * stacks: text first, image second.
 */
const LAYOUTS: Record<PlatformVariant, PlatformLayout> = {
    mobile: {
        row: "xl:flex-row xl:pl-[43px] xl:pr-[97px]",
        text: "max-w-[560px]",
        imageMaxWidth: "max-w-[409px]",
        imageWidth: 409,
        imageHeight: 516,
        tone: "pink",
        dot: "bg-[#d92cb7]",
    },
    desktop: {
        // Image on the left, text on the right. `pb-[100px]` lifts the text block
        // ~50px above the image's vertical centre, exactly as in the design.
        row: "xl:mt-[262px] xl:flex-row-reverse xl:px-[22px]",
        text: "max-w-[580px] xl:pb-[100px]",
        imageMaxWidth: "max-w-[564px]",
        imageWidth: 564,
        imageHeight: 431,
        tone: "blue",
        dot: "bg-[#1e90ff]",
    },
    tablet: {
        row: "xl:mt-[152px] xl:flex-row xl:px-[162px]",
        text: "max-w-[560px]",
        imageMaxWidth: "max-w-[284px]",
        imageWidth: 284,
        imageHeight: 400,
        tone: "pink",
        dot: "bg-[#d92cb7]",
    },
};

/** One device row: icon + title, description, bullet list and the device image. */
function PlatformRow({ item }: { item: PlatformShowcase }) {
    const layout = LAYOUTS[item.variant];

    return (
        <article
            className={`mt-20 flex flex-col items-center gap-10 first:mt-0 xl:items-center xl:justify-between xl:gap-0 ${layout.row}`}
        >
            <div className={`w-full ${layout.text}`}>
                <div className="flex items-center gap-3">
                    <IconBadge
                        name={item.icon}
                        tone={layout.tone}
                        iconSize={24}
                        className="size-12 rounded-xl"
                    />
                    <h3 className="text-3xl font-semibold leading-9 text-white">{item.title}</h3>
                </div>

                <p className="mt-0.5 text-base leading-[26px] text-white/70">{item.description}</p>

                <ul className="mt-5">
                    {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex h-8 items-center gap-3 text-sm text-white/70">
                            <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${layout.dot}`} />
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>

            <ImageSlot
                src={item.image.src}
                alt={item.image.alt}
                width={layout.imageWidth}
                height={layout.imageHeight}
                label={`${item.title} image`}
                fit="contain"
                sizes={`${layout.imageWidth}px`}
                className={`w-full shrink-0 ${layout.imageMaxWidth}`}
            />
        </article>
    );
}

/** "Multi-Platform Presentation": mobile, desktop and tablet showcases. */
export default function PlatformsSection({ title, subtitle, items }: PlatformsSectionProps) {
    return (
        <section aria-labelledby="platforms-title" className="pt-[147px]">
            <div className="page-shell">
                <SectionHeading id="platforms-title" title={title} subtitle={subtitle} />

                <div className="mt-12 xl:mt-[102px]">
                    {items.map((item) => (
                        <PlatformRow key={item.variant} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}