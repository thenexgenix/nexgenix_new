import type { ProjectDetails } from "../types";

/**
 * Content for the NEX TUTOR project details page.
 * Image files are expected in /public/projects/nex tutor/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const nexTutor: ProjectDetails = {
    slug: "nex-tutor",

    seo: {
        title: "NEX Tutor - Online Course Discovery Platform",
        description:
            "An online course discovery platform that helps learners find high-quality courses through clear categorization, instructor transparency, and seamless browsing.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "NEX TUTOR",
        subtitle: "Discover the Right Course. Learn Without Limits.",
        description:
            "Nex Tutor is an online course discovery platform designed to help learners find high-quality courses with clear instructor transparency, and a seamless browsing experience to make online education accessible, organized, and user-friendly.",
        image: {
            src: "/projects/nex tutor/hero.svg",
            alt: "Nex Tutor course discovery platform shown on a laptop and phone",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Many online learning platforms overwhelm users with excessive course listings, unclear course quality indicators, and complicated enrollment flows. Learners often struggle to choose the right course.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Nex Tutor was designed to simplify course discovery through intelligent categorization, transparent instructor profiles, clear course outlines, and structured filtering. The goal was to reduce decision fatigue and increase learner confidence.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/nex tutor/responsive-devices.svg",
            alt: "Nex Tutor displayed on a desktop monitor, laptop, tablet and phone",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#FF6636", name: "Vivid Orange" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "NEX TUTOR",
            family: "Inter",
            description:
                "Inter was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Course Categorization System",
            "Advanced Search & Filtering",
            "Instructor Profile Pages",
            "Course Detail & Curriculum View",
            "Student Reviews & Ratings",
            "Enrollment System",
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
                    src: "/projects/nex tutor/platform-mobile.svg",
                    alt: "Nex Tutor mobile course browsing experience on a smartphone",
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
                    src: "/projects/nex tutor/platform-desktop.svg",
                    alt: "Nex Tutor course discovery page on a desktop monitor",
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
                    src: "/projects/nex tutor/platform-tablet.svg",
                    alt: "Nex Tutor course discovery page on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing a Structured and Motivating Learning Experience",
        steps: [
            {
                icon: "search",
                title: "Research & User Analysis",
                description:
                    "Understanding Learner Goals and Course Selection Challenges",
                tasks: [
                    "Studied online learning behavior",
                    "Analyzed competitor course platforms",
                    "Identified user drop-off points",
                    "Defined learner personas",
                ],
            },
            {
                icon: "target",
                title: "Information Architecture",
                description: "Structuring Courses for Easy Navigation and Comparison",
                tasks: [
                    "Categorized courses by topic and level",
                    "Designed filter logic (price, rating, duration)",
                    "Created structured course detail pages",
                    "Planned enrollment user flow",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description:
                    "Creating a Motivating and Distraction-Free Learning Interface",
                tasks: [
                    "Designed course card layouts",
                    "Built clear curriculum sections",
                    "Developed clean instructor profiles",
                    "Ensured mobile-first responsiveness",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description:
                    "Ensuring Fast, Reliable, and Smooth Property Exploration",
                tasks: [
                    "Built modular course components",
                    "Optimized page load speed",
                    "Conducted usability testing",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "NEX TUTOR",
        subtitle: "From Course Overload to Structured Learning Clarity",
        milestones: [
            {
                title: "Identifying the Learning Gap",
                year: "2022",
                description:
                    "We noticed that learners often feel overwhelmed when browsing large course libraries. Without clear structure or quality signals, selecting the right course becomes stressful. Our mission was to create a platform that guides users toward informed learning decisions.",
                highlights: [
                    "Course overload problem",
                    "Lack of clear comparison tools",
                    "Confusing enrollment flows",
                    "Limited instructor transparency",
                ],
            },
            {
                title: "Researching the Right Framework",
                year: "2022",
                description:
                    "Designers collaborated with education consultants and developers to analyze how learners evaluate online courses. We mapped the learner decision journey and identified where clarity, trust, and motivation were most needed.",
                highlights: [
                    "Conducted UX case studies",
                    "Studied learner behavior patterns",
                    "Designed structured content hierarchy",
                    "Defined trust-building elements",
                ],
            },
            {
                title: "Designing the Learning Experience",
                year: "2022",
                description:
                    "The interface was built to feel organized and motivating. Clear course previews, structured curriculum breakdowns, and instructor credentials were placed strategically to support confident enrollment decisions.",
                highlights: [
                    "Built structured course detail layout",
                    "Highlighted course outcomes",
                    "Designed simple enrollment steps",
                    "Ensured accessible navigation",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Engineers translated the design system into scalable course components and integrated a reliable enrollment backend. Testing cycles ensured smooth filtering, responsive browsing, and stable performance under growing course libraries.",
                highlights: [
                    "Developed course database system",
                    "Integrated enrollment workflow",
                    "Optimized search performance",
                    "Tested cross-device compatibility",
                ],
            },
            {
                title: "Launch and Continuous Growth",
                year: "2022",
                description:
                    "After launch, user engagement metrics were analyzed to improve filtering precision and course recommendation logic. Future plans include AI-based recommendations.",
                highlights: [
                    "Monitored learner engagement",
                    "Improved search UX",
                    "Planned AI-based recommendations",
                    "Released live platform",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "NEX TUTOR",
        subtitle: "A Dedicated Team Focused on Digital Learning Innovation",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/nex tutor/team-prashanta.svg",
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
                    src: "/projects/nex tutor/team-khaled.svg",
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
                    src: "/projects/nex tutor/team-jannatul.svg",
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
                    src: "/projects/nex tutor/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "The Nex Tutor project required close coordination between education strategists, UX designers, and developers to ensure the platform balances knowledge accessibility with technical performance.",
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
