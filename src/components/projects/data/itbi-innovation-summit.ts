import type { ProjectDetails } from "../types";

/**
 * Content for the ITBI Innovation Summit project details page.
 * Image files are expected in /public/projects/itbi innovation summit/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const itbiInnovationSummit: ProjectDetails = {
    slug: "itbi-innovation-summit",

    seo: {
        title: "ITBI Innovation Summit - Event Website",
        description:
            "A dynamic event website for the ITBI Innovation Summit, bringing together innovators, entrepreneurs, researchers, and industry leaders.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "ITBI Innovation Summit",
        subtitle: "Driving Innovation at the ITBI Innovation Summit",
        description:
            "A dynamic event website designed for the ITBI Innovation Summit - a platform that brings together innovators, entrepreneurs, researchers, and industry leaders. The website provides structured event information, speaker highlights, session schedules, and registration access in a modern, engaging format.",
        image: {
            src: "/projects/itbi innovation summit/hero.svg",
            alt: "ITBI Innovation Summit event website shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Event websites often struggle to balance high-energy branding with structured information delivery. The challenge was to present speakers, schedules, sponsors, and registration details clearly without overwhelming visitors.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            // The OCR cuts part of this column; wording follows the visible copy.
            "A platform that combines bold innovation-driven branding with intuitive structure, helping attendees explore the event and register seamlessly.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/itbi innovation summit/responsive-devices.svg",
            alt: "ITBI Innovation Summit website displayed across desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#101D48", name: "Midnight Blue" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#00E5FF", name: "Bright Aqua" },
        ],
        typography: {
            sample: "ITBI Innovation Summit",
            family: "Poppins",
            description:
                "Poppins was chosen for its modern and approachable appearance, ensuring clarity for young audiences while maintaining corporate professionalism.",
        },
        features: [
            "Speaker Profiles Section",
            "Event Schedule Timeline",
            "Online Registration System",
            "Sponsor Showcase",
            "Countdown Timer",
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
                    "Fast and Easy to Use",
                    "Smooth Onboarding",
                    "High Resolution for Retina Displays",
                ],
                image: {
                    src: "/projects/itbi innovation summit/platform-mobile.svg",
                    alt: "ITBI Innovation Summit mobile website on a smartphone",
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
                    src: "/projects/itbi innovation summit/platform-desktop.svg",
                    alt: "ITBI Innovation Summit website on a desktop monitor",
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
                    src: "/projects/itbi innovation summit/platform-tablet.svg",
                    alt: "ITBI Innovation Summit website on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Structuring Energy and Information into a Seamless Event Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Discovery & Research",
                description: "Understanding Event Goals and Audience Expectations",
                tasks: [
                    "Discussed objectives with event organizers",
                    "Identified target audience segments",
                    "Analyzed competitor summit websites",
                    "Defined content priority hierarchy",
                ],
            },
            {
                icon: "target",
                title: "Concept Development",
                description: "Translating Innovation into Digital Structure",
                tasks: [
                    "Designed event flow from landing to registration",
                    "Structured schedule layout",
                    "Defined CTA strategy",
                    "Planned speaker spotlight sections",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Crafting a Bold Yet Structured Visual Experience",
                tasks: [
                    "Designed high-impact hero section",
                    "Developed interactive schedule UI",
                    "Built responsive layouts",
                    "Refined based on stakeholder feedback",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description: "Ensuring a Smooth Registration and Event Access Flow",
                tasks: [
                    "Tested registration system",
                    "Optimized performance",
                    "Ensured mobile responsiveness",
                    "Conducted final usability checks",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "Summit",
        subtitle: "Turning an Innovation Event into an Engaging Digital Experience",
        milestones: [
            {
                title: "Understanding the Vision",
                year: "2022",
                description:
                    "In early meetings with the organizing committee, we learned that the summit was not just an event - it was a platform for innovation, networking, and future collaboration. The digital presence needed to reflect that ambition while remaining clear and structured for attendees.",
                highlights: [
                    "Defined event purpose",
                    "Identified attendee expectations",
                    "Mapped content structure",
                    "Clarified branding direction",
                ],
            },
            {
                title: "Structuring the Experience",
                year: "2022",
                description:
                    "Workshops were conducted to organize content into logical sections - speakers, sessions, sponsors, and registration. The focus was on ensuring visitors could quickly understand the event flow and take action without confusion.",
                highlights: [
                    "Designed navigation architecture",
                    "Structured event schedule layout",
                    "Highlighted keynote speakers",
                    "Positioned registration CTA strategically",
                ],
            },
            {
                title: "Designing for Impact",
                year: "2022",
                description:
                    "Designers experimented with bold typography, high-contrast color palettes, and dynamic layouts to reflect innovation. Every visual decision was made to balance energy with readability, ensuring excitement without sacrificing clarity.",
                highlights: [
                    "Built high-impact hero section",
                    "Designed countdown feature",
                    "Created speaker cards system",
                    "Ensured responsive adaptability",
                ],
            },
            {
                title: "Building the Platform",
                year: "2022",
                description:
                    "Developers and designers collaborated in agile cycles to transform the design system into scalable components. Special attention was given to performance optimization and smooth registration flow under potential high traffic.",
                highlights: [
                    "Developed reusable components",
                    "Integrated registration system",
                    "Tested cross-device compatibility",
                    "Optimized loading speed",
                ],
            },
            {
                title: "Launch and Event Readiness",
                year: "2022",
                description:
                    "After launch, analytics tracking was implemented to monitor application rates and user behavior. Insights from early applicants are being used to refine content clarity and further improve engagement for future internship batches.",
                highlights: [
                    "Conducted usability testing",
                    "Optimized CTA placements",
                    "Prepared post-event content strategy",
                    "Monitored registration analytics",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "Summit",
        subtitle: "A Collaborative Team Powering Innovation",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/itbi innovation summit/team-prashanta.svg",
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
                    src: "/projects/itbi innovation summit/team-khaled.svg",
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
                    src: "/projects/itbi innovation summit/team-jannatul.svg",
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
                    src: "/projects/itbi innovation summit/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Close coordination between event organizers and the product team ensured the website reflected the summit's innovative spirit while maintaining structured clarity for attendees.",
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
