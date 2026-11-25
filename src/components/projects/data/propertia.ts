import type { ProjectDetails } from "../types";

/**
 * Content for the Propertia project details page.
 * Image files are expected in /public/projects/propertia/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const propertia: ProjectDetails = {
    slug: "propertia",

    seo: {
        title: "Propertia - Real Estate Discovery Platform",
        description:
            "A modern real estate discovery platform that simplifies property searching with structured listings, high-quality galleries, and intuitive filters.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "PROPERTIA",
        subtitle: "Find, Explore, and Own Your Ideal Property",
        description:
            "Propertia is a modern real estate discovery platform designed to simplify property searching and browsing. The platform focuses on structured listing presentation, high quality property visualization, and intuitive filtering systems to help users explore real estate opportunities with confidence and clarity.",
        image: {
            src: "/projects/propertia/hero.svg",
            alt: "Propertia real estate platform shown on desktop with property listings",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Real estate search experiences are often fragmented and complex. Users struggle with information overload, inconsistent listing layouts, and inefficient filtering systems, making property comparison difficult and time-consuming.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Propertia was designed to provide a clean and structured property browsing experience with intuitive search filters, high-quality property galleries, location visualization, and simplified listing information to improve user decision-making.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/propertia/responsive-devices.svg",
            alt: "Propertia displayed across desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#703BF7", name: "Royal Purple" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "PROPERTIA",
            family: "Inter",
            description:
                "Inter was chosen for its modern and approachable appearance, ensuring clarity for professionalism.",
        },
        features: [
            "Property Comparison Support",
            "Inquiry Contact System",
            "Favorite Property Bookmarking",
            "Location Map Integration",
            "High-Quality Image Gallery System",
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
                    "Fast and Easy to Use",
                    "Smooth Onboarding",
                    "High Resolution for Retina Displays",
                ],
                image: {
                    src: "/projects/propertia/platform-mobile.svg",
                    alt: "Propertia property discovery screen on a smartphone",
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
                    src: "/projects/propertia/platform-desktop.svg",
                    alt: "Propertia landing page on a desktop monitor",
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
                    "Smooth Onboarding Compatible",
                ],
                image: {
                    src: "/projects/propertia/platform-tablet.svg",
                    alt: "Propertia property listings on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing a User-Centered Property Discovery Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Discovery & Research",
                // The OCR drops this card's one-line description; wording follows the visible research notes.
                description: "Understanding property search user behavior and market challenges.",
                tasks: [
                    "Studied property search user behavior",
                    "Analyzed competitor real estate platforms",
                    "Defined buyer and seller personas",
                    "Identified major usability challenges",
                ],
            },
            {
                icon: "target",
                title: "Concept Development",
                description: "Structuring Property Information for Easy Decision Making",
                tasks: [
                    "Designed search journey flow",
                    "Planned filtering logic",
                    "Structured property listing hierarchy",
                    "Optimized CTA placement strategy",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Creating a Premium Property Browsing Experience",
                tasks: [
                    "Designed property card layouts",
                    "Developed interactive image galleries",
                    "Built responsive listing interfaces",
                    "Conducted usability testing",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description: "Ensuring Fast, Reliable, and Smooth Property Exploration",
                tasks: [
                    "Optimized media loading performance",
                    "Enhanced navigation speed",
                    "Improved mobile responsiveness",
                    "Monitored user interaction behavior",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "PROPERTIA",
        subtitle: "Transforming Property Search into a Transparent Digital Experience",
        milestones: [
            {
                title: "Understanding Market Challenges",
                year: "2022",
                description:
                    "The property search process was often scattered across multiple listing channels. Users struggled to trust property information and faced difficulty comparing locations, prices, and features. Our goal was to create a platform where property discovery feels simple, transparent, and reliable.",
                highlights: [
                    "Complex search interfaces",
                    "Lack of listing credibility signals",
                    "Poor property visualization",
                    "Difficult comparison experience",
                ],
            },
            {
                title: "Planning the User Experience Structure",
                year: "2022",
                // The beginning of this paragraph is cut off in the OCR source.
                description: "Location value, image quality, and price clarity were prioritized.",
                highlights: [
                    "Designed listing taxonomy",
                    "Structured property detail flow",
                    "Implemented filter-first search system",
                    "Focused on conversion-friendly layout",
                ],
            },
            {
                title: "Designing the Property Journey",
                year: "2022",
                description:
                    "The interface was designed to build buyer confidence through large property visuals, clear pricing sections, and contextual location information. The goal was to reduce uncertainty during property exploration.",
                highlights: [
                    "Premium property showcase design",
                    "Map-based location visualization",
                    "Simplified inquiry interaction",
                    "Mobile-first responsiveness",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Built modular listing components, integrated a property database system, implemented the inquiry workflow, and optimized page loading speed.",
                highlights: [
                    "Built modular listing components",
                    "Integrated property database system",
                    "Implemented inquiry workflow",
                    "Optimized page loading speed",
                ],
            },
            {
                title: "Launch and Continuous Growth",
                year: "2022",
                description:
                    "After launch, user analytics and feedback were monitored to refine search behavior and interaction design. Future upgrades may include AI-assisted property recommendations and virtual tour capabilities.",
                highlights: [
                    "Collected user behavior data",
                    "Improved search UX",
                    "Released production version",
                    "Planned intelligent recommendation system",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "PROPERTIA",
        subtitle: "A Cross-Functional Team Delivering Real Estate Digital Experience",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: { src: "/projects/propertia/team-prashanta.svg", alt: "Portrait of Prashanta Dey" },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: { src: "/projects/propertia/team-khaled.svg", alt: "Portrait of Khaled Ammar" },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: { src: "/projects/propertia/team-jannatul.svg", alt: "Portrait of Jannatul Nayeem" },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: { src: "/projects/propertia/team-saqib.svg", alt: "Portrait of Saqib" },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Close coordination between research, design, and development teams ensured user-friendly navigation.",
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
