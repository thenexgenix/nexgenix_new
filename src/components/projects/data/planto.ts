import type { ProjectDetails } from "../types";

/**
 * Content for the PLANTO project details page.
 * Image files are expected in /public/projects/planto/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const planto: ProjectDetails = {
    slug: "planto",

    seo: {
        title: "Planto - Plant Product Marketplace",
        description:
            "A plant product marketplace offering plants for home, office, and garden environments with clear product information, care guidance, and a simple shopping flow.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "PLANTO",
        subtitle: "Grow Your Space with Nature's Beauty",
        description:
            "Planto offers a variety of plants for home, office, and garden environments. The platform focuses on natural aesthetics, product clarity, and simple shopping flow to make plant buying enjoyable and convenient.",
        image: {
            src: "/projects/planto/hero.svg",
            alt: "Planto plant marketplace shown on desktop with product cards and shopping sections",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Finding healthy and suitable plants online can be difficult due to lack of product quality visualization, plant care information, and trust indicators in online plant marketplaces.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Planto was designed to provide a clean and nature-inspired marketplace with clear product descriptions, clear imagery, and care guidance information.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/planto/responsive-devices.svg",
            alt: "Planto displayed on a desktop monitor, laptop, tablet and phone",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#1C2419", name: "Dark Forest" },
            { hex: "#F1F2ED", name: "Soft Ivory" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "PLANTO",
            family: "Inter",
            description:
                "Inter was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Plant Product Marketplace",
            "Category-Based Plant Browsing",
            "Plant Care Information Display",
            "Shopping Cart & Checkout System",
            "Customer Reviews & Ratings",
            "Delivery Information Section",
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
                    src: "/projects/planto/platform-mobile.svg",
                    alt: "Planto mobile shopping experience on a smartphone",
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
                    src: "/projects/planto/platform-desktop.svg",
                    alt: "Planto plant marketplace on a desktop monitor",
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
                    src: "/projects/planto/platform-tablet.svg",
                    alt: "Planto plant marketplace on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing a Natural and Trustworthy Plant Shopping Experience",
        steps: [
            {
                icon: "search",
                title: "Research & Market Study",
                description: "Understanding Online Plant Shopping Behavior",
                tasks: [
                    "Studied plant e-commerce platforms",
                    "Identified product trust challenges",
                    "Analyzed customer decision patterns",
                    "Defined target buyer personas",
                ],
            },
            {
                icon: "target",
                title: "Information Architecture",
                description: "Structuring Plant Products for Easy Exploration",
                tasks: [
                    "Categorized plants by type",
                    "Designed search-first navigation",
                    "Structured shopping workflow",
                    "Planned product detail system",
                ],
            },
            {
                icon: "palette",
                title: "Interface Design",
                description: "Creating a Fresh and Nature-Inspired Interface",
                tasks: [
                    "Designed plant product cards",
                    "Built shopping cart layout",
                    "Added plant care display sections",
                    "Ensured mobile responsiveness",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Reliable Marketplace Platform",
                tasks: ["Optimized image loading speed", "Conducted usability testing"],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "PLANTO",
        subtitle: "Bringing Nature Shopping Experience to the Digital Space",
        milestones: [
            {
                title: "Identifying Market Problems",
                year: "2022",
                description:
                    "Many customers want to decorate their living spaces with plants but face difficulty finding reliable plant sellers online due to concerns about plant quality.",
                highlights: [
                    "Lack of plant quality visualization",
                    "Trust issues in online plant shopping",
                    "Poor product information structure",
                    "Limited care guidance support",
                ],
            },
            {
                title: "Designing the Marketplace Structure",
                year: "2022",
                description:
                    "The platform was structured to help users explore plants naturally. Product categorization, visual presentation, and care information were prioritized to create a comfortable shopping experience.",
                highlights: [
                    "Designed plant taxonomy system",
                    "Structured product listing flow",
                    "Planned conversion-friendly layout",
                    "Focused on natural shopping UX",
                ],
            },
            {
                title: "Crafting the Experience",
                year: "2022",
                description: "The experience was shaped to help users make confident purchasing decisions.",
                highlights: [
                    "Built clean product showcase layout",
                    "Added plant care indicators",
                    "Designed cart interaction flow",
                    "Ensured responsive design",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Developers built a scalable e-commerce system supporting product inventory, customer orders, and secure payment workflows. Performance optimization ensured smooth browsing.",
                highlights: [
                    "Developed product database system",
                    "Integrated order processing workflow",
                    "Implemented secure transactions",
                    "Optimized platform speed",
                ],
            },
            {
                title: "Launch & Future Vision",
                year: "2022",
                description:
                    "After launch, customer behavior analytics were monitored to improve product recommendations and search efficiency. Future updates may include AI-based plant care suggestions.",
                highlights: [
                    "Improved search filtering",
                    "Released marketplace platform",
                    "Collected user feedback",
                    "Planned smart recommendation features",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "PLANTO",
        subtitle: "A Team Dedicated to Building Digital Nature Commerce",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/planto/team-prashanta.svg",
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
                    src: "/projects/planto/team-khaled.svg",
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
                    src: "/projects/planto/team-jannatul.svg",
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
                    src: "/projects/planto/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Our team worked closely with product strategists and developers to design a nature-inspired marketplace. Continuous feedback helped refine product presentation and shopping flow. The goal was to create a simple and trustworthy plant purchasing experience. This ensured a scalable and user-friendly platform.",
        stats: [
            { icon: "users", value: "6", label: "Team Members" },
            { icon: "briefcase", value: "6+", label: "Months of Work" },
            { icon: "search", value: "200+", label: "User Interviews" },
            { icon: "palette", value: "50+", label: "Design Iterations" },
        ],
    },

    impact: {
        title: "Project Impact",
        // The design keeps the generic impact copy shown here.
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
