import type { ProjectDetails } from "../types";

/**
 * Content for the TripNest project details page.
 * Image files are expected in /public/projects/tripnest/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const tripnest: ProjectDetails = {
    slug: "tripnest",

    seo: {
        title: "TripNest - Hotel Booking Mobile App",
        description:
            "A mobile app for discovering hotels, comparing prices, booking rooms, and managing reservations.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "TripNest",
        subtitle: "Stay Anywhere. Anytime. On Your Terms.",
        // OCR skipped the beginning of the first hero sentence.
        description:
            "TripNest is designed for fast and reliable accommodation booking experiences. Users can explore hotels, compare prices, book rooms, and manage reservations directly from their smartphones.",
        image: {
            src: "/projects/tripnest/hero.svg",
            alt: "TripNest hotel booking app screens shown on a smartphone",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Users often face difficulties such as slow booking systems, unclear hotel details, and complicated reservation processes.",
            "Lack of real-time availability creates uncertainty, and limited filtering makes finding the right hotel difficult.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "TripNest makes hotel booking easy with smart hotel discovery, real-time room availability, and transparent pricing.",
            "It also ensures a fast and secure checkout, creating a smooth and hassle-free experience for users.",
        ],
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        // Hex values and labels are paired as shown in the design.
        colors: [
            { hex: "#EBC950", name: "Fiery Orange" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "TRIPNEST",
            family: "Inter",
            description:
                "Inter was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Hotel Discovery System",
            "Location-Based Search",
            "Real-Time Room Availability",
            "Secure Payment Gateway",
            "Booking History & Management",
            "Smart Filters & Sorting",
        ],
    },

    mobileShowcase: {
        title: "Mobile APP Design",
        image: {
            src: "/projects/tripnest/platform-mobile.svg",
            alt: "TripNest hotel discovery screen on a smartphone",
        },
        width: 499,
        height: 1125,
    },

    process: {
        title: "Our Work Process",
        // The design shows no process subtitle; this line is from the first step.
        subtitle: "Optimized for a seamless booking experience",
        steps: [
            {
                icon: "lightbulb",
                // The step title is truncated to "Res" in the design.
                title: "Research",
                description: "Understanding User Booking Behavior",
                tasks: [
                    "Studied hotel booking patterns",
                    "Identified booking pain points",
                    "Analyzed competitor platforms",
                    "Defined user personas",
                ],
            },
            {
                icon: "target",
                title: "User Flow & Architecture",
                description: "Structuring the Booking Journey",
                tasks: [
                    "Designed search-to-book flow",
                    "Structured booking confirmation process",
                    "Planned hotel filtering system",
                    "Optimized payment flow",
                ],
            },
            {
                icon: "palette",
                title: "UI/UX Design",
                description: "Creating an Intuitive Travel Experience",
                tasks: [
                    "Designed hotel listing cards",
                    "Created reservation screens",
                    "Built interactive booking system",
                    "Ensured mobile-first design",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Scalable Booking Platform",
                tasks: [
                    "Developed booking system",
                    "Integrated hotel database",
                    "Implemented payment gateway",
                    "Optimized performance for mobile",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "TRIPNEST",
        subtitle: "Making Hotel Booking System Faster and More Convenient",
        milestones: [
            {
                title: "Identifying User Frustrations",
                year: "2022",
                description:
                    "Users often struggle with confusing hotel listings and navigation. Slow booking processes reduce overall satisfaction. Lack of real-time availability creates uncertainty. Limited filtering makes finding the right hotel difficult.",
                highlights: [
                    "Slow booking process",
                    "Confusing hotel listings",
                    "Lack of real-time availability",
                    "Limited filtering options",
                ],
            },
            {
                title: "Designing the Core Experience",
                year: "2022",
                // Only the closing fragment of this card was legible in the design.
                description:
                    "process, and integrating real-time updates to build transparency and trust.",
                highlights: [
                    "Fast checkout process",
                    "Simplified booking steps",
                    "Clear hotel information display",
                    "Real-time booking updates",
                ],
            },
            {
                title: "Crafting the Interface",
                year: "2022",
                // The description line was not legible; this bridges the visible highlights.
                description:
                    "A clean and modern layout with strong visual hierarchy, high-quality hotel visuals, and clear pricing.",
                highlights: [
                    "Strong visual hierarchy",
                    "Clean and modern layout",
                    "High-quality hotel visuals",
                    "Clear pricing structure",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "A scalable system was built to support growth by integrating real-time APIs for accurate booking data, ensuring secure payment systems, and optimizing performance for smooth and reliable user experience.",
                highlights: [
                    "Built booking management system",
                    "Integrated real-time APIs",
                    "Ensured secure transactions",
                    "Improved app speed",
                ],
            },
            {
                title: "Launch & Future Growth",
                year: "2022",
                description:
                    "The app was launched with a user-first approach, continuously improved through feedback and data-driven insights, enhancing recommendation systems, and planning future AI-powered hotel suggestions.",
                highlights: [
                    "Released mobile application",
                    "Collected user feedback",
                    "Improved recommendation logic",
                    "Planning AI-based hotel suggestions",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        // The design shows "FOODY" here; the project name is used instead.
        highlight: "TRIPNEST",
        // The design reuses copy from another project here; the tagline below
        // is the project-specific line from the same screenshot.
        subtitle: "A dedicated team bringing ideas to life, one conversation at a time",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: { src: "/projects/tripnest/team-prashanta.svg", alt: "Portrait of Prashanta Dey" },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: { src: "/projects/tripnest/team-khaled.svg", alt: "Portrait of Khaled Ammar" },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: { src: "/projects/tripnest/team-jannatul.svg", alt: "Portrait of Jannatul Nayeem" },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: { src: "/projects/tripnest/team-saqib.svg", alt: "Portrait of Saqib" },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        // The design reuses food-delivery copy in this section.
        description:
            "Our team worked closely with developers and product strategists to design a smooth food ordering experience. Continuous testing helped refine navigation and checkout flow. The goal was to create a fast and reliable delivery platform. This ensured a scalable and user-friendly mobile application.",
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
