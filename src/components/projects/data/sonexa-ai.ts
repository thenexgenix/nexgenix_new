import type { ProjectDetails } from "../types";

/**
 * Content for the SONEXA AI project details page.
 * Image files are expected in /public/projects/sonexa ai/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const sonexaAi: ProjectDetails = {
    slug: "sonexa-ai",

    seo: {
        title: "SONEXA AI - Text-to-Speech Mobile App",
        description:
            "A mobile application that turns text into natural, human-like AI voiceovers with customizable tones, accents, and styles.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "SONEXA AI",
        subtitle: "Transform Text into Natural, Human-Like Voice",
        // OCR skipped a line between the two hero sentences.
        description:
            "Voxora AI is a mobile application designed to convert text into high-quality, AI-generated speech. It helps users generate realistic voiceovers with customizable tones, accents, and styles using advanced artificial intelligence technology.",
        image: {
            src: "/projects/sonexa ai/hero.svg",
            alt: "SONEXA AI text-to-speech app screens shown on a smartphone",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Voice recording requires time, equipment, and technical skills.",
            "Many users struggle to create professional voiceovers for videos, presentations, and digital content without access to studio-level tools.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Voice customization options, fast rendering, and export features optimized for mobile usage.",
        ],
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        // Hex values and labels are paired as shown in the design.
        colors: [
            { hex: "#A099FF", name: "Light Indigo" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "SONEXA AI",
            family: "Inter",
            description:
                "Inter was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Text-to-Speech Conversion",
            "Multiple AI Voice Options",
            "Accent & Tone Customization",
            "Voice Speed & Pitch Control",
            "History & Saved Projects",
            "Audio File Export (MP3/WAV)",
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Building an Intelligent and User-Friendly AI Voice Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & Concept Validation",
                description: "Understanding Content Creator Needs and AI Limitations",
                tasks: [
                    "Studied creator voiceover workflows",
                    "Analyzed existing AI voice tools",
                    "Identified usability friction",
                    "Defined target audience personas",
                ],
            },
            {
                icon: "target",
                title: "UX Architecture",
                description: "Simplifying Complex AI into an Easy Mobile Flow",
                tasks: [
                    "Designed minimal input interface",
                    "Structured voice selection system",
                    "Planned preview & export workflow",
                    "Optimized one-hand mobile usability",
                ],
            },
            {
                icon: "palette",
                title: "Interface Design",
                description: "Creating a Futuristic Yet Simple Mobile Experience",
                tasks: [
                    "Designed clean text editor layout",
                    "Built interactive voice preview system",
                    "Implemented intuitive control sliders",
                    "Ensured responsive animations",
                ],
            },
            {
                icon: "rocket",
                title: "Development & AI Integration",
                description: "Translating Design into Scalable AI-Powered Infrastructure",
                tasks: [
                    "Integrated AI speech synthesis API",
                    "Optimized audio rendering speed",
                    "Built secure cloud processing",
                    "Conducted cross-device testing",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "SONEXA AI",
        subtitle: "From Manual Voice Recording to Instant AI Generation",
        milestones: [
            {
                title: "Recognizing the Content Creation Bottleneck",
                year: "2022",
                description:
                    "We observed that many creators spend hours recording and editing voiceovers. Studio equipment, background noise, and retakes slowed productivity. We aimed to eliminate these barriers through AI automation.",
                highlights: [
                    "Time-consuming recording process",
                    "Equipment dependency",
                    "Inconsistent voice quality",
                    "Editing inefficiencies",
                ],
            },
            {
                title: "Exploring AI Voice Capabilities",
                year: "2022",
                description:
                    "Designers and engineers collaborated to evaluate the latest neural speech synthesis technologies. The focus was on balancing realism, speed, and mobile performance without overwhelming users with technical complexity.",
                highlights: [
                    "Researched neural TTS models",
                    "Tested voice realism levels",
                    "Optimized latency",
                    "Defined voice customization features",
                ],
            },
            {
                title: "Designing the User Journey",
                year: "2022",
                // Only the first sentence of this card was legible in the design.
                description:
                    "The experience was structured into three simple actions: write, customize, generate. By reducing the workflow to essential steps, we kept the process focused and easy to follow.",
                highlights: [
                    "Minimalist input system",
                    "Clear customization panel",
                    "Instant preview option",
                    "Seamless export process",
                ],
            },
            {
                title: "Engineering the AI Core",
                year: "2022",
                description:
                    "Engineers built a scalable backend capable of handling concurrent voice generation requests while maintaining audio quality. Cloud-based processing ensured fast rendering without overloading mobile devices.",
                highlights: [
                    "Performance stress testing",
                    "Scalable AI infrastructure",
                    "Audio processing optimization",
                    "Secure user data management",
                ],
            },
            {
                title: "Launch & Expansion Vision",
                year: "2022",
                description:
                    "After launch, user behavior analytics guided improvements in voice clarity and customization depth. Future updates include emotion-based voice modulation, multilingual support, and AI voice cloning technology.",
                highlights: [
                    "Released MVP version",
                    "Collected creator feedback",
                    "Improved synthesis accuracy",
                    "Planned advanced AI voice features",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "SONEXA AI",
        subtitle: "AI Engineers and Designers Building Intelligent Voice Technology",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: { src: "/projects/sonexa ai/team-prashanta.svg", alt: "Portrait of Prashanta Dey" },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: { src: "/projects/sonexa ai/team-khaled.svg", alt: "Portrait of Khaled Ammar" },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: { src: "/projects/sonexa ai/team-jannatul.svg", alt: "Portrait of Jannatul Nayeem" },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: { src: "/projects/sonexa ai/team-saqib.svg", alt: "Portrait of Saqib" },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Close collaboration between AI engineers, UX designers, and product strategists ensured Voxora AI delivered both technical excellence and intuitive usability.",
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
                // Only the second card's description was legible; this line matches the other designs.
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
