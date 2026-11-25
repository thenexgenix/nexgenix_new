import type { Takeaway } from "../types";
import IconBadge from "../ui/IconBadge";
import SectionHeading from "../ui/SectionHeading";

interface TakeawaysSectionProps {
    title: string;
    subtitle: string;
    items: Takeaway[];
}

/**
 * "Key Takeaways" - 2x2 grid of cards.
 * The large bottom padding leaves room for the footer's wave, which overlaps upward.
 */
export default function TakeawaysSection({ title, subtitle, items }: TakeawaysSectionProps) {
    return (
        <section aria-labelledby="takeaways-title" className="pt-[116px]">
            <div className="page-shell">
                <SectionHeading id="takeaways-title" title={title} subtitle={subtitle} />

                <ul className="mt-14 grid gap-8 md:grid-cols-2">
                    {items.map((item) => (
                        <li
                            key={item.title}
                            className="rounded-[28px] border border-white/15 bg-white/[0.06] p-8"
                        >
                            <IconBadge name={item.icon} iconSize={24} className="size-14 rounded-[14px]" />
                            <h3 className="mt-5 text-2xl font-semibold leading-8 text-white">{item.title}</h3>
                            <p className="mt-5 text-base leading-[26px] text-white/65">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}