import type { ProjectDetails } from "../types";

/**
 * Content for the SpeakUp project details page.
 * Image files are expected in /public/projects/speakup/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const speakup: ProjectDetails = {
    slug: "speakup",

    seo: {
        title: "SpeakUp - Voice Messaging App",
        description:
            "A mobile messaging app for text and multimedia messages, voice notes, and real-time conversations.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "SpeakUp",
        subtitle: "Express Yourself Anytime. Anywhere. On Your Terms.",
        // OCR skipped the beginning of the first hero sentence.
        description:
            "SpeakUp lets users send messages, record and share voice notes, and join real-time conversations directly from their smartphones. It focuses on simple navigation, clear conversation layouts, and smooth interaction.",
        image: {
            src: "/projects/speakup/hero.svg",
            alt: "SpeakUp messaging and voice screens shown on smartphones",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Users struggled with confusing interfaces, slow voice delivery, lack of real-time interaction, and limited conversation organization, reducing overall engagement and satisfaction.",
            "Limited notifications made communication slow and frustrating.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "SpeakUp simplifies the communication journey through intuitive navigation, clear conversation layouts, real-time voice messaging, and optimized notification and interaction flows.",
        ],
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        // Hex values and labels are paired as shown in the design.
        colors: [
            { hex: "#374673", name: "Fiery Orange" },
            { hex: "#C1AFF2", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "SpeakUp",
            family: "Inter",
            description:
                "Inter was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Real-Time Voice Messaging",
            "Text & Multimedia Messaging",
            "Clear Conversation Threads",
            "Secure Communication",
            "Smart Notifications",
            "Multi-Platform Support",
        ],
    },

    mobileShowcase: {
        title: "Mobile APP Design",
        image: {
            src: "/projects/speakup/platform-mobile.svg",
            alt: "SpeakUp voice creation screen on a smartphone",
        },
        width: 492,
        height: 965,
    },

    process: {
        title: "Our Work Process",
        // The design shows no process subtitle; this line is from the first step.
        subtitle: "Optimized for seamless communication",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & Market Analysis",
                description: "Understanding User Communication Behavior",
                tasks: [
                    "Studied messaging and voice app usage patterns",
                    "Identified friction points in conversations and notifications",
                    "Analyzed competitor flows",
                    "Defined user personas",
                ],
            },
            {
                icon: "target",
                title: "User Flow & Architecture",
                description: "Structuring the Messaging Journey",
                tasks: [
                    "Designed search-to-message flow",
                    "Planned conversation threading and filtering",
                    "Structured real-time voice delivery",
                    "Optimized notifications and settings",
                ],
            },
            {
                icon: "palette",
                title: "UI/UX Design",
                description: "Creating a Bold and Intuitive Mobile Interface",
                tasks: [
                    "Designed conversation cards and voice message components",
                    "Created user-friendly recording screens",
                    "Built interactive messaging system",
                    "Ensured mobile-first and accessibility-focused design",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Scalable Delivery Platform",
                tasks: [
                    "Integrated backend messaging and voice APIs",
                    "Optimized real-time performance",
                    "Implemented secure and encrypted communication",
                    "Ensured smooth interaction across devices",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "SPEAKUP",
        subtitle: "A dedicated team bringing ideas to life, one conversation at a time",
        milestones: [
            {
                title: "Identifying User Frustrations",
                year: "2022",
                description:
                    "Users struggled with confusing interfaces, slow voice delivery, lack of real-time interaction, and limited conversation organization, reducing overall engagement and satisfaction.",
                highlights: [
                    "Slow voice recording and delivery",
                    "Limited conversation organization and search",
                    "Lack of real-time interaction and updates",
                    "Reduced user engagement and satisfaction",
                ],
            },
            {
                title: "Designing the Core Experience",
                year: "2022",
                description:
                    "We simplified the communication journey with clear conversation layouts, fast and reliable voice delivery, easy-to-access messaging tools, and real-time notifications to ensure smooth interaction.",
                highlights: [
                    "Fast and reliable voice delivery system",
                    "Easy-to-access messaging tools and features",
                    "Planned real-time updates",
                    "Focused on conversion UX",
                ],
            },
            {
                title: "Crafting the Interface",
                year: "2022",
                // Only the closing fragment of this card was legible in the design.
                description: "hierarchy ensured effortless navigation.",
                highlights: [
                    "Transparent design to reduce confusion",
                    "Added visual hierarchy",
                    "Strong visual hierarchy",
                    "Ensured responsive layout",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "A scalable system supported growing user demand, integrated real-time APIs for accurate messaging, secured user communication, and optimized performance for smooth interactions.",
                highlights: [
                    "Integrated real-time tracking API",
                    "Scalable system to support growing user demand",
                    "Encrypted communication",
                    "Optimized app speed",
                ],
            },
            {
                title: "Launch & Future Growth",
                year: "2022",
                description:
                    "The app launched with a user-first approach, continuously improved through feedback, enhanced with intelligent conversation suggestions and planned for future AI-powered messaging features and voice transcription tools.",
                highlights: [
                    "AI-powered messaging and voice transcription",
                    "Planned loyalty features",
                    "Released mobile application",
                    "Launched with a user-first approach",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "SPEAKUP",
        // The design reuses food-delivery copy here; the tagline below is the
        // project-specific line from the same screenshot.
        subtitle: "A dedicated team bringing ideas to life, one conversation at a time",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: { src: "/projects/speakup/team-prashanta.svg", alt: "Portrait of Prashanta Dey" },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: { src: "/projects/speakup/team-khaled.svg", alt: "Portrait of Khaled Ammar" },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: { src: "/projects/speakup/team-jannatul.svg", alt: "Portrait of Jannatul Nayeem" },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: { src: "/projects/speakup/team-saqib.svg", alt: "Portrait of Saqib" },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        // The last line is truncated; the ending is bridged from the same copy in the other designs.
        description:
            "Our team worked closely with developers and product strategists to design a smooth food ordering experience. Continuous testing helped refine navigation and checkout flow. The goal was to create a fast and reliable delivery platform.",
        stats: [
            // The first value was not legible; "6" matches the other project designs.
            { icon: "users", value: "6", label: "Team Members" },
            { icon: "briefcase", value: "6+", label: "Months of Work" },
            { icon: "search", value: "200+", label: "User Interviews" },
            { icon: "palette", value: "50+", label: "Design Iterations" },
        ],
    },

    impact: {
        title: "Project Impact",
        subtitle: "Making legal services accessible to millions",
        stats: [
            { value: "95%", label: "User Satisfaction", tone: "green" },
            { value: "10K+", label: "Active Users", tone: "blue" },
            { value: "50%", label: "Faster Bookings", tone: "pink" },
        ],
    },

    testimonial: {
        quote:
            "The Father's Day campaign exceeded all our expectations. The design perfectly captured the emotional essence we wanted to convey while maintaining our luxury brand identity. The engagement we received was phenomenal, and our clients truly resonated with the message.",
        rating: 5,
        author: "Sarah Johnson",
        role: "Marketing Director, Lumineux Hair Impressions",
        initial: "L",
    },

    takeaways: {
        title: "Key Takeaways",
        subtitle: "Lessons learned and success factors from this campaign",
        items: [
            {
                icon: "heart",
                title: "Emotional Connection",
                // The first description is truncated; the ending matches the other designs.
                description:
                    "Successfully created a design that resonated emotionally with the target audience, resulting in higher engagement and shares.",
            },
            {
                icon: "star",
                title: "Brand Consistency",
                description:
                    "Maintained Lumineux's premium brand identity while crafting a warm, relatable campaign message.",
            },
            {
                icon: "trending-up",
                title: "Multi-Platform Success",
                description:
                    "Design performed exceptionally well across all social media platforms with consistent engagement rates.",
            },
            {
                icon: "target",
                title: "Strategic Timing",
                description:
                    "Campaign launched at optimal time, maximizing visibility during the Father's Day celebration period.",
            },
        ],
    },
};
