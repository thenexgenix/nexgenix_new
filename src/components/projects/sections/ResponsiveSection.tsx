import type { ProjectDetails } from "../types";
import ImageSlot from "../ui/ImageSlot";
import SectionHeading from "../ui/SectionHeading";

interface ResponsiveSectionProps {
    responsive: ProjectDetails["responsive"];
}

/** "Responsive Design" - one composite mockup showing all device sizes. */
export default function ResponsiveSection({ responsive }: ResponsiveSectionProps) {
    return (
        <section aria-labelledby="responsive-title" className="pt-[112px]">
            <div className="page-shell">
                <SectionHeading
                    id="responsive-title"
                    title={responsive.title}
                    subtitle={responsive.subtitle}
                />
            </div>

            {/* The composite is 1327px wide in the design - wider than the content shell. */}
            <div className="mx-auto mt-16 w-full max-w-[1375px] px-6">
                <ImageSlot
                    src={responsive.image.src}
                    alt={responsive.image.alt}
                    width={1327}
                    height={567}
                    label="Responsive devices mockup"
                    fit="contain"
                    sizes="(min-width: 1375px) 1327px, 100vw"
                    className="w-full"
                />
            </div>
        </section>
    );
}