import type { ContactContent } from "../types";

/**
 * Nex Genix contact details. These are the same on every project page,
 * so they live here instead of in each project's data file.
 */
export const NEXGENIX_CONTACT: ContactContent = {
    badge: "Let's Work Together",
    title: "Contact Nex Genix",
    subtitle:
        "Ready to bring your vision to life? Let's discuss how we can create innovative solutions tailored to your business needs.",
    intro: {
        title: "Get in Touch",
        description:
            "Have a project in mind? Whether it's a web platform, mobile app, or custom software solution, we're here to help transform your ideas into reality.",
    },
    details: [
        { icon: "mail", label: "Email Us", value: "contact@nexgenix.com" },
        { icon: "phone", label: "Call Us", value: "+880 1234-567890" },
        { icon: "map-pin", label: "Visit Us", value: "Chittagong, Bangladesh" },
    ],
    services: [
        "Web Development",
        "Mobile Apps",
        "UI/UX Design",
        "Cloud Solutions",
        "Consulting",
        "Maintenance",
    ],
    projectTypes: [
        "Web Development",
        "Mobile App",
        "UI/UX Design",
        "Cloud Solutions",
        "Consulting",
        "Maintenance",
    ],
};