import type { ProjectDetails } from "../types";

/**
 * Content for the Investmate project details page.
 * Image files are expected in /public/projects/investmate/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const investmate: ProjectDetails = {
    slug: "investmate",

    seo: {
        title: "Investmate - Investment Platform",
        description:
            "A modern investment platform that simplifies financial growth with intuitive dashboards, real-time portfolio insights and structured financial planning tools.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "INVESTMATE",
        subtitle: "Smart Investing Made Simple and Accessible",
        description:
            "Investmate is a modern investment platform designed to simplify financial growth for everyday users. The platform combines intuitive dashboards, real-time portfolio insights and structured financial planning tools to help users invest confidently and efficiently",
        image: {
            src: "/projects/investmate/hero.svg",
            alt: "Investmate platform shown on desktop with the investment dashboard and landing page",
        },
    },

    // The design has no fact cards, so `meta` is intentionally omitted.

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Investment platforms often overwhelm users with complex data, technical jargon, and cluttered dashboards. Many beginners struggle to understand risk levels, portfolio performance, and investment strategies due to poor usability and unclear information hierarchy.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Investmate was designed to simplify the investment experience through clean UI structure, guided insights, visual risk indicators, and an intuitive user flow that makes financial decision-making clear and accessible.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/investmate/responsive-devices.svg",
            alt: "Investmate displayed on a desktop monitor, laptop, tablet and phone",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "Professional, accessible, and culturally relevant",
        colors: [
            { hex: "#04BA7B", name: "Primary Green" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#EDF3F1", name: "Light Accent" },
        ],
        typography: {
            sample: "Investmate",
            family: "Roboto",
            description:
                "Professional font family optimized for readability and cultural authenticity",
        },
        features: [
            "Real-Time Portfolio Tracking",
            "Investment Risk Visualization",
            "Goal-Based Investment Planner",
            "Secure Transaction Management",
            "Performance Analytics Dashboard",
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
                    src: "/projects/investmate/platform-mobile.svg",
                    alt: "Investmate mobile app home screen on a smartphone",
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
                    src: "/projects/investmate/platform-desktop.svg",
                    alt: "Investmate landing page on a desktop monitor",
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
                    src: "/projects/investmate/platform-tablet.svg",
                    alt: "Investmate landing page on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "A Structured Approach from Research to Launch",
        steps: [
            {
                icon: "lightbulb",
                title: "Discovery & Research",
                description:
                    "Understanding Users, Market Gaps, and Financial Behavior",
                tasks: [
                    "Conducted competitor analysis",
                    "Identified user pain points",
                    "Defined primary user personas",
                    "Researched financial UX best practices",
                ],
            },
            {
                icon: "target",
                title: "Concept Development",
                description: "Turning Insights into Strategic Product Architecture",
                tasks: [
                    "Created wireframes and user flow diagrams",
                    "Structured navigation hierarchy",
                    "Designed interaction models",
                    "Validated early concepts",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Refining the Interface for Clarity and Usability",
                tasks: [
                    "Designed high-fidelity UI screens",
                    "Built interactive prototypes",
                    "Conducted usability testing",
                    "Improved layout and micro-interactions",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description: "Deploying and Continuously Improving Performance",
                tasks: [
                    "Collaborated with development team",
                    "Optimized responsiveness",
                    "Monitored analytics data",
                    "Implemented user feedback updates",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "INVESTMATE",
        subtitle: "From Identifying Complexity to Creating Financial Simplicity",
        milestones: [
            {
                title: "The Problem We Identified",
                year: "2022",
                description:
                    "We observed that many investment platforms were data-heavy but lacked user-centered structure, causing hesitation and confusion among new investors.",
                highlights: [
                    "Overloaded dashboards",
                    "Poor onboarding flow",
                    "Lack of intuitive design",
                    "Limited financial education guidance",
                ],
            },
            {
                title: "Finding the Solution",
                year: "2022",
                description:
                    "We conducted competitor audits, studied financial UX case studies, and mapped real user behavior to understand where friction occurred. Through wireframing workshops and collaborative brainstorming sessions, we focused on restructuring information hierarchy so users could make decisions confidently without feeling overwhelmed.",
                highlights: [
                    "Studied financial UX case studies",
                    "Analyzed competitor gaps",
                    "Tested layout concepts",
                    "Defined design direction",
                ],
            },
            {
                title: "Designing the Experience",
                year: "2022",
                description:
                    "Design and product teams worked closely in iterative cycles, refining dashboards, simplifying investment flows, and testing prototypes with real scenarios. Every interaction was crafted to build trust—from subtle micro-interactions to structured portfolio visuals—ensuring clarity without sacrificing professional credibility.",
                highlights: [
                    "Built clean dashboard systems",
                    "Focused on visual clarity",
                    "Designed guided investment insights",
                    "Ensured mobile responsiveness",
                ],
            },
            {
                title: "Building the Platform",
                year: "2022",
                description:
                    "Developers and designers collaborated in agile sprints, translating the design system into scalable, reusable components. Financial APIs were integrated carefully to ensure real-time accuracy, while performance optimization ensured smooth operation even in low-bandwidth environments.",
                highlights: [
                    "Developed reusable UI components",
                    "Integrated financial APIs",
                    "Tested cross-device compatibility",
                    "Optimized performance",
                ],
            },
            {
                title: "Launch & The Journey Ahead",
                year: "2022",
                description:
                    "The launch was not the end—it was the beginning of continuous improvement. After releasing the MVP, we monitored analytics, gathered user feedback, and refined features based on real behavior. With a clear roadmap ahead, the platform is positioned to evolve with smarter insights and long-term scalability.",
                highlights: [
                    "Released MVP version",
                    "Collected user feedback",
                    "Planned AI-driven insights",
                    "Defined future expansion roadmap",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "INVESTMATE",
        subtitle:
            "A Collaborative Team Combining Strategy, Design, and Technology",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: { src: "/projects/investmate/team-prashanta.svg", alt: "Portrait of Prashanta Dey" },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: { src: "/projects/investmate/team-khaled.svg", alt: "Portrait of Khaled Ammar" },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: { src: "/projects/investmate/team-jannatul.svg", alt: "Portrait of Jannatul Nayeem" },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: { src: "/projects/investmate/team-saqib.svg", alt: "Portrait of Saqib" },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Through agile communication, structured workflows, and cross-functional teamwork, the project progressed efficiently from concept to launch while maintaining design and technical consistency.",
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
