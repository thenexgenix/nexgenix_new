import type { ProjectDetails } from "../types";

/**
 * Content for the Nex Bazar project details page.
 * Image files are expected in /public/projects/nex bazar/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const nexBazar: ProjectDetails = {
    slug: "nex-bazar",

    seo: {
        title: "Nex Bazar - Fresh Organic Food Delivered to Your Doorstep",
        description:
            "Nex Bazar is an online grocery marketplace designed to make purchasing organic and healthy food simple and convenient.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "NEX BAZAR",
        subtitle: "Fresh Organic Food Delivered to Your Doorstep",
        description:
            "Nex Bazar is an online grocery marketplace designed to make purchasing organic and healthy food simple and convenient. The platform allows users to browse fresh vegetables, fruits, dairy products, and essential grocery items while ensuring quality transparency and smooth shopping experience.",
        image: {
            src: "/projects/nex bazar/hero.svg",
            alt: "Nex Bazar organic grocery marketplace shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Traditional grocery shopping can be time-consuming and inconvenient for modern users. Many online grocery platforms lack clear product freshness information, structured categories, and trust indicators for organic food selection.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Nex Bazar was built to provide a clean, reliable, and efficient online product browsing, organic food verification, simple checkout flow, and high-quality product visualization.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/nex bazar/responsive-devices.svg",
            alt: "Nex Bazar displayed on desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#00B207", name: "Forest Green" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "NEX BAZAR",
            family: "Poppins",
            description:
                "Poppins was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Category-Based Shopping",
            "Product Search & Filtering",
            "Cart and Checkout System",
            "Product Reviews & Ratings",
            "Delivery Information Display",
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
                    src: "/projects/nex bazar/platform-mobile.svg",
                    alt: "Nex Bazar organic food storefront on a smartphone",
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
                    src: "/projects/nex bazar/platform-desktop.svg",
                    alt: "Nex Bazar storefront on a desktop monitor",
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
                    src: "/projects/nex bazar/platform-tablet.svg",
                    alt: "Nex Bazar storefront on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing a Simple and Trustworthy Online Grocery Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & Market Understanding",
                description: "Understanding Online Grocery Shopping Behavior",
                tasks: [
                    "Studied grocery e-commerce platforms",
                    "Identified user trust issues in food quality",
                    "Analyzed checkout friction points",
                    "Defined customer personas",
                ],
            },
            {
                icon: "target",
                title: "Information Architecture",
                description: "Structuring Products for Fast and Easy Shopping",
                tasks: [
                    "Organized products by category",
                    "Designed search-first navigation",
                    "Structured product detail pages",
                    "Planned checkout workflow",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Creating a Fresh and User-Friendly Marketplace Interface",
                tasks: [
                    "Designed product card layouts",
                    "Developed shopping cart interface",
                    "Implemented review display system",
                    "Ensured mobile-first responsiveness",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description: "Ensuring Fast, Reliable, and Smooth Property Exploration",
                tasks: [
                    "Built scalable product listing system",
                    "Integrated checkout workflow",
                    "Optimized image loading speed",
                    "Conducted usability testing",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "NEX BAZAR",
        subtitle: "Bringing Fresh Organic Food Shopping to the Digital Space",
        milestones: [
            {
                title: "Identifying Shopping Problems",
                year: "2022",
                description:
                    "We noticed that many customers face difficulty finding trustworthy organic food online. Concerns about freshness, product origin, and delivery reliability often create hesitation in online grocery shopping. Nex Bazar was created to build confidence in buying healthy food digitally.",
                highlights: [
                    "Lack of organic product transparency",
                    "Trust issues in online grocery shopping",
                    "Poor category organization",
                    "Limited freshness presentation",
                ],
            },
            {
                title: "Designing the Marketplace Structure",
                year: "2022",
                description:
                    "The platform was structured to allow users to find products quickly without navigating complex menus. Category-based browsing and search optimization were introduced to improve shopping efficiency.",
                highlights: [
                    "Designed product taxonomy",
                    "Structured grocery categories",
                    "Planned checkout flow",
                    "Focused on conversion design",
                ],
            },
            {
                title: "Crafting the Shopping Experience",
                year: "2022",
                description:
                    "The interface was designed to feel fresh and natural, reflecting the organic food theme. Product cards highlight quality visuals, price clarity, and simple purchasing actions to reduce decision friction.",
                highlights: [
                    "Built clean product showcase layout",
                    "Added organic product indicators",
                    "Designed cart interaction flow",
                    "Ensured responsive design",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Developers built a scalable marketplace system supporting product inventory, customer orders, and secure payment workflows. Performance optimization ensured smooth browsing even with large product catalogs.",
                highlights: [
                    "Developed product database system",
                    "Integrated order processing workflow",
                    "Implemented secure transactions",
                    "Optimized platform speed",
                ],
            },
            {
                title: "Launch and Continuous Growth",
                year: "2022",
                description:
                    "After launch, customer behavior analytics were monitored to improve product recommendations and shopping experience. Future updates may include AI-based recommendation features.",
                highlights: [
                    "Released marketplace platform",
                    "Improved search and filtering",
                    "Planned AI recommendation features",
                    "Collected user feedback",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "NEX BAZAR",
        subtitle: "A Team Dedicated to Building Healthy Digital Shopping Experience",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/nex bazar/team-prashanta.svg",
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
                    src: "/projects/nex bazar/team-khaled.svg",
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
                    src: "/projects/nex bazar/team-jannatul.svg",
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
                    src: "/projects/nex bazar/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Continuous collaboration between product designers, developers, and marketplace strategists ensured Nex Bazar delivered a reliable organic shopping experience.",
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
