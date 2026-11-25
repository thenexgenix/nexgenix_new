import type { ProjectDetails } from "../types";

/**
 * Content for the Edunity project details page.
 * Image files are expected in /public/projects/edunity/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const edunity: ProjectDetails = {
    slug: "edunity",

    seo: {
        title: "EDUNITY - Learn Skills. Build Knowledge. Achieve Growth.",
        description:
            "An online learning platform for discovering and enrolling in high-quality courses, with structured categories and clear instructor information.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "EDUNITY",
        subtitle: "Learn Skills. Build Knowledge. Achieve Growth.",
        description:
            "Edunity is an online learning platform designed to help users discover and enroll in high-quality courses. The website provides structured course categories, instructor information, and smooth learning navigation to support skill development and continuous education.",
        image: {
            src: "/projects/edunity/hero.svg",
            alt: "Edunity online courses homepage shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Online learners often struggle to find structured course recommendations and reliable learning content. Many platforms make course selection difficult.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Edunity was designed to simplify online learning discovery by organizing courses into logical categories, highlighting instructor credibility, and providing clear course previews for better learning decisions.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/edunity/responsive-devices.svg",
            alt: "Edunity shown on desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#17254E", name: "Midnight Navy" },
            { hex: "#F1F2ED", name: "Soft Ivory" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "EDUNITY",
            family: "Epilogue",
            description:
                "Epilogue was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Course Discovery System",
            "Category-Based Learning Paths",
            "Instructor Profile Pages",
            "Course Preview Sections",
            "Student Reviews & Ratings",
            "Enrollment Management",
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
                    src: "/projects/edunity/platform-mobile.svg",
                    alt: "Edunity on a smartphone",
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
                    src: "/projects/edunity/platform-desktop.svg",
                    alt: "Edunity on a desktop monitor",
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
                    src: "/projects/edunity/platform-tablet.svg",
                    alt: "Edunity on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing a Structured and Motivating Learning Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & User Study",
                description: "Understanding Online Learning Behavior",
                tasks: [
                    "Studied learner course selection patterns",
                    "Analyzed competitor learning platforms",
                    "Identified content navigation problems",
                    "Defined learner personas",
                ],
            },
            {
                icon: "target",
                title: "Information Architecture",
                description: "Structuring Courses for Easy Learning Discovery",
                tasks: [
                    "Organized courses by subject and level",
                    "Designed search-first navigation",
                    "Structured course detail layout",
                    "Planned enrollment workflow",
                ],
            },
            {
                icon: "palette",
                title: "Interface Design",
                description: "Creating a Friendly Learning Interface",
                tasks: [
                    "Designed course card system",
                    "Added progress-based interaction",
                    "Built lesson preview layouts",
                    "Ensured mobile responsiveness",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Scalable Learning Platform",
                tasks: [
                    "Developed course management modules",
                    "Integrated enrollment workflow",
                    "Optimized media loading performance",
                    "Conducted usability testing",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "EDUNITY",
        subtitle: "Transforming Online Education into an Accessible Learning Experience",
        milestones: [
            {
                title: "Identifying Learning Barriers",
                year: "2022",
                description:
                    "Many learners feel overwhelmed by large course libraries and unclear learning paths. Edunity was created to simplify course discovery and help users make confident learning choices.",
                highlights: [
                    "Course selection confusion",
                    "Lack of structured learning paths",
                    "Poor course preview systems",
                    "Limited guidance for beginners",
                ],
            },
            {
                title: "Designing the Learning Framework",
                year: "2022",
                description:
                    "The platform was structured to guide users through meaningful learning journeys. Course categories, instructor credibility, and curriculum previews were prioritized.",
                highlights: [
                    "Designed course taxonomy",
                    "Planned search filtering system",
                    "Focused on conversion UX",
                    "Structured learning modules",
                ],
            },
            {
                title: "Crafting the Experience",
                year: "2022",
                description:
                    "The interface was designed to feel clean and educational. Course cards, lesson previews, and instructor sections were arranged to help learners focus on knowledge discovery.",
                highlights: [
                    "Built structured course layout",
                    "Added preview learning content",
                    "Designed enrollment flow",
                    "Ensured responsive design",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Developers built a scalable course system supporting content management, enrollment tracking, and secure data handling. Performance optimization ensured smooth browsing.",
                highlights: [
                    "Developed course database system",
                    "Integrated learning workflow",
                    "Implemented secure modules",
                    "Optimized platform speed",
                ],
            },
            {
                title: "Launch & Future Vision",
                year: "2022",
                description:
                    "After launch, user engagement analytics were used to improve course recommendation logic. Future plans include personalized learning paths and AI-based course assistance.",
                highlights: [
                    "Released platform version",
                    "Collected learner feedback",
                    "Improved search UX",
                    "Planned smart recommendation features",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "EDUNITY",
        subtitle: "Building a Knowledge-Focused Learning Platform",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/edunity/team-prashanta.svg",
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
                    src: "/projects/edunity/team-khaled.svg",
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
                    src: "/projects/edunity/team-jannatul.svg",
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
                    src: "/projects/edunity/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Our team worked closely with educators and developers to design a practical learning platform. Continuous feedback helped refine course navigation and content structure. The goal was to make online learning simple and accessible.",
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
