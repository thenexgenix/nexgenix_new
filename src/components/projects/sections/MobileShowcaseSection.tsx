import type { ProjectDetails } from "../types";
import ImageSlot from "../ui/ImageSlot";
import SectionHeading from "../ui/SectionHeading";

interface MobileShowcaseSectionProps {
    showcase: NonNullable<ProjectDetails["mobileShowcase"]>;
}

/** Keeps very wide phone mockups inside the content area without cropping. */
const MAX_WIDTH = 860;

/**
 * "Mobile APP Design" for projects that only have a phone image.
 * The title is the only text; there is no subtitle or experience description.
 */
export default function MobileShowcaseSection({ showcase }: MobileShowcaseSectionProps) {
    const width = Math.min(showcase.width, MAX_WIDTH);
    const height = Math.round(showcase.height * (width / showcase.width));

    return (
        <section aria-labelledby="mobile-showcase-title" className="pt-[112px]">
            <div className="page-shell">
                <SectionHeading id="mobile-showcase-title" title={showcase.title} />
            </div>

            <div className="mx-auto mt-16 flex w-full justify-center px-6">
                <div className="w-full" style={{ maxWidth: `${width}px` }}>
                    <ImageSlot
                        src={showcase.image.src}
                        alt={showcase.image.alt}
                        width={width}
                        height={height}
                        label="Mobile app design"
                        fit="contain"
                        sizes={`${width}px`}
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}
