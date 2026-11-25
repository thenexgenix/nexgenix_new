import type { ProjectDetails } from "../types";

/**
 * Content for the E-Learning Mobile Application project details page.
 * Image files are expected in /public/projects/e-learning mobile app/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const eLearningMobileApp: ProjectDetails = {
    slug: "e-learning-mobile-app",

    seo: {
        title: "E-Learning Mobile Application - Learn Anytime. Anywhere. On Your Terms.",
        description:
            "A mobile-based e-learning application for enrolling in courses, tracking progress, and accessing learning materials from a smartphone.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "E-Learning Mobile Application",
        subtitle: "Learn Anytime. Anywhere. On Your Terms.",
        description:
            // The final sentence is cut off in the OCR; only this fragment was legible.
            "Learnify is a mobile-based e-learning application designed to provide structured, flexible, and accessible education. The app enables users to enroll in courses, track progress, and access learning materials directly from their smartphones. It focuses on intuitive …",
        image: {
            src: "/projects/e-learning mobile app/hero.svg",
            alt: "E-learning mobile app screens shown side by side",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            // The middle of the last sentence was truncated; bridged from the same template text.
            "Users often experience delays, confusing navigation, and unclear order tracking in food delivery applications. Restaurants also struggle to manage orders efficiently.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            // The design reuses Foody's solution copy here; kept as shown.
            "Foody was designed to simplify the ordering journey through intuitive navigation, clear restaurant listings, real-time order tracking, and optimized checkout flow.",
        ],
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#FD5722", name: "Fiery Orange" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "E-LEARNING MOBILE APPLICATION",
            family: "Inter",
            description:
                "Inter was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Restaurant Discovery System",
            "Category-Based Food Browsing",
            "Real-Time Order Tracking",
            "Secure Payment Gateway",
            "Cart & Checkout Flow",
            "Order History",
        ],
    },

    mobileShowcase: {
        title: "Mobile APP Design",
        image: {
            src: "/projects/e-learning mobile app/platform-mobile.svg",
            alt: "E-learning mobile app screens on a smartphone",
        },
        width: 1080,
        height: 1080,
    },

    process: {
        title: "Our Work Process",
        // The design reuses Foody's process heading; kept as shown.
        subtitle: "Designing a Fast and Seamless Food Ordering Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & Market Analysis",
                description: "Understanding User Ordering Behavior",
                tasks: [
                    "Studied food delivery app usage patterns",
                    "Analyzed competitor ordering flows",
                    "Identified friction points in checkout",
                    "Defined user personas",
                ],
            },
            {
                icon: "target",
                title: "User Flow & Architecture",
                description: "Structuring the Ordering Journey",
                tasks: [
                    "Planned restaurant filtering system",
                    "Designed browse-to-checkout flow",
                    "Structured real-time tracking logic",
                    "Optimized payment process",
                ],
            },
            {
                icon: "palette",
                title: "UI/UX Design",
                description: "Creating a Bold and Intuitive Mobile Interface",
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
        // The design still shows Foody in this heading; kept as shown.
        highlight: "FOODY",
        subtitle: "Making Food Ordering Faster and More Convenient",
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
                description:
                    "The interface was designed to stimulate appetite and encourage quick decision-making. Bold colors, large food images, and clear pricing information were introduced.",
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
                    "Planned loyalty features",
                    "Released mobile application",
                    "Collected customer feedback",
                    "Improved recommendation logic",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        // The design heading reads "FOODY" here; kept as shown.
        highlight: "FOODY",
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
                    src: "/projects/e-learning mobile app/team-prashanta.svg",
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
                    src: "/projects/e-learning mobile app/team-khaled.svg",
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
                    src: "/projects/e-learning mobile app/team-jannatul.svg",
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
                    src: "/projects/e-learning mobile app/team-saqib.svg",
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
        // The numbers are not legible in this page's OCR; the shared template values are used.
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
