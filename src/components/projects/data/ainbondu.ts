import type { ProjectDetails } from "../types";

/**
 * Content for the Ainbondu project details page.
 * Image files are expected in /public/projects/ainbondu/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const ainbondu: ProjectDetails = {
    slug: "ainbondu",

    seo: {
        title: "Ainbondu - Legal Services Platform",
        description:
            "A comprehensive Bengali language legal consultation platform connecting clients with trusted lawyers across Bangladesh.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "আইনবন্ধু",
        subtitle: "Legal Services Platform",
        description:
            "A comprehensive Bengali language legal consultation platform connecting clients with trusted lawyers across Bangladesh",
        image: {
            src: "/projects/ainbondu/hero.svg",
            alt: "Ainbondu platform shown on desktop with the dashboard and landing page",
        },
    },

    meta: [
        { emoji: "👤", label: "Client", value: "Legal Startup" },
        { emoji: "⏱️", label: "Duration", value: "8 Weeks" },
        { emoji: "💼", label: "Category", value: "Web Design & Development" },
        { emoji: "🎨", label: "Role", value: "Lead UI/UX Designer" },
    ],

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Creating an accessible, Bengali-language platform that simplifies the complex process of finding and consulting with legal professionals in Bangladesh.",
            "The platform needed to build trust while maintaining cultural sensitivity and making legal services approachable for all socioeconomic backgrounds.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Designed a clean, intuitive interface using Bengali typography (Anek Bangla) with a professional green color palette that conveys trust and governmental authority.",
            "Implemented categorized legal services, lawyer profiles, and streamlined consultation booking to make legal help accessible to everyone.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/ainbondu/responsive-devices.svg",
            alt: "Ainbondu displayed on a desktop monitor, laptop, tablet and phone",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "Professional, accessible, and culturally relevant",
        colors: [
            { hex: "#196420", name: "Primary Green" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#E8F5E9", name: "Light Accent" },
        ],
        typography: {
            sample: "আইনবন্ধু",
            family: "Anek Bangla",
            description:
                "Professional Bengali font family optimized for readability and cultural authenticity",
        },
        features: [
            "Lawyer Directory",
            "Service Categories",
            "Online Booking",
            "User Profiles",
            "Consultation System",
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
                    "The design is perfectly optimized for Instagram, Facebook, and other mobile-first social platforms. The vertical composition ensures maximum impact on mobile feeds, with clear readability and emotional resonance.",
                bullets: [
                    "Instagram Stories & Feed Ready",
                    "Facebook Post Optimized",
                    "High Resolution for Retina Displays",
                ],
                image: {
                    src: "/projects/ainbondu/platform-mobile.svg",
                    alt: "Ainbondu mobile app home screen on a smartphone",
                },
            },
            {
                variant: "desktop",
                icon: "monitor",
                title: "Desktop Showcase",
                description:
                    "When viewed on desktop platforms like LinkedIn and Facebook, the design maintains its impact with crisp details and elegant proportions. Perfect for professional sharing and brand presentation.",
                bullets: [
                    "LinkedIn Professional Format",
                    "Website Banner Compatible",
                    "Email Marketing Ready",
                ],
                image: {
                    src: "/projects/ainbondu/platform-desktop.svg",
                    alt: "Ainbondu landing page on a desktop monitor",
                },
            },
            {
                variant: "tablet",
                icon: "tablet",
                title: "Tablet Adaptation",
                description:
                    "The design scales beautifully on tablet devices, perfect for Pinterest pins, iPad browsing, and tablet-optimized social media applications. The composition remains impactful at any size.",
                bullets: [
                    "Pinterest Pin Optimized",
                    "iPad & Android Tablet Ready",
                    "Presentation Mode Compatible",
                ],
                image: {
                    src: "/projects/ainbondu/platform-tablet.svg",
                    alt: "Ainbondu landing page on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "A systematic approach to creating impactful social media campaigns",
        steps: [
            {
                icon: "lightbulb",
                title: "Discovery & Research",
                description:
                    "Understanding the brand values, target audience, and Father's Day campaign objectives",
                tasks: [
                    "Brand identity analysis",
                    "Competitor research",
                    "Audience persona development",
                    "Platform-specific requirements",
                ],
            },
            {
                icon: "target",
                title: "Concept Development",
                description: "Brainstorming visual metaphors and emotional storytelling approaches",
                tasks: [
                    "Mood board creation",
                    "Symbol exploration",
                    "Typography studies",
                    "Color palette research",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Creating multiple design variations and refining based on feedback",
                tasks: [
                    "Initial sketches",
                    "Digital mockups",
                    "Client feedback rounds",
                    "Final refinements",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description: "Delivering final assets and monitoring campaign performance",
                tasks: [
                    "Multi-format export",
                    "Platform optimization",
                    "Performance tracking",
                    "Post-launch analysis",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "আইনবন্ধু",
        subtitle: "From a simple idea to Bangladesh's most trusted legal services platform",
        milestones: [
            {
                title: "The Problem We Saw",
                year: "2022",
                description:
                    "Millions of Bangladeshis had no access to legal guidance — not because lawyers didn't exist, but because the gap between people and legal experts was too wide, too expensive, and too confusing.",
                highlights: [
                    "82% of rural population lacked access to legal counsel",
                    "Language barrier between legal text and everyday Bengali",
                    "High consultation costs made legal aid unaffordable",
                    "No trusted digital platform existed for Bengali speakers",
                ],
            },
            {
                title: "Finding the Solution",
                year: "2022",
                description:
                    "After months of field research, interviews with lawyers, clients, and legal aid organizations, the vision crystallized: a Bengali-first platform that bridges trust between citizens and qualified legal professionals.",
                highlights: [
                    "Conducted 200+ user interviews across 6 districts",
                    "Partnered with 15 senior advocates for domain expertise",
                    "Analyzed 3 competing platforms for UX benchmarking",
                    "Defined core product principles: trust, access, clarity",
                ],
            },
            {
                title: "Designing the Experience",
                year: "2022",
                description:
                    "The design team spent four months crafting a platform that felt as approachable as talking to a trusted elder — intuitive navigation, Bengali typography, and a calm aesthetic that removed the intimidation from legal services.",
                highlights: [
                    "Created 80+ wireframe screens from scratch",
                    "3 rounds of usability testing with real users",
                    "Built a complete Bengali-friendly design system",
                    "Accessibility-first approach across all touch points",
                ],
            },
            {
                title: "Building the Platform",
                year: "2022",
                description:
                    "Engineers worked alongside designers in agile two-week sprints, ensuring every feature was battle-tested before release. The tech stack was chosen for reliability, scalability, and performance in low-bandwidth conditions across Bangladesh.",
                highlights: [
                    "6 months of iterative development cycles",
                    "Built for 2G/3G connectivity reliability",
                    "Integrated secure video consultation module",
                    "End-to-end encrypted client-lawyer communication",
                ],
            },
            {
                title: "Launch & The Journey Ahead",
                // The screenshot shows 2022 here, but the text says the launch was in 2024.
                year: "2024",
                description:
                    "আইনবন্ধু launched to the public in 2024, quickly becoming the go-to legal services platform in Bangladesh. Recognition from the legal community, featured as a 2024 Innovation Project, with a growing network of 10K+ users in the first months.",
                highlights: [
                    "Featured as 'Best Legal Tech Innovation 2024'",
                    "Featured as 'Best Legal Tech Innovation 2024'",
                    "Partnership with Bangladesh Bar Council",
                    "Expansion roadmap to 64 districts by 2025",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "আইনবন্ধু",
        subtitle:
            "A dedicated team of designers, developers, and researchers working together to revolutionize legal services in Bangladesh.",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: { src: "/projects/ainbondu/team-prashanta.svg", alt: "Portrait of Prashanta Dey" },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: { src: "/projects/ainbondu/team-khaled.svg", alt: "Portrait of Khaled Ammar" },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: { src: "/projects/ainbondu/team-jannatul.svg", alt: "Portrait of Jannatul Nayeem" },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: { src: "/projects/ainbondu/team-saqib.svg", alt: "Portrait of Saqib" },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Together, we've dedicated countless hours to research, design, and development—driven by a shared mission to make legal services accessible to every Bangladeshi.",
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