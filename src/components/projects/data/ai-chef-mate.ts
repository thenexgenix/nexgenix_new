import type { ProjectDetails } from "../types";

/**
 * Content for the AI Chef Mate project details page.
 * Image files are expected in /public/projects/ai chef mate/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const aiChefMate: ProjectDetails = {
    slug: "ai-chef-mate",

    seo: {
        title: "AI Chef Mate - Your Intelligent Cooking Companion",
        description:
            "An intelligent cooking platform with step-by-step guidance, recipe suggestions, ingredient analysis, and real-time assistance.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "AI CHEF MATE",
        subtitle: "Your Intelligent Cooking Companion",
        description:
            "Nex Chef AI is an intelligent cooking platform designed to help users cook with confidence using artificial intelligence. The platform provides step-by-step cooking guidance, recipe suggestions, ingredient analysis, and real-time cooking assistance to make home cooking easier and more enjoyable.",
        image: {
            src: "/projects/ai chef mate/hero.svg",
            alt: "AI Chef Mate landing page shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Many people want to cook at home but struggle with recipe selection, cooking techniques, and ingredient preparation. Online cooking resources are often fragmented, making it difficult for beginners to follow structured guidance.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Nex Chef AI was designed to act as a personal cooking assistant that guides users through recipes step by step. The platform uses AI assistance to simplify cooking instructions, suggest recipes based on ingredients, and improve culinary confidence.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/ai chef mate/responsive-devices.svg",
            alt: "AI Chef Mate shown on desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#213D34", name: "Deep Teal" },
            { hex: "#F1F2ED", name: "Soft Ivory" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "AI CHEF MATE",
            family: "Syne",
            description:
                "Syne was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "AI Recipe Recommendation",
            "Step-by-Step Cooking Guide",
            "Ingredient-Based Recipe Search",
            "Voice Cooking Assistant Support",
            "Cooking Time Estimation",
            "Recipe Saving System",
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
                    src: "/projects/ai chef mate/platform-mobile.svg",
                    alt: "AI Chef Mate meal planning screen on a smartphone",
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
                    src: "/projects/ai chef mate/platform-desktop.svg",
                    alt: "AI Chef Mate landing page on a desktop monitor",
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
                    src: "/projects/ai chef mate/platform-tablet.svg",
                    alt: "AI Chef Mate landing page on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing an Intelligent and Beginner-Friendly Cooking Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & Concept Study",
                description: "Understanding Beginner Cooking Challenges",
                tasks: [
                    "Studied home cooking behavior",
                    "Analyzed recipe learning difficulties",
                    "Identified guidance gaps in cooking apps",
                    "Defined AI assistance workflow",
                ],
            },
            {
                icon: "target",
                title: "AI Interaction Architecture",
                description: "Simplifying Cooking Through Intelligent Guidance",
                tasks: [
                    "Designed recipe suggestion logic",
                    "Planned step-by-step instruction flow",
                    "Implemented ingredient analysis concept",
                    "Optimized user input interaction",
                ],
            },
            {
                icon: "palette",
                title: "Interface Design",
                description: "Creating a Friendly Cooking Environment",
                tasks: [
                    "Designed recipe dashboard layout",
                    "Built cooking instruction panels",
                    "Implemented progress-based guidance",
                    "Ensured mobile-first design",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Responsive AI Cooking Platform",
                tasks: [
                    "Integrated AI recipe engine",
                    "Optimized response rendering speed",
                    "Built scalable recipe database",
                    "Conducted usability testing",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "AI CHEF MATE",
        subtitle: "Making Cooking Easier Through Artificial Intelligence",
        milestones: [
            {
                title: "Identifying Cooking Barriers",
                year: "2022",
                description:
                    "Many people want to cook but feel uncertain when following complex recipes or measuring ingredients. Time constraints, lack of experience, and unclear instructions often discourage home cooking. Nex Chef AI was created to guide users like a virtual cooking mentor.",
                highlights: [
                    "Beginner cooking anxiety",
                    "Complex recipe instructions",
                    "Ingredient measurement confusion",
                    "Lack of real-time guidance",
                ],
            },
            {
                title: "Designing the Smart Cooking Framework",
                year: "2022",
                description:
                    "The platform was structured to allow users to interact with recipes naturally. Instead of reading long instructions, users receive guided cooking steps with AI assistance and simplified workflow presentation.",
                highlights: [
                    "Structured recipe guidance",
                    "Smart suggestion engine",
                    "Interactive cooking steps",
                    "User-friendly learning flow",
                ],
            },
            {
                title: "Crafting the Cooking Experience",
                year: "2022",
                description:
                    "The interface was designed to feel warm and supportive, similar to having a cooking mentor beside the user. Visual cues, step tracking, and simple controls were introduced to reduce learning complexity.",
                highlights: [
                    "Built step-by-step cooking UI",
                    "Added AI assistant interaction",
                    "Designed recipe visualization",
                    "Ensured responsive design",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Engineers built a scalable AI-driven cooking system capable of generating and guiding recipes dynamically. Performance optimization ensured fast response time during cooking assistance sessions.",
                highlights: [
                    "Developed AI cooking engine",
                    "Integrated recipe dataset system",
                    "Implemented voice/text guidance support",
                    "Optimized system performance",
                ],
            },
            {
                title: "Launch & Future Vision",
                year: "2022",
                description:
                    "After launch, user interaction data was analyzed to improve recipe recommendations and cooking guidance accuracy. Future updates may include emotion-based cooking assistance, personalized diet planning, and smart kitchen device integration.",
                highlights: [
                    "Released AI cooking assistant",
                    "Collected user feedback",
                    "Improved recipe intelligence",
                    "Planned advanced AI features",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "AI CHEF MATE",
        subtitle: "Building Intelligent Culinary Technology",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/ai chef mate/team-prashanta.svg",
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
                    src: "/projects/ai chef mate/team-khaled.svg",
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
                    src: "/projects/ai chef mate/team-jannatul.svg",
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
                    src: "/projects/ai chef mate/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description: "Combining Artificial Intelligence with Culinary Knowledge",
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
