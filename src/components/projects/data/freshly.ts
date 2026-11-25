import type { ProjectDetails } from "../types";

/**
 * Content for the Freshly project details page.
 * Image files are expected in /public/projects/freshly/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const freshly: ProjectDetails = {
    slug: "freshly",

    seo: {
        title: "Freshly - Fresh Groceries and Faster Delivery",
        description:
            "A modern e-commerce grocery platform with real-time inventory, smart recommendations, and fast delivery.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "Freshly",
        subtitle: "Fresh Groceries. Faster Delivery. Better Living.",
        description:
            "Freshly is a modern e-commerce grocery platform designed to deliver farm-fresh products directly to your doorstep. With a seamless shopping experience, smart recommendations, and fast delivery, Freshly makes everyday grocery shopping easier, healthier, and more convenient for busy lifestyles.",
        image: {
            src: "/projects/freshly/hero.svg",
            alt: "Freshly grocery shopping and checkout screens shown on mobile",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            // The middle of this sentence was not legible in the OCR.
            "Traditional grocery shopping is time-consuming and often lacks … struggle with delayed deliveries, limited product availability, and poor user experience in existing apps.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Freshly provides a streamlined e-commerce experience with real-time inventory, fresh product sourcing, smart search, and fast delivery options—ensuring convenience, quality, and reliability for everyday shopping.",
        ],
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Fresh and Clean Visual Identity Inspired by Nature and Simplicity",
        // Swatch names are transcribed as they are labelled in the design.
        colors: [
            { hex: "#1B4B3D", name: "Fiery Orange" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#2EC157", name: "Black" },
        ],
        typography: {
            sample: "FRESHLY",
            family: "Inter",
            description:
                "Inter was chosen for its excellent readability across mobile and web platforms, ensuring a clean and modern shopping experience with clear product information and navigation.",
        },
        features: [
            "Smart Grocery Search & Filters",
            "Real-Time Product Availability",
            "Fast & Scheduled Delivery",
            "Personalized Recommendations",
            "Secure Checkout & Multiple Payment Options",
        ],
    },

    mobileShowcase: {
        title: "Mobile APP Design",
        image: {
            src: "/projects/freshly/platform-mobile.svg",
            alt: "Freshly grocery home screen on a smartphone",
        },
        width: 512,
        height: 1125,
    },

    process: {
        title: "Our Work Process",
        subtitle: "Building a Seamless and Reliable Grocery Shopping Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Discovery and Research",
                description: "Understanding Customer Shopping Behavior",
                tasks: [
                    "Analyzed grocery shopping habits",
                    "Studied competitor platforms",
                    "Identified delivery pain points",
                    "Defined user personas",
                ],
            },
            {
                icon: "target",
                title: "User Flow & Architecture",
                description: "Structuring the Ordering Journey",
                // The design repeats two food-delivery task labels in this card.
                tasks: [
                    "Designed browse-to-checkout flow",
                    "Planned restaurant filtering system",
                    "Structured real-time tracking logic",
                    "Optimized payment process",
                ],
            },
            {
                icon: "palette",
                title: "UI/UX Design",
                description: "Creating a Bold and Intuitive Mobile Interface",
                tasks: [
                    "Designed clean product card layouts",
                    "Built interactive cart system",
                    "Created easy-to-use checkout screens",
                    "Ensured smooth mobile navigation",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Scalable Delivery Platform",
                tasks: [
                    "Implemented secure payment gateway",
                    "Integrated product and inventory system",
                    "Developed live order tracking",
                    "Optimized app performance and speed",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "FRESHLY",
        subtitle: "A Dedicated Team Focused on Innovation and User Experience",
        milestones: [
            {
                title: "Identifying User Frustrations",
                year: "2022",
                description:
                    "Users often struggle with complicated checkout processes and limited product filtering. Freshly was designed to simplify shopping and ensure a smooth, efficient experience from browsing to delivery.",
                highlights: [
                    "Slow product search",
                    "Unclear delivery timelines",
                    "Complicated checkout steps",
                    "Limited filtering options",
                ],
            },
            {
                title: "Designing the Core Experience",
                year: "2022",
                description:
                    "The experience was designed to simplify the journey from product discovery to checkout. Freshly focuses on fast navigation, clear structure, and seamless interactions to make shopping effortless.",
                highlights: [
                    "Simplified browsing and navigation",
                    "Designed fast and efficient checkout",
                    "Integrated real-time updates",
                    "Focused on improving conversion flow",
                ],
            },
            {
                title: "Crafting the Interface",
                year: "2022",
                // Only the closing fragment of this card was legible in the design.
                description: "… browsing effortless.",
                highlights: [
                    "Built visually appealing product cards",
                    "Ensured responsive design",
                    "Created strong content hierarchy",
                    "Highlighted pricing and offers clearly",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Freshly was engineered for reliability and efficiency. Real-time tracking, secure checkout, and optimized backend processes keep the shopping experience seamless.",
                highlights: [
                    "Developed scalable backend systems",
                    "Integrated real-time tracking features",
                    "Implemented secure payment systems",
                    "Improved response time",
                ],
            },
            {
                title: "Launch & Future Growth",
                year: "2022",
                description:
                    "Freshly launched with a mobile-first, user-centric approach. Continuous updates and insights help optimize shopping, delivery, and personalized recommendations.",
                highlights: [
                    "Launched mobile-first platform",
                    "Gathered user feedback for improvements",
                    "Enhanced recommendation system",
                    "Planned AI features",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        // The design heading reads "FRESHY"; the project name is used instead.
        highlight: "FRESHLY",
        // Shared template subtitle shown in the design.
        subtitle: "Building a Seamless Digital Food Delivery Experience",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/freshly/team-prashanta.svg",
                    alt: "Portrait of Prashanta Dey",
                },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: {
                    src: "/projects/freshly/team-khaled.svg",
                    alt: "Portrait of Khaled Ammar",
                },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: {
                    src: "/projects/freshly/team-jannatul.svg",
                    alt: "Portrait of Jannatul Nayeem",
                },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: {
                    src: "/projects/freshly/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Our team worked closely with developers and product strategists to design a smooth food ordering experience. Continuous testing helped refine navigation and checkout flow. The goal was to create a fast and reliable delivery platform. This ensured a scalable and user-friendly mobile application.",
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
