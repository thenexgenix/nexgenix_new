import type { ProjectDetails } from "../types";

/**
 * Content for the NEX MAIL project details page.
 * Image files are expected in /public/projects/nex mail/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const nexMail: ProjectDetails = {
    slug: "nex-mail",

    seo: {
        title: "NEX MAIL - Fast, Secure, and Reliable Email Communication",
        description:
            "A modern email service platform with secure and efficient delivery, spam protection, and a user-friendly interface.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "NEX MAIL",
        subtitle: "Fast, Secure, and Reliable Email Communication",
        description:
            "NEX MAIL is a modern email service platform designed to provide secure and efficient delivery, spam protection, and user-friendly interface design to simplify email usage.",
        image: {
            src: "/projects/nex mail/hero.svg",
            alt: "NEX MAIL landing page and NexMail AI interface shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Traditional email platforms often suffer from cluttered interfaces, spam overload, and complex navigation systems. Users need a cleaner, faster, and more secure communication environment.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "NEX MAIL was designed to provide a streamlined email experience with improved inbox organization and strong security mechanisms.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/nex mail/responsive-devices.svg",
            alt: "NEX MAIL shown on desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#290440", name: "Dark Violet" },
            { hex: "#F1F2ED", name: "Soft Ivory" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "NEX MAIL",
            family: "Inter",
            description:
                "Inter was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Secure Email Communication",
            "Spam Detection System",
            "Organized Inbox Management",
            "Message Search Functionality",
            "Attachment Support",
            "Notification System",
        ],
    },

    platforms: {
        title: "Multi-Platform Presentation",
        subtitle: "Optimized for seamless viewing across all devices",
        items: [
            {
                variant: "mobile",
                icon: "smartphone",
                title: "Mobile Experience",
                description:
                    "The design is perfectly optimized for mobile-first social platforms. The vertical composition ensures maximum impact on mobile feeds, with clear readability and emotional resonance.",
                bullets: [
                    "Fast and Easy to use",
                    "Smooth Onboarding",
                    "High Resolution for Retina Displays",
                ],
                image: {
                    src: "/projects/nex mail/platform-mobile.svg",
                    alt: "NEX MAIL interface on a smartphone",
                },
            },
            {
                variant: "desktop",
                icon: "monitor",
                title: "Desktop Showcase",
                description:
                    "When viewed on desktop platforms like LinkedIn and Facebook, the design maintains its impact with crisp details and elegant proportions. Perfect for professional sharing and brand presentation.",
                bullets: [
                    "Smooth Onboarding",
                    "Website Banner Compatible",
                    "High Resolution for Retina Displays",
                ],
                image: {
                    src: "/projects/nex mail/platform-desktop.svg",
                    alt: "NEX MAIL interface on a desktop monitor",
                },
            },
            {
                variant: "tablet",
                icon: "tablet",
                title: "Tablet Adaptation",
                description:
                    "The design scales beautifully on tablet devices, perfect for smooth onboarding. The composition remains impactful at any size.",
                bullets: [
                    "Tablet Optimized",
                    "iPad & Android Tablet Ready",
                    "Smooth Onboarding & Compatible",
                ],
                image: {
                    src: "/projects/nex mail/platform-tablet.svg",
                    alt: "NEX MAIL interface on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        // The design shows no process subtitle; this line is taken from the first step.
        subtitle: "Understanding Email Communication Challenges",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & System Study",
                description: "Understanding Email Communication Challenges",
                tasks: [
                    "Studied user email usage behavior",
                    "Identified spam filtering challenges",
                    "Defined user workflow requirements",
                ],
            },
            {
                icon: "target",
                title: "Information Architecture",
                description: "Structuring Email Communication Flow",
                tasks: [
                    "Designed inbox organization system",
                    "Planned message categorization logic",
                    "Structured compose-send-receive workflow",
                    "Defined notification hierarchy",
                ],
            },
            {
                icon: "palette",
                title: "Interface Design",
                description: "Creating a Clean and Professional Email Interface",
                tasks: [
                    "Designed inbox dashboard layout",
                    "Built message preview panels",
                    "Added quick compose interface",
                    "Ensured responsive design",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Reliable Email Platform",
                tasks: [
                    "Developed message management system",
                    "Integrated spam detection logic",
                    "Implemented secure data transmission",
                    "Optimized platform performance",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "NEX MAIL",
        // The design shows no journey subtitle; this line comes from the hero.
        subtitle: "Fast, Secure, and Reliable Email Communication",
        milestones: [
            {
                title: "Identifying Communication Problems",
                year: "2022",
                // Only the closing sentence of this card was legible in the design.
                description: "Provide a cleaner and more secure communication environment.",
                highlights: [
                    "Email clutter management issues",
                    "Spam security concerns",
                    "Poor message organization",
                    "Complex inbox navigation",
                ],
            },
            {
                title: "Designing the Communication Framework",
                year: "2022",
                description:
                    "The platform was structured to prioritize important messages while reducing visual and operational noise. Smart filtering and organized inbox sections were planned to improve user productivity.",
                highlights: [
                    "Planned notification workflow",
                    "Focused on security UX",
                    "Designed inbox classification system",
                    "Structured message priority logic",
                ],
            },
            {
                title: "Crafting the Email Experience",
                year: "2022",
                description:
                    "The interface was designed to feel professional and minimalistic. Message lists, preview sections, and compose panels were arranged to help users communicate efficiently.",
                highlights: [
                    "Built clean email dashboard layout",
                    "Added spam indicator logic",
                    "Designed message interaction flow",
                    "Ensured accessibility design",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Developers built a scalable email infrastructure supporting message storage, secure transmission, and spam filtering algorithms. Performance optimization ensured fast inbox loading.",
                highlights: [
                    "Developed email database system",
                    "Integrated security protocols",
                    "Implemented message workflow engine",
                    "Optimized system speed",
                ],
            },
            {
                title: "Launch & Future Vision",
                year: "2022",
                description:
                    "After launch, communication analytics were monitored to improve filtering accuracy and user experience. Future updates may include AI communication features.",
                highlights: [
                    "Released email platform",
                    "Collected user behavior insights",
                    "Improved inbox filtering",
                    "Planned AI communication features",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "NEX MAIL",
        subtitle: "A Team Dedicated to Secure Communication Technology",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: { src: "/projects/nex mail/team-prashanta.svg", alt: "Portrait of Prashanta Dey" },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: { src: "/projects/nex mail/team-khaled.svg", alt: "Portrait of Khaled Ammar" },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: { src: "/projects/nex mail/team-jannatul.svg", alt: "Portrait of Jannatul Nayeem" },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: { src: "/projects/nex mail/team-saqib.svg", alt: "Portrait of Saqib" },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Our team worked closely with security engineers and interface designers to build a reliable email platform. Continuous feedback improved message handling and inbox usability. The goal was to create a fast, secure, and simple communication system. This ensured a scalable and user-friendly email experience.",
        stats: [
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
                // Only the second card's copy was legible; this first line matches the other designs.
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
