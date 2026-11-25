"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import type { ContactContent } from "../types";
import Icon from "../ui/Icons";
import SectionBadge from "../ui/SectionBadge";

interface ContactSectionProps {
    contact: ContactContent;
}

/** Shared look for text inputs, the dropdown and the textarea. */
const FIELD_CLASSES =
    "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#3aa84a]/60 focus:ring-2 focus:ring-[#3aa84a]/25";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

/**
 * TODO: connect to a real backend (e.g. POST to /api/contact or an email service).
 * Right now it only simulates a short delay so the UI states can be tested.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function sendContactMessage(_values: Record<string, FormDataEntryValue>): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 600));
}

/** Label + control pair. `htmlFor` ties the label to the input for accessibility. */
function Field({
    label,
    htmlFor,
    required = false,
    children,
}: {
    label: string;
    htmlFor: string;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <div>
            <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-medium text-white/65">
                {label}
                {required && " *"}
            </label>
            {children}
        </div>
    );
}

/**
 * "Contact Nex Genix" - intro + contact details on the left, enquiry form on the right.
 * Owns the big bottom padding that leaves room for the footer wave overlapping upward.
 */
export default function ContactSection({ contact }: ContactSectionProps) {
    const [status, setStatus] = useState<SubmitStatus>("idle");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Keep a reference now: React clears event.currentTarget after the first `await`.
        const form = event.currentTarget;
        const values = Object.fromEntries(new FormData(form));

        setStatus("sending");
        try {
            await sendContactMessage(values);
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    return (
        <section aria-labelledby="contact-title" className="pb-[194px] pt-[140px]">
            <div className="page-shell">
                <header className="text-center">
                    <SectionBadge label={contact.badge} tone="neutral" />
                    <h2
                        id="contact-title"
                        className="mt-4 bg-[linear-gradient(180deg,#52bb62_0%,#2f9540_55%,#1f6f2e_100%)] bg-clip-text text-4xl font-bold leading-[1.2] text-transparent sm:text-5xl"
                    >
                        {contact.title}
                    </h2>
                    <p className="mx-auto mt-6 max-w-[460px] text-base leading-7 text-white/65">
                        {contact.subtitle}
                    </p>
                </header>

                <div className="mx-auto mt-14 grid max-w-[960px] gap-12 rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#2a2f2e_0%,#1e2536_55%,#1e3562_100%)] p-8 sm:p-12 lg:grid-cols-2">
                    {/* ---------- Left column: intro, contact details, services ---------- */}
                    <div>
                        <h3 className="text-2xl font-bold leading-8 text-[#c9e8c9]">{contact.intro.title}</h3>
                        <p className="mt-4 text-sm leading-[22px] text-white/55">{contact.intro.description}</p>

                        <ul className="mt-8 flex flex-col gap-5">
                            {contact.details.map((detail) => (
                                <li key={detail.label} className="flex items-center gap-4">
                                    <span className="flex size-[34px] shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-white/80">
                                        <Icon name={detail.icon} size={16} />
                                    </span>
                                    <div>
                                        <p className="text-xs leading-4 text-white/45">{detail.label}</p>
                                        <p className="text-sm leading-5 text-white">{detail.value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 border-t border-white/10 pt-6">
                            <h4 className="text-sm font-semibold text-white/80">Our Services</h4>
                            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                                {contact.services.map((service) => (
                                    <li key={service} className="flex items-center gap-2 text-xs text-white/50">
                                        <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-white/80" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ---------- Right column: enquiry form ---------- */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <Field label="Your Name" htmlFor="contact-name" required>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                required
                                placeholder="John Doe"
                                className={`${FIELD_CLASSES} h-12`}
                            />
                        </Field>

                        <Field label="Email Address" htmlFor="contact-email" required>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                required
                                placeholder="john@example.com"
                                className={`${FIELD_CLASSES} h-12`}
                            />
                        </Field>

                        <Field label="Phone Number" htmlFor="contact-phone">
                            <input
                                id="contact-phone"
                                name="phone"
                                type="tel"
                                placeholder="+880 1234-567890"
                                className={`${FIELD_CLASSES} h-12`}
                            />
                        </Field>

                        <Field label="Project Type" htmlFor="contact-type" required>
                            {/* `appearance-none` hides the native arrow so our own chevron icon is used. */}
                            <div className="relative">
                                <select
                                    id="contact-type"
                                    name="projectType"
                                    required
                                    defaultValue=""
                                    className={`${FIELD_CLASSES} h-12 appearance-none pr-11`}
                                >
                                    <option value="" disabled className="bg-[#1e2536]">
                                        Select a project type
                                    </option>
                                    {contact.projectTypes.map((type) => (
                                        <option key={type} value={type} className="bg-[#1e2536]">
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                <Icon
                                    name="chevron-down"
                                    size={18}
                                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80"
                                />
                            </div>
                        </Field>

                        <Field label="Project Details" htmlFor="contact-details" required>
                            <textarea
                                id="contact-details"
                                name="details"
                                required
                                rows={4}
                                placeholder="Tell us about your project requirements..."
                                className={`${FIELD_CLASSES} resize-none py-3`}
                            />
                        </Field>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="flex h-14 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(180deg,#2f9a45_0%,#237a35_100%)] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(47,154,69,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                            <Icon name="send" size={16} />
                        </button>

                        {/* Screen-reader friendly feedback after submitting. */}
                        <p role="status" className="min-h-5 text-center text-sm text-white/70">
                            {status === "sent" && "Thanks! Your message has been sent."}
                            {status === "error" && "Something went wrong. Please try again."}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}