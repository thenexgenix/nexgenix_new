import type { ProjectDetails } from "../types";
import Icon from "../ui/Icons";
import IconBadge from "../ui/IconBadge";

interface TestimonialSectionProps {
    testimonial: ProjectDetails["testimonial"];
}

const MAX_RATING = 5;

/** Large client quote card with a purple glow, star rating and author. */
export default function TestimonialSection({ testimonial }: TestimonialSectionProps) {
    const { quote, rating, author, role, initial } = testimonial;

    return (
        <section aria-label="Client testimonial" className="pt-[120px]">
            <div className="page-shell">
                <figure className="rounded-[50px] border border-white/30 bg-[linear-gradient(180deg,#2b0f42_0%,#3c1463_100%)] p-6 shadow-[0_0_60px_rgba(168,85,247,0.25)] sm:p-8">
                    <IconBadge name="quote" iconSize={28} className="size-16 rounded-[18px]" />

                    <blockquote className="mt-2 text-xl italic leading-[1.65] text-white/95 sm:text-[30px]">
                        <p>&quot;{quote}&quot;</p>
                    </blockquote>

                    {/* Filled stars; the label gives screen readers the rating as text. */}
                    <div
                        role="img"
                        aria-label={`${rating} out of ${MAX_RATING} stars`}
                        className="mt-2 flex gap-2.5 text-[#fbbf24]"
                    >
                        {Array.from({ length: MAX_RATING }, (_, index) => (
                            <Icon
                                key={index}
                                name="star"
                                size={22}
                                fill={index < rating ? "currentColor" : "none"}
                            />
                        ))}
                    </div>

                    <figcaption className="mt-3 flex items-center gap-4">
                        <span
                            aria-hidden="true"
                            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#b72be4_0%,#e5208f_100%)] text-2xl font-semibold text-white"
                        >
                            {initial}
                        </span>
                        <div>
                            <p className="text-xl font-semibold leading-6 text-white">{author}</p>
                            <p className="text-base leading-5 text-white/60">{role}</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}