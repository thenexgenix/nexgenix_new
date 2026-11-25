import type { ProjectDetails } from "../types";

/**
 * Content for the Aspire Internship Program project details page.
 * Image files are expected in /public/projects/aspire internship program/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const aspireInternshipProgram: ProjectDetails = {
    slug: "aspire-internship-program",

    seo: {
        title: "Aspire Internship Program - Empowering Future Talent Through Real-World Experience",
        description:
            "A corporate website promoting structured internship opportunities, career growth, and a clear application journey for aspiring professionals.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "ASPIRE INTERNSHIP PROGRAM",
        subtitle: "Empowering Future Talent Through Real-World Experience",
        description:
            "Aspire Internship Program is a corporate website designed to promote structured internship opportunities within the company. The platform highlights career growth and a clear, inspiring journey for aspiring professionals.",
        image: {
            src: "/projects/aspire internship program/hero.svg",
            alt: "Aspire Internship Program landing page shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            "Many internship promotion websites lack clarity in program structure, eligibility requirements, and application flow. Students often struggle to understand expectations, timelines, and growth opportunities due to scattered information and unclear communication.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "We created a structured, transparent, and engaging platform that clearly communicates program benefits, application steps, mentorship details, and career outcomes—making the internship journey easy to understand and apply for.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/aspire internship program/responsive-devices.svg",
            alt: "Aspire Internship Program shown on desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        // This page's OCR has no legible subtitle line; the shared template copy is used.
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#32094C", name: "Dark Violet" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#EDF3F1", name: "Light Accent" },
        ],
        typography: {
            sample: "ASPIRE INTERNSHIP PROGRAM",
            family: "Poppins",
            description:
                "Poppins was chosen for its modern and approachable appearance, ensuring clarity for young audiences while maintaining corporate professionalism.",
        },
        features: [
            "Internship Program Overview",
            "Application Process Timeline",
            "Mentor & Team Introduction",
            "Success Stories & Testimonials",
            "Online Application Submission",
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
                    src: "/projects/aspire internship program/platform-mobile.svg",
                    alt: "Aspire Internship Program on a smartphone",
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
                    src: "/projects/aspire internship program/platform-desktop.svg",
                    alt: "Aspire Internship Program on a desktop monitor",
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
                    src: "/projects/aspire internship program/platform-tablet.svg",
                    alt: "Aspire Internship Program on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "From Research to Recruitment-Ready Platform",
        steps: [
            {
                icon: "lightbulb",
                title: "Discovery & Research",
                description: "Understanding Student Expectations and Company Goals",
                tasks: [
                    "Interviewed HR stakeholders",
                    "Identified target student personas",
                    "Reviewed competitor internship sites",
                    "Defined program communication gaps",
                ],
            },
            {
                icon: "target",
                title: "Concept Development",
                description: "Structuring a Clear and Motivational Information Flow",
                tasks: [
                    "Designed user journey from landing to application",
                    "Created wireframes for program sections",
                    "Defined CTA strategy",
                    "Structured eligibility and timeline details",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Balancing Corporate Credibility with Youthful Energy",
                tasks: [
                    "Designed engaging UI layouts",
                    "Focused on accessibility and clarity",
                    "Built interactive prototypes",
                    "Refined based on feedback",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description: "Delivering a Seamless Application Experience",
                tasks: [
                    "Collaborated with development team",
                    "Optimized responsiveness",
                    "Tested application submission flow",
                    "Implemented user feedback updates",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "Aspire",
        subtitle: "Transforming Internship Promotion into a Clear Career Pathway",
        milestones: [
            {
                title: "The Problem We Identified",
                year: "2022",
                description:
                    "During early discussions with the company's HR team, we discovered that while the internship program was strong internally, its digital presence failed to communicate its value clearly. Students were unsure about benefits, expectations, and long-term growth opportunities, leading to reduced engagement.",
                highlights: [
                    "Lack of structured program explanation",
                    "Confusing eligibility requirements",
                    "No clear growth roadmap",
                    "Low student engagement",
                ],
            },
            {
                title: "Finding the Solution",
                year: "2022",
                description:
                    "We conducted collaborative workshops with stakeholders to align the website's purpose - not just to inform, but to inspire. The focus shifted toward storytelling, structured information hierarchy, and a guided application journey.",
                highlights: [
                    "Stakeholder alignment meetings",
                    "Defined content hierarchy",
                    "Created application flow map",
                    "Established communication tone",
                ],
            },
            {
                title: "Designing the Experience",
                year: "2022",
                description:
                    "Designers and content strategists worked together to create a motivational yet professional experience. Each section was structured to answer key student questions - What will I learn? Who will guide me? What's next after completion?",
                highlights: [
                    "Mobile-first design",
                    "Structured program breakdown",
                    "Clear mentorship section",
                    "Engaging visual hierarchy",
                ],
            },
            {
                title: "Building the Platform",
                year: "2022",
                description:
                    "Developers collaborated in agile cycles to translate the design into a responsive and accessible platform. Special attention was given to the application experience.",
                highlights: [
                    "Developed responsive layouts",
                    "Integrated secure application forms",
                    "Ensured cross-browser compatibility",
                    "Optimized performance",
                ],
            },
            {
                title: "Launch & The Journey Ahead",
                year: "2022",
                description:
                    "After launch, analytics tracking was implemented to monitor application rates and user behavior. Insights from early applicants are being used to refine content clarity and further improve engagement for future internship batches.",
                highlights: [
                    "Tracked application conversions",
                    "Planned expansion features",
                    "Collected user feedback",
                    "Improved CTA placement",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "Aspire",
        subtitle: "A Collaborative Team Focused on Talent Empowerment",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: {
                    src: "/projects/aspire internship program/team-prashanta.svg",
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
                    src: "/projects/aspire internship program/team-khaled.svg",
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
                    src: "/projects/aspire internship program/team-jannatul.svg",
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
                    src: "/projects/aspire internship program/team-saqib.svg",
                    alt: "Portrait of Saqib",
                },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        description:
            "Cross-functional collaboration between HR, design, and development ensured the platform reflected both corporate values and student aspirations, resulting in a streamlined and inspiring digital experience.",
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
