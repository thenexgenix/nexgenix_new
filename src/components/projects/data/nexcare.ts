import type { ProjectDetails } from "../types";

/**
 * Content for the NEXCARE project details page.
 * Image files are expected in /public/projects/nex care/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const nexcare: ProjectDetails = {
    slug: "nexcare",

    seo: {
        title: "Nex Care - Accessible Healthcare Platform",
        description:
            "A modern healthcare website providing easy access to medical services, doctor information, appointment scheduling, and trusted health resources.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "NEXCARE",
        subtitle: "Accessible Healthcare, Simplified for Everyone",
        description:
            "Nex Care is a modern healthcare website designed to provide users with easy access to medical services, doctor information, appointment scheduling, and trusted health resources. The platform focuses on clarity, trust-building design, and seamless navigation to ensure patients can find care quickly and confidently.",
        image: {
            src: "/projects/nex care/hero.svg",
            alt: "Nex Care healthcare website shown on a laptop and phone",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Healthcare websites often suffer from cluttered layouts, unclear service information, and complicated appointment booking systems. Patients frequently struggle to find the right specialist, understand service details, or schedule appointments efficiently.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "Nex Care was designed to deliver a clean, structured, and patient-friendly digital healthcare experience. The platform introduces intuitive service categorization, simplified appointment booking, and clear service presentation.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/nex care/responsive-devices.svg",
            alt: "Nex Care displayed on a desktop monitor, laptop, tablet and phone",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#D8FF9A", name: "Light Lime" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#DCAD7C", name: "Sandy Brown" },
        ],
        typography: {
            sample: "NEX CARE",
            family: "Inter",
            description:
                "Manrope was chosen for its modern and approachable appearance, ensuring clarity and professionalism.",
        },
        features: [
            "Online Appointment Booking",
            "Doctor Profile Pages",
            "Service Categorization",
            "Health Blog/Resource Section",
            "Emergency Contact Information",
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
                    src: "/projects/nex care/platform-mobile.svg",
                    alt: "Nex Care mobile healthcare experience on a smartphone",
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
                    src: "/projects/nex care/platform-desktop.svg",
                    alt: "Nex Care healthcare website on a desktop monitor",
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
                    src: "/projects/nex care/platform-tablet.svg",
                    alt: "Nex Care healthcare website on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing a Patient-Centered Healthcare Experience",
        steps: [
            {
                icon: "search",
                title: "Discovery & Research",
                description:
                    "Understanding Patient Needs and Healthcare Access Challenges",
                tasks: [
                    "Analyzed patient journey mapping",
                    "Studied competitor healthcare platforms",
                    "Identified booking friction points",
                    "Defined trust-building UI elements",
                ],
            },
            {
                icon: "target",
                title: "Information Architecture",
                description: "Structuring Medical Services for Easy Navigation",
                tasks: [
                    "Categorized services by specialization",
                    "Designed simplified appointment flow",
                    "Created clear doctor profile layouts",
                    "Structured health content hierarchy",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Creating a Calm and Professional Healthcare Interface",
                tasks: [
                    "Designed clean service pages",
                    "Built intuitive booking forms",
                    "Ensured accessibility standards",
                    "Optimized mobile experience",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description:
                    "Ensuring Fast, Reliable, and Smooth Property Exploration",
                tasks: [
                    "Integrated secure booking system",
                    "Conducted usability testing",
                    "Optimized performance and responsiveness",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "NEX CARE",
        subtitle: "From Healthcare Confusion to Clear Digital Care Access",
        milestones: [
            {
                title: "Identifying the Core Problem",
                year: "2022",
                description:
                    "We discovered that many patients feel overwhelmed when navigating healthcare websites. Information was scattered, booking processes were confusing, and doctor credentials were not clearly presented. Our mission was to simplify this journey and build immediate trust.",
                highlights: [
                    "Complicated booking systems",
                    "Poor service categorization",
                    "Lack of transparent doctor information",
                    "Inconsistent UI design patterns",
                ],
            },
            {
                title: "Researching the Right Approach",
                year: "2022",
                description:
                    "Designers collaborated with healthcare consultants to understand how patients search for medical services. By studying real patient scenarios, we structured the platform to prioritize clarity, accessibility, and reassurance at every step.",
                highlights: [
                    "Conducted user journey analysis",
                    "Studied medical UX case studies",
                    "Defined accessibility guidelines",
                    "Planned structured content hierarchy",
                ],
            },
            {
                title: "Designing the Experience",
                year: "2022",
                description:
                    "Our goal was to create a calming digital environment where users feel supported. Clean layouts, reassuring color schemes, and clear call-to-action buttons were introduced to guide patients smoothly through service exploration and appointment booking.",
                highlights: [
                    "Built intuitive appointment forms",
                    "Designed clear doctor profile sections",
                    "Simplified service descriptions",
                    "Ensured mobile-first responsiveness",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                description:
                    "Engineers worked closely with designers in structured development cycles, ensuring that the booking system, service database, and contact modules functioned seamlessly. Security and data privacy were treated as top priorities throughout development.",
                highlights: [
                    "Developed secure appointment workflow",
                    "Integrated backend management system",
                    "Tested cross-device functionality",
                ],
            },
            {
                title: "Launch and Continuous Growth",
                year: "2022",
                description:
                    "After launch, continuous monitoring allowed improvements in booking speed and user navigation. The future roadmap includes telemedicine integration, patient dashboards, and AI-assisted symptom guidance.",
                highlights: [
                    "Gathered patient feedback",
                    "Planned telehealth expansion",
                    "Released live healthcare platform",
                    "Improved booking UX",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "NEXCARE",
        subtitle: "A Dedicated Team Focused on Digital Healthcare Excellence",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/nex care/team-prashanta.svg",
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
                    src: "/projects/nex care/team-khaled.svg",
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
                    src: "/projects/nex care/team-jannatul.svg",
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
                    src: "/projects/nex care/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "The Nex Care project required close coordination between healthcare advisors, designers, and engineers to ensure the platform maintained both professional credibility and user-friendly functionality.",
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
