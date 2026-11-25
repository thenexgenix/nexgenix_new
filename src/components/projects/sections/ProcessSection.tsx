import type { ProcessStep } from "../types";
import Icon from "../ui/Icons";
import IconBadge from "../ui/IconBadge";
import SectionHeading from "../ui/SectionHeading";

interface ProcessSectionProps {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
}

/** "Our Work Process": four numbered step cards joined by a thin vertical line. */
export default function ProcessSection({ title, subtitle, steps }: ProcessSectionProps) {
    return (
        <section aria-labelledby="process-title" className="pt-[180px]">
            <div className="page-shell">
                <SectionHeading id="process-title" title={title} subtitle={subtitle} />

                <ol className="mt-14 flex flex-col gap-8">
                    {steps.map((step, index) => {
                        const isLast = index === steps.length - 1;

                        return (
                            <li key={step.title} className="relative">
                                {/* Connector: runs from under the icon, through the card and the 32px gap. */}
                                {!isLast && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute -bottom-8 left-14 top-[88px] w-px bg-[#b45fd6]/40 sm:left-[72px] sm:top-[104px]"
                                    />
                                )}

                                <div className="flex gap-4 rounded-[30px] border border-white/25 bg-white/[0.06] p-6 sm:gap-8 sm:p-10">
                                    {/* Icon with the orange step-number badge */}
                                    <IconBadge
                                        name={step.icon}
                                        iconSize={28}
                                        className="size-16 rounded-[18px]"
                                    >
                                        <span className="absolute -bottom-1.5 -right-1.5 flex size-[30px] items-center justify-center rounded-full bg-[#f59e0b] text-sm font-bold text-white">
                                            {index + 1}
                                        </span>
                                    </IconBadge>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-2xl font-semibold leading-8 text-white">{step.title}</h3>
                                        <p className="mt-3 text-base leading-6 text-white/75">{step.description}</p>

                                        <ul className="mt-3.5 grid gap-3 sm:grid-cols-2">
                                            {step.tasks.map((task) => (
                                                <li
                                                    key={task}
                                                    className="flex min-h-[38px] items-center gap-2.5 rounded-[14px] border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70"
                                                >
                                                    <Icon
                                                        name="check-circle"
                                                        size={16}
                                                        className="shrink-0 text-[#c084fc]"
                                                    />
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}