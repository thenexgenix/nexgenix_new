import type { ProjectDetails } from "../types";

/**
 * Content for the Nex Chef project details page.
 * Image files are expected in /public/projects/nex chef/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const nexChef: ProjectDetails = {
    slug: "nex-chef",

    seo: {
        title: "Nex Chef - Learn. Cook. Master the Art of Flavor.",
        description:
            "An interactive cooking learning platform with structured lessons, step-by-step tutorials, recipe libraries, and guided learning paths.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "NEX CHEF",
        subtitle: "Learn. Cook. Master the Art of Flavor.",
        description:
            "Nex Chef is an interactive cooking learning platform designed to help aspiring chefs and home cooks build practical culinary skills. The website offers structured lessons, step-by-step tutorials, recipe libraries, and guided learning paths in a clean and engaging digital environment.",
        image: {
            src: "/projects/nex chef/hero.svg",
            alt: "Nex Chef cooking platform shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Many online cooking platforms lack structured learning paths and clear progress tracking. Users often jump between random recipes without building foundational skills, resulting in an inconsistent learning experience.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Nex Chef was designed as a structured learning platform with categorized lessons, guided tutorials, skill progression tracking, and visually engaging recipe content to create a complete culinary learning journey.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/nex chef/responsive-devices.svg",
            alt: "Nex Chef displayed on desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#E7FAFE", name: "Pale Cyan" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "NEX CHEF",
            family: "Inter",
            description:
                "Inter was chosen for its modern and approachable appearance, ensuring clarity for professionalism.",
        },
        features: [
            "Step-by-Step Cooking Tutorials",
            "Structured Skill-Based Learning Paths",
            "Recipe Library with Filters",
            "Progress Tracking System",
            "Video-Based Lessons",
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
                    src: "/projects/nex chef/platform-mobile.svg",
                    alt: "Nex Chef recipe screen on a smartphone",
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
                    src: "/projects/nex chef/platform-desktop.svg",
                    alt: "Nex Chef landing page on a desktop monitor",
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
                    src: "/projects/nex chef/platform-tablet.svg",
                    alt: "Nex Chef landing page on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing a Seamless and Engaging Culinary Learning Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Discovery & Research",
                description: "Understanding Learner Behavior and Online Cooking Trends",
                tasks: [
                    "Researched online cooking platforms",
                    "Identified user learning pain points",
                    "Defined beginner and intermediate personas",
                    "Analyzed content consumption patterns",
                ],
            },
            {
                icon: "target",
                title: "Concept Development",
                description: "Structuring a Guided Culinary Journey",
                tasks: [
                    "Designed course and lesson hierarchy",
                    "Planned recipe categorization system",
                    "Defined progress tracking logic",
                    "Structured user onboarding flow",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Blending Warm Visuals with Structured Learning UI",
                tasks: [
                    "Designed engaging dashboard layout",
                    "Created recipe card system",
                    "Built interactive lesson pages",
                    "Conducted usability testing",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description: "Ensuring Smooth Learning and Performance Efficiency",
                tasks: [
                    "Optimized video performance",
                    "Improved mobile responsiveness",
                    "Tested navigation clarity",
                    "Refined user feedback flows",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "NEX CHEF",
        subtitle: "Transforming Passion for Cooking into a Structured Digital Learning Experience",
        milestones: [
            {
                title: "Recognizing the Learning Gap",
                year: "2022",
                description:
                    "During early research, we realized that many aspiring cooks rely on scattered video tutorials without a structured progression. While content was abundant, structured learning was missing. Users needed guidance - not just recipes, but a clear path to mastering skills step by step.",
                highlights: [
                    "Unstructured recipe browsing",
                    "Lack of skill progression",
                    "No clear learning roadmap",
                    "Minimal engagement tracking",
                ],
            },
            {
                title: "Shaping the Educational Framework",
                year: "2022",
                description:
                    "We collaborated with content planners and culinary mentors to outline a skill-based learning hierarchy. From knife skills to advanced plating techniques, the goal was to transform cooking lessons into a guided educational journey.",
                highlights: [
                    "Defined course categories",
                    "Structured beginner-to-advanced levels",
                    "Designed interactive lesson flow",
                    "Planned achievement tracking",
                ],
            },
            {
                title: "Designing the Experience",
                year: "2022",
                description:
                    "Design iterations focused on warmth, clarity, and ease of navigation. Recipe cards were made visually rich yet structured, while lesson pages emphasized step clarity, ingredient lists, and timing guidance to reduce cognitive load.",
                highlights: [
                    "Built intuitive dashboard",
                    "Designed structured recipe pages",
                    "Integrated video-based instructions",
                    "Ensured accessibility and readability",
                ],
            },
            {
                title: "Building the Platform",
                year: "2022",
                description:
                    "Design and development teams worked in coordinated sprints to implement reusable UI components and optimize video streaming performance. Special care was taken to ensure the platform worked smoothly across devices, especially mobile.",
                highlights: [
                    "Developed modular UI components",
                    "Integrated media handling system",
                    "Optimized performance",
                    "Tested cross-device compatibility",
                ],
            },
            {
                title: "Launch and Continuous Growth",
                year: "2022",
                description:
                    "After launch, user engagement metrics and feedback were analyzed to refine lesson flow and improve interaction elements. Future updates aim to introduce community features and live cooking sessions.",
                highlights: [
                    "Collected user feedback",
                    "Enhanced UI interactions",
                    "Improved content structure",
                    "Planned community expansion",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "NEX CHEF",
        subtitle: "A Creative Team Combining Education and Technology",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/nex chef/team-prashanta.svg",
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
                    src: "/projects/nex chef/team-khaled.svg",
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
                    src: "/projects/nex chef/team-jannatul.svg",
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
                    src: "/projects/nex chef/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Close coordination between designers, developers, and culinary advisors ensured the platform delivered both educational structure and an engaging user experience.",
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
