import type { ProjectDetails } from "../types";

/**
 * Content for the Academia Dashboard project details page.
 * Image files are expected in /public/projects/academia dashboard/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const academiaDashboard: ProjectDetails = {
    slug: "academia-dashboard",

    seo: {
        title: "Academia Dashboard - Smart Academic Tracking and Management System",
        description:
            "A modern web-based academic monitoring platform for tracking student performance, attendance, and institutional activities.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "ACADEMIA DASHBOARD",
        subtitle: "Smart Academic Tracking and Management System",
        description:
            "The Academia Dashboard is a modern web-based academic monitoring platform designed to help educational institutions track student performance, attendance, and institutional activities in a structured and efficient manner.",
        image: {
            src: "/projects/academia dashboard/hero.svg",
            alt: "Academia Dashboard analytics interface shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Academic institutions often struggle with fragmented student data, manual tracking systems, and inefficient performance monitoring methods. Administrators need a centralized system to observe academic progress and institutional metrics.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "The Academia Dashboard was designed to provide a centralized academic monitoring interface that simplifies data visualization workflows.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/academia dashboard/responsive-devices.svg",
            alt: "Academia Dashboard shown across multiple device sizes",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#4D44B5", name: "Royal Indigo" },
            { hex: "#F1F2ED", name: "Soft Ivory" },
            { hex: "#000000", name: "Black" },
        ],
        typography: {
            sample: "ACADEMIA DASHBOARD",
            family: "Poppins",
            description:
                "Poppins was selected for its high readability across long-form content such as course descriptions, learning modules, and instructor bios. Its modern structure supports a clean educational interface.",
        },
        features: [
            "Student Performance Tracking",
            "Attendance Monitoring",
            "Academic Progress Analytics",
            "Course Management Overview",
            "Institutional Data Dashboard",
            "Report Visualization Charts",
        ],
    },

    platforms: {
        title: "Multi-Platform Presentation",
        subtitle: "Optimized for seamless viewing across all devices",
        items: [
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
                    src: "/projects/academia dashboard/platform-desktop.svg",
                    alt: "Academia Dashboard on a desktop monitor",
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
                    src: "/projects/academia dashboard/platform-tablet.svg",
                    alt: "Academia Dashboard on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing an Efficient Academic Monitoring Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & Requirement Analysis",
                description: "Understanding Institutional Data Management Challenges",
                tasks: [
                    "Studied academic administration workflows",
                    "Identified data tracking bottlenecks",
                    "Analyzed existing LMS-style systems",
                    "Defined dashboard KPI metrics",
                ],
            },
            {
                icon: "target",
                title: "Information Architecture",
                description: "Structuring Academic Data for Clear Visualization",
                tasks: [
                    "Designed student data hierarchy",
                    "Planned performance analytics layout",
                    "Structured attendance reporting flow",
                    "Defined admin control modules",
                ],
            },
            {
                icon: "palette",
                title: "Interface Design",
                description: "Creating a Clean and Professional Academic Interface",
                tasks: [
                    "Designed chart-based dashboards",
                    "Built summary metric cards",
                    "Developed report viewing panels",
                    "Ensured responsive layout design",
                ],
            },
            {
                icon: "rocket",
                title: "Development & Optimization",
                description: "Building a Reliable Academic Tracking Platform",
                tasks: [
                    "Implemented data visualization system",
                    "Integrated academic database logic",
                    "Optimized dashboard rendering",
                    "Conducted usability testing",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "ACADEMIA DASHBOARD",
        subtitle: "Simplifying Academic Monitoring Through Digital Intelligence",
        milestones: [
            {
                title: "Identifying Institutional Needs",
                year: "2022",
                description:
                    "Educational institutions often manage student records, performance metrics, and attendance data across multiple systems. This fragmentation makes academic monitoring inefficient. The Academia Dashboard was created to centralize academic insights into one accessible platform.",
                highlights: [
                    "Fragmented student records",
                    "Manual reporting systems",
                    "Lack of visualization tools",
                    "Inefficient monitoring workflows",
                ],
            },
            {
                title: "Designing Data-Centric Structure",
                year: "2022",
                description:
                    "The platform was planned to present academic information in a meaningful way. Instead of overwhelming administrators with raw data, performance metrics were transformed into intuitive charts and summary insights.",
                highlights: [
                    "Designed KPI visualization system",
                    "Structured academic reporting modules",
                    "Planned role-based interface",
                    "Focused on usability",
                ],
            },
            {
                title: "Building the Dashboard Experience",
                year: "2022",
                description:
                    "The interface was designed for quick academic decision-making. Important metrics such as student performance, attendance rate, and course progress were highlighted in summary cards and visualization components.",
                highlights: [
                    "Built metric summary cards",
                    "Added chart visualization panels",
                    "Designed report navigation flow",
                    "Ensured accessibility",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Engineers developed a scalable backend and frontend dashboard system capable of handling large academic datasets while maintaining performance and security standards.",
                highlights: [
                    "Developed academic data modules",
                    "Integrated reporting database",
                    "Implemented secure access control",
                    "Optimized performance",
                ],
            },
            {
                title: "Launch & Future Vision",
                year: "2022",
                description:
                    "After deployment, institutional feedback was used to refine analytics visualization and workflow efficiency. Future enhancements may include AI-based academic prediction models and smart student performance insights.",
                highlights: [
                    "Monitored academic analytics usage",
                    "Planned intelligent reporting features",
                    "Released dashboard platform",
                    "Improved interface interactions",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "ACADEMIA DASHBOARD",
        // The design shows no team subtitle; this line comes from the journey section.
        subtitle: "Simplifying Academic Monitoring Through Digital Intelligence",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/academia dashboard/team-prashanta.svg",
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
                    src: "/projects/academia dashboard/team-khaled.svg",
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
                    src: "/projects/academia dashboard/team-jannatul.svg",
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
                    src: "/projects/academia dashboard/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        // The first line of the design copy was cut off; the readable text starts here.
        description:
            "Designers and developers collaborated to make the dashboard intuitive and easy to use. Iterative feedback helped refine features for real-world use. This ensured a practical, scalable, and user-friendly platform.",
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
            { value: "50%", label: "Active Users", tone: "blue" },
            { value: "10K+", label: "Faster Bookings", tone: "pink" },
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
