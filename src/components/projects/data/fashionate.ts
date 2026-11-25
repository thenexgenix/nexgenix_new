import type { ProjectDetails } from "../types";

/**
 * Content for the Fashionate project details page.
 * Image files are expected in /public/projects/fashionate/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const fashionate: ProjectDetails = {
    slug: "fashionate",

    seo: {
        title: "Fashionate - Trendy Styles and Seamless Shopping",
        description:
            "A modern e-commerce fashion platform with personalized recommendations, curated collections, and fast delivery.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "Fashionate",
        subtitle: "Trendy Styles. Seamless Shopping. Personalized Fashion.",
        description:
            "Fashionate is a modern e-commerce fashion platform designed to deliver the latest clothing, accessories, and footwear directly to your doorstep. With a smooth shopping experience, personalized recommendations, and curated collections, Fashionate makes fashion shopping faster, smarter, and more enjoyable for style-conscious consumers.",
        image: {
            src: "/projects/fashionate/hero.svg",
            alt: "Fashionate product listings and checkout screens shown on mobile",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            // The design's challenge card is cut off after this fragment.
            "Traditional fashion shopping apps often overwhelm users with too …",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Fashionate delivers a curated and personalized shopping experience with smart filters, real-time stock updates, fast delivery, and style recommendations, ensuring convenience, reliability, and a seamless fashion journey.",
        ],
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Stylish and Modern Visual Identity Inspired by Fashion Trends",
        // Swatch names are transcribed as they are labelled in the design.
        colors: [
            { hex: "#F37D92", name: "Fiery Orange" },
            { hex: "#EEEEEE", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "FASHIONATE",
            family: "Inter",
            description:
                "Inter was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Smart Product Search & Filters",
            "Real-Time Product Availability",
            "Fast & Scheduled Delivery Options",
            "Secure Checkout & Multiple Payment Options",
            "Order History",
        ],
    },

    mobileShowcase: {
        title: "Mobile APP Design",
        image: {
            src: "/projects/fashionate/platform-mobile.svg",
            alt: "Fashionate trending collection screen on a smartphone",
        },
        width: 512,
        height: 1125,
    },

    process: {
        title: "Our Work Process",
        subtitle: "Building a Seamless and Trend-Forward Fashion Shopping Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & Market Analysis",
                description: "Understanding User Ordering Behavior",
                tasks: [
                    "Studied user shopping patterns and preferences",
                    "Analyzed competitor fashion platforms",
                    "Identified challenges in navigation, sizing, and checkout",
                    "Defined personas for different shopper types",
                ],
            },
            {
                icon: "target",
                title: "User Flow & Architecture",
                description: "Structuring the Ordering Journey",
                tasks: [
                    "Curated collections and category hierarchy",
                    "Designed clear browse-to-checkout flow",
                    "Integrated real-time inventory and tracking",
                    "Simplified checkout process for faster conversion",
                ],
            },
            {
                icon: "palette",
                title: "UI/UX Design",
                description: "Creating a Bold and Intuitive Mobile Interface",
                // The design repeats generic food-delivery task labels in this card.
                tasks: [
                    "Designed food card components",
                    "Built interactive cart system",
                    "Created order tracking screen",
                    "Ensured mobile-first experience",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Scalable Delivery Platform",
                tasks: [
                    "Integrated restaurant database",
                    "Implemented payment gateway",
                    "Developed tracking functionality",
                    "Optimized performance for mobile",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "FASHIONATE",
        subtitle: "Making fashion discovery effortless",
        // Several cards reuse Foody's journey copy in the design; kept as shown.
        milestones: [
            {
                title: "Identifying User Frustrations",
                year: "2022",
                description:
                    "Many users experience slow ordering systems and unclear delivery updates. Foody was created to eliminate these pain points and deliver a faster, more transparent food ordering experience.",
                highlights: [
                    "Confusing navigation",
                    "Delayed delivery tracking",
                    "Complicated checkout",
                    "Limited restaurant filtering",
                ],
            },
            {
                title: "Designing the Core Experience",
                year: "2022",
                description:
                    "The app was structured to minimize steps between food selection and order confirmation. Clear menu layouts and simplified payment options were prioritized.",
                highlights: [
                    "Designed intuitive browse flow",
                    "Structured fast checkout process",
                    "Planned real-time updates",
                    "Focused on conversion UX",
                ],
            },
            {
                title: "Crafting the Interface",
                year: "2022",
                // Only the closing fragment of this card was legible in the design.
                description: "… information were introduced.",
                highlights: [
                    "Built engaging food cards",
                    "Added visual hierarchy",
                    "Designed order tracking map",
                    "Ensured responsive layout",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Developers built a robust backend system supporting restaurant management, order tracking, and secure payment processing. Performance optimization ensured smooth app interaction.",
                highlights: [
                    "Developed order management system",
                    "Integrated real-time tracking API",
                    "Implemented secure payment flow",
                    "Optimized app speed",
                ],
            },
            {
                title: "Launch & Future Growth",
                year: "2022",
                description:
                    "After launch, user behavior data was analyzed to refine restaurant recommendations and delivery tracking accuracy. Future plans include AI-based food suggestions and loyalty reward systems.",
                highlights: [
                    "Released mobile application",
                    "Planned loyalty features",
                    "Collected customer feedback",
                    "Improved recommendation logic",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        // The design heading reads "FOODY" here; the project name is used instead.
        highlight: "FASHIONATE",
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
                    src: "/projects/fashionate/team-prashanta.svg",
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
                    src: "/projects/fashionate/team-khaled.svg",
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
                    src: "/projects/fashionate/team-jannatul.svg",
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
                    src: "/projects/fashionate/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        // The middle sentence is missing in this design; bridged from the same template card.
        description:
            "Our team worked closely with developers and product strategists to design a smooth shopping experience. Continuous testing helped refine navigation and checkout flow. The goal was to create a fast and reliable delivery platform. This ensured a scalable and user-friendly mobile application.",
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
